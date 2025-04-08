<script setup lang="ts">
import BlackHoleBg from '../background/BlackHoleBg.vue'
import TheHeaderLogo from '../header/partials/TheHeaderLogo.vue'

const links = [
  { text: 'About', href: '#' },
  { text: 'Careers', href: '#' },
  { text: 'History', href: '#' },
  { text: 'Services', href: '#' },
  { text: 'Projects', href: '#' },
  { text: 'Blog', href: '#' }
]

const socialLinks = [
  { name: 'Facebook', href: '#', icon: 'FacebookIcon' },
  { name: 'Instagram', href: '#', icon: 'InstagramIcon' },
  { name: 'Twitter', href: '#', icon: 'TwitterIcon' },
  { name: 'GitHub', href: '#', icon: 'GitHubIcon' },
  { name: 'Dribbble', href: '#', icon: 'DribbbleIcon' }
]
</script>

<template>
  <footer class="relative">
    <div class="container mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 relative z-10">
      <div class="flex justify-center text-teal-600">
        <TheHeaderLogo class="flex mt-4 sm:mt-0" size="h-16 sm:h-20 lg:h-16 xl:h-20" />
      </div>

      <p class="mx-auto mt-6 max-w-md text-center leading-relaxed text-white">
        Forjado com ideias, código e um toque de caos interestelar. <br />
        Explorando ideias, desenvolvendo soluções, conectando pixels e pessoas. <br />
        © {{ new Date().getFullYear() }} Todos os direitos reservados — mas o código é livre. 🚀
      </p>

      <ul class="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
        <li v-for="link in links" :key="link.text">
          <a class="text-white transition" :href="link.href">
            {{ link.text }}
          </a>
        </li>
      </ul>

      <ul class="mt-12 flex justify-center gap-6 md:gap-8">
        <li v-for="social in socialLinks" :key="social.name">
          <a :href="social.href" rel="noreferrer" target="_blank" class="text-white transition">
            <span class="sr-only">{{ social.name }}</span>
            <component :is="social.icon" class="h-6 w-6" />
          </a>
        </li>
      </ul>
    </div>
    <BlackHoleBg />
  </footer>
</template>
