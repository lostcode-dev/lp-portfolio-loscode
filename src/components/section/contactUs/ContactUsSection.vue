<script setup lang="ts">
import CommandLine from '@/components/CommandLine.vue'
import MeshGradient from '@/components/background/MeshGradientBg.vue'
import SkillCardButton from '@/components/section/letsWork/partials/SkillCardButton.vue'
</script>

<template>
  <div
    class="bg-gradient-to-r from-purple-900 via-black to-blue-900 py-4 relative overflow-hidden flex items-center justify-center flex-col panel h-screen w-screen"
  >
    <MeshGradient />
    <section id="talk_with_us_section" class="text-pink-300 w-full">
      <CommandLine id="write-me" title="write-me" class="mx-auto w-5/6 shadow-neon-pink">
        <div class="p-2">
          <form name="contact-form" action="" method="post" class="flex flex-col gap-4">
            <input type="hidden" name="form-name" value="contact-form" />
            <input type="hidden" name="subject" value="New contact from website" />
            <div class="relative text-sm font-medium">
              <div class="absolute left-0 top-0 font-black text-cyan-400 opacity-80">01</div>
              <div class="flex flex-col pl-8">
                <label class="label p-0 pb-1" for="name">
                  <span class="lowercase text-cyan-400"
                    >full-name
                    <span class="text-pink-500 font-semibold">*</span>
                  </span>
                </label>
                <input
                  id="name"
                  type="text"
                  class="input rounded border border-cyan-400 bg-black/80 font-headings font-normal focus:border-pink-500 focus:outline-none sm:h-12 sm:px-2 sm:text-lg text-white"
                  name="name"
                />
              </div>
            </div>

            <div class="relative text-sm font-medium">
              <div class="absolute left-0 top-0 font-black opacity-80 text-cyan-400">02</div>
              <div class="flex flex-col pl-8">
                <label class="label p-0 pb-1" for="email"
                  ><span class="lowercase text-cyan-400"
                    >email<span class="text-pink-500 font-semibold"> *</span></span
                  ></label
                ><input
                  id="email"
                  type="email"
                  class="input rounded border border-cyan-400 bg-black/80 font-headings font-normal text-white focus:border-pink-500 focus:outline-none sm:h-12 sm:px-2 sm:text-lg"
                  name="email"
                />
              </div>
            </div>

            <div class="relative text-sm font-medium">
              <div class="absolute left-0 top-0 font-black text-cyan-400 opacity-80">03</div>
              <div class="flex flex-col pl-8">
                <label class="label p-0 pb-1" for="message"
                  ><span class="lowercase text-cyan-400"
                    >your-message<span class="text-pink-500 font-semibold"> *</span></span
                  ></label
                ><textarea
                  id="message"
                  class="textarea rounded border border-cyan-400 bg-black/80 py-3 font-headings text-base font-normal text-white focus:border-pink-500 focus:outline-none sm:p-2 sm:text-lg"
                  rows="4"
                  name="message"
                ></textarea>
              </div>
            </div>

            <label class="hidden">More details: <input name="more-details" /></label>
            <div class="flex flex-col pl-8">
              <label class="flex items-center justify-center gap-2 py-0">
                <input
                  type="checkbox"
                  name="acceptance"
                  class="checkbox rounded border-base-300 bg-base-100 checked:checkbox-primary focus:border-primary focus:outline-none"
                  value="true"
                />
                <span class="mt-1 block w-full text-white">
                  <p>I agree with the terms of the Privacy Policy</p>
                </span>
              </label>
            </div>

            <div class="ml-7">
              <SkillCardButton
                icon="message"
                class="bg-gradient-to-r from-pink-500 to-purple-500 text-white"
              >
                <span class="overflow-hidden"> Submit message </span>
              </SkillCardButton>
            </div>
          </form>
        </div>
      </CommandLine>
    </section>
  </div>
</template>
