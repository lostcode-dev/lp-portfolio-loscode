<template>
    <ul class="flex gap-2">
        <SocialMediaButton v-for="link in socialMediaButtons" :key="link.ref" :link="link" />
    </ul>
    <ul class="absolute top-0 right-0 flex gap-2">
        <SocialMediaButton :link="emailButton" />
    </ul>
</template>

<script setup>
import GithubIcon from '../icons/GithubIcon.vue'
import MediumIcon from '../icons/MediumIcon.vue'
import InstagramIcon from '../icons/InstagramIcon.vue'
import EmailIcon from '../icons/EmailIcon.vue'

import SocialMediaButton from './SocialMediaButton.vue'

const socialMediaButtons = [
  {
    icon: GithubIcon,
    ref: 'githubBtn',
    href: 'https://github.com/lostcode-dev'
  },
  {
    icon: MediumIcon,
    ref: 'mediumBtn',
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