<script setup lang="ts">
import { gsap } from 'gsap'
import { onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const we_make = computed(() => t('we_work.building').toUpperCase().split(''))

const optionsKeys = ['sites', 'applications', 'automations', 'games']
const options = computed(() => optionsKeys.map((word) => t(`we_work.${word}`)))

const emojis: any = {
  sites: '💻',
  applications: '📱',
  automations: '🕹',
  games: '🎮'
}

function getEmoji(index: number) {
  const option: string = optionsKeys[index]

  return emojis[option]
}

const we_make_options = options.value.map((item) => item.toUpperCase().split(''))

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
  options.value.forEach((opt) => {
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

  tlMaster.add(sceneWeMake())
  tlMaster.add(sceneOptionsWeMake())
})
</script>

<template>
  <div class="relative z-[60]" style="box-shadow: 0 -15px 10px rgba(0, 0, 0, 0.5)">
    <div class="bg-black py-20" style="box-shadow: rgba(0, 0, 0, 0.5) 0px 15px 10px">
      <section class="!min-h-80">
        <span class="text-container animated-text text-8xl text-white">
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
          <span id="cursor" class="reddit-mono-extrabold text-8xl text-white">_</span>
        </span>
      </section>
    </div>
  </div>
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
