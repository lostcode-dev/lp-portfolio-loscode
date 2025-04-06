<template>
  <li>
    <a
      class="relative audiowide"
      :class="[link.class]"
      :href="link.href"
      @click="$emit('clickLink')"
    >
      {{ $t(link.label).toUpperCase() }}
    </a>
  </li>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'

const props = defineProps(['link'])

onMounted(() => {
  gsap.fromTo(
    '.navbar__link',
    { opacity: '0' },
    {
      opacity: '1',
      duration: 0.5
    }
  )
})
</script>

<style scoped>
.navbar__link {
  transition:
    text-shadow 0.3s ease,
    transform 0.3s ease;
}

.navbar__link:hover {
  transform: scale(1.2) !important;
  text-shadow: 0 0 4px rgba(255, 0, 255, 0.6);
}

a {
  text-decoration: none;
}

.menu__link::before {
  content: '';
  width: 0;
  height: 2px;
  border-radius: 2px;
  background-color: #fff;
  position: absolute;
  bottom: -0.25rem;
  left: 0;
  transition: width 0.4s;
}

.menu__link:hover::before {
  width: 100%;
}
</style>
