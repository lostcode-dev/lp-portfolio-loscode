<script setup lang="ts">
import CommandLine from '@/components/CommandLine.vue'
import ImageProfile from '@/components/ImageProfile.vue'
import SkillCardButton from './partials/SkillCardButton.vue'
import StarsBackground from '@/components/background/StarsBackground.vue'
</script>

<template>
  <div
    ref="letsWorkSection"
    class="relative z-[60]"
    style="box-shadow: 0 -15px 10px rgba(0, 0, 0, 0.5)"
  >
    <div
      class="bg-black/60 py-20 relative overflow-hidden flex items-center flex-col panel w-screen"
      style="box-shadow: rgba(0, 0, 0, 0.5) 0px 15px 10px"
    >
      <section id="lets_work" class="text-white z-20 w-full">
        <CommandLine id="collaboration" title="collaboration" class="mx-auto w-5/6">
          <div class="flex">
            <ImageProfile class="p-6 max-w-56" />
            <div class="p-4">
              <p class="text-5xl">{{ $t('lets_work_together') }}</p>
              <a href="#talk_with_us_section">
                <SkillCardButton class="mt-6" icon="arrow-left">
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
