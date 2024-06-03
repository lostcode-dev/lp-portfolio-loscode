<script setup>
import { onMounted } from 'vue'
import { Gradient } from '../../utils/Grandient'

onMounted(() => {
  const gradient = new Gradient()
  gradient.initGradient('#gradient-canvas')

})
</script>

<template>
    <canvas id="gradient-canvas" data-transition-in />
</template>

<style scoped>
#gradient-canvas {
    position: absolute;
    width: 100%;
    height: 100%;
    --gradient-color-1: #B191E8;
    --gradient-color-2: #60DCD3;
    --gradient-color-3: #96AAE1;
    --gradient-color-4: #7BC3DA;
}
</style>