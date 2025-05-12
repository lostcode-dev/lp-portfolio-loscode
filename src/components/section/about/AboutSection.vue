<script setup lang="ts">
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { computed, onMounted } from 'vue'
import { useAnimation } from '@/composables/useAnimation'
import AboutBackground from '../../background/AboutBackground.vue'
import CmdAbout from './partials/CmdAbout.vue'
import CmdWork from './partials/CmdWork.vue'
import CmdHobbies from './partials/CmdHobbies.vue'
import CmdCitation from './partials/CmdCitation.vue'
import ImageProfile from '@/components/ImageProfile.vue'
import ScrollingBanner from '@/components/ScrollingBanner.vue'
import { useWindowSize } from '@vueuse/core'

gsap.registerPlugin(Draggable)

const { createScrollAnimation } = useAnimation()
const { width } = useWindowSize()

onMounted(() => {
  if (width.value > 768) {
    createScrollAnimation(
      '.cmd-left',
      { x: '-40%', opacity: 0 },
      { x: '0%', opacity: 1 },
      '#who_am_i_section',
      'top 80%',
      1
    )
    createScrollAnimation(
      '.cmd-work',
      { x: '60%', opacity: 0 },
      { x: '0%', opacity: 1 },
      '#who_am_i_section',
      'top 70%',
      1.2
    )
    createScrollAnimation(
      '.cmd-hobbies',
      { x: '50%', opacity: 0 },
      { x: '0%', opacity: 1 },
      '#who_am_i_section',
      'top 60%',
      1.4
    )
    createScrollAnimation(
      '.cmd-citation',
      { x: '65%', opacity: 0 },
      { x: '0%', opacity: 1 },
      '#who_am_i_section',
      'top 50%',
      1.6
    )
    createScrollAnimation(
      '.image-center',
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1 },
      '#who_am_i_section',
      'top 50%',
      1
    )

    Draggable.create('.command-container--animated', {
      bounds: '#who_am_i_container',
      inertia: true
    })
    Draggable.create('.picture--animated', { bounds: '#who_am_i_container', inertia: true })
  }
})

const key = computed(() => {
  return Math.round(width.value / 100)
})
const bannerText = 'Sobre mim ✦ About me ✦ Sobre mí ✦ À propos de moi ✦ Über mich ✦ '
</script>

<template>
  <div id="who_am_i_container" class="bg-black/80 py-6 sm:py-8 relative h-screen panel w-screen">
    <ScrollingBanner :text="bannerText" />

    <AboutBackground secondary-color="rgb(128, 0, 128)" />

    <ScrollingBanner :text="bannerText" direction="left-right" class="bottom-0" />

    <section
      id="who_am_i_section"
      class="text-white relative z-20 h-full flex items-center w-screen"
    >
      <div
        class="flex w-full lg:w-auto h-full lg:h-auto gap-4 sm:gap-5 my-12 sm:my-16 flex-col md:flex-row justify-center items-center"
      >
        <CmdAbout
          :key="`about-block-${key}`"
          class="cmd-left sm:absolute w-80 sm:w-96 lg:flex lg:w-2/5 top-[5%] sm:top-[20%] lg:top-auto lg:relative md:order-0"
        />
        <ImageProfile
          class="image-center sm:absolute w-1/2 sm:w-60 lg:w-1/5 top-[35%] sm:top-[40%] left-[25%] sm:left-[30%] lg:top-auto lg:relative lg:left-auto order-first md:order-1"
          src="/img/perfil-2.png"
          is-animated
        />

        <div class="lg:w-2/5 flex md:block flex-col justify-center items-center gap-8 order-2">
          <CmdWork
            :key="`work-block-${key}`"
            class="cmd-work sm:absolute w-72 sm:w-80 lg:flex lg:w-auto top-[12.5%] sm:top-[18%] right-[10%] sm:right-4 lg:top-auto lg:relative lg:right-auto"
          />
          <CmdHobbies
            :key="`hobbies-block-${key}`"
            class="cmd-hobbies h-36 sm:h-40 sm:absolute w-72 sm:w-80 lg:flex lg:w-auto bottom-[18%] sm:bottom-[20%] right-[12%] sm:right-8 lg:right-auto lg:bottom-auto lg:relative"
          />
          <CmdCitation
            :key="`citation-block-${key}`"
            class="cmd-citation sm:absolute w-80 sm:w-96 lg:flex lg:w-auto right-4 sm:right-5 bottom-[8%] lg:relative lg:right-auto"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  #about-me {
    transform: translate3d(-10px, -3px, 0px);
  }

  #where-i-work {
    transform: translate3d(-265px, -56px, 0px);
  }

  #citation {
    transform: translate3d(-95px, 110px, 0px);
  }
}
</style>
