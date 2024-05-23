<script setup lang="ts">
const props = defineProps({
  mouseX: {
    type: Number,
    default: 0
  },
  mouseY: {
    type: Number,
    default: 0
  }
})
</script>

<template>
  <div class="background">
    <div id="hey"><div id="layer-up"></div></div>

    <div id="layer-0">
      <div id="layer-1">
        <div id="layer-2">
          <div id="lines">
            <div id="layer-corner"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="stars">
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
    </div>

    <div id="background"></div>
  </div>
</template>


<style lang="scss" scoped>
body {
  z-index: -5;
  font-family: 'Monoton', monospace;
}

.background {
  position: absolute;
  overflow: hidden;
  height: 100vh;
  width: 100%;
}

#background {
  background: radial-gradient(
      ellipse at center,
      rgba(127, 0, 173, 0.6) 0%,
      rgba(0, 0, 0, 0.8) 60%,
      rgba(0, 0, 0, 1) 90%
    ),
    url(img/stars.jpg);

  background-size: cover;
  position: fixed;
  z-index: -5;
  color: white;

  height: 100vh;
  width: 100vw;
  animation: pulse 120s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.4);
  }
  100% {
    transform: scale(1);
  }
}

#overlay {
  position: absolute;
  right: 0;
  left: 0;
  margin: auto;
  width: 100%;
  text-align: center;
}

#layer-0 {
  background: rgba(92, 71, 255, 0);
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 25%,
    rgba(255, 71, 255, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#5c47ff', endColorstr='#ff47ff', GradientType=0 );
  height: 400px;
  width: 200vw;
  opacity: 1;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 -50%;
  overflow: hidden;
  transform: perspective(200px) rotateX(60deg);
}

#layer-1 {
  background: rgba(92, 71, 255, 1);
  background: linear-gradient(
    45deg,
    rgba(92, 71, 255, 1) 0%,
    rgba(92, 71, 255, 0) 50%,
    rgba(92, 71, 255, 0) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#5c47ff', endColorstr='#5c47ff', GradientType=1 );
  height: inherit;
  width: inherit;
  opacity: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: -3;
}

#layer-2 {
  background: rgba(92, 71, 255, 0);
  background: linear-gradient(
    135deg,
    rgba(92, 71, 255, 0) 0%,
    rgba(92, 71, 255, 0) 50%,
    rgba(92, 71, 255, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#5c47ff', endColorstr='#5c47ff', GradientType=1 );
  height: inherit;
  width: inherit;
  opacity: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: -2;
}

#layer-corner {
  background: rgba(71, 255, 203, 1);
  background: linear-gradient(
    to bottom,
    rgba(71, 255, 203, 1) 0%,
    rgba(96, 130, 223, 0) 54%,
    rgba(117, 24, 240, 0) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#47ffcb', endColorstr='#7518f0', GradientType=0 );
  height: inherit;
  width: inherit;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: -5;
  animation: layercorneranim 1.5s ease-in-out infinite alternate;
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
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#47ffcb', endColorstr='#47ffcb', GradientType=0 );
  height: 300px;
  width: inherit;
  opacity: 1;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  overflow: hidden;
  z-index: -1;
  animation: layerupanim 1.5s ease-in-out infinite alternate;
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
  height: 400px;
  width: 100%;
  opacity: 1;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  animation: moveBackground 120s linear infinite;
}

@keyframes moveBackground {
  0% {
    background-position: 0 0, 0 0;
  }
  100% {
    background-position: 1200px 1200px, 0px 0px;
  }
}

#mtn {
  background-color: purple;
  height: 300px;
  width: 1200px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: -1;
  transform: perspective(600px);
}

@keyframes layerupanim {
  from {
    height: 140px;
  }
  to {
    height: 155px;
  }
}

@keyframes layercorneranim {
  from {
    height: 400px;
  }
  to {
    height: 540px;
  }
}

@mixin sp-layout {
  @media screen and (max-width: 750px) {
    @content;
  }
}

@function random_range($min, $max) {
  $rand: random();
  $random_range: $min + floor($rand * (($max - $min) + 1));
  @return $random_range;
}

.stars {
  position: absolute;
  top: -40vh;
  left: 0;
  width: 100%;
  height: 120%;
  transform: rotate(-45deg);
  z-index: -4;
  opacity: 0.5;
}

.star {
  $star-count: 50;
  --star-color: hsl(196, 78%, 61%);
  --star-tail-length: 6em;
  --star-tail-height: 2px;
  --star-width: calc(var(--star-tail-length) / 6);
  --fall-duration: 9s;
  --tail-fade-duration: var(--fall-duration);

  position: absolute;
  top: var(--top-offset);
  left: 0;
  width: var(--star-tail-length);
  height: var(--star-tail-height);
  color: var(--star-color);
  background: linear-gradient(45deg, currentColor, transparent);
  border-radius: 50%;
  filter: drop-shadow(0 0 6px currentColor);
  transform: translate3d(104em, 0, 0);
  animation: fall var(--fall-duration) var(--fall-delay) linear infinite,
    tail-fade var(--tail-fade-duration) var(--fall-delay) ease-out infinite;

  @include sp-layout {
    animation: fall var(--fall-duration) var(--fall-delay) linear infinite;
  }

  @for $i from 1 through $star-count {
    &:nth-child(#{$i}) {
      --star-tail-length: #{calc(random_range(500em, 750em) / 100)};
      --top-offset: #{calc(random_range(0vh, 10000vh) / 100)};
      --fall-duration: #{calc(random_range(6000, 12000s) / 1000)};
      --fall-delay: #{calc(random_range(0, 10000s) / 1000)};
    }
  }

  &::before,
  &::after {
    position: absolute;
    content: '';
    top: 0;
    left: calc(var(--star-width) / -2);
    width: var(--star-width);
    height: 100%;
    background: linear-gradient(45deg, transparent, currentColor, transparent);
    border-radius: inherit;
    animation: blink 2s linear infinite;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
}

@keyframes fall {
  to {
    transform: translate3d(-30em, 0, 0);
  }
}

@keyframes tail-fade {
  0%,
  50% {
    width: var(--star-tail-length);
    opacity: 1;
  }

  70%,
  80% {
    width: 0;
    opacity: 0.4;
  }

  100% {
    width: 0;
    opacity: 0;
  }
}

@keyframes blink {
  50% {
    opacity: 0.6;
  }
}
</style>