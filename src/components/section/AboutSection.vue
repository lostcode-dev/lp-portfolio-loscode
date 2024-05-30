<script setup lang="ts">
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { onMounted } from 'vue'
import CommandLine from '../CommandLine.vue'
import AboutBackground from '../background/AboutBackground.vue'

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
  
    <section id="who_am_i_section" class="text-white relative z-20 h-full flex items-center w-screen">
      <div class="flex gap-5 my-16">
        <CommandLine id="about-me" title="about-me" class="w-2/5 container-text">
          <li class="touch-none reddit-mono-bold">
            {{ $t('about.greeting') }}
            <span class="text-indigo-400 touch-none reddit-mono-bold">Software Developer</span>.
          </li>
          <li class="touch-none reddit-mono-bold">
            {{ $t('about.passion') }}
            <span class="text-teal-400 touch-none reddit-mono-bold">web design</span> {{ $t('about.and') }}
            <span class="text-emerald-400 touch-none reddit-mono-bold">web development</span>, {{ $t('about.with_focus')
            }}
            <span class="text-cyan-400 touch-none reddit-mono-bold">front-end development</span> {{
            $t('about.in_all_aspects') }} <span class="text-sky-400 touch-none reddit-mono-bold">{{ $t('about.technician')
              }}</span> {{ $t('about.and_my') }} <span class="text-indigo-400 touch-none reddit-mono-bold">{{
              $t('about.creativity') }}</span> {{ $t('about.can_be_used_in_better_form') }}
          </li>
          <li class="touch-none reddit-mono-bold">
            {{ $t('about.i_bring_my') }} <span class="text-emerald-400 touch-none reddit-mono-bold">{{
              $t('about.expertise') }} </span> {{
            $t('about.in_my_collaborations_with') }} <span class="text-teal-400 touch-none reddit-mono-bold">web
              agencies</span>,
            <span class="text-red-400 touch-none reddit-mono-bold">startups</span>, {{
            $t('about.and_others') }}
            <span class="text-purple-400 touch-none reddit-mono-bold">{{
              $t('about.freelance_professionals') }}</span> {{
            $t('about.in_the_area') }}
          </li>
          <li class="touch-none reddit-mono-bold">
            <span class="text-purple-400 touch-none reddit-mono-bold">{{ $t('about.coding') }}</span> {{
            $t('about.for_me_its') }} <span class="text-rose-400 touch-none reddit-mono-bold">{{ $t('about.experiment')
              }}</span> {{ $t('about.with_several') }} <span class="text-fuchsia-400 touch-none reddit-mono-bold">{{
              $t('about.technologies') }}</span> {{ $t('about.and_i_also_maintain') }} <span
              class="text-green-400 touch-none reddit-mono-bold">{{ $t('about.personal_projects') }}</span>.
            <span id="cursor" class="silkscreen-regular text-white">_</span>
          </li>
        </CommandLine>
  
        <div class="w-1/5 flex items-center select-none touch-none reddit-mono-bold">
          <div class="rounded-full bg-white w-full picture mx-auto overflow-hidden touch-none reddit-mono-bold perfil">
            <img class="rounded-full w-full touch-none reddit-mono-bold" src="/img/perfil.jpeg" alt="" />
          </div>
        </div>
  
        <div class="w-2/5">
          <CommandLine id="where-i-work" title="where-i-work" class="container-text">
            <li class="touch-none reddit-mono-bold">{{ $t('about.location') }}</li>
            <li class="touch-none reddit-mono-bold">
              {{ $t('about.availability') }}
            </li>
          </CommandLine>
  
          <CommandLine id="hobbies" title="hobbies" class="h-40 container-text">
            <li class="touch-none reddit-mono-bold">{{ $t('about.hobbies.reading') }}</li>
            <li class="touch-none reddit-mono-bold">{{ $t('about.hobbies.exploring') }}</li>
            <li class="touch-none reddit-mono-bold">{{ $t('about.hobbies.gaming') }}</li>
            <li class="touch-none reddit-mono-bold">{{ $t('about.hobbies.exercising') }}</li>
          </CommandLine>
  
          <CommandLine id="citation" title="citation" class="container-text">
            <p class="touch-none reddit-mono-bold">
              {{ $t('about.citation') }}
            </p>
            <p class="touch-none reddit-mono-bold">👨🏻‍💻 C.A.R. HOAR</p>
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