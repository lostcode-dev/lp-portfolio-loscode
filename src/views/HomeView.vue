<script setup lang="ts">
import TheHeader from '@/components/header/TheHeader.vue'
import HomeSection from '@/components/section/home/HomeSection.vue'
import AboutSection from '@/components/section/about/AboutSection.vue'
import LetsWorkSection from '@/components/section/letsWork/LetsWorkSection.vue'
import ArticlesSection from '@/components/section/articles/ArticlesSection.vue'
import ContactUsSection from '@/components/section/contactUs/ContactUsSection.vue'
import WeWorkSection from '@/components/section/weWork/WeWorkSection.vue'
import ServicesSection from '@/components/section/services/ServicesSection.vue'
import ProjectsSection from '@/components/section/projects/ProjectsSection.vue'
import TheFooter from '@/components/footer/TheFooter.vue'
import ParallaxBackground from '@/components/background/ParallaxBackground.vue'
import BlackHoleBg from '@/components/background/BlackHoleBg.vue'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <div class="h-full scroll-smooth">
    <ParallaxBackground />
    <TheHeader class="relative z-10" />

    <main class="relative z-10 overflow-x-hidden">
      <HomeSection />
      <div id="about_section">
        <AboutSection />
      </div>

      <WeWorkSection :key="`locale-${$i18n.locale}`" />
      <ServicesSection />

      <div>
        <LetsWorkSection :title="t('lets_work_together')" />
        <ProjectsSection />

        <LetsWorkSection :title="t('transform_your_project')" src="/img/perfil.png" />
        <ArticlesSection />

        <ContactUsSection />
        <TheFooter />
      </div>
    </main>
  </div>
</template>
