
<script setup lang="ts">
import CommandLine from './CommandLine.vue'
</script>

<template>
    <CommandLine id="where-i-work" title="where-i-work" class="container-text">
        <li class="touch-none reddit-mono-bold">{{ $t('about.location') }}</li>
        <li class="touch-none reddit-mono-bold">
            {{ $t('about.availability') }}
        </li>
    </CommandLine>
</template>
