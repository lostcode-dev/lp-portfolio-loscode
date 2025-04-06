<script setup lang="ts">
import { gsap } from 'gsap'
import { onMounted } from 'vue'

import WriteAnimationItem from './WriteAnimationItem.vue'
import { useAnimation } from '@/composables/useAnimation'

const writeText = ['developing_solutions', 'innovation_pixel', 'tech_transforms', 'design_function']
const tlMaster = gsap.timeline({ repeat: -1 })
const { initializeCursorAndTextAnimation } = useAnimation()

onMounted(async () => {
  initializeCursorAndTextAnimation(writeText, '#cursor', tlMaster, 0.3, 0.2)
})
</script>

<template>
  <WriteAnimationItem
    v-for="value in writeText"
    :key="`locale-${$i18n.locale}-${value}`"
    :value="value"
    :classAnimation="value"
  />
  <span id="cursor" class="audiowide text-white">_</span>
</template>
