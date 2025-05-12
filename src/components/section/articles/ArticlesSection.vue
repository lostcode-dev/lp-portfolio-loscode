<script setup lang="ts">
import AboutBackground from '@/components/background/AboutBackground.vue'
import { ref, onMounted, computed, onUnmounted, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollingBanner from '@/components/ScrollingBanner.vue'

gsap.registerPlugin(ScrollTrigger)

interface Article {
  id: string
  title: string
  pubDate: string
  link: string
  thumbnail: string | null
  description: string
  featured?: boolean
}

const { t } = useI18n()
const articles = ref<Article[]>([])
const sectionRef = ref(null)
const gridRef = ref(null)
const articleRefs = ref([])
let ctx = null

const isMobile = ref(window.innerWidth < 768)
const isSmallScreen = ref(window.innerWidth < 1024)

const updateResponsiveState = () => {
  isMobile.value = window.innerWidth < 768
  isSmallScreen.value = window.innerWidth < 1024
}

const layoutArticles = computed(() => {
  if (!articles.value.length) return []

  return articles.value.map((article, index) => ({
    ...article,
    featured: index === 0
  }))
})

const fetchArticles = async () => {
  try {
    const response = await fetch(
      'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ilostcode'
    )
    const data = await response.json()
    articles.value = data.items.slice(0, 5).map((article: any) => ({
      id: article.guid,
      title: article.title,
      pubDate: article.pubDate,
      link: article.link,
      thumbnail:
        extractFirstImageSrc(article.content) ||
        'https://placehold.co/600x400/252525/ff7a00?text=LostCode',
      description: generateExcerpt(article.content)
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
  const textContent = html.replace(/<[^>]*>/g, '')
  return textContent.length > maxLength ? textContent.slice(0, maxLength) + '...' : textContent
}

onMounted(() => {
  fetchArticles()
  updateResponsiveState()
  window.addEventListener('resize', updateResponsiveState)

  ctx = gsap.context(() => {
    nextTick(() => {
      if (articleRefs.value && articleRefs.value.length) {
        const masterArticlesTl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.value,
            start: 'top 70%',
            end: 'bottom bottom',
            toggleActions: 'play none none none',
            once: true,
            id: 'articles-master'
          }
        })

        articleRefs.value.forEach((article, index) => {
          if (!article) return

          const delay = 0.2 + index * 0.15

          const articleTl = gsap.timeline({ id: `article-${index}-timeline` })

          const xDirection = index % 2 === 0 ? -30 : 30

          articleTl.fromTo(
            article,
            {
              y: 50,
              x: xDirection,
              opacity: 0,
              scale: 0.95
            },
            {
              y: 0,
              x: 0,
              opacity: 1,
              scale: 1,
              duration: 1,
              ease: 'power3.out'
            }
          )

          masterArticlesTl.add(articleTl, delay)
        })
      }
    })
  }, sectionRef.value)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateResponsiveState)
  if (ctx) {
    ctx.revert()
  }
})
</script>

<template>
  <div ref="sectionRef" class="relative py-8 md:py-12 lg:py-16 overflow-hidden cyber-background">
    <ScrollingBanner text="Articles ✦ Blog ✦" class="top-0" />
    <ScrollingBanner text="Articles ✦ Blog ✦" direction="left-right" class="bottom-0" />

    <section id="article_section" class="relative z-20 px-4 sm:px-6 lg:px-8">
      <div class="cyber-container max-w-7xl mx-auto">
        <div ref="gridRef" class="bento-grid">
          <template v-if="layoutArticles.length">
            <a
              v-for="(article, index) in layoutArticles"
              :key="article.id"
              :href="article.link"
              target="_blank"
              :ref="
                (el) => {
                  if (el) articleRefs[index] = el
                }
              "
              :class="[
                'cyber-card',
                `bento-item-${index + 1}`,
                article.featured ? 'cyber-card-featured' : ''
              ]"
            >
              <div class="card-content">
                <div class="scanlines"></div>

                <div class="image-container">
                  <img
                    :src="article.thumbnail"
                    :alt="article.title"
                    class="article-image"
                    loading="lazy"
                  />
                  <div class="image-overlay"></div>
                </div>

                <div class="article-info">
                  <div class="cyber-badge" :class="{ 'featured-badge': article.featured }">
                    {{ article.featured ? 'FEATURED' : `LOG-${index + 1}` }}
                  </div>

                  <time :datetime="new Date(article.pubDate).toISOString()" class="article-date">
                    {{ formatDateToLocale(article.pubDate) }}
                  </time>

                  <h3 class="article-title">{{ article.title }}</h3>
                  <p class="article-desc">{{ article.description }}</p>

                  <div class="read-more">
                    <span class="button-text">READ ARTICLE</span>
                    <span class="button-icon">›</span>
                  </div>
                </div>
              </div>

              <div class="corner top-left"></div>
              <div class="corner top-right"></div>
              <div class="corner bottom-left"></div>
              <div class="corner bottom-right"></div>
            </a>

            <div class="cyber-deco-cell hidden md:flex bento-item-deco">
              <div class="pulse-circle"></div>
              <div class="deco-lines">
                <div class="deco-line"></div>
                <div class="deco-line"></div>
              </div>
            </div>
          </template>

          <template v-else>
            <div class="loading-container">
              <div class="cyber-loading">
                <div class="loading-bar"></div>
                <div class="loading-text">LOADING DATA...</div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </section>

    <AboutBackground
      :show-layer-corner="false"
      animation-line="35s"
      secondary-color="rgb(255, 112, 140)"
      primary-color="rgb(255, 78, 219)"
      class="opacity-40"
    />
  </div>
</template>

<style scoped>
.cyber-background {
  background-color: #000;
  color: white;
  position: relative;
}

.bento-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  width: 100%;
}

@media (min-width: 768px) {
  .bento-grid {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(3, 250px);
    gap: 1.5rem;
    grid-auto-flow: dense;
  }

  .bento-item-1 {
    grid-column: span 4;
    grid-row: span 2;
  }
  .bento-item-2 {
    grid-column: span 2;
  }
  .bento-item-3 {
    grid-column: span 3;
  }
  .bento-item-4 {
    grid-column: span 3;
  }
  .bento-item-5 {
    grid-column: span 2;
  }
  .bento-item-deco {
    grid-column: span 4;
  }
}

@media (min-width: 1024px) {
  .bento-grid {
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(2, 300px);
    gap: 2rem;
  }

  .bento-item-1 {
    grid-column: span 5;
    grid-row: span 2;
  }
  .bento-item-2 {
    grid-column: span 4;
  }
  .bento-item-3 {
    grid-column: span 4;
  }
  .bento-item-4 {
    grid-column: span 3;
  }
  .bento-item-5 {
    grid-column: span 3;
  }
  .bento-item-deco {
    grid-column: span 4;
  }
}

.cyber-card {
  position: relative;
  background-color: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(255, 122, 0, 0.4);
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  clip-path: polygon(
    0 10px,
    10px 0,
    calc(100% - 10px) 0,
    100% 10px,
    100% calc(100% - 10px),
    calc(100% - 10px) 100%,
    10px 100%,
    0 calc(100% - 10px)
  );
  box-shadow: 0 0 20px rgba(255, 122, 0, 0.1);
  color: white;
  text-decoration: none;
  min-height: 280px;
}

.cyber-card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 10px 30px rgba(255, 122, 0, 0.2);
  border-color: rgba(255, 122, 0, 0.8);
}

.cyber-card-featured {
  border-width: 2px;
  border-color: rgba(255, 122, 0, 0.8);
  z-index: 2;
}

.cyber-card-featured:after {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  height: 5px;
  background: linear-gradient(90deg, transparent, #ff7a00, transparent);
  opacity: 0.7;
}

.card-content {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.image-container {
  position: relative;
  height: 50%;
  overflow: hidden;
}

@media (min-width: 640px) {
  .image-container {
    height: 55%;
  }
}

.article-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s ease;
}

.cyber-card:hover .article-image {
  transform: scale(1.1);
  filter: brightness(1.1);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 70%);
  z-index: 1;
}

.article-info {
  padding: 12px;
  position: relative;
  z-index: 2;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

@media (min-width: 640px) {
  .article-info {
    padding: 16px;
  }
}

.cyber-badge {
  position: absolute;
  top: -12px;
  left: 16px;
  background-color: black;
  color: #ff7a00;
  font-size: 0.7rem;
  padding: 4px 8px;
  border: 1px solid #ff7a00;
  font-family: 'Courier New', monospace;
  letter-spacing: 1px;
  z-index: 3;
}

.featured-badge {
  color: black;
  background-color: #ff7a00;
  font-weight: bold;
}

.article-date {
  display: block;
  font-size: 0.7rem;
  color: #ff7a00;
  margin-bottom: 4px;
  font-family: 'Courier New', monospace;
}

.article-title {
  font-size: 1rem;
  margin-bottom: 6px;
  color: #ff7a00;
  font-family: 'Audiowide', 'Courier New', monospace;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media (min-width: 640px) {
  .article-title {
    font-size: 1.1rem;
  }
}

.article-desc {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 8px;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex-grow: 1;
}

@media (min-width: 640px) {
  .article-desc {
    font-size: 0.9rem;
  }

  .row-span-2 .article-desc {
    -webkit-line-clamp: 4;
  }
}

.read-more {
  font-size: 0.8rem;
  color: #ff7a00;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  margin-top: auto;
  display: flex;
  align-items: center;
  opacity: 0.9;
  transition: all 0.3s ease;
}

.button-icon {
  font-size: 1.2rem;
  margin-left: 4px;
  opacity: 0;
  transform: translateX(-5px);
  transition: all 0.3s ease;
}

.cyber-card:hover .read-more {
  opacity: 1;
}

.cyber-card:hover .button-icon {
  opacity: 1;
  transform: translateX(2px);
}

.corner {
  position: absolute;
  width: 10px;
  height: 10px;
  z-index: 2;
}

.top-left {
  top: 0;
  left: 0;
  border-top: 2px solid #ff7a00;
  border-left: 2px solid #ff7a00;
}

.top-right {
  top: 0;
  right: 0;
  border-top: 2px solid #ff7a00;
  border-right: 2px solid #ff7a00;
}

.bottom-left {
  bottom: 0;
  left: 0;
  border-bottom: 2px solid #ff7a00;
  border-left: 2px solid #ff7a00;
}

.bottom-right {
  bottom: 0;
  right: 0;
  border-bottom: 2px solid #ff7a00;
  border-right: 2px solid #ff7a00;
}

.cyber-deco-cell {
  border: 1px dashed rgba(255, 122, 0, 0.3);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pulse-circle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(255, 122, 0, 0.1);
  box-shadow: 0 0 20px rgba(255, 122, 0, 0.5);
  position: absolute;
  animation: pulse 2s infinite;
}

.deco-lines {
  width: 80%;
  height: 80%;
  position: relative;
}

.deco-line {
  position: absolute;
  background: linear-gradient(90deg, transparent, rgba(255, 122, 0, 0.5), transparent);
  height: 1px;
  width: 100%;
}

.deco-line:nth-child(1) {
  top: 40%;
  animation: slideLine 3s infinite;
}

.deco-line:nth-child(2) {
  top: 60%;
  animation: slideLine 3s infinite 1s;
}

.scanlines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.05) 51%);
  background-size: 100% 4px;
  pointer-events: none;
  z-index: 3;
  opacity: 0.15;
}

.loading-container {
  grid-column: 1/-1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cyber-loading {
  padding: 20px;
  position: relative;
  border: 1px solid rgba(255, 122, 0, 0.5);
  width: 300px;
  background-color: rgba(0, 0, 0, 0.7);
}

.loading-bar {
  height: 3px;
  background: linear-gradient(90deg, transparent, #ff7a00, transparent);
  width: 100%;
  animation: loadingAnimation 2s infinite linear;
}

.loading-text {
  font-family: 'Courier New', monospace;
  color: #ff7a00;
  text-align: center;
  margin-top: 10px;
  letter-spacing: 2px;
  font-size: 0.9rem;
  animation: textPulse 1s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
  100% {
    transform: scale(0.95);
    opacity: 0.5;
  }
}

@keyframes slideLine {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes loadingAnimation {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes textPulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}
</style>
