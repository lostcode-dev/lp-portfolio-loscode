<script setup lang="ts">
import { gsap } from 'gsap'
import { onMounted, ref } from 'vue'

const myElement = ref(null)

onMounted(() => {
  gsap.to(myElement.value, { duration: 1, x: 500 })
})

const links = [
  {
    img: '',
    ref: '',
    href: ''
  }
]
</script>

<template>
  <header class="bg-black/10">
    <div class="bg-black/10">
      <a
        v-for="link in links"
        :key="link.ref"
        :ref="link.ref"
        class="rounded-full h-10 w-10 inline-block bg-white"
        href=""
      >
        <img :src="link.img" alt="" />
      </a>
    </div>
    <img
      ref="myElement"
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />
  </header>
</template>
