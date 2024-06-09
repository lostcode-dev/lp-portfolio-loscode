<template>
  <ul class="flex gap-4 xl:gap-10 justify-center lg:justify-between items-center text-white text-xl">
    <NavbarLink v-for="link in navbarLinksLeft" :key="`${link.href}${$i18n.locale}`" :link="link"
      class="hidden lg:flex" />
  
    <TheHeaderLogo class="flex mt-4 sm:mt-0" size="h-16 sm:h-20 lg:h-16 xl:h-20" />
  
    <NavbarLink v-for="link in navbarLinksRight" :key="`${link.href}${$i18n.locale}`" :link="link"
      class="hidden lg:flex" />
  </ul>
</template>

<script setup>
import NavbarLinkItem from './NavbarLinkItem.vue'
import TheHeaderLogo from './TheHeaderLogo.vue'

import { navbarLinksLeft, navbarLinksRight } from './navbarLinks'

</script>