<template>
    <WriteText v-for="value in writeText" :key="`locale-${$i18n.locale}-${value}`" :value="value" :classAnimation="value" />
    <span id="cursor" class="reddit-mono-extrabold text-8xl text-white">_</span>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { onMounted } from 'vue'

import WriteText from './WriteText.vue'

const writeText = ['developing_solutions', 'innovation_pixel', 'tech_transforms', 'design_function']
var tlMaster = gsap.timeline({ repeat: -1 })

function scene(className: string) {
  let letters = document.getElementsByClassName(`${className} letter`)
  let timeline = gsap.timeline({ repeat: 1, yoyo: true })
  Array.from(letters).forEach((letter) => {
    timeline.fromTo(
      letter,
      { opacity: 0, display: 'none' },
      { opacity: 1, duration: 0.15, display: 'inline-flex' }
    )
  })
  return timeline
}

function loadAnimation() {
  gsap.to('#cursor', { opacity: 0, repeat: -1, yoyo: true, duration: 0.25, ease: 'power2.inOut' })
  writeText.forEach(item => tlMaster.add(scene(item)))
}

onMounted(() => {
  loadAnimation()
})
</script>
