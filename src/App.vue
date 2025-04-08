<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useHead } from '@unhead/vue'
import { useSeoMeta } from '@unhead/vue'
import { Analytics } from '@vercel/analytics/vue'

const { t } = useI18n()

const supportedLanguages = ['en', 'es', 'pt', 'pt-BR']
const browserLang = navigator.language || (navigator as any)?.userLanguage
const defaultLang = 'en'
const lang = supportedLanguages.includes(browserLang) ? browserLang : defaultLang

useHead({
  title: t('seo.home.title'),
  htmlAttrs: {
    lang
  }
})

useSeoMeta({
  description: t('seo.home.description'),
  keywords: t('seo.home.keywords'),
  author: 'lostCode',
  viewport: 'width=device-width, initial-scale=1.0',
  ogTitle: t('seo.home.title'),
  ogDescription: t('seo.home.description'),
  ogType: 'website',
  ogUrl: 'https://www.lostcode.com/',
  ogImage: 'https://www.lostcode.com/assets/og-image.jpg',
  twitterCard: 'summary_large_image',
  twitterTitle: t('seo.home.title'),
  twitterDescription: t('seo.home.description'),
  twitterImage: 'https://www.lostcode.com/assets/twitter-image.jpg',
  charset: 'UTF-8'
})
</script>

<template>
  <Analytics />
  <RouterView />
</template>
