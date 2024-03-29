<script setup lang="ts">
import { gsap } from 'gsap'
import { onMounted, ref } from 'vue'
import HeaderContent from '../components/HeaderContent.vue'

const myElement = ref(null)

onMounted(() => {
  gsap.to(myElement.value, { duration: 1, x: 100 })
})
</script>

<template>
  <HeaderContent />
  <main></main>
</template>
