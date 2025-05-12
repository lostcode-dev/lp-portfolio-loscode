<script setup lang="ts">
import { gsap } from 'gsap'
import { onMounted } from 'vue'

import NavbarButton from './partials/NavbarButton.vue'
import NavbarLink from './partials/NavbarLink.vue'

const lastTimeElement = { duration: 1.5 }
const mediumTimeElement = { duration: 1 }
const firstTimeElement = { duration: 0.5 }
const toRotate = { x: 0, rotation: 360 }

function generateFromLeftAnimation() {
  const fromLeft = { x: -350 }

  gsap.fromTo('#githubBtn', fromLeft, { ...lastTimeElement, ...toRotate })
  gsap.fromTo('#linkedinBtn', fromLeft, { ...mediumTimeElement, ...toRotate })
  gsap.fromTo('#instagramBtn', fromLeft, { ...firstTimeElement, ...toRotate })
}

function generateFromRightAnimation() {
  const fromRight = { x: 350 }

  gsap.fromTo('#emailBtn', fromRight, { ...lastTimeElement, ...toRotate })
  gsap.fromTo('#languageBtn', fromRight, { ...mediumTimeElement, ...toRotate })
  gsap.fromTo('#menuBtn', fromRight, { ...firstTimeElement, ...toRotate })
}

function generateFromUpAnimation() {
  const fromUp = { y: -350 }

  gsap.fromTo('#brandIcon', fromUp, { ...mediumTimeElement, y: 0, ease: 'back.out(1)' })
}

onMounted(() => {
  generateFromLeftAnimation()
  generateFromRightAnimation()
  generateFromUpAnimation()
})
</script>

<template>
  <header class="overflow-hidden">
    <section>
      <div class="mt-2 relative">
        <NavbarButton />
      </div>
      <div>
        <NavbarLink />
      </div>
    </section>
  </header>
</template>

<style scoped>
header {
  background: -moz-linear-gradient(0deg, rgba(163, 11, 102, 0) 0%, rgba(0, 0, 0, 0.7) 100%);
  background: -webkit-linear-gradient(0deg, rgba(163, 11, 102, 0) 0%, rgba(0, 0, 0, 0.7) 100%);
  background: linear-gradient(0deg, rgba(163, 11, 102, 0) 0%, rgba(0, 0, 0, 0.7) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#a30b66", endColorstr="#000000", GradientType=1);
}
</style>
