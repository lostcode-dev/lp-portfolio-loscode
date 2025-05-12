<script setup lang="ts">
import AboutBackground from '@/components/background/AboutBackground.vue'
import { ref, onMounted, computed, onUnmounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollingBanner from '@/components/ScrollingBanner.vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/splide/dist/css/splide.min.css'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
const titleRef = ref(null)
const projectsRef = ref([])
const splideRef = ref(null)
let ctx = null

const splideOptions = computed(() => ({
  type: 'loop',
  perPage: 3,
  perMove: 1,
  focus: 'center',
  fixedHeight: '400px',
  padding: { left: '0', right: '0' },
  interval: 4000,
  autoplay: true,
  autoWidth: true,
  pauseOnHover: true,
  pauseOnFocus: true,
  pagination: true,
  arrows: true,
  speed: 300, // Faster slide transition speed
  easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
  classes: {
    pagination: 'splide__pagination cyber-pagination',
    page: 'splide__pagination__page cyber-page',
    arrow: 'splide__arrow cyber-arrow'
  },
  breakpoints: {
    768: {
      perPage: 1,
      padding: { left: '10%', right: '10%' }
    }
  }
}))

const projects = [
  {
    id: 1,
    title: 'Project Neon',
    description: 'A futuristic web application with cutting-edge design and functionality.',
    link: '#',
    image: 'https://placehold.co/600x400',
    featured: true
  },
  {
    id: 2,
    title: 'Synthwave Dashboard',
    description: 'A dashboard inspired by the 80s synthwave aesthetic.',
    link: '#',
    image: 'https://placehold.co/400x300',
    featured: false
  },
  {
    id: 3,
    title: 'Retro Portfolio',
    description: 'A portfolio showcasing retro-inspired designs and animations.',
    link: '#',
    image: 'https://placehold.co/400x600',
    featured: false
  },
  {
    id: 4,
    title: 'Cyber Interface',
    description: 'A futuristic UI system with glowing elements and sharp angles.',
    link: '#',
    image: 'https://placehold.co/300x300',
    featured: false
  },
  {
    id: 5,
    title: 'Digital Grid',
    description: 'An exploration of grid systems with interactive elements.',
    link: '#',
    image: 'https://placehold.co/500x300',
    featured: false
  },
  {
    id: 6,
    title: 'AI Platform',
    description: 'An intelligent platform with machine learning capabilities and intuitive UI.',
    link: '#',
    image: 'https://placehold.co/500x500',
    featured: false
  },
  {
    id: 7,
    title: 'Gaming Portal',
    description: 'Interactive gaming portal with achievements and social features.',
    link: '#',
    image: 'https://placehold.co/600x300',
    featured: false
  }
]

const responsiveProjects = computed(() => projects)

onMounted(() => {
  ctx = gsap.context(() => {
    if (titleRef.value) {
      gsap.fromTo(
        titleRef.value,
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.value,
            start: 'top bottom-=100',
            end: 'bottom center',
            toggleActions: 'play none none none',
            once: true,
            onEnter: () => {
              const glitchLoop = () => {
                if (!titleRef.value) return

                const duration = 0.1
                const delay = Math.random() * 5 + 3

                gsap.to(titleRef.value, {
                  skewX: 20,
                  textShadow: '5px 0 #ff7a00, -5px 0 #fe848f',
                  ease: 'power2.inOut',
                  duration: duration,
                  onComplete: () => {
                    gsap.to(titleRef.value, {
                      skewX: 0,
                      textShadow: '0 0 10px rgba(255, 122, 0, 0.8)',
                      duration: duration,
                      onComplete: () => {
                        setTimeout(glitchLoop, delay * 1000)
                      }
                    })
                  }
                })
              }
              glitchLoop()
            }
          }
        }
      )
    }

    if (projectsRef.value && projectsRef.value.length) {
      const masterProjectsTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.value,
          start: 'top 70%',
          end: 'bottom bottom',
          toggleActions: 'play none none none',
          once: true,
          id: 'projects-master'
        }
      })

      projectsRef.value.forEach((project, index) => {
        if (!project) return

        const projectTl = gsap.timeline({ id: `project-${index}-timeline` })
        const direction = index % 2 === 0 ? -30 : 30
        const itemDelay = index * 0.1

        projectTl.fromTo(
          project,
          {
            y: 50,
            x: direction,
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

        masterProjectsTl.add(projectTl, itemDelay)
      })
    }

    const cursor = document.querySelector('.terminal-cursor')
    if (cursor) {
      gsap.to(cursor, {
        opacity: 0,
        duration: 0.5,
        repeat: -1,
        yoyo: true
      })
    }
  }, sectionRef.value)

  nextTick(() => {
    const arrows = document.querySelectorAll('.cyber-arrow')
    arrows.forEach((arrow) => {
      gsap.to(arrow, {
        border: '1px solid rgba(255, 122, 0, 1)',
        boxShadow: '0 0 10px rgba(255, 122, 0, 0.7)',
        duration: 0.3,
        repeat: -1,
        yoyo: true,
        repeatDelay: 3
      })
    })

    if (splideRef.value) {
      const activeSlide = document.querySelector('.splide__slide.is-active .project-card')
      if (activeSlide) {
        gsap.to(activeSlide, {
          boxShadow: '0 0 30px rgba(255, 122, 0, 0.4), 0 0 15px rgba(255, 71, 255, 0.3)',
          duration: 0.15 // Faster animation
        })
      }

      splideRef.value.splide.on('moved', () => {
        const slides = document.querySelectorAll('.splide__slide .project-card')
        slides.forEach((slide) => {
          gsap.to(slide, {
            boxShadow: 'none',
            duration: 0.1 // Much faster reset
          })
        })

        const activeSlide = document.querySelector('.splide__slide.is-active .project-card')
        if (activeSlide) {
          gsap.to(activeSlide, {
            boxShadow: '0 0 30px rgba(255, 122, 0, 0.4), 0 0 15px rgba(255, 71, 255, 0.3)',
            duration: 0.15 // Faster animation
          })
        }
      })
    }
  })
})

