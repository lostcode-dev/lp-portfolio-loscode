<template>
  <ul class="flex gap-10 justify-between items-center text-white text-xl">
    <NavbarLink v-for="link in navbarLinksLeft" :key="`${link.href}${$i18n.locale}`" :link="link" />
  
    <HeaderLogo />
  
    <NavbarLink v-for="link in navbarLinksRight" :key="`${link.href}${$i18n.locale}`" :link="link" />
  </ul>
</template>

<script setup>
import NavbarLink from './NavbarLink.vue'
import HeaderLogo from './HeaderLogo.vue'

const navbarLinksLeft = [
  {
    label: 'home',
    href: '#home_section'
  },
  {
    label: 'who_am_i',
    href: '#about_section'
  },
  {
    label: 'what_do_i_do',
    href: '#what_do_i_do_section'
  }
]

const navbarLinksRight = [
  {
    label: 'portfolio',
    href: '#home_section'
  },
  {
    label: 'articles',
    href: '#article_section'
  },
  {
    label: 'contact_us',
    href: '#talk_with_us_section'
  }
]
</script>