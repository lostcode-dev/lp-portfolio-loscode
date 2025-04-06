<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useAnimation } from '@/composables/useAnimation'

const { pulseAnimation, parallaxEffect } = useAnimation()

onMounted(() => {
  parallaxEffect(['#layer-universe', '#layer-stars'], [0, 20])
  pulseAnimation('#layer-universe', 120)
  pulseAnimation('#layer-stars', 60)
})

onUnmounted(() => {
  parallaxEffect([], [], true)
})
</script>

<template>
  <div id="background">
    <div class="halftone-overlay"></div>
    <div class="layer" id="layer-universe"></div>
    <div class="layer" id="layer-moon"></div>
    <div class="layer" id="layer-stars"></div>
  </div>
</template>

<style scoped>
#background {
  position: fixed;
  z-index: -5;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: #000;
}

.layer {
  position: absolute;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: center;
  will-change: transform;
}

#layer-universe {
  background-image: url(/img/universe.webp);
  height: 105%;
  width: 105%;
}

#layer-stars {
  background-image: url(/img/stars.png);
  position: relative;
  height: 100%;
  width: 100%;
}

#layer-stars::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(/img/stars.png);
  filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.8));
  pointer-events: none;
}

#layer-moon {
  background-image: url(/img/moon.webp);
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  top: 30%;
  left: 30%;
  transform: translate(-12.5%, -5%);
  aspect-ratio: 1;
  width: 50vw;
  z-index: 1;
  filter: drop-shadow(0 0 20px rgba(255, 20, 147, 0.7))
    drop-shadow(0 0 40px rgba(255, 20, 147, 0.5));
  animation: neonPulse 2s infinite;
}

@keyframes neonPulse {
  0%,
  100% {
    filter: drop-shadow(0 0 20px rgba(255, 20, 147, 0.7))
      drop-shadow(0 0 40px rgba(255, 20, 147, 0.5));
  }
  50% {
    filter: drop-shadow(0 0 30px rgba(255, 20, 147, 1))
      drop-shadow(0 0 60px rgba(255, 20, 147, 0.8));
  }
}

.halftone-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  pointer-events: none;
  background-image: url('/img/halftone-pattern.png');
  background-size: cover;
  opacity: 0.2;
}
</style>
