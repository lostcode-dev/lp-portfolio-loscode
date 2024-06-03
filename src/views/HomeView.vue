<script setup lang="ts">
import { gsap } from 'gsap'
import { onMounted, ref } from 'vue'
import HeaderContent from '../components/header/HeaderContent.vue'
import HomeSection from '../components/section/home/HomeSection.vue'
import AboutSection from '../components/section/about/AboutSection.vue'
import LetsWorkSection from '../components/section/letsWork/LetsWorkSection.vue'
import ContactUsSection from '../components/section/contactUs/ContactUsSection.vue'
import ServicesSection from '../components/section/ServicesSection.vue'

import ParallaxBackground from '../components/background/ParallaxBackground.vue'

import { Draggable } from 'gsap/Draggable'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(Draggable)


</script>

<template>
  <div class="h-full scroll-smooth">
    <ParallaxBackground />
    <HeaderContent class="relative z-10" />
    <main class="relative z-10 overflow-x-hidden">
      <HomeSection />
      <div id="about_section">
        <AboutSection />
        <LetsWorkSection />
        <ContactUsSection />
      </div>
    </main>
  </div>
</template>
