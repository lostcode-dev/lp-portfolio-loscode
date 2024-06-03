<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'

function getRandomNumber(min = 10, max = 20) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
</script>

<template>
  <div class="bg-black/80 py-4 relative overflow-hidden h-screen flex items-center flex-col panel w-screen">
    <div class="silkscreen-bold text-5xl bg-black px-2 py-1 text-white z-20 mt-10 shadow-2xl">
      SERVIÇOS
    </div>
    <div class="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
      <h2 class="mb-1 text-3xl font-extrabold leading-tight text-gray-900">Services</h2>
      <p class="mb-12 text-lg text-gray-500">Here is a few of the awesome Services we provide.</p>
      <div class="w-full">
        <div class="flex flex-col w-full mb-10 sm:flex-row">
          <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div class="relative h-full ml-0 mr-0 sm:mr-10">
              <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
              <div class="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                <div class="flex items-center -mt-1">
                  <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">DAPP Development</h3>
                </div>
                <p class="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">------------</p>
                <p class="mb-2 text-gray-600">A decentralized application (dapp) is an application built on a
                  decentralized network that combines a smart contract and a frontend user interface.</p>
              </div>
            </div>
          </div>
          <div class="w-full sm:w-1/2">
            <div class="relative h-full ml-0 md:mr-10">
              <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
              <div class="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                <div class="flex items-center -mt-1">
                  <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Web 3.0 Development</h3>
                </div>
                <p class="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">------------</p>
                <p class="mb-2 text-gray-600">Web 3.0 is the third generation of Internet services that will
                  focus on understanding and analyzing data to provide a semantic web.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col w-full mb-5 sm:flex-row">
          <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div class="relative h-full ml-0 mr-0 sm:mr-10">
              <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
              <div class="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                <div class="flex items-center -mt-1">
                  <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Project Audit</h3>
                </div>
                <p class="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">------------</p>
                <p class="mb-2 text-gray-600">A Project Audit is a formal review of a project, which is intended
                  to assess the extent up to which project management standards are being upheld.</p>
              </div>
            </div>
          </div>
          <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div class="relative h-full ml-0 mr-0 sm:mr-10">
              <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
              <div class="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                <div class="flex items-center -mt-1">
                  <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Hacking / RE</h3>
                </div>
                <p class="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">------------</p>
                <p class="mb-2 text-gray-600">A security hacker is someone who explores methods for breaching
                  defenses and exploiting weaknesses in a computer system or network.</p>
              </div>
            </div>
          </div>
          <div class="w-full sm:w-1/2">
            <div class="relative h-full ml-0 md:mr-10">
              <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
              <div class="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                <div class="flex items-center -mt-1">
                  <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Bot/Script Development</h3>
                </div>
                <p class="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">------------</p>
                <p class="mb-2 text-gray-600">Bot development frameworks were created as advanced software tools
                  that eliminate a large amount of manual work and accelerate the development process.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <section class="text-white z-20 min-h-72 w-full">
      <div class="flex gap-5 my-16">
        <!--
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
                      -->
      </div>
    </section>
  </div>
</template>
