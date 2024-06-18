<script setup>
import { onMounted, ref } from 'vue'
import CloseIcon from './icons/CloseIcon.vue'
import MinimizeIcon from './icons/MinimizeIcon.vue'
import ResizeIcon from './icons/ResizeIcon.vue'
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  startMinimize: {
    type: Boolean,
    default: false
  },
  startMinimizeMobile: {
    type: Boolean,
    default: false
  },
  isAnimated: {
    type: Boolean,
    default: false
  }
})

onMounted(() => {
  if (width.value <= 640) {
    isMinimize.value = props.startMinimizeMobile
  }
})

const isOpen = ref(true)
const isMinimize = ref(props.startMinimize)
</script>

<template>
  <div>
    <Transition name="opacity">
      <div
        class="bg-black border select-none border-white rounded-md relative transition-all hover:shadow-xl cursor-pointer overflow-hidden command-container"
        v-if="isOpen"
        :class="{
          'command-container--animated': isAnimated,
          'command-container--minimize': isMinimize,
          'command-container--maximize': !isMinimize
        }"
      >
        <div
          class="border-b border-b-white p-2 flex items-center select-none silkscreen-regular text-white"
        >
          <p>{{ title }}</p>
          <div class="flex gap-2 text-base-300 ml-auto" style="touch-action: none">
            <MinimizeIcon @click="isMinimize = true" />
            <ResizeIcon @click="isMinimize = false" />
            <CloseIcon class="opacity-50" />
          </div>
        </div>
        <div class="p-2 px-3 marker:text-white-400 list-decimal select-none reddit-mono-semibold">
          <slot> </slot>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.command-container {
  transition: max-height 1.5s;
}

.command-container--minimize {
  max-height: 41px;
}

.command-container--maximize {
  max-height: 600px;
}

.opacity-enter-active,
.opacityleave-active {
  transition: opacity 0.5s ease;
}

.opacity-enter-from,
.opacity-leave-to {
  opacity: 0;
}
</style>
