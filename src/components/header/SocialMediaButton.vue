<template>
    <li :id="link.ref" class="h-10 w-10 p-2 rounded-full bg-white social-media__button">
        <a class="inline-block w-full h-full" :href="link.href" target="_blank">
            <component :is="link.icon" />
        </a>
    </li>
</template>

<script setup>
import { onMounted } from 'vue'

const props = defineProps(['link'])
</script>

<style scoped>
.social-media__button {
    transition: transform 0.3s ease;
}

.social-media__button:hover {
    transform: scale(1.2) !important;
}
</style>