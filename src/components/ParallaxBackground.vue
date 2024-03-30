<script setup lang="ts">
import { gsap } from 'gsap'
import { onMounted, ref } from 'vue'

const layer1 = ref(null)
const layer2 = ref(null)
const layer3 = ref(null)
const layer4 = ref(null)

const mouseX = ref(0)
const mouseY = ref(0)

const handleMouseMove = (event) => {
  const { clientX, clientY } = event
  mouseX.value = (clientX - window.innerWidth / 2) / 15
  mouseY.value = (clientY - window.innerHeight / 2) / 15
}
</script>

<template>
  <div class="fixed w-screen h-full bg-primary" @mousemove="handleMouseMove">
    <div class="w-full z-50 h-screen bg-secondary/50 absolute"></div>
    <div
      ref="layer3"
      :style="{ transform: `translate(${mouseX / 3}px, ${mouseY / 3}px)` }"
      class="absolute z-30 w-full h-full bg-cover bg-center bg-[url('/img/layer3.png')] blur"
    ></div>

    <div
      ref="layer2"
      :style="{ transform: `translate(${mouseX / 2}px, ${mouseY / 2}px)` }"
      class="absolute z-20 w-full h-full bg-cover bg-center bg-[url('/img/layer2.png')] blur-xl"
    ></div>

    <div
      ref="layer1"
      :style="{ transform: `translate(${mouseX}px, ${mouseY}px)` }"
      class="absolute z-21 w-full h-full bg-cover bg-center bg-[url('/img/layer1.jpg')]"
    ></div>
  </div>
</template>