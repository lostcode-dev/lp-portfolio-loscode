<script setup lang="ts">
import AboutBackground from '@/components/background/AboutBackground.vue'
import { ref, onMounted } from 'vue'

const projects = [
  {
    id: 1,
    title: 'Project Neon',
    description: 'A futuristic web application with cutting-edge design and functionality.',
    link: '#',
    image: 'https://via.placeholder.com/300'
  },
  {
    id: 2,
    title: 'Synthwave Dashboard',
    description: 'A dashboard inspired by the 80s synthwave aesthetic.',
    link: '#',
    image: 'https://via.placeholder.com/300'
  },
  {
    id: 3,
    title: 'Retro Portfolio',
    description: 'A portfolio showcasing retro-inspired designs and animations.',
    link: '#',
    image: 'https://via.placeholder.com/300'
  }
]

const neonColors = ['#ff007f', '#00e5ff', '#ffea00', '#ff00ff', '#00ff00']
const borderColors = ref<string[]>([])

const generateRandomBorders = () => {
  borderColors.value = projects.map(() => {
    const randomIndex = Math.floor(Math.random() * neonColors.length)
    return neonColors[randomIndex]
  })
}

onMounted(() => {
  generateRandomBorders()
})
</script>

<template>
  <div class="relative">
    <section id="projects_section" class="relative z-20 px-4 sm:px-8 lg:px-16">
      <div class="bg-gradient-to-r bg-black py-16 sm:py-12 rounded-lg shadow-lg my-10 sm:my-16">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto lg:mx-0 text-center">
            <h2
              class="text-3xl audiowide font-extrabold tracking-widest text-white sm:text-5xl uppercase neon-text"
            >
              Projects
            </h2>
          </div>
          <div
            class="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:mt-12 sm:gap-x-8 sm:gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            <a
              v-for="(project, index) in projects"
              :key="project.id"
              :href="project.link"
              target="_blank"
              class="overflow-hidden rounded-lg shadow-lg transition hover:shadow-2xl hover:shadow-pink-500/80 bg-gradient-to-b from-gray-900 to-gray-800 cursor-pointer"
              :style="{ border: `1px solid ${borderColors[index]}` }"
            >
              <article>
                <img
                  :alt="project.title"
                  :src="project.image"
                  class="h-48 sm:h-56 w-full object-cover border-b border-pink-500"
                />
                <div class="bg-gray-900 py-4 px-4 sm:px-6 h-full text-pink-200">
                  <h3
                    class="mt-0.5 text-base sm:text-lg font-bold text-pink-300 hover:text-pink-400 line-clamp-1"
                    title="{{ project.title }}"
                  >
                    {{ project.title }}
                  </h3>
                  <p class="mt-2 line-clamp-3 text-sm sm:text-base text-pink-400">
                    {{ project.description }}
                  </p>
                </div>
              </article>
            </a>
          </div>
        </div>
      </div>
    </section>

    <AboutBackground
      :show-layer-corner="false"
      animation-line="35s"
      secondary-color="rgb(0, 255, 255)"
      primary-color="rgb(255, 71, 255)"
    />
  </div>
</template>
