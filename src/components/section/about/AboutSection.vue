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
import { useWindowSize } from '@vueuse/core'

gsap.registerPlugin(Draggable)

const { createScrollAnimation } = useAnimation()
const { width } = useWindowSize()

onMounted(() => {
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
    { x: '50%', opacity: 0 },
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
    { x: '50%', opacity: 0 },
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

  Draggable.create('.command-container--animated', { bounds: '#who_am_i_container', inertia: true })
  Draggable.create('.picture--animated', { bounds: '#who_am_i_container', inertia: true })
})

const key = computed(() => {
  return Math.round(width.value / 100)
})
</script>

<template>
  <div id="who_am_i_container" class="bg-black/80 py-4 relative h-screen panel w-screen">
    <AboutBackground secondary-color="rgb(128, 0, 128)" />

    <section
      id="who_am_i_section"
      class="text-white relative z-20 h-full flex items-center w-screen"
    >
      <div class="flex w-full lg:w-auto h-full lg:h-auto gap-5 my-16">
        <CmdAbout
          :key="`about-block-${key}`"
          class="cmd-left absolute w-96 lg:flex lg:w-2/5 top-[10%] sm:top-[20%] lg:top-auto lg:relative"
        />
        <ImageProfile
          class="image-center absolute w-40 sm:w-60 lg:flex lg:w-1/5 top-[40%] left-[30%] sm:left-[35%] lg:top-auto lg:relative lg:left-auto"
          src="/img/perfil-2.png"
          is-animated
        />

        <div class="lg:w-2/5">
          <CmdWork
            :key="`work-block-${key}`"
            class="cmd-work absolute w-80 lg:flex lg:w-auto top-[18%] right-[12%] sm:right-4 lg:top-auto lg:relative lg:right-auto"
          />
          <CmdHobbies
            :key="`hobbies-block-${key}`"
            class="cmd-hobbies h-40 absolute w-80 lg:flex lg:w-auto bottom-[20%] sm:bottom-[40%] right-[12%] sm:right-8 lg:right-auto lg:bottom-auto lg:relative"
          />
          <CmdCitation
            :key="`citation-block-${key}`"
            class="cmd-citation absolute w-96 lg:flex lg:w-auto right-5 bottom-[10%] lg:relative lg:right-auto"
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
