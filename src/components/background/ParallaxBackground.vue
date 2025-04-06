<script setup>
import StarsItemBg from './StarsItemBg.vue'
import UniverseItemBg from './UniverseItemBg.vue'
import LinesItemBg from './LinesItemBg.vue'
</script>

<template>
  <div id="container-bg">
    <div id="hey">
      <div id="layer-up"></div>
    </div>

    <LinesItemBg />

    <StarsItemBg />
    <UniverseItemBg />
  </div>
</template>

<style lang="scss" scoped>
#container-bg {
  position: absolute;
  overflow: hidden;
  height: 100vh;
  width: 100%;
}

#hey {
  width: 100%;
  background-color: #011;
  position: absolute;
  bottom: 253px;
  right: 0;
  left: 0;
  margin: auto;
  z-index: -4;
  transform: perspective(200px);
}

#layer-up {
  background: rgba(71, 255, 203, 0);
  background: linear-gradient(
    to bottom,
    rgba(71, 255, 203, 0) 0%,
    rgba(71, 255, 203, 0) 50%,
    rgba(71, 255, 203, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#47ffcb', endColorstr='#47ffcb', GradientType=0);
  height: 300px;
  width: inherit;
  opacity: 0.8;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  overflow: hidden;
  z-index: -1;
  animation: layerupanim 1.5s ease-in-out infinite alternate;
}

@keyframes layerupanim {
  from {
    height: 140px;
  }

  to {
    height: 155px;
  }
}
</style>
