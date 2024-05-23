<script setup lang="ts">
import { gsap } from 'gsap'
import { onMounted, ref } from 'vue'

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

const we_make = 'CONSTRUINDO:'.split('')

const options = ['sites', 'aplicativos', 'automações', 'games']

const emojis: any = {
  sites: '💻',
  aplicativos: '📱',
  automações: '🕹',
  games: '🎮'
}

function getEmoji(index: number) {
  const option: string = options[index]

  return emojis[option]
}

const we_make_options = options.map((item) => item.toUpperCase().split(''))

function sceneDevelopingSolutions() {
  let letters = document.getElementsByClassName('developing_solutions letter')
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

function sceneWeMake() {
  let timeline = gsap.timeline({ yoyo: true })
  let letters = document.getElementsByClassName('we_make letter')
  Array.from(letters).forEach((letter) => {
    timeline.fromTo(
      letter,
      { opacity: 0, display: 'none' },
      { opacity: 1, duration: 0.15, display: 'inline-flex' }
    )
  })

  return timeline
}

function sceneOptionsWeMake() {
  let timeline = gsap.timeline({ yoyo: true })
  options.forEach((opt) => {
    let letters = document.getElementsByClassName('we_make_options letter ' + opt)

    let localTimeline = gsap.timeline({ repeat: 1, yoyo: true })
    Array.from(letters).forEach((letter) => {
      localTimeline.fromTo(
        letter,
        { opacity: 0, display: 'none' },
        { opacity: 1, duration: 0.15, display: 'inline-block' }
      )
    })
    timeline.add(localTimeline)
  })

  return timeline
}

onMounted(() => {
  gsap.to('#cursor', { opacity: 0, repeat: -1, yoyo: true, duration: 0.25, ease: 'power2.inOut' })

  let tlMaster = gsap.timeline({ repeat: -1 })

  tlMaster.add(sceneDevelopingSolutions())
  /*
  tlMaster.add(sceneWeMake())
  tlMaster.add(sceneOptionsWeMake())
  */
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
      <!--
      <template v-for="letter in we_make" :key="letter">
        <span class="reddit-mono-extrabold we_make letter hidden">{{ letter }}</span>
      </template>

      <br class="we_make letter hidden" />

      <template v-for="(word, index) in we_make_options" :key="index">
        <span
          class="reddit-mono-extrabold we_make_options letter hidden mr-3"
          :class="[options[index]]"
          >{{ getEmoji(index) }}
        </span>
        <template v-for="letter in word" :key="letter">
          <span
            class="reddit-mono-extrabold we_make_options letter hidden"
            :class="[options[index]]"
            >{{ letter }}</span
          >
        </template>
        <br class="we_make_options letter hidden" />
      </template>
      -->

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