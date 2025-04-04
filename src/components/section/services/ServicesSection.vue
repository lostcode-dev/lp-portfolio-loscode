<script setup lang="ts">
import AboutBackground from '@/components/background/AboutBackground.vue'
import CommandLine from '@/components/CommandLine.vue'

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
  },
]
</script>

<template>
  <div class="relative">
    <section
    id="what_do_i_do_section"
      class="relative overflow-hidden h-screen flex items-center justify-center flex-col z-20 w-screen gap-12"
    >
      <div class="text-5xl text-black z-20 reddit-mono-extrabold uppercase">
        {{ $t('what_do_i_do') }}
      </div>
      <div class="container relative flex flex-col justify-between mb-20">
        <div class="w-full grid gap-8">
          <div class="flex flex-col w-full sm:flex-row gap-8">
            <CommandLine
              v-for="(service, index) in services.slice(0, 2)"
              :key="index"
              :title="service.header"
              :start-minimize="service.startMinimize"
            >
              <div class="touch-none reddit-mono-bold text-white">
                <div v-html="$t(service.description)">
                </div>
              </div>
            </CommandLine>
          </div>
          <div class="flex flex-col w-full sm:flex-row gap-8">
            <CommandLine
              :title="service.header"
              v-for="(service, index) in services.slice(2, 5)"
              :key="index"
              :start-minimize="service.startMinimize"
            >
              <div class="touch-none reddit-mono-bold text-white">
                <div v-html="$t(service.description)">
                </div>
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
