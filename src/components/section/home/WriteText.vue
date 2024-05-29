<template>
    <template v-for="(letter, letterIndex) in text.split('')">
        <br v-if="letter === '_'" class="letter hidden" :class="[classAnimation]" :key="letterIndex" />
        <template v-else>
            <span v-for="l in letter.toUpperCase()" class="reddit-mono-extrabold letter hidden" :class="[classAnimation]"
                :key="l">{{ l }}</span>
        </template>
    </template>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const props = defineProps(['value', 'classAnimation'])

const text = computed(() => t(props.value))
</script>
