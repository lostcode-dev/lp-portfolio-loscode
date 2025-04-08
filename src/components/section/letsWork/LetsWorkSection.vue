<script setup lang="ts">
import CommandLine from '@/components/CommandLine.vue'
import ImageProfile from '@/components/ImageProfile.vue'
import SkillCardButton from './partials/SkillCardButton.vue'

defineProps({
  title: {
    type: String
  },
  src: {
    type: String,
    default: '/img/perfil.png'
  }
})
</script>

<template>
  <div ref="letsWorkSection" class="relative z-[60] shadow-lg">
    <div class="py-20 relative overflow-hidden flex items-center flex-col panel w-screen">
      <section id="lets_work" class="text-white z-20 w-full">
        <CommandLine id="collaboration" title="collaboration" class="mx-auto sm:w-5/6">
          <div class="flex flex-col sm:flex-row items-center">
            <ImageProfile class="p-6 max-w-56" :src="src" />
            <div class="p-4 grid gap-2 text-center sm:text-left">
              <p class="text-3xl sm:text-5xl audiowide">{{ title ?? $t('lets_work_together') }}</p>
              <a href="#talk_with_us_section">
                <SkillCardButton icon="arrow-left">
                  {{ $t('get_in_touch') }}
                </SkillCardButton>
              </a>
            </div>
          </div>
        </CommandLine>
      </section>
    </div>
  </div>
</template>
