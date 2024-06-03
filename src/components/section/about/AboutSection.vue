<script setup lang="ts">
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { computed, onMounted } from 'vue'
import AboutBackground from '../../background/AboutBackground.vue'

import AboutBlock from './AboutBlock.vue'
import ImageBlock from './ImageBlock.vue'
import WorkBlock from './WorkBlock.vue'
import HobbiesBlock from './HobbiesBlock.vue'
import CitationBlock from './CitationBlock.vue'
import { useWindowSize } from '@vueuse/core'

gsap.registerPlugin(Draggable)
gsap.registerPlugin(ScrollTrigger)


const { width } = useWindowSize()


onMounted(() => {
  gsap.to('#cursor', { opacity: 0, repeat: -1, yoyo: true, duration: 0.25, ease: 'power2.inOut' })

  Draggable.create('.command-container--animated', {
    bounds: '#who_am_i_container',
    inertia: true
  })

  Draggable.create('.picture--animated', {
    bounds: '#who_am_i_container',
    inertia: true
  })
})

const key = computed(() => {
  return Math.round(width.value / 100)
})

</script>

<template>
  <div id="who_am_i_container" class="bg-black/80 py-4 relative h-screen panel w-screen">
    <AboutBackground />
  
    <section id="who_am_i_section" class="text-white relative z-20 h-full flex items-center w-screen">
      <div class="flex w-full lg:w-auto h-full lg:h-auto gap-5 my-16 ">
        <AboutBlock :key="`about-block-${key}`"
          class="absolute w-96 lg:flex lg:w-2/5 top-[10%] sm:top-[20%] lg:top-auto lg:relative" />
        <ImageBlock
          class="absolute w-40 sm:w-60 lg:flex lg:w-1/5 top-[40%]  left-[30%] sm:left-[35%] lg:top-auto lg:relative lg:left-auto"
          is-animated />
  
        <div class="lg:w-2/5">
          <WorkBlock :key="`work-block-${key}`"
            class="absolute w-80 lg:flex lg:w-auto top-[18%] right-[12%] sm:right-4 lg:top-auto lg:relative lg:right-auto" />
          <HobbiesBlock :key="`hobbies-block-${key}`"
            class="h-40 absolute w-80  lg:flex lg:w-auto bottom-[20%] sm:bottom-[40%] right-[12%] sm:right-8 lg:right-auto lg:bottom-auto lg:relative " />
          <CitationBlock :key="`citation-block-${key}`"
            class="absolute w-96  lg:flex lg:w-auto right-5 bottom-[10%] lg:relative lg:right-auto" />
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