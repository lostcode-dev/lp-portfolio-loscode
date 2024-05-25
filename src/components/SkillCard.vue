<script setup lang="ts">
const props = defineProps(['skill', 'size', 'color', 'src'])
</script>

<template>
  <div
    :id="skill.toLowerCase()"
    class="skill-card aspect-square rounded-lg shadow-2xl flex items-center justify-center touch-none absolute"
    :class="[
      {
        'h-20': size === 'sm',
        'h-28': size === 'md',
        'h-36': size === 'lg'
      },
      color
    ]"
  >
    <div class="legend absolute -top-4 -right-8 bg-black px-2 py-1 font-semibold z-10 rounded-md">
      {{ skill }}
    </div>
    <img class="w-4/6 touch-none" :src="src" :alt="skill" />
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
