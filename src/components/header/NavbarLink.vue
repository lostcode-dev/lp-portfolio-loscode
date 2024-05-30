<template>
    <li>
        <a class="inline-block w-full h-full font-semibold navbar__link" :href="link.href">
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
</style>