<script setup lang="ts">
import { gsap } from 'gsap'
import { onMounted } from 'vue'

const developing_solutions = [
  ...'DESENVOLVENDO'.split(''),
  'br',
  ...'SOLUÇÕES'.split(''),
  'br',
  ...'PARA'.split(''),
  'br',
  'O',
  'br',
  ...'MUNDO'.split('')
]

const innovation_pixel = [
  ...'INOVAÇÃO'.split(''),
  'br',
  ...'EM'.split(''),
  'br',
  ...'CADA'.split(''),
  'br',
  ...'PIXEL'.split('')
]

const tech_transforms = [
  ...'TECNOLOGIA'.split(''),
  'br',
  ...'QUE'.split(''),
  'br',
  ...'TRANSFORMA'.split(''),
  'br',
  ...'EM'.split(''),
  'br',
  ...'EXPERIÊNCIAS'.split('')
]

const design_function = [
  ...'DESIGN'.split(''),
  'br',
  ...'E'.split(''),
  'br',
  ...'FUNCIONALIDADE'.split(''),
  'br',
  ...'UNIDOS'.split(''),
  'br',
  ...'INSPIRANDO'.split('')
]

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

onMounted(() => {
  gsap.to('#cursor', { opacity: 0, repeat: -1, yoyo: true, duration: 0.25, ease: 'power2.inOut' })

  let tlMaster = gsap.timeline({ repeat: -1 })

  tlMaster.add(scene('developing_solutions'))
  tlMaster.add(scene('innovation_pixel'))
  tlMaster.add(scene('tech_transforms'))
  tlMaster.add(scene('design_function'))
})
</script>

<template>
  <section class="">
    <span class="text-container animated-text text-8xl text-white">
      <template v-for="(letter, letterIndex) in developing_solutions">
        <br v-if="letter === 'br'" class="developing_solutions letter hidden" :key="letterIndex" />
        <span
          v-else
          class="reddit-mono-extrabold developing_solutions letter hidden"
          :key="letter"
          >{{ letter }}</span
        >
      </template>
      <template v-for="(letter, letterIndex) in innovation_pixel">
        <br v-if="letter === 'br'" class="innovation_pixel letter hidden" :key="letterIndex" />
        <span v-else class="reddit-mono-extrabold innovation_pixel letter hidden" :key="letter">{{
          letter
        }}</span>
      </template>
      <template v-for="(letter, letterIndex) in tech_transforms">
        <br v-if="letter === 'br'" class="tech_transforms letter hidden" :key="letterIndex" />
        <span v-else class="reddit-mono-extrabold tech_transforms letter hidden" :key="letter">{{
          letter
        }}</span>
      </template>
      <template v-for="(letter, letterIndex) in design_function">
        <br v-if="letter === 'br'" class="design_function letter hidden" :key="letterIndex" />
        <span v-else class="reddit-mono-extrabold design_function letter hidden" :key="letter">{{
          letter
        }}</span>
      </template>
      <span id="cursor" class="reddit-mono-extrabold text-8xl text-white">_</span>
    </span>
  </section>
</template>

<style scoped>
section {
  min-height: calc(100vh - 195px);
}

.animated-text span {
  display: inline-block;
}

.text-container {
  margin-bottom: 110px;
}
</style>