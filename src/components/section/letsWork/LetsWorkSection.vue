<script setup lang="ts">
import CommandLine from '@/components/CommandLine.vue'
import ImageProfile from '@/components/ImageProfile.vue';
import SkillCardButton from './partials/SkillCardButton.vue'
</script>

<template>
  <div class="bg-black/80 py-4 relative overflow-hidden flex items-center flex-col panel w-screen">
    <section id="lets_work" class="text-white z-20 min-h-72 w-full">
      <CommandLine id="collaboration" title="collaboration" class="mx-auto w-5/6">
        <div class="flex">
          <ImageProfile class="p-6 max-w-56" />
          <div class="p-4">
            <p class="text-5xl">Let’s work together on your next project.</p>
            <a href="#talk_with_us_section">
              <SkillCardButton class="mt-6" icon="arrow-left">
                Entrar em contato
              </SkillCardButton>
            </a>
          </div>
        </div>
      </CommandLine>
    </section>
  </div>
</template>
