<template>
    <div id="brandIcon">
        <BrandIcon :class="[size]" />
    </div>
</template>

<script setup>
import BrandIcon from '../icons/BrandIcon.vue'

const props = defineProps(['size'])

</script>

<style scoped>
#brandIcon {
    transition: transform 0.75s ease;
}

#brandIcon:hover {
    transform: scale(1.2) !important;
}
</style>