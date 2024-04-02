<script setup lang="ts">
import { gsap } from 'gsap'
import { onMounted, ref } from 'vue'
import GithubIcon from './icons/GithubIcon.vue'
import MediumIcon from './icons/MediumIcon.vue'
import InstagramIcon from './icons/InstagramIcon.vue'
import EmailIcon from './icons/EmailIcon.vue'
import BrandIcon from './icons/BrandIcon.vue'

const githubRef = ref(null)
const mediumRef = ref(null)
const instagramRef = ref(null)

const emailRef = ref(null)
const emaiTextRef = ref(null)
const emaiContactRef = ref(null)

const brandRef = ref(null)

onMounted(() => {
  const lastTimeElement = { duration: 1.5 }
  const mediumTimeElement = { duration: 1 }
  const firstTimeElement = { duration: 0.5 }

  const fromLeft = { x: -350 }
  const toRotate = { x: 0, rotation: 360 }

  gsap.fromTo(githubRef.value, fromLeft, { ...lastTimeElement, ...toRotate })
  gsap.fromTo(mediumRef.value, fromLeft, { ...mediumTimeElement, ...toRotate })
  gsap.fromTo(instagramRef.value, fromLeft, { ...firstTimeElement, ...toRotate })

  const fromUp = { y: -350 }
  gsap.fromTo(brandRef.value, fromUp, { ...mediumTimeElement, y: 0, ease: 'back.out(1)' })

  const fromRight = { x: 350 }
  gsap.fromTo(emailRef.value, fromRight, { ...firstTimeElement, ...toRotate })
  gsap.fromTo(emaiTextRef.value, fromRight, { ...mediumTimeElement, x: 0 })
  gsap.fromTo(emaiContactRef.value, fromRight, { ...lastTimeElement, x: 0 })
})

const links = [
  {
    icon: GithubIcon,
    ref: 'githubRef',
    href: 'https://github.com/lostcode-js'
  },
  {
    icon: MediumIcon,
    ref: 'mediumRef',
    href: 'https://medium.com/@lost-code'
  },
  {
    icon: InstagramIcon,
    ref: 'instagramRef',
    href: 'https://www.instagram.com/lostcode.js/'
  }
]

const navbarLinksLeft = [
  {
    label: 'HOME',
    href: '#home_section'
  },
  {
    label: 'QUEM SOU',
    href: '#who_am_i_section'
  },
  {
    label: 'O QUE FAÇO',
    href: '#what_do_i_do_section'
  }
]

const navbarLinksRight = [
  {
    label: 'PORTFÓLIO',
    href: '#home_section'
  },
  {
    label: 'ARTIGOS',
    href: '#article_section'
  },
  {
    label: 'FALE CONOSCO',
    href: '#talk_with_us_section'
  }
]
</script>

<template>
  <header class="overflow-hidden">
    <section class="">
      <div class="mt-2 relative">
        <ul class="flex gap-2">
          <li
            :ref="link.ref"
            v-for="link in links"
            :key="link.ref"
            class="h-10 w-10 p-2 rounded-full bg-white social-media__button"
          >
            <a class="inline-block w-full h-full" :href="link.href" target="_blank">
              <component :is="link.icon" />
            </a>
          </li>
        </ul>
        <ul class="absolute top-0 right-0 flex gap-2">
          <li ref="emailRef" class="h-10 w-10 p-2 rounded-full bg-white inline-block align-top">
            <a class="inline-block w-full h-full" target="_blank">
              <EmailIcon />
            </a>
          </li>
          <li ref="emaiTextRef" class="inline-block align-top text-xs text-white">
            <span>
              EMAIL DE <br />
              CONTATO
            </span>
          </li>
          <li ref="emaiContactRef" class="inline-block align-top text-2xl text-white">
            lostcode.js@gmail.com
          </li>
        </ul>
      </div>
      <div>
        <ul class="flex gap-10 justify-between items-center text-white text-xl">
          <li v-for="link in navbarLinksLeft" :key="link.href">
            <a class="inline-block w-full h-full font-semibold navbar__link" :href="link.href">
              {{ link.label }}
            </a>
          </li>

          <li ref="brandRef">
            <BrandIcon class="h-20" />
          </li>

          <li v-for="link in navbarLinksRight" :key="link.href">
            <a class="inline-block w-full h-full font-semibold navbar__link" :href="link.href">
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>
    </section>
  </header>
</template>

<style scoped>
header {
  background: -moz-linear-gradient(0deg, rgba(163, 11, 102, 0) 0%, rgba(0, 0, 0, 0.7) 100%);
  background: -webkit-linear-gradient(0deg, rgba(163, 11, 102, 0) 0%, rgba(0, 0, 0, 0.7) 100%);
  background: linear-gradient(0deg, rgba(163, 11, 102, 0) 0%, rgba(0, 0, 0, 0.7) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#a30b66",endColorstr="#000000",GradientType=1);
}

.social-media__button,
.navbar__link {
  transition: transform 0.3s ease;
}

.social-media__button:hover {
  transform: scale(1.2) !important;
}

.navbar__link:hover {
  transform: scale(1.2) !important;
}
</style>