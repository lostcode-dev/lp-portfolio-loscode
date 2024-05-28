<script setup lang="ts">
import { onMounted } from 'vue'
import AboutBackground from '../background/AboutBackground.vue'
import SkillCard from '../SkillCard.vue'
import { gsap } from 'gsap'

function getRandomNumber(min = 10, max = 20) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

onMounted(() => {
  gsap.fromTo(
    '#javascript',
    { left: '2vw', top: '18vh' },
    {
      left: `${getRandomNumber(70, 85)}vw`,
      duration: getRandomNumber(),
      repeat: -1,
      yoyo: true
    }
  )

  gsap.fromTo(
    '#php',
    { right: '7.5vw', top: '16vh' },
    {
      right: `${getRandomNumber(70, 85)}vw`,
      duration: getRandomNumber(),
      repeat: -1,
      yoyo: true
    }
  )

  gsap.fromTo(
    '#vue',
    { left: '5vw', top: '24vh' },
    {
      left: `${getRandomNumber(70, 85)}vw`,
      duration: getRandomNumber(),
      repeat: -1,
      yoyo: true
    }
  )

  gsap.fromTo(
    '#html',
    { right: '10vw', top: '36vh' },
    {
      right: '70vw',
      duration: getRandomNumber(),
      repeat: -1,
      yoyo: true
    }
  )

  gsap.fromTo(
    '#css',
    { left: '2vw', top: '43vh' },
    {
      left: '80vw',
      duration: getRandomNumber(),
      repeat: -1,
      yoyo: true
    }
  )

  gsap.fromTo(
    '#react',
    { right: '2vw', top: '70vh' },
    {
      right: '70vw',
      duration: getRandomNumber(),
      repeat: -1,
      yoyo: true
    }
  )

  gsap.fromTo(
    '#wordpress',
    { right: '50vw', top: '20vh' },
    {
      right: '80vw',
      duration: getRandomNumber(),
      repeat: -1,
      yoyo: true
    }
  )

  gsap.fromTo(
    '#unity',
    { left: '40vw', top: '22vh' },
    {
      left: `${getRandomNumber(70, 85)}vw`,
      duration: getRandomNumber(),
      repeat: -1,
      yoyo: true
    }
  )

  gsap.fromTo(
    '#sass',
    { right: '25vw', top: '30vh' },
    {
      right: `${getRandomNumber(70, 85)}vw`,
      duration: getRandomNumber(),
      repeat: -1,
      yoyo: true
    }
  )

  gsap.fromTo(
    '#aws',
    { left: '25vw', top: '40vh' },
    {
      left: `${getRandomNumber(70, 85)}vw`,
      duration: getRandomNumber(),
      repeat: -1,
      yoyo: true
    }
  )

  gsap.fromTo(
    '#laravel',
    { left: '15vw', top: '80vh' },
    {
      left: `${getRandomNumber(70, 85)}vw`,
      duration: getRandomNumber(),
      repeat: -1,
      yoyo: true
    }
  )

  gsap.fromTo(
    '#typescript',
    { right: '5vw', top: '60vh' },
    {
      right: '80vw',
      duration: getRandomNumber(),
      repeat: -1,
      yoyo: true
    }
  )

  gsap.fromTo(
    '#graphql',
    { left: '40vw', top: '70vh' },
    {
      left: '95vw',
      duration: getRandomNumber(),
      repeat: -1,
      yoyo: true
    }
  )

  gsap.fromTo(
    '#cypress',
    { left: '30vw', top: '80vh' },
    {
      left: `${getRandomNumber(70, 85)}vw`,
      duration: getRandomNumber(),
      repeat: -1,
      yoyo: true
    }
  )

  gsap.fromTo(
    '#docker',
    { right: '5vw', top: '85vh' },
    {
      right: '80vw',
      duration: getRandomNumber(),
      repeat: -1,
      yoyo: true
    }
  )

  gsap.fromTo(
    '#tailwind',
    { left: '50vw', top: '50vh' },
    {
      left: `${getRandomNumber(70, 85)}vw`,
      duration: getRandomNumber(),
      repeat: -1,
      yoyo: true
    }
  )
})
</script>

<template>
  <div
    class="bg-black/80 py-4 relative overflow-hidden h-screen flex items-center flex-col panel w-screen"
  >
    <AboutBackground />
    <div class="silkscreen-bold text-5xl bg-black px-2 py-1 text-white z-20 mt-10 shadow-2xl">
      MINHAS SKILLS
    </div>

    <section class="text-white z-20 min-h-72 w-full">
      <div class="flex gap-5 my-16">
        <SkillCard
          skill="Javascript"
          size="md"
          src="/img/javascript.png"
          :color="['bg-gradient-to-r from-yellow-500 to-orange-500']"
        />
        <SkillCard
          skill="PHP"
          size="md"
          src="/img/php.svg"
          :color="['bg-gradient-to-r from-cyan-500 to-blue-500']"
        />
        <SkillCard
          skill="Vue"
          size="lg"
          src="/img/vue.svg"
          :color="['bg-gradient-to-r from-green-500 to-teal-500']"
        />
        <SkillCard
          skill="HTML"
          size="sm"
          src="/img/html.png"
          :color="['bg-gradient-to-r from-indigo-500 to-purple-500']"
        />
        <SkillCard
          skill="CSS"
          size="sm"
          src="/img/css.png"
          :color="['bg-gradient-to-r from-fuchsia-500 to-rose-500']"
        />
        <SkillCard
          skill="React"
          size="md"
          src="/img/react.svg"
          :color="['bg-gradient-to-r from-violet-500 to-fuchsia-500']"
        />
        <SkillCard
          skill="Wordpress"
          size="sm"
          src="/img/wordpress.png"
          :color="['bg-gradient-to-r from-teal-500 to-sky-500']"
        />
        <SkillCard
          skill="Unity"
          size="sm"
          src="/img/unity.svg"
          :color="['bg-gradient-to-r from-gray-800 to-neutral-700']"
        />
        <SkillCard
          skill="SASS"
          size="md"
          src="/img/sass.svg"
          :color="['bg-gradient-to-r from-red-500 to-orange-500']"
        />
        <SkillCard
          skill="AWS"
          size="md"
          src="/img/aws.svg"
          :color="['bg-gradient-to-r from-orange-500 to-amber-500']"
        />
        <SkillCard
          skill="Laravel"
          size="lg"
          src="/img/laravel.svg"
          :color="['bg-gradient-to-r from-red-500 to-red-700']"
        />
        <SkillCard
          skill="Typescript"
          size="md"
          src="/img/typescript.svg"
          :color="['bg-gradient-to-r from-blue-500 to-blue-700']"
        />
        <SkillCard
          skill="GraphQl"
          size="sm"
          src="/img/graphql.svg"
          :color="['bg-gradient-to-r from-amber-500 to-amber-700']"
        />
        <SkillCard
          skill="Cypress"
          size="sm"
          src="/img/cypress.svg"
          :color="['bg-gradient-to-r from-violet-500 to-violet-700']"
        />
        <SkillCard
          skill="Docker"
          size="md"
          src="/img/docker.svg"
          :color="['bg-gradient-to-r from-sky-500 to-sky-700']"
        />
        <SkillCard
          skill="Tailwind"
          size="md"
          src="/img/tailwind.svg"
          :color="['bg-gradient-to-r from-cyan-500 to-cyan-700']"
        />
      </div>
    </section>
  </div>
</template>
