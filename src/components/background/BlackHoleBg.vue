<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { Power1, Power2, Power3, Power4, Linear } from 'gsap'

interface Disc {
  x: number
  y: number
  w: number
  h: number
  p: number
}

interface Particle {
  x: number
  sx: number
  dx: number
  y: number
  vy: number
  p: number
  r: number
  c: string
}

interface Render {
  width: number
  height: number
  dpi: number
}

interface Clip {
  disc: Disc
  i: number
  path: Path2D
}

interface ParticleArea {
  sw: number
  ew: number
  h: number
  sx: number
  ex: number
}

const canvasRef = ref<HTMLCanvasElement | null>(null)
let ctx: CanvasRenderingContext2D | null = null

let discs: Disc[] = []
let lines: { x: number; y: number }[][] = []
let particles: Particle[] = []
let clip: Clip | null = null
let render: Render | null = null
let startDisc: Disc | null = null
let endDisc: Disc | null = null
let particleArea: ParticleArea | null = null
let linesCanvas: OffscreenCanvas | null = null
let linesCtx: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D | null = null

const setSize = () => {
  const rect = canvasRef.value?.getBoundingClientRect()
  if (!rect || !canvasRef.value) return

  render = {
    width: rect.width,
    height: rect.height,
    dpi: window.devicePixelRatio
  }

  canvasRef.value.width = render.width * render.dpi
  canvasRef.value.height = render.height * render.dpi
}

const setDiscs = () => {
  const rect = canvasRef.value?.getBoundingClientRect()
  if (!rect || !render) return

  const { width, height } = rect
  discs = []

  startDisc = {
    x: width * 0.5,
    y: height * 0.45,
    w: width * 0.75,
    h: height * 0.7,
    p: 0
  }

  endDisc = {
    x: width * 0.5,
    y: height * 0.95,
    w: 0,
    h: 0,
    p: 0
  }

  const totalDiscs = 100
  let prevBottom = height
  clip = null

  for (let i = 0; i < totalDiscs; i++) {
    const p = i / totalDiscs
    const disc = tweenDisc({ ...startDisc, p })
    const bottom = disc.y + disc.h

    if (bottom <= prevBottom) {
      clip = {
        disc: { ...disc },
        i,
        path: new Path2D()
      }
    }

    prevBottom = bottom
    discs.push(disc)
  }

  if (clip) {
    clip.path.ellipse(clip.disc.x, clip.disc.y, clip.disc.w, clip.disc.h, 0, 0, Math.PI * 2)
    clip.path.rect(clip.disc.x - clip.disc.w, 0, clip.disc.w * 2, clip.disc.y)
  }
}

const setLines = () => {
  const rect = canvasRef.value?.getBoundingClientRect()
  if (!rect || !clip) return

  const { width, height } = rect
  lines = []

  const totalLines = 100
  const linesAngle = (Math.PI * 2) / totalLines

  for (let i = 0; i < totalLines; i++) {
    lines.push([])
  }

  discs.forEach((disc) => {
    for (let i = 0; i < totalLines; i++) {
      const angle = i * linesAngle
      const p = {
        x: disc.x + Math.cos(angle) * disc.w,
        y: disc.y + Math.sin(angle) * disc.h
      }
      lines[i].push(p)
    }
  })

  linesCanvas = new OffscreenCanvas(width, height)
  linesCtx = linesCanvas.getContext('2d')

  if (!linesCtx) return

  lines.forEach((line) => {
    if (!linesCtx || !clip) return
    linesCtx.save()
    let lineIsIn = false
    line.forEach((p1, j) => {
      if (j === 0) return
      const p0 = line[j - 1]

      if (!linesCtx || !clip) return

      if (
        !lineIsIn &&
        (linesCtx.isPointInPath(clip.path, p1.x, p1.y) ||
          linesCtx.isPointInStroke(clip.path, p1.x, p1.y))
      ) {
        lineIsIn = true
      } else if (lineIsIn) {
        linesCtx.clip(clip.path)
      }

      linesCtx.beginPath()
      linesCtx.moveTo(p0.x, p0.y)
      linesCtx.lineTo(p1.x, p1.y)
      linesCtx.strokeStyle = '#444'
      linesCtx.lineWidth = 2
      linesCtx.stroke()
      linesCtx.closePath()
    })
    linesCtx.restore()
  })
}

const setParticles = () => {
  const rect = canvasRef.value?.getBoundingClientRect()
  if (!rect || !clip) return

  const { width, height } = rect
  particles = []

  particleArea = {
    sw: clip.disc.w * 0.5,
    ew: clip.disc.w * 2,
    h: height * 0.85,
    sx: (width - clip.disc.w * 0.5) / 2,
    ex: (width - clip.disc.w * 2) / 2
  }

  const totalParticles = 100
  for (let i = 0; i < totalParticles; i++) {
    particles.push(initParticle(true))
  }
}

const initParticle = (start = false): Particle => {
  if (!particleArea) throw new Error('Particle area is not defined')

  const sx = particleArea.sx + particleArea.sw * Math.random()
  const ex = particleArea.ex + particleArea.ew * Math.random()
  const dx = ex - sx
  const y = start ? particleArea.h * Math.random() : particleArea.h
  const r = 0.5 + Math.random() * 4
  const vy = 0.5 + Math.random()

  return {
    x: sx,
    sx,
    dx,
    y,
    vy,
    p: 0,
    r,
    c: `rgba(255, 255, 255, ${Math.random()})`
  }
}

