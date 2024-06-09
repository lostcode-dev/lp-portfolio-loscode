
<script setup lang="ts">
import CommandLine from '@/components/CommandLine.vue'
</script>

<template>
    <CommandLine id="where-i-work" title="where-i-work" class="container-text" is-animated>
        <li class="touch-none reddit-mono-bold">{{ $t('about.location') }}</li>
        <li class="touch-none reddit-mono-bold">
            {{ $t('about.availability') }}
        </li>
    </CommandLine>
</template>
