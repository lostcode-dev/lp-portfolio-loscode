<script setup lang="ts">
import { gsap } from 'gsap'
import { onMounted, ref } from 'vue'
import HeaderContent from '../components/HeaderContent.vue'
import HomeSection from '../components/HomeSection.vue'
import AboutSection from '../components/AboutSection.vue'
import ParallaxBackground from '../components/ParallaxBackground.vue'

const myElement = ref(null)

onMounted(() => {
  gsap.to(myElement.value, { duration: 1, x: 100 })
})

const mouseX = ref(0)
const mouseY = ref(0)

const handleMouseMove = (event: any) => {
  const { clientX, clientY } = event
  mouseX.value = (clientX - window.innerWidth / 2) / 15
  mouseY.value = (clientY - window.innerHeight / 2) / 15
}
</script>

<template>
  <div class="h-full" @mousemove="handleMouseMove">
    <ParallaxBackground :mouseX="mouseX" :mouseY="mouseY" />
    <HeaderContent class="relative z-10" />
    <main class="relative z-10">
      <HomeSection />
      <AboutSection />
    </main>
  </div>
</template>
