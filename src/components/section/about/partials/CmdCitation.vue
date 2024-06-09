<script setup lang="ts">
import CommandLine from '@/components/CommandLine.vue'
</script>

<template>
  <CommandLine id="citation" title="citation" class="container-text" start-minimize is-animated>
    <p class="touch-none reddit-mono-bold">
      {{ $t('about.citation') }}
    </p>
    <p class="touch-none reddit-mono-bold">👨🏻‍💻 C.A.R. HOAR</p>
  </CommandLine>
</template>