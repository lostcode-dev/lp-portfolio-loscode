<template>
  <li id="languageBtn" @mouseenter="isOpen = true" @mouseleave="isOpen = false" :class="{
                                                                    'rounded-t-full': isOpen,
                                                                    'rounded-full': !isOpen
                                                                }"
    class="h-10 w-10 p-2 bg-white social-media__button relative flex items-center flex-col cursor-pointer ">
    <div>
      {{ getFlag($i18n.locale) }}
    </div>
  
    <transition>
      <div v-show="isOpen" class="absolute top-8 flex bg-white items-center flex-col h-14 overflow-hidden">
        <template v-for="locale in availableLocales" :key="`locale-${locale}`">
          <div v-if="$i18n.locale !== locale" @click="$i18n.locale = locale; setLanguagePreference(locale)"
            class="language-select hover:bg-zinc-100  w-10  flex justify-center">
            {{ getFlag(locale) }}
          </div>
        </template>
      </div>
    </transition>
  </li>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
const { availableLocales, locale } = useI18n();

const isOpen = ref(false)

const flagMap = {
  'pt-BR': '🇧🇷',
  en: '🇺🇸',
  es: '🇪🇸',
};

const getFlag = (locale) => flagMap[locale] || '';

function setLanguagePreference(language) {
  if (typeof (Storage) !== "undefined") {
    localStorage.setItem("selected_language", language);
  }
  isOpen.value = false
}

function getLanguagePreference() {
  if (typeof (Storage) !== "undefined") {
    return localStorage.getItem("selected_language");
  }

  return null;
}

onMounted(() => {
  let languagePreference = getLanguagePreference()
  if (languagePreference) locale.value = languagePreference
})
</script>

<style scoped>
.social-media__button {
  transition: transform 0.3s ease, border-radius 1.5s ease;

}

.social-media__button:hover {
  transform: scale(1.2) !important;
}


.language-select {
  appearance: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
}

.v-enter-active,
.v-leave-active {
  transition: height 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  height: 0px;
}
</style>