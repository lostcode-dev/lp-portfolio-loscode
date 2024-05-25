
<template>
  <div id="layer-1">
    <div id="layer-2">
      <div id="lines">
        <div id="layer-corner"></div>
      </div>
    </div>
  </div>
</template>


<style scoped>
#layer-1 {
  background: linear-gradient(
    to bottom,
    rgb(0, 0, 0) 0%,
    rgb(255, 71, 255) 2%,
    rgb(255, 71, 255) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#5c47ff', endColorstr='#ff47ff', GradientType=0 );
  height: 100%;
  width: inherit;
  opacity: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 10;
}

#layer-2 {
  background: rgb(255, 71, 255);
  background: linear-gradient(to bottom, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 2%, rgb(255, 71, 255) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#5c47ff', endColorstr='#5c47ff', GradientType=1 );
  height: 100%;
  width: inherit;
  opacity: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: -5;
}

#layer-corner {
  background: #60dcd3;
  height: 5px;
  width: inherit;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: -5;
}

#lines {
  background-size: 40px 40px;
  background-image: repeating-linear-gradient(
      0deg,
      #60dcd3,
      #60dcd3 2px,
      transparent 1px,
      transparent 40px
    ),
    repeating-linear-gradient(-90deg, #60dcd3, #60dcd3 2px, transparent 2px, transparent 40px);
  height: 100%;
  width: 100%;
  opacity: 1;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -4;
  animation: moveBackground 15s linear infinite;
}

@keyframes moveBackground {
  0% {
    background-position: 0 0, 0 0;
  }
  100% {
    background-position: 400px 400px, 0px 0px;
  }
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