onUnmounted(() => {
  if (ctx) {
    ctx.revert()
  }
})
</script>

<template>
  <div ref="sectionRef" class="relative overflow-hidden cyber-background">
    <ScrollingBanner text="Projetos ✦" class="top-0" />
    <ScrollingBanner text="Projetos ✦" direction="left-right" class="bottom-0" />

    <section
      id="projects_section"
      class="relative py-12 sm:py-16 lg:py-24 z-20 w-full px-4 sm:px-8 lg:px-16"
    >
      <div class="container mx-auto max-w-7xl">
        <div class="cyber-slider-container">
          <Splide ref="splideRef" :options="splideOptions" class="cyber-splide">
            <SplideSlide
              v-for="(project, index) in responsiveProjects"
              :key="'project-' + project.id"
              class="cyber-slide"
            >
              <div
                :ref="
                  (el) => {
                    if (el) projectsRef[index] = el
                  }
                "
                :class="['project-card', project.featured ? 'bento-featured' : '']"
              >
                <div class="card-content">
                  <div class="scanlines"></div>

                  <div class="image-container">
                    <img :src="project.image" :alt="project.title" class="project-image" />
                    <div class="image-overlay"></div>
                  </div>

                  <div class="project-info">
                    <div class="cyber-badge" :class="{ 'featured-badge': project.featured }">
                      {{ project.featured ? 'FEATURED' : `PRJ_${index + 1}` }}
                    </div>
                    <h3 class="project-title">{{ project.title }}</h3>
                    <p class="project-desc">{{ project.description }}</p>
                    <a :href="project.link" class="cyber-button">
                      <span class="button-text">VIEW PROJECT</span>
                      <span class="button-icon">›</span>
                    </a>
                  </div>
                </div>

                <div class="corner top-left"></div>
                <div class="corner top-right"></div>
                <div class="corner bottom-left"></div>
                <div class="corner bottom-right"></div>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </section>

    <AboutBackground
      :show-layer-corner="false"
      animation-line="25s"
      primary-color="rgb(255, 112, 140)"
      secondary-color="rgb(255, 122, 0)"
    />
  </div>
</template>

<style scoped>
.cyber-background {
  background: linear-gradient(to bottom, rgba(128, 0, 128, 0.1) 0%, rgba(0, 0, 0, 1) 15%);
  color: white;
  position: relative;
  min-height: 100vh;
}

.cyber-heading {
  font-size: 1.75rem;
  font-family: 'Audiowide', 'Courier New', monospace;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 0.75rem;
  display: inline-block;
  position: relative;
  text-shadow:
    0 0 10px rgba(255, 122, 0, 0.5),
    0 0 20px rgba(128, 0, 128, 0.3);
}

.heading-glow {
  color: white;
}

.cyber-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 1rem auto;
}

.cyber-divider span {
  height: 1px;
  background: linear-gradient(to right, rgb(128, 0, 128), #ff7a00);
}

.cyber-divider span:first-child {
  width: 30px;
}

.cyber-divider span:last-child {
  width: 60px;
}

.text-gradient {
  background: linear-gradient(90deg, #ff7a00, #fe848f, #ff7a00);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% auto;
  animation: textGradient 8s linear infinite;
}

@keyframes textGradient {
  0% {
    background-position: 0% center;
  }
  100% {
    background-position: 200% center;
  }
}

.bento-featured {
  border-width: 2px;
  border-color: rgba(255, 122, 0, 0.8);
}

.card-content {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.image-container {
  position: relative;
  height: 60%;
  overflow: hidden;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .project-image {
  transform: scale(1.1);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 50%);
  z-index: 1;
}

.project-info {
  padding: 1.5rem;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
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

.project-title {
  font-size: 1.25rem;
  color: #ff7a00;
  font-family: 'Audiowide', 'Courier New', monospace;
  margin-bottom: 0.5rem;
}

.project-desc {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1rem;
}

.cyber-button {
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  background-color: transparent;
  border: 1px solid #ff7a00;
  color: #ff7a00;
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  align-self: flex-start;
}

.cyber-button:hover {
  background-color: rgba(255, 122, 0, 0.1);
  box-shadow: 0 0 10px rgba(255, 122, 0, 0.5);
  color: white;
}

.button-icon {
  margin-left: 8px;
  font-size: 1.2rem;
  opacity: 0;
  transition: all 0.3s ease;
}

.cyber-button:hover .button-icon {
  opacity: 1;
  transform: translateX(4px);
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

.cyber-slider-container {
  position: relative;
  padding: 10px;
  margin: 3rem 0;
  width: 100%;
  overflow: hidden;
}

.cyber-splide {
  --splide-arrow-size: 2.5rem;
  --splide-page-size: 10px;
  overflow: visible;
}

.cyber-slide {
  padding: 10px;
  transition: all 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

:deep(.splide__track) {
  overflow: visible;
  padding: 2rem 0;
}

:deep(.splide__list) {
  align-items: center;
  height: 520px;
}

:deep(.splide__slide) {
  transition: all 0.25s ease; /* Faster slide transition */
  opacity: 0.5;
  transform: scale(0.85);
  filter: brightness(0.7);
}

:deep(.splide__slide.is-active) {
  opacity: 1;
  transform: scale(1.3);
  filter: brightness(1);
  z-index: 10;
}

.project-card {
  position: relative;
  border: 1px solid rgba(255, 122, 0, 0.4);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.2s ease; /* Faster card transition */
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

:deep(.splide__arrow) {
  background: rgba(0, 0, 0, 0.7);
  opacity: 0.8;
  border: 1px solid #ff7a00;
  border-radius: 0;
  width: var(--splide-arrow-size);
  height: var(--splide-arrow-size);
}

:deep(.splide__arrow svg) {
  fill: #ff7a00;
}

:deep(.splide__pagination) {
  bottom: -2rem;
}

@media (max-width: 768px) {
  :deep(.splide__list) {
    height: 450px;
  }
}

@media (min-width: 640px) {
  .cyber-heading {
    font-size: 2.25rem;
    letter-spacing: 3px;
  }
}

@media (min-width: 1024px) {
  .cyber-heading {
    font-size: 2.5rem;
  }
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
