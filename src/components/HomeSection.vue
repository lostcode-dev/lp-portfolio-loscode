<script setup lang="ts">
import { gsap } from 'gsap'
import { onMounted, ref } from 'vue'

const githubRef = ref(null)

onMounted(() => {})
</script>

<template>
  <div>
    <section class="">
      <!--
      <div class="home-animate__intro-heading--pink-outer">
        <div
          class="home-animate__intro-heading--pink rounded-md inline-block relative bg-primary p-3"
        >
          <h3 class="text-3xl font-semibold" aria-hidden="true">
            DESENVOLVENDO SOLUÇÕES <span> PARA</span>
          </h3>
        </div>
      </div>
      <div class="home-animate__intro-heading-inner">
        <div
          class="home-animate__intro-heading--orange rounded-md inline-block relative bg-tertiary p-3"
          style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px)"
        >
          <p class="text-3xl font-semibold" aria-hidden="true"><span>O </span> AMANHÃ</p>
        </div>
      </div>
      -->
    </section>
  </div>
</template>


<style scoped>
.home-animate__intro-heading--pink:after {
  background-color: black;
  border-radius: 0.5rem;
  bottom: -1.3125rem;
  content: '';
  height: 100%;
  opacity: 0.35;
  position: absolute;
  right: -1.3125rem;
  width: 100%;
  z-index: -1;
}

.home-animate__intro-heading-inner {
  align-self: flex-end;
  display: inline-block;
  margin-top: -0.625rem;
  perspective: 800px;
  position: relative;
  z-index: -2;
  margin-left: 6.2963vh;
  margin-top: -0.185185vh;
  align-self: flex-start;
}
</style>
