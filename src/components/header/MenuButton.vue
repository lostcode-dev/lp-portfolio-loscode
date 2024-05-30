<template>
  <li id="menuBtn"
    class="h-10 w-10 bg-white social-media__button relative flex items-center justify-center cursor-pointer rounded-full ">
    <HamburgerIcon v-model="isOpen" class="text-black" />
  </li>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import HamburgerIcon from '../icons/HamburgerIcon.vue';

const isOpen = ref(false)
</script>

