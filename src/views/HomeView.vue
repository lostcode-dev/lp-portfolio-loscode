<script setup lang="ts">
import HeaderContent from '@/components/header/HeaderContent.vue'
import HomeSection from '@/components/section/home/HomeSection.vue'
import AboutSection from '@/components/section/about/AboutSection.vue'
import LetsWorkSection from '@/components/section/letsWork/LetsWorkSection.vue'
import ArticlesSection from '@/components/section/articles/ArticlesSection.vue'
import ContactUsSection from '@/components/section/contactUs/ContactUsSection.vue'
import WeWorkSection from '@/components/section/weWork/WeWorkSection.vue'
import ServicesSection from '@/components/section/services/ServicesSection.vue'
import ProjectsSection from '@/components/section/projects/ProjectsSection.vue'
import FooterSection from '@/components/section/footer/FooterSection.vue'
import ParallaxBackground from '@/components/background/ParallaxBackground.vue'
</script>

<template>
  <div class="h-full scroll-smooth">
    <ParallaxBackground />
    <HeaderContent class="relative z-10" />
    <main class="relative z-10 overflow-x-hidden">
      <HomeSection />
      <div id="about_section">
        <AboutSection />
        <WeWorkSection />
        <ServicesSection />
        <LetsWorkSection />
        <ProjectsSection />
        <ArticlesSection />
        <ContactUsSection />
        <FooterSection />
      </div>
    </main>
  </div>
</template>
