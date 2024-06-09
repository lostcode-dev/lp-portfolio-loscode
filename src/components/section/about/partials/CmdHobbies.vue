<script setup lang="ts">
import CommandLine from '@/components/CommandLine.vue'
</script>

<template>
    <CommandLine id="hobbies" title="hobbies" class="h-40 container-text" is-animated>
        <li class="touch-none reddit-mono-bold">{{ $t('about.hobbies.reading') }}</li>
        <li class="touch-none reddit-mono-bold">{{ $t('about.hobbies.exploring') }}</li>
        <li class="touch-none reddit-mono-bold">{{ $t('about.hobbies.gaming') }}</li>
        <li class="touch-none reddit-mono-bold">{{ $t('about.hobbies.exercising') }}</li>
    </CommandLine>
</template>