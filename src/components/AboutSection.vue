<script setup lang="ts">
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { onMounted, ref } from 'vue'
import CommandLine from './CommandLine.vue'
import AboutBackground from './AboutBackground.vue'

gsap.registerPlugin(Draggable)
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.to('#cursor', { opacity: 0, repeat: -1, yoyo: true, duration: 0.25, ease: 'power2.inOut' })

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
  <div id="who_am_i_container" class="bg-black/80 py-4 relative h-screen panel w-screen">
    <AboutBackground />

    <section
      id="who_am_i_section"
      class="text-white relative z-20 h-full flex items-center w-screen"
    >
      <div class="flex gap-5 my-16">
        <CommandLine id="about-me" title="about-me" class="w-2/5 container-text">
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
          <CommandLine id="where-i-work" title="where-i-work" class="container-text">
            <li class="touch-none">Atualmente baseado no Porto, Portugal 🇵🇹</li>
            <li class="touch-none">
              Disponível para colaborações remotas na Europa 🇪🇺 e mundialmente 🌎
            </li>
          </CommandLine>

          <CommandLine id="hobbies" title="hobbies" class="h-40 container-text">
            <li class="touch-none">📖 Leitura</li>
            <li class="touch-none">🥾 Explorar</li>
            <li class="touch-none">🎮 Jogos</li>
            <li class="touch-none">🏋🏻‍♂️ Exercício</li>
          </CommandLine>

          <CommandLine id="citation" title="citation" class="container-text">
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

#about-me {
  transform: translate3d(-130px, -3px, 0px);
}

#where-i-work {
  transform: translate3d(-265px, -56px, 0px);
}

#citation {
  transform: translate3d(-105px, 86px, 0px);
}

.perfil {
  transform: translate3d(-65px, 2px, 0px);
}
</style>