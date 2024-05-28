<template>
    <li id="brandIcon">
        <BrandIcon class="h-20" />
    </li>
</template>

<script setup>
import BrandIcon from '../icons/BrandIcon.vue'

</script>

<style scoped>
#brandIcon {
    transition: transform 0.75s ease;
}

#brandIcon:hover {
    transform: scale(1.2) !important;
}
</style>