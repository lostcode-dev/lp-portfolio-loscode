<template>
  <li id="menuBtn"
    class="h-10 w-10 bg-white social-media__button relative flex items-center justify-center cursor-pointer rounded-full ">
    <HamburgerIcon v-model="isOpen" color="black" />
  </li>
  <MenuSidebar v-model="isOpen" />
</template>

<script setup>
import { ref } from 'vue';
import HamburgerIcon from '../icons/HamburgerIcon.vue';
import MenuSidebar from './MenuSidebar.vue';

const isOpen = ref(false)
</script>

