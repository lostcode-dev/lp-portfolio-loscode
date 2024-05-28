<template>
    <ul class="flex gap-10 justify-between items-center text-white text-xl">
        <NavbarLink v-for="link in navbarLinksLeft" :key="link.href" :link="link" />
    
        <HeaderLogo />
    
        <NavbarLink v-for="link in navbarLinksRight" :key="link.href" :link="link" />
    </ul>
</template>

<script setup>
import NavbarLink from './NavbarLink.vue'
import HeaderLogo from './HeaderLogo.vue'

const navbarLinksLeft = [
  {
    label: 'HOME',
    href: '#home_section'
  },
  {
    label: 'QUEM SOU',
    href: '#about_section'
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