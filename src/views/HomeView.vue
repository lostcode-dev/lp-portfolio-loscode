<script setup lang="ts">
import { gsap } from 'gsap'
import { onMounted, ref } from 'vue'
import HeaderContent from '../components/HeaderContent.vue'
import HomeSection from '../components/HomeSection.vue'
import ParallaxBackground from '../components/ParallaxBackground.vue'

const myElement = ref(null)

onMounted(() => {
  gsap.to(myElement.value, { duration: 1, x: 100 })
})
</script>

<template>
  <div class="h-full">
    <ParallaxBackground />
    <HeaderContent class="relative z-10" />
    <main class="relative z-10">
      <HomeSection />
    </main>
  </div>
</template>
