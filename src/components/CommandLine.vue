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
        <div class="border-b border-b-white p-2 flex items-center select-none audiowide text-white">
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
  transition:
    max-height 1.5s,
    box-shadow 0.5s ease-in-out;
}

.command-container--minimize {
  max-height: 41px;
}

.command-container--maximize {
  max-height: 600px;
}

.command-container:hover {
  box-shadow:
    0 0 10px 2px rgba(255, 103, 0, 0.7),
    0 0 20px 4px rgba(255, 103, 0, 0.5);
}

@keyframes neon-pulse {
  0%,
  100% {
    box-shadow:
      0 0 10px 2px rgba(255, 103, 0, 0.7),
      0 0 20px 4px rgba(255, 103, 0, 0.5);
  }
  50% {
    box-shadow:
      0 0 15px 3px rgba(255, 103, 0, 0.8),
      0 0 30px 6px rgba(255, 103, 0, 0.6);
  }
}

.command-container:hover {
  animation: neon-pulse 1.5s infinite alternate;
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
