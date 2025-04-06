<script setup>
import { computed, defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

defineComponent({
  name: 'WriteAnimationItem'
})

const props = defineProps({
  value: {
    type: String,
    required: true
  },
  classAnimation: {
    type: String,
    default: ''
  }
})

const { t } = useI18n()
const text = computed(() => t(props.value))
</script>

<template>
  <template v-for="(letter, letterIndex) in text.split('')">
    <template v-if="letter === '_'">
      <br class="letter hidden audiowide" :class="[classAnimation]" :key="letterIndex" />
    </template>
    <template v-else>
      <span class="audiowide letter hidden" :class="[classAnimation]" :key="letterIndex">
        {{ letter }}
      </span>
    </template>
  </template>
</template>
