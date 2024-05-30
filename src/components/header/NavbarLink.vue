<template>
  <li>
    <a class="font-semibold relative" :class="[link.class]" :href="link.href">
      {{ $t(link.label).toUpperCase() }}
    </a>
  </li>
</template>

<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap'

const props = defineProps(['link'])

onMounted(() => {
  gsap.fromTo(
    '.navbar__link',
    { opacity: '0' },
    {
      opacity: '1',
      duration: 0.5,
    }
  )
})
</script>


<style scoped>
.navbar__link {
  transition: transform 0.3s ease;
}

.navbar__link:hover {
  transform: scale(1.2) !important;
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
  bottom: -.25rem;
  left: 0;
  transition: width .4s;
}

.menu__link:hover::before {
  width: 100%;
}
</style>