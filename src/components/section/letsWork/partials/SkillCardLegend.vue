<template>
  <div
    class="legend absolute -top-4 -right-8 bg-black px-2 py-1 font-semibold z-10 rounded-md text-sm sm:text-base"
  >
    <slot />
  </div>
</template>

<style scoped>
.skill-card .legend {
  opacity: 0;
  transition: opacity 0.5s;
}

.skill-card:hover .legend {
  opacity: 1;
}
</style>
