<script setup lang="ts">
import CommandLine from '@/components/section/about/CommandLine.vue'
import ImageBlock from '@/components/section/about/ImageBlock.vue';
import ActionButton from '@/components/section/letsWork/ActionButton.vue'
</script>

<template>
  <div class="bg-black/80 py-4 relative overflow-hidden flex items-center flex-col panel w-screen">
    <section id="lets_work" class="text-white z-20 min-h-72 w-full">
      <CommandLine id="collaboration" title="collaboration" class="mx-auto w-5/6">
        <div class="flex">
          <ImageBlock class="p-6 max-w-56" />
          <div class="p-4">
            <p class="text-5xl">Let’s work together on your next project.</p>
            <a href="#talk_with_us_section">
              <ActionButton class="mt-6" icon="arrow-left">
                Entrar em contato
              </ActionButton>
            </a>
          </div>
        </div>
      </CommandLine>
    </section>
  </div>
</template>
