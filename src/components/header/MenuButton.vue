<template>
  <li id="menuBtn"
    class="h-10 w-10 bg-white social-media__button relative items-center justify-center cursor-pointer rounded-full flex lg:hidden">
    <HamburgerIcon v-model="isOpen" color="black" />
    <MenuSidebar v-model="isOpen" />
  </li>
</template>

<script setup>
import { ref } from 'vue';
import HamburgerIcon from '../icons/HamburgerIcon.vue';
import MenuSidebar from './MenuSidebar.vue';

const isOpen = ref(false)
</script>