const tweenValue = (start: number, end: number, p: number, ease = 'linear'): number => {
  const delta = end - start
  const easeFn =
    {
      linear: Linear.easeNone,
      inExpo: Power4.easeIn,
      outExpo: Power4.easeOut,
      inOutExpo: Power4.easeInOut,
      inQuad: Power2.easeIn,
      outQuad: Power2.easeOut,
      inOutQuad: Power2.easeInOut,
      inCubic: Power3.easeIn,
      outCubic: Power3.easeOut,
      inOutCubic: Power3.easeInOut,
      inQuart: Power4.easeIn,
      outQuart: Power4.easeOut,
      inOutQuart: Power4.easeInOut,
      inSine: Power1.easeIn,
      outSine: Power1.easeOut,
      inOutSine: Power1.easeInOut
    }[ease] || Linear.easeNone

  return start + delta * easeFn(p)
}

const tweenDisc = (disc: Disc): Disc => {
  if (!startDisc || !endDisc) throw new Error('Start or end disc is not defined')

  disc.x = tweenValue(startDisc.x, endDisc.x, disc.p)
  disc.y = tweenValue(startDisc.y, endDisc.y, disc.p, 'inExpo')
  disc.w = tweenValue(startDisc.w, endDisc.w, disc.p)
  disc.h = tweenValue(startDisc.h, endDisc.h, disc.p)
  return disc
}

const drawDiscs = () => {
  if (!ctx || !clip) return
  ctx.strokeStyle = '#444'
  ctx.lineWidth = 2

  const outerDisc = startDisc
  if (outerDisc) {
    ctx.beginPath()
    ctx.ellipse(outerDisc.x, outerDisc.y, outerDisc.w, outerDisc.h, 0, 0, Math.PI * 2)
    ctx.stroke()
    ctx.closePath()
  }

  discs.forEach((disc, i) => {
    if (i % 5 !== 0) return
    if (!ctx || !clip) return
    if (disc.w < clip.disc.w - 5) {
      ctx.save()
      ctx.clip(clip.path)
    }
    ctx.beginPath()
    ctx.ellipse(disc.x, disc.y, disc.w, disc.h, 0, 0, Math.PI * 2)
    ctx.stroke()
    ctx.closePath()
    if (disc.w < clip.disc.w - 5) {
      ctx.restore()
    }
  })
}

const drawLines = () => {
  if (!ctx || !linesCanvas) return
  ctx.drawImage(linesCanvas, 0, 0)
}

const drawParticles = () => {
  if (!ctx || !clip) return
  ctx.save()
  ctx.clip(clip.path)
  particles.forEach((particle) => {
    if (!ctx || !clip) return
    ctx.fillStyle = particle.c
    ctx.beginPath()
    ctx.rect(particle.x, particle.y, particle.r, particle.r)
    ctx.closePath()
    ctx.fill()
  })
  ctx.restore()
}

const moveDiscs = () => {
  discs.forEach((disc) => {
    disc.p = (disc.p + 0.001) % 1
    tweenDisc(disc)
  })
}

const moveParticles = () => {
  particles.forEach((particle) => {
    if (!particleArea) return
    particle.p = 1 - particle.y / particleArea.h
    particle.x = particle.sx + particle.dx * particle.p
    particle.y -= particle.vy
    if (particle.y < 0) {
      Object.assign(particle, initParticle())
    }
  })
}

const tick = () => {
  if (!ctx || !canvasRef.value || !render) return
  ctx.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height)
  ctx.save()
  ctx.scale(render.dpi, render.dpi)
  moveDiscs()
  moveParticles()
  drawDiscs()
  drawLines()
  drawParticles()
  ctx.restore()
  requestAnimationFrame(tick)
}

const onResize = () => {
  setSize()
  setDiscs()
  setLines()
  setParticles()
}

onMounted(() => {
  if (!canvasRef.value) return
  ctx = canvasRef.value.getContext('2d')
  setSize()
  setDiscs()
  setLines()
  setParticles()
  window.addEventListener('resize', onResize)
  requestAnimationFrame(tick)
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
})
</script>

<template>
  <div class="a-hole">
    <canvas ref="canvasRef" class="js-canvas"></canvas>
    <div class="aura"></div>
    <div class="overlay"></div>
  </div>
</template>

<style scoped>
.a-hole {
  position: absolute;
  top: 0;
  left: 0;

  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  overflow: hidden;

  &:before {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;

    display: block;
    width: 150%;
    height: 140%;

    background: radial-gradient(ellipse at 50% 55%, transparent 10%, black 50%);
    transform: translate3d(-50%, -50%, 0);

    content: '';
  }

  &:after {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 5;

    display: block;
    width: 100%;
    height: 100%;

    background: radial-gradient(ellipse at 50% 75%, #a900ff 20%, transparent 75%);
    mix-blend-mode: overlay;
    transform: translate3d(-50%, -50%, 0);

    content: '';
  }

  @keyframes aura-glow {
    0% {
      background-position: 0 100%;
    }
    100% {
      background-position: 0 300%;
    }
  }

  .aura {
    position: absolute;
    top: -71.5%;
    left: 50%;
    z-index: 3;

    width: 30%;
    height: 140%;

    background: linear-gradient(
        20deg,
        #00f8f1,
        #ffbd1e20 16.5%,
        #fe848f 33%,
        #fe848f20 49.5%,
        #00f8f1 66%,
        #00f8f160 85.5%,
        #ffbd1e 100%
      )
      0 100% / 100% 200%;
    border-radius: 0 0 100% 100%;
    filter: blur(50px);
    mix-blend-mode: plus-lighter;
    opacity: 0.75;
    transform: translate3d(-50%, 0, 0);

    animation: aura-glow 5s infinite linear;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;

    width: 100%;
    height: 100%;

    background: repeating-linear-gradient(transparent, transparent 1px, white 1px, white 2px);
    mix-blend-mode: overlay;
    opacity: 1;
  }

  canvas {
    display: block;

    width: 100%;
    height: 100%;
  }
}
</style>
