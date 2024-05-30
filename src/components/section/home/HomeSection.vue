<script setup lang="ts">
import TextAnimation from './TextAnimation.vue'

</script>

<template>
  <section class="mx-auto md:ml-10 lg:ml-16 xl:mx-auto">
    <span class="text-container animated-text text-5xl sm:text-6xl md:text-7xl xl:text-8xl text-white">
      <TextAnimation :key="$i18n.locale" />
    </span>
  </section>
</template>

<style scoped>
section {
  min-height: calc(100vh - 195px);
}

.animated-text span {
  display: inline-block;
}

.text-container {
  margin-bottom: 110px;
}
</style>