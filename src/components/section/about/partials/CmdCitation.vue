<script setup lang="ts">
import CommandLine from '@/components/CommandLine.vue'
</script>

<template>
  <CommandLine
    id="citation"
    title="citation"
    class="container-text"
    start-minimize-mobile
    is-animated
  >
    <p class="touch-none reddit-mono-bold">
      {{ $t('about.citation') }}
    </p>
    <p class="touch-none reddit-mono-bold">
      {{ $t('about.citation_author') }}
    </p>
  </CommandLine>
</template>
