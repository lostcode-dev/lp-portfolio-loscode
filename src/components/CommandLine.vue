<script setup lang="ts">
import CloseIcon from './icons/CloseIcon.vue'
import MinimizeIcon from './icons/MinimizeIcon.vue'
import ResizeIcon from './icons/ResizeIcon.vue'

const props = defineProps(['title'])
</script>

<template>
  <div
    class="bg-black border select-none border-white rounded-md silkscreen-regular relative transition-all hover:shadow-xl cursor-pointer"
  >
    <div class="border-b border-b-white p-2 flex items-center select-none">
      <p>{{ title }}</p>
      <div class="flex gap-2 text-base-300 ml-auto" style="touch-action: none">
        <MinimizeIcon />
        <ResizeIcon />
        <CloseIcon />
      </div>
    </div>
    <div class="p-2 px-3 marker:text-white-400 list-decimal select-none">
      <slot> </slot>
    </div>
  </div>
</template>
