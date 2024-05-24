<script setup lang="ts">
import { gsap } from 'gsap'
import { onMounted, ref } from 'vue'
import CommandLine from './CommandLine.vue'

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
        <CommandLine title="about-me" class="w-2/5 container-text-left">
          <li>
            Prazer em conhecê-lo! Eu sou Daniel, sou um
            <span class="text-indigo-400">Web Developer</span>.
          </li>
          <li>
            Sou apaixonado pelos dois
            <span class="text-teal-400">web design</span> e
            <span class="text-emerald-400">web development</span>, com foco especial em
            <span class="text-cyan-400">front-end development</span> em todos os seus aspectos. Isso
            é onde tanto meu <span class="text-sky-400">técnico</span> e minha
            <span class="text-indigo-400">criatividade</span> podem ser usadas da melhor forma.
          </li>
          <li>
            Eu trago minha <span class="text-emerald-400">expertise</span> nas minhas colaborações
            com <span class="text-teal-400">web agencies</span>,
            <span class="text-red-400">startups</span>, e outros
            <span class="text-purple-400">profissionais freelancers</span> na área, para agregar
            valor aos projetos em que trabalho.
          </li>
          <li>
            <span class="text-purple-400">Codificação</span> para mim não é só meu trabalho, eu
            gosto de <span class="text-rose-400">experimentar</span> com várias
            <span class="text-fuchsia-400">tecnologias</span> e eu também mantenho alguns
            <span class="text-green-400">projetos pessoais</span>.
            <span id="cursor" class="silkscreen-regular text-white">_</span>
          </li>
        </CommandLine>

        <div class="w-1/5 flex items-center">
          <div class="rounded-full bg-white w-full picture mx-auto overflow-hidden">
            <img class="rounded-full w-full" src="/img/perfil.jpeg" alt="" />
          </div>
        </div>

        <div class="w-2/5">
          <CommandLine title="where-i-work" class="h-40 container-text-left">
            <li>Atualmente baseado no Porto, Portugal 🇵🇹</li>
            <li>Disponível para colaborações remotas na Europa 🇪🇺 e mundialmente 🌎</li>
          </CommandLine>

          <CommandLine title="hobbies" class="h-40 container-text-right">
            <p style="touch-action: none">📖 Leitura</p>
            <p style="touch-action: none">🥾 Explorar</p>
            <p style="touch-action: none">🎮 Jogos</p>
            <p style="touch-action: none">🏋🏻‍♂️ Exercício</p>
          </CommandLine>
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