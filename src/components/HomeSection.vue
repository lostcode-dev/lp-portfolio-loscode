<script setup lang="ts">
import { gsap } from 'gsap'
import { onMounted, ref } from 'vue'

const D = ref(null)
const E = ref(null)
const S = ref(null)
const E1 = ref(null)
const N = ref(null)
const V = ref(null)
const O = ref(null)
const L = ref(null)
const V1 = ref(null)
const E2 = ref(null)
const N1 = ref(null)
const D1 = ref(null)
const O1 = ref(null)

const S1 = ref(null)
const O2 = ref(null)
const L1 = ref(null)
const U = ref(null)
const C = ref(null)
const O3 = ref(null)
const E3 = ref(null)
const S2 = ref(null)

const P = ref(null)
const A = ref(null)
const R = ref(null)
const A1 = ref(null)

const O4 = ref(null)

const A2 = ref(null)
const M = ref(null)
const A3 = ref(null)
const N2 = ref(null)
const H = ref(null)
const A4 = ref(null)

function generateAnimation() {
  const values = [
    D,
    E,
    S,
    E1,
    N,
    V,
    O,
    L,
    V1,
    E2,
    N1,
    D1,
    O1,
    S1,
    O2,
    L1,
    U,
    C,
    O3,
    E3,
    S2,
    P,
    A,
    R,
    A1,
    O4,
    A2,
    M,
    A3,
    N2,
    H,
    A4
  ]

  const rotate = [
    { init: { rotateX: '0deg' }, end: { rotateX: '720deg' } },
    { init: { rotateY: '0deg' }, end: { rotateY: '720deg' } },
    { init: { rotateZ: '0deg' }, end: { rotateZ: '720deg' } }
  ]

  setInterval(() => {
    const randomIndexValue = Math.floor(Math.random() * values.length)
    const randomValue = values[randomIndexValue]

    const randomIndexRotate = Math.floor(Math.random() * rotate.length)
    const randomEffect = rotate[randomIndexRotate]

    gsap.fromTo(
      randomValue.value,
      { ...randomEffect.init },
      { duration: 1, y: 0, ease: 'back.out(1)', ...randomEffect.end }
    )
  }, 4000)
}

onMounted(() => {
  const timeline = gsap.timeline({ defaults: { duration: 0.15 } })

  const initEffect = { opacity: 0 }
  const endEffect = { opacity: 1, ease: 'back.out(1)' }

  timeline
    .fromTo(D.value, initEffect, endEffect)
    .fromTo(E.value, initEffect, endEffect)
    .fromTo(S.value, initEffect, endEffect)
    .fromTo(E1.value, initEffect, endEffect)
    .fromTo(N.value, initEffect, endEffect)
    .fromTo(V.value, initEffect, endEffect)
    .fromTo(O.value, initEffect, endEffect)
    .fromTo(L.value, initEffect, endEffect)
    .fromTo(V1.value, initEffect, endEffect)
    .fromTo(E2.value, initEffect, endEffect)
    .fromTo(N1.value, initEffect, endEffect)
    .fromTo(D1.value, initEffect, endEffect)
    .fromTo(O1.value, initEffect, endEffect)

    .fromTo(S1.value, initEffect, endEffect)
    .fromTo(O2.value, initEffect, endEffect)
    .fromTo(L1.value, initEffect, endEffect)
    .fromTo(U.value, initEffect, endEffect)
    .fromTo(C.value, initEffect, endEffect)
    .fromTo(O3.value, initEffect, endEffect)
    .fromTo(E3.value, initEffect, endEffect)
    .fromTo(S2.value, initEffect, endEffect)

    .fromTo(P.value, initEffect, endEffect)
    .fromTo(A.value, initEffect, endEffect)
    .fromTo(R.value, initEffect, endEffect)
    .fromTo(A1.value, initEffect, endEffect)

    .fromTo(O4.value, initEffect, endEffect)

    .fromTo(A2.value, initEffect, endEffect)
    .fromTo(M.value, initEffect, endEffect)
    .fromTo(A3.value, initEffect, endEffect)
    .fromTo(N2.value, initEffect, endEffect)
    .fromTo(H.value, initEffect, endEffect)
    .fromTo(A4.value, initEffect, endEffect)

  generateAnimation()
})
</script>

