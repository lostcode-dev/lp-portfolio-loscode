<script setup lang="ts">
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { onMounted } from 'vue'
import AboutBackground from '../../background/AboutBackground.vue'

import AboutBlock from './AboutBlock.vue'
import ImageBlock from './ImageBlock.vue'
import WorkBlock from './WorkBlock.vue'
import HobbiesBlock from './HobbiesBlock.vue'
import CitationBlock from './CitationBlock.vue'


gsap.registerPlugin(Draggable)
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.to('#cursor', { opacity: 0, repeat: -1, yoyo: true, duration: 0.25, ease: 'power2.inOut' })

  Draggable.create('.command-container', {
    bounds: '#who_am_i_container',
    inertia: true
  })

  Draggable.create('.perfil', {
    bounds: '#who_am_i_container',
    inertia: true
  })
})


</script>

<template>
  <div id="who_am_i_container" class="bg-black/80 py-4 relative h-screen panel w-screen">
    <AboutBackground />
  
    <section id="who_am_i_section" class="text-white relative z-20 h-full flex items-center w-screen">
      <div class="flex w-full h-full gap-5 my-16 ">
        <AboutBlock class="absolute w-96 lg:relative lg:w-2/5 top-[20%] lg:top-0 lg:left-0" />
        <ImageBlock class="absolute w-40 sm:w-60 lg:relative lg:w-1/5 top-[40%] left-[35%] lg:top-0 lg:left-0" />
  
        <div class="lg:w-2/5">
          <WorkBlock class="absolute w-80 lg:relative lg:w-auto top-[15%] right-4  lg:top-0 lg:left-0" />
          <HobbiesBlock
            class="h-40 absolute w-80  lg:relative lg:w-auto bottom-[10%] sm:bottom-[40%] right-8 lg:top-0 lg:left-0" />
          <CitationBlock class="absolute w-96  lg:relative lg:w-auto right-5 bottom-[10%] lg:top-0 lg:left-0" />
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
    transform: translate3d(-145px, 50px, 0px);
  }
}
</style>