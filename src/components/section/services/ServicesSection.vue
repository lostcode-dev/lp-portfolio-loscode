<script setup lang="ts">
import AboutBackground from '@/components/background/AboutBackground.vue'
import CommandLine from '@/components/CommandLine.vue'
import { onMounted } from 'vue'
import { useAnimation } from '@/composables/useAnimation'

const { createScrollAnimation } = useAnimation()

const services = [
  {
    header: '🖥️ web-development',
    title: 'Web Development',
    description: 'services.web_development',
    startMinimize: false
  },
  {
    header: '📱 mobile-development',
    title: 'App/PWA Development',
    description: 'services.mobile_development',
    startMinimize: false
  },
  {
    header: '📱 creative-development',
    title: 'Creative Development',
    description: 'services.creative_development',
    startMinimize: false
  }
]

onMounted(() => {
  createScrollAnimation(
    '.command-line-0',
    { x: '-40%', opacity: 0 },
    { x: '0%', opacity: 1 },
    '#what_do_i_do_section',
    'top 80%',
    1
  )
  createScrollAnimation(
    '.command-line-1',
    { x: '50%', opacity: 0 },
    { x: '0%', opacity: 1 },
    '#what_do_i_do_section',
    'top 70%',
    1.2
  )
  createScrollAnimation(
    '.command-line-2',
    { x: '-40%', opacity: 0 },
    { x: '0%', opacity: 1 },
    '#what_do_i_do_section',
    'top 60%',
    1.4
  )
})
</script>

<template>
  <div class="relative">
    <section
      id="what_do_i_do_section"
      class="relative overflow-hidden min-h-screen flex items-center justify-center flex-col z-20 w-full gap-12 px-4 sm:px-8"
    >
      <div class="container relative flex flex-col justify-between mb-20">
        <div class="w-full grid gap-8">
          <div class="flex flex-col w-full sm:flex-row gap-8 flex-wrap">
            <CommandLine
              v-for="(service, index) in services.slice(0, 2)"
              :key="index"
              :title="service.header"
              :start-minimize="service.startMinimize"
              :class="`command-line-${index}`"
            >
              <div class="touch-none reddit-mono-bold text-white text-sm sm:text-base">
                <div v-html="$t(service.description)"></div>
              </div>
            </CommandLine>
          </div>
          <div class="flex flex-col w-full sm:flex-row gap-8 flex-wrap">
            <CommandLine
              :title="service.header"
              v-for="(service, index) in services.slice(2, 5)"
              :key="index"
              :start-minimize="service.startMinimize"
              :class="`command-line-${index + 2}`"
            >
              <div class="touch-none reddit-mono-bold text-white text-sm sm:text-base">
                <div v-html="$t(service.description)"></div>
              </div>
            </CommandLine>
          </div>
        </div>
      </div>
    </section>
    <AboutBackground
      :show-layer-corner="false"
      animation-line="25s"
      secondary-color="rgb(255, 71, 255)"
      primary-color="rgb(143, 0, 255)"
    />
  </div>
</template>
