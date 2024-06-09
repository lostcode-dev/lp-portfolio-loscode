<script setup lang="ts">
import WriteAnimation from './partials/WriteAnimation.vue'

</script>

<template>
  <section class="mx-auto md:ml-10 lg:ml-16 xl:mx-auto flex items-center sm:block">
    <span
      class="text-container animated-text text-5xl sm:text-6xl md:text-7xl xl:text-8xl text-white -mt-[10vh] sm:-mt-0 min-h-72 sm:min-h-auto">
      <WriteAnimation :key="$i18n.locale" />
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
</style>