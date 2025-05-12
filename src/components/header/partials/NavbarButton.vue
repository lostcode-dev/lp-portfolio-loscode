<template>
  <ul class="flex gap-2">
    <NavbarButtonItem v-for="link in socialMediaButtons" :key="link.ref" :link="link" />
  </ul>
  <ul class="absolute top-0 right-0 flex gap-2 z-20 text-black">
    <NavbarButtonLanguageItem />
    <NavbarButtonItem :link="emailButton" />
    <NavbarButtonMenuItem />
  </ul>
</template>

<script setup>
import GithubIcon from '../../icons/GithubIcon.vue'
import LinkedinIcon from '../../icons/LinkedinIcon.vue'
import InstagramIcon from '../../icons/InstagramIcon.vue'
import EmailIcon from '../../icons/EmailIcon.vue'

import NavbarButtonItem from './NavbarButtonItem.vue'
import NavbarButtonLanguageItem from './NavbarButtonLanguageItem.vue'
import NavbarButtonMenuItem from './NavbarButtonMenuItem.vue'

const socialMediaButtons = [
  {
    icon: GithubIcon,
    ref: 'githubBtn',
    href: 'https://github.com/lostcode-dev'
  },
  {
    icon: LinkedinIcon,
    ref: 'linkedinBtn',
    href: 'https://ilostcode.medium.com/'
  },
  {
    icon: InstagramIcon,
    ref: 'instagramBtn',
    href: 'https://www.instagram.com/ilostcode/'
  }
]

const emailButton = {
  ref: 'emailBtn',
  href: 'mailto:lostcode.js@gmail.com?subject=Proposta%20de%20Colaboração',
  icon: EmailIcon,
  target: '_blank'
}
</script>

<style scoped>
.social-media__button {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.social-media__button:hover {
  transform: scale(1.2) !important;
  box-shadow:
    0 0 10px rgba(255, 0, 255, 0.8),
    0 0 20px rgba(255, 0, 255, 0.6),
    0 0 30px rgba(255, 0, 255, 0.4);
}
</style>
