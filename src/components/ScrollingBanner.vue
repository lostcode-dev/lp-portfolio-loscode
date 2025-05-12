<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

const props = defineProps({
  text: {
    type: String,
    default: 'Futuristic scrolling text banner'
  },
  speed: {
    type: Number,
    default: 200
  },
  textColor: {
    type: String,
    default: 'white'
  },
  backgroundColor: {
    type: String,
    default: 'rgba(0, 0, 0, 0)'
  },
  fontSize: {
    type: String,
    default: '1.25rem'
  },
  glowColor: {
    type: String,
    default: 'rgba(0, 255, 255, 0.7)'
  },
  direction: {
    type: String,
    default: 'right-left',
    validator: (value: string) => ['right-left', 'left-right'].includes(value)
  },
  textShadow: {
    type: String,
    default: '0 0 10px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 255, 255, 0.5)'
  },
  shadowIntensity: {
    type: Number,
    default: 1.0
  }
})

const animationDuration = computed(() => `${props.speed}s`)

const repeatedText = computed(() => Array(60).fill(props.text).join(' '))

const animationFrom = computed(() => (props.direction === 'right-left' ? '0%' : '-100%'))
const animationTo = computed(() => (props.direction === 'right-left' ? '-100%' : '0%'))

const svgContainer = ref<HTMLElement | null>(null)
const svgPath = ref<SVGPathElement | null>(null)
const pathWidth = ref(1600)

onMounted(() => {
  if (svgContainer.value) {
    const containerWidth = svgContainer.value.clientWidth
    pathWidth.value = containerWidth * 3

    if (svgPath.value) {
      const startX = -pathWidth.value / 2
      const endX = pathWidth.value / 2 + containerWidth
      svgPath.value.setAttribute('d', `M ${startX},40 L ${endX},40`)
    }
  }
})

const textStyles = computed(() => {
  return {
    textShadow: props.textShadow,
    fill: props.textColor,
    fontSize: props.fontSize,
    fontWeight: 'bold',
    letterSpacing: '1px',
    opacity: props.shadowIntensity
  }
})
</script>

<template>
  <div class="banner-container" :style="{ backgroundColor }" ref="svgContainer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 800 80"
      class="banner-svg"
    >
      <defs>
        <path
          id="textPath"
          ref="svgPath"
          :d="`M -${pathWidth / 2},40 L ${pathWidth / 2 + 800},40`"
          fill="none"
        />

        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <text
        :style="textStyles"
        :filter="`url(#glow) drop-shadow(0 0 3px ${glowColor})`"
        class="futuristic-text audiowide"
        dominant-baseline="middle"
        text-anchor="start"
      >
        <textPath xlink:href="#textPath" startOffset="0%">
          <animate
            attributeName="startOffset"
            :dur="animationDuration"
            :from="animationFrom"
            :to="animationTo"
            repeatCount="indefinite"
          />
          {{ repeatedText }}
        </textPath>
      </text>
    </svg>
  </div>
</template>

<style scoped>
.banner-container {
  width: 100%;
  overflow: hidden;
  position: absolute;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  z-index: 20;
}

.banner-svg {
  width: 100%;
  height: 100%;
  overflow: visible;
}

.futuristic-text {
  text-transform: uppercase;
  animation: textPulse 2s infinite alternate;
  paint-order: stroke fill;
}

@keyframes shadowPulse {
  0% {
    text-shadow:
      0 0 4px rgba(0, 255, 255, 0.7),
      0 0 8px rgba(0, 255, 255, 0.5);
  }
  100% {
    text-shadow:
      0 0 8px rgba(0, 255, 255, 0.9),
      0 0 16px rgba(0, 255, 255, 0.7),
      0 0 30px rgba(0, 255, 255, 0.5);
  }
}

@keyframes textPulse {
  0% {
    opacity: 0.9;
  }
  100% {
    opacity: 1;
  }
}
</style>
