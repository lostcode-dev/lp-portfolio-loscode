<script setup lang="ts">
import CommandLine from '../about/CommandLine.vue'
import MeshGradient from '../../background/MeshGradient.vue'

</script>

<template>
  <div
    class="bg-black/80 py-4 relative overflow-hidden flex items-center justify-center flex-col panel h-screen w-screen f">
    <MeshGradient />
    <section id="talk_with_us_section" class="text-white w-full">
      <CommandLine id="write-me" title="write-me" class="mx-auto w-5/6 shadow-2xl">
        <div class="p-2">
          <form name="contact-form" action="" method="post" class="flex flex-col gap-4">
            <input type="hidden" name="form-name" value="contact-form"><input type="hidden" name="subject"
              value="New contact from website">
            <div class="relative text-sm font-medium">
              <div class="absolute left-0 top-0 font-black opacity-80">01</div>
              <div class="flex flex-col pl-8">
                <label class="label p-0 pb-1" for="name">
                  <span class="label-text lowercase text-neutral">full-name
                    <span class="text-red-400 font-semibold">*</span>
                  </span>
                </label>
                <input id="name" type="text"
                  class="input rounded border border-base-300 font-headings font-normal focus:border-primary focus:outline-none sm:h-12 sm:px-6 sm:text-xl text-black"
                  name="name">
              </div>
            </div>
  
            <div class="relative text-sm font-medium">
              <div class="absolute left-0 top-0 font-black opacity-80">02</div>
              <div class="flex flex-col pl-8 "><label class="label p-0 pb-1" for="company">
                  <span class="label-text lowercase text-neutral">company</span></label>
  
                <input id="company" type="text"
                  class="input rounded border border-base-300 font-headings font-normal text-black focus:border-primary focus:outline-none sm:h-12 sm:px-6 sm:text-xl"
                  name="company">
              </div>
            </div>
  
            <div class="relative text-sm font-medium">
              <div class="absolute left-0 top-0 font-black opacity-80">03</div>
              <div class="flex flex-col pl-8 "><label class="label p-0 pb-1" for="email"><span
                    class="label-text lowercase text-neutral">email<span class="text-red-400 font-semibold">
                      *</span></span></label><input id="email" type="email"
                  class="input rounded border border-base-300 font-headings font-normal text-black focus:border-primary focus:outline-none sm:h-12 sm:px-6 sm:text-xl"
                  name="email"></div>
            </div>
  
            <div class="relative text-sm font-medium">
              <div class="absolute left-0 top-0 font-black opacity-80">04</div>
              <div class="flex flex-col pl-8 "><label class="label p-0 pb-1" for="message"><span
                    class="label-text lowercase text-neutral">your-message<span class="text-red-400 font-semibold">
                      *</span></span></label><textarea id="message"
                  class="textarea rounded border border-base-300 py-3 font-headings text-base font-normal text-black focus:border-primary focus:outline-none sm:p-6 sm:text-xl"
                  rows="6" name="message"></textarea>
              </div>
            </div>
  
            <label class="hidden">More details: <input name="more-details"></label>
            <div class="flex flex-col pl-8 "><label
                class="label cursor-pointer items-start justify-start gap-2 py-0"><input type="checkbox" name="acceptance"
                  class="checkbox rounded border-base-300 bg-base-100 checked:checkbox-primary focus:border-primary focus:outline-none"
                  value="true"><span class="label-text mt-1 block w-full text-white">
                  <p>I agree with the terms of the Privacy Policy</p>
                </span></label></div>
  
  
            <div class="flex justify-start"><button type="submit" class="btn-main btn"><span class="overflow-hidden"
                  gsap="btn-label">
                  <div style="position:relative;display:inline-block;">s</div>
                  <div style="position:relative;display:inline-block;">u</div>
                  <div style="position:relative;display:inline-block;">b</div>
                  <div style="position:relative;display:inline-block;">m</div>
                  <div style="position:relative;display:inline-block;">i</div>
                  <div style="position:relative;display:inline-block;">t</div>
                  <div style="position:relative;display:inline-block;">-</div>
                  <div style="position:relative;display:inline-block;">m</div>
                  <div style="position:relative;display:inline-block;">e</div>
                  <div style="position:relative;display:inline-block;">s</div>
                  <div style="position:relative;display:inline-block;">s</div>
                  <div style="position:relative;display:inline-block;">a</div>
                  <div style="position:relative;display:inline-block;">g</div>
                  <div style="position:relative;display:inline-block;">e</div>
                </span><span gsap="btn-icon" class="overflow-hidden"><svg xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" viewBox="0 0 24 24" class="icon" width="1.125em" height="1.125em">
                    <path
                      d="M6.8 3c-1.68 0-2.66-.05-3.62.44a4 4 0 0 0-1.74 1.74c-.3.57-.38 1.2-.41 1.94v.07C1 7.67 1 8.15 1 8.8v6.4c0 1.68-.05 2.66.44 3.62a4 4 0 0 0 1.74 1.74c.96.5 1.94.44 3.62.44h10.4c1.68 0 2.66.05 3.62-.44a4 4 0 0 0 1.74-1.74c.5-.96.44-1.94.44-3.62V8.8c0-.64 0-1.12-.03-1.6a1 1 0 0 0 0-.44 4 4 0 0 0-.4-1.58 4 4 0 0 0-1.75-1.74c-.96-.5-1.94-.44-3.62-.44Zm0 2h10.4c1.68 0 2.38.05 2.7.22q.58.3.88.87c.03.06.02.42.04.51l-7.56 5.3c-.66.46-.91.6-1.02.63a1 1 0 0 1-.48 0c-.1-.03-.36-.17-1.02-.63L3.18 6.6c.02-.09 0-.45.04-.5a2 2 0 0 1 .87-.88C4.42 5.05 5.12 5 6.8 5M3 8.92l4.54 3.18-4.46 4.03c-.02-.37-.08-.35-.08-.93Zm18 0v6.28c0 .58-.06.56-.08.93l-4.46-4.03ZM9.22 13.28l.37.26c.66.46 1.07.78 1.68.93a3 3 0 0 0 1.46 0c.6-.15 1.02-.47 1.68-.93l.37-.26 5.59 5.04c-.16.16-.26.36-.46.46-.33.17-1.03.22-2.71.22H6.8c-1.68 0-2.38-.05-2.7-.22-.2-.1-.31-.3-.47-.46Z">
                    </path>
                  </svg></span></button></div>
          </form>
        </div>
      </CommandLine>
    </section>
  </div>
</template>