<template>
  <section class="flex items-center">
    <div class="text-container">
      <span ref="D" class="font-black inline-block text-8xl text-white reddit-mono-extrabold"
        >D</span
      >
      <span ref="E" class="font-black inline-block text-8xl text-white reddit-mono-extrabold"
        >E</span
      >
      <span ref="S" class="font-black inline-block text-8xl text-white reddit-mono-extrabold"
        >S</span
      >
      <span ref="E1" class="font-black inline-block text-8xl text-white reddit-mono-extrabold"
        >E</span
      >
      <span ref="N" class="font-black inline-block text-8xl text-white reddit-mono-extrabold"
        >N</span
      >
      <span ref="V" class="font-black inline-block text-8xl text-white reddit-mono-extrabold"
        >V</span
      >
      <span ref="O" class="font-black inline-block text-8xl text-white reddit-mono-extrabold"
        >O</span
      >
      <span ref="L" class="font-black inline-block text-8xl text-white reddit-mono-extrabold"
        >L</span
      >
      <span ref="V1" class="font-black inline-block text-8xl text-white reddit-mono-extrabold"
        >V</span
      >
      <span ref="E2" class="font-black inline-block text-8xl text-white reddit-mono-extrabold"
        >E</span
      >
      <span ref="N1" class="font-black inline-block text-8xl text-white reddit-mono-extrabold"
        >N</span
      >
      <span ref="D1" class="font-black inline-block text-8xl text-white reddit-mono-extrabold"
        >D</span
      >
      <span ref="O1" class="font-black inline-block text-8xl text-white reddit-mono-extrabold"
        >O</span
      >

      <br />

      <span ref="S1" class="font-black inline-block text-8xl text-white reddit-mono-extrabold"
        >S</span
      >
      <span ref="O2" class="font-black inline-block text-8xl text-white reddit-mono-extrabold"
        >O</span
      >
      <span ref="L1" class="font-black inline-block text-8xl text-white reddit-mono-extrabold"
        >L</span
      >
      <span ref="U" class="font-black inline-block text-8xl text-white reddit-mono-extrabold"
        >U</span
      >
      <span ref="C" class="font-black inline-block text-8xl text-white reddit-mono-extrabold"
        >Ç</span
      >
      <span ref="O3" class="font-black inline-block text-8xl text-white reddit-mono-extrabold"
        >Õ</span
      >
      <span ref="E3" class="font-black inline-block text-8xl text-white reddit-mono-extrabold"
        >E</span
      >
      <span ref="S2" class="font-black inline-block text-8xl text-white reddit-mono-extrabold"
        >S</span
      >

      <br />

      <span ref="P" class="font-black inline-block text-8xl text-white reddit-mono-extrabold"
        >P</span
      >
      <span ref="A" class="font-black inline-block text-8xl text-white reddit-mono-extrabold"
        >A</span
      >
      <span ref="R" class="font-black inline-block text-8xl text-white reddit-mono-extrabold"
        >R</span
      >
      <span ref="A1" class="font-black inline-block text-8xl text-white reddit-mono-extrabold"
        >A</span
      >

      <br />

      <span ref="O4" class="font-black inline-block text-8xl text-white reddit-mono-extrabold"
        >O</span
      >

      <br />

      <span ref="A2" class="font-black inline-block text-8xl text-white reddit-mono-extrabold"
        >A</span
      >
      <span ref="M" class="font-black inline-block text-8xl text-white reddit-mono-extrabold"
        >M</span
      >
      <span ref="A3" class="font-black inline-block text-8xl text-white reddit-mono-extrabold"
        >A</span
      >
      <span ref="N2" class="font-black inline-block text-8xl text-white reddit-mono-extrabold"
        >N</span
      >
      <span ref="H" class="font-black inline-block text-8xl text-white reddit-mono-extrabold"
        >H</span
      >
      <span ref="A4" class="font-black inline-block text-8xl text-white reddit-mono-extrabold"
        >Ã</span
      >
    </div>
  </section>
</template>

<style scoped>
section {
  min-height: calc(100vh - 220px);
}

.text-container {
  margin-bottom: 110px;
}
</style>