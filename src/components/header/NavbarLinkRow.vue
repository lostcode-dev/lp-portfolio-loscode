<template>
  <ul class="flex gap-10 justify-center lg:justify-between items-center text-white text-xl">
    <NavbarLink v-for="link in navbarLinksLeft" :key="`${link.href}${$i18n.locale}`" :link="link"
      class="hidden lg:flex" />
  
    <HeaderLogo class="hidden md:flex" size="h-20" />
  
    <NavbarLink v-for="link in navbarLinksRight" :key="`${link.href}${$i18n.locale}`" :link="link"
      class="hidden lg:flex" />
  </ul>
</template>

<script setup>
import NavbarLink from './NavbarLink.vue'
import HeaderLogo from './HeaderLogo.vue'

import { navbarLinksLeft, navbarLinksRight } from './navbarLinks'

</script>