<script setup lang="ts">
import AboutBackground from '@/components/background/AboutBackground.vue'
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

// Define a type for the article structure
interface Article {
  id: string
  title: string
  pubDate: string
  link: string
  thumbnail: string | null
  description: string
}

const { t } = useI18n()
const articles = ref<Article[]>([])

const fetchArticles = async () => {
  try {
    const response = await fetch(
      'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ilostcode'
    )
    const data = await response.json()
    articles.value = data.items.slice(0, 6).map((article: any) => ({
      id: article.guid,
      title: article.title,
      pubDate: article.pubDate,
      link: article.link,
      thumbnail: extractFirstImageSrc(article.content),
      description: generateExcerpt(article.content) // Use the excerpt generator
    }))
  } catch (error) {
    console.error('Failed to fetch articles:', error)
  }
}

const extractFirstImageSrc = (html: string): string | null => {
  const imgTagMatch = html.match(/<img[^>]+src="([^">]+)"/i)
  return imgTagMatch ? imgTagMatch[1] : null
}

const formatDateToLocale = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString(navigator.language, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const generateExcerpt = (html: string, maxLength: number = 150): string => {
  const textContent = html.replace(/<[^>]*>/g, '') // Remove HTML tags
  return textContent.length > maxLength ? textContent.slice(0, maxLength) + '...' : textContent
}

onMounted(() => {
  fetchArticles()
})
</script>

<template>
  <div class="relative">
    <section id="article_section" class="relative z-20">
      <div class="bg-gradient-to-r bg-black py-24 sm:py-16 rounded-lg shadow-lg my-20">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto lg:mx-0 text-center">
            <h2
              class="text-4xl audiowide font-extrabold tracking-widest text-white sm:text-5xl uppercase neon-text"
            >
              {{ t('articles.title') }}
            </h2>
          </div>
          <div
            class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            <a v-for="article in articles" :key="article.id" :href="article.link" target="_blank">
              <article
                class="overflow-hidden rounded-lg shadow-lg transition hover:shadow-2xl hover:shadow-pink-500/80 border border-pink-500 bg-gradient-to-b from-gray-900 to-gray-800 cursor-pointer"
              >
                <img
                  :alt="article.title"
                  :src="article.thumbnail || 'https://via.placeholder.com/300'"
                  class="h-56 w-full object-cover border-b border-pink-500"
                />
                <div class="bg-gray-900 py-4 px-6 sm:px-8 h-full text-pink-200">
                  <time
                    :datetime="new Date(article.pubDate).toISOString()"
                    class="block text-xs text-pink-400"
                  >
                    {{ t('articles.published_on') }}
                    {{ formatDateToLocale(article.pubDate) }}
                  </time>
                  <h3
                    class="mt-0.5 text-lg font-bold text-pink-300 hover:text-pink-400 line-clamp-1"
                    title="{{ article.title }}"
                  >
                    {{ article.title }}
                  </h3>
                  <p class="mt-2 line-clamp-3 text-sm text-pink-400">
                    {{ article.description }}
                  </p>
                </div>
              </article>
            </a>
          </div>
          <a
            href="https://medium.com/@ilostcode"
            target="_blank"
            class="text-pink-300 hover:text-pink-400 mt-6 block text-center font-bold underline audiowide text-lg"
          >
            {{ t('articles.read_more') }}
          </a>
        </div>
      </div>
    </section>

    <AboutBackground
      :show-layer-corner="false"
      animation-line="35s"
      secondary-color="rgb(255, 20, 147)"
      primary-color="rgb(128, 0, 128)"
    />
  </div>
</template>
