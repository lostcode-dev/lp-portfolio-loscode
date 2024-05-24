<script setup lang="ts">
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { onMounted, ref } from 'vue'
import CommandLine from './CommandLine.vue'

gsap.registerPlugin(Draggable)

onMounted(() => {
  gsap.to('#cursor', { opacity: 0, repeat: -1, yoyo: true, duration: 0.25, ease: 'power2.inOut' })
  /*gsap.fromTo(
    '.container-text-left',
    { top: '-20px' },
    { top: '0px', duration: 1.5, repeat: -1, yoyo: true }
  )
  gsap.fromTo(
    '.container-text-right',
    { top: '-15px' },
    { top: '0px', duration: 2, repeat: -1, yoyo: true }
  )*/

  Draggable.create('.command-container', {
    bounds: '#who_am_i_container',
    inertia: true
  })

  Draggable.create('.perfil', {
    bounds: '#who_am_i_container',
    inertia: true
  })
})
</script>

<template>
  <div id="who_am_i_container" class="w-full bg-black/80 py-4 relative">
    <div id="layer-1">
      <div id="layer-2">
        <div id="lines">
          <div id="layer-corner"></div>
        </div>
      </div>
    </div>

    <section id="who_am_i_section" class="text-white relative z-20 min-h-72">
      <div class="flex gap-5 my-16">
        <CommandLine id="about-me" title="about-me" class="w-2/5 -top-20">
          <li class="touch-none">
            Prazer em conhecê-lo! Eu sou Daniel, sou um
            <span class="text-indigo-400 touch-none">Web Developer</span>.
          </li>
          <li class="touch-none">
            Sou apaixonado pelos dois
            <span class="text-teal-400 touch-none">web design</span> e
            <span class="text-emerald-400 touch-none">web development</span>, com foco especial em
            <span class="text-cyan-400 touch-none">front-end development</span> em todos os seus
            aspectos. Isso é onde tanto meu <span class="text-sky-400 touch-none">técnico</span> e
            minha <span class="text-indigo-400 touch-none">criatividade</span> podem ser usadas da
            melhor forma.
          </li>
          <li class="touch-none">
            Eu trago minha <span class="text-emerald-400 touch-none">expertise</span> nas minhas
            colaborações com <span class="text-teal-400 touch-none">web agencies</span>,
            <span class="text-red-400 touch-none">startups</span>, e outros
            <span class="text-purple-400 touch-none">profissionais freelancers</span> na área, para
            agregar valor aos projetos em que trabalho.
          </li>
          <li class="touch-none">
            <span class="text-purple-400 touch-none">Codificação</span> para mim não é só meu
            trabalho, eu gosto de <span class="text-rose-400 touch-none">experimentar</span> com
            várias <span class="text-fuchsia-400 touch-none">tecnologias</span> e eu também mantenho
            alguns <span class="text-green-400 touch-none">projetos pessoais</span>.
            <span id="cursor" class="silkscreen-regular text-white">_</span>
          </li>
        </CommandLine>

        <div class="w-1/5 flex items-center select-none touch-none">
          <div
            class="rounded-full bg-white w-full picture mx-auto overflow-hidden touch-none perfil"
          >
            <img class="rounded-full w-full touch-none" src="/img/perfil.jpeg" alt="" />
          </div>
        </div>

        <div class="w-2/5">
          <CommandLine id="where-i-work" title="where-i-work" class="container-text-left">
            <li class="touch-none">Atualmente baseado no Porto, Portugal 🇵🇹</li>
            <li class="touch-none">
              Disponível para colaborações remotas na Europa 🇪🇺 e mundialmente 🌎
            </li>
          </CommandLine>

          <CommandLine id="hobbies" title="hobbies" class="h-40 container-text-right">
            <li class="touch-none">📖 Leitura</li>
            <li class="touch-none">🥾 Explorar</li>
            <li class="touch-none">🎮 Jogos</li>
            <li class="touch-none">🏋🏻‍♂️ Exercício</li>
          </CommandLine>

          <CommandLine id="citation" title="citation" class="container-text-left">
            <p class="touch-none">
              "Existem duas maneiras de construir um projeto de software. Uma é fazê-lo tão simples
              que obviamente não há falhas. A outra é fazê-lo tão complicado que não existem falhas
              óbvias."
            </p>
            <p class="touch-none">👨🏻‍💻 C.A.R. HOAR</p>
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

#about-me {
  transform: translate3d(-131px, -3px, 0px);
}

#where-i-work {
  transform: translate3d(-267px, -56px, 0px);
}

#citation {
  transform: translate3d(-105px, 86px, 0px);
}

.perfil {
  transform: translate3d(-64px, 2px, 0px);
}
</style>