<script setup lang="ts">
import TextAnimation from './TextAnimation.vue'

</script>

<template>
  <section class="">
    <span class="text-container animated-text text-4xl sm:text-5xl  md:text-6xl lg:text-7xl xl:text-8xl text-white">
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