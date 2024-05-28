<template>
    <li>
        <a class="inline-block w-full h-full font-semibold navbar__link" :href="link.href">
            {{ link.label }}
        </a>
    </li>
</template>

<script setup>
const props = defineProps(['link'])

</script>


<style scoped>
.navbar__link {
    transition: transform 0.3s ease;
}

.navbar__link:hover {
    transform: scale(1.2) !important;
}
</style>