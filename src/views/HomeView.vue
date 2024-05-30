<script setup lang="ts">
import { gsap } from 'gsap'
import { onMounted, ref } from 'vue'
import HeaderContent from '../components/header/HeaderContent.vue'
import HomeSection from '../components/section/home/HomeSection.vue'
import AboutSection from '../components/section/about/AboutSection.vue'
import SkillsSection from '../components/section/SkillsSection.vue'
import ServicesSection from '../components/section/ServicesSection.vue'

import ParallaxBackground from '../components/background/ParallaxBackground.vue'

import { Draggable } from 'gsap/Draggable'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(Draggable)
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  let sections = gsap.utils.toArray('.panel')
  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: '#about_section',
      pin: true,
      scrub: 1,
      snap: 1 / (sections.length - 1),
      end: () => '+=' + (document.querySelector<HTMLElement>('#about_section')?.offsetWidth ?? '2000')
    }
  })
})

</script>

<template>
  <div class="h-full scroll-smooth">
    <ParallaxBackground />
    <HeaderContent class="relative z-10" />
    <main class="relative z-10 overflow-x-hidden">
      <HomeSection />
      <div id="about_section">
        <AboutSection />
        <SkillsSection />
        <!--
              <ServicesSection />
              -->
      </div>
    </main>
  </div>
</template>

<style scoped>
#about_section {
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  width: 300%;
}
</style>
