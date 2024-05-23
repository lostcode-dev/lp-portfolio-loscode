<script setup lang="ts">
import { gsap } from 'gsap'
import { onMounted, ref } from 'vue'

onMounted(() => {
  gsap.to('#cursor', { opacity: 0, repeat: -1, yoyo: true, duration: 0.25, ease: 'power2.inOut' })
  gsap.fromTo(
    '.container-text-left',
    { top: '-20px' },
    { top: '0px', duration: 1.5, repeat: -1, yoyo: true }
  )
  gsap.fromTo(
    '.container-text-right',
    { top: '-15px' },
    { top: '0px', duration: 2, repeat: -1, yoyo: true }
  )
})
</script>

<template>
  <div class="w-full bg-black/80 py-4 relative">
    <div id="layer-1">
      <div id="layer-2">
        <div id="lines">
          <div id="layer-corner"></div>
        </div>
      </div>
    </div>

    <section id="who_am_i_section" class="text-white relative z-20">
      <div class="flex gap-5 my-16">
        <div
          class="bg-black p-4 border border-white rounded-md silkscreen-regular container-text-right relative w-2/5"
        >
          Olá, sou Daniel Soares, engenheiro de software entusiasta em UX. Especialista em
          Aplicativos e Games com mais de 5 anos de experiência em mídias interativas. Possuo
          experiência com equipes multinacionais, além de certificação compatível e 4 prêmios de
          reconhecimento nacional junto à Funbites Games Studio. Trabalho com desenvolvimento iOS há
          8 anos e tenho mais de 20 aplicativos publicados na App Store. Atualmente atuo na X-team e
          compartilho conteúdo no canal LostCode.<span
            id="cursor"
            class="silkscreen-regular text-white"
            >_</span
          >
        </div>

        <div class="w-1/5 flex items-center">
          <div class="rounded-full bg-white w-full picture mx-auto overflow-hidden">
            <img class="rounded-full w-full" src="/img/perfil.jpeg" alt="" />
          </div>
        </div>
        <div
          class="bg-black p-4 border border-white rounded-md silkscreen-regular container-text-left relative w-2/5 h-52"
        >
          <p class="title">CITAÇÃO</p>
          <p class="content">
            "Existem duas maneiras de construir um projeto de software. Uma é fazê-lo tão simples
            que obviamente não há falhas. A outra é fazê-lo tão complicado que não existem falhas
            óbvias."
          </p>
          <p class="author">C.A.R. HOAR</p>
        </div>
      </div>
    </section>
  </div>
</template>


<style scoped>
.picture {
  animation: neon1 1.5s ease-in-out infinite alternate;
}

@keyframes neon1 {
  from {
    box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff11a7, 0 0 70px #ff11a7,
      0 0 80px #ff11a7, 0 0 100px #ff11a7, 0 0 150px #ff1177;
  }
  to {
    box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff11a7, 0 0 35px #ff11a7,
      0 0 40px #ff11a7, 0 0 50px #ff11a7, 0 0 75px #ff11a7;
  }
}

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