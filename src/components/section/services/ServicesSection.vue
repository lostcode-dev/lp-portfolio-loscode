<script setup lang="ts">
import AboutBackground from '@/components/background/AboutBackground.vue'
import CommandLine from '@/components/CommandLine.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollingBanner from '@/components/ScrollingBanner.vue'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
const titleRef = ref(null)
const servicesRef = ref<(HTMLElement | null)[]>([])
let ctx: gsap.Context | null = null

const services = [
  {
    header: '🖥️ web-development',
    title: 'Web Development',
    description: 'services.web_development',
    startMinimize: false,
    techs: ['Vue.js', 'React', 'Node.js', 'Php', 'AWS']
  },
  {
    header: '📱 creative-development',
    description: 'services.creative_development',
    startMinimize: false,
    techs: ['Three.js', 'WebGL', 'GSAP', 'Canvas', 'SVG', 'Motion Design']
  },
  {
    header: '📱 mobile-development',
    description: 'services.mobile_development',
    startMinimize: false,
    techs: ['React Native', 'Flutter', 'PWA']
  },
  {
    header: '🤖 automation-integrations',
    description: 'services.bots_automation',
    startMinimize: false,
    techs: [
      'Telegram Bot',
      'Discord.js',
      'ChatGPT API',
      'Node.js',
      'Python',
      'Scraping',
      'Webhooks'
    ]
  },
  {
    header: '🚀 product-optimization',
    description: 'services.product_optimization',
    startMinimize: false,
    techs: [
      'System Audit',
      'Scalability',
      'Performance Tuning',
      'UX/UI Improvements',
      'Architecture Review'
    ]
  }
]

const bannerText = 'Serviços ✦ Services ✦ Servicios ✦ Services ✦ Dienstleistungen ✦ '

onMounted(() => {
  if (sectionRef.value) {
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

      const terminalText = document.querySelector('.terminal-command')
      if (terminalText) {
        gsap.from(terminalText, {
          opacity: 0,
          scrollTrigger: {
            trigger: terminalText,
            start: 'top bottom-=50',
            end: 'bottom center',
            once: true
          }
        })
      }

      if (servicesRef.value && servicesRef.value.length) {
        const masterServicesTl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.value,
            start: 'top 70%',
            end: 'bottom bottom',
            toggleActions: 'play none none none',
            once: true,
            id: 'services-master'
          }
        })

        servicesRef.value.forEach((service, index) => {
          if (!service) return

          const serviceTl = gsap.timeline({ id: `service-${index}-timeline` })

          const direction = index % 2 === 0 ? -50 : 50
          const delay = index * 0.4

          serviceTl.fromTo(
            service,
            {
              y: 80,
              x: direction,
              opacity: 0,
              scale: 0.9,
              rotationX: index % 2 === 0 ? 5 : -5
            },
            {
              y: 0,
              x: 0,
              opacity: 1,
              scale: 1,
              rotationX: 0,
              duration: 1.2,
              ease: 'power3.out'
            }
          )

          const techTags = service.querySelectorAll('.tech-tag')
          if (techTags.length) {
            serviceTl.fromTo(
              techTags,
              { opacity: 0, y: 10 },
              {
                opacity: 1,
                y: 0,
                duration: 0.7,
                stagger: 0.1,
                ease: 'power2.out'
              },
              '-=0.5'
            )
          }

          masterServicesTl.add(serviceTl, delay)
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
  }
})

onUnmounted(() => {
  if (ctx) {
    ctx.revert()
  }
})
</script>

<template>
  <div
    ref="sectionRef"
    class="relative overflow-hidden cyber-background flex justify-center items-center"
  >
    <ScrollingBanner :text="bannerText" class="top-0" />
    <ScrollingBanner :text="bannerText" direction="left-right" class="bottom-0" />

    <section
      id="what_do_i_do_section"
      class="relative py-12 sm:py-16 lg:py-24 z-20 w-full px-4 sm:px-8 lg:px-16"
    >
      <div class="container mx-auto max-w-7xl">
        <div class="bento-grid">
          <div
            v-for="(service, index) in services"
            :key="'service-' + index"
            :ref="
              (el) => {
                if (el) servicesRef[index] = el as HTMLElement
              }
            "
            :class="[
              'service-card',
              `bento-item-${index + 1}`,
              index === 0 || index === 2 ? 'bento-featured' : ''
            ]"
          >
            <CommandLine
              :title="service.header"
              :start-minimize="service.startMinimize"
              class="service-commandline z-10"
            >
              <div class="service-content">
                <div class="service-description" v-html="$t(service.description)"></div>

                <div class="tech-tags">
                  <span
                    v-for="(tech, techIndex) in service.techs"
                    :key="techIndex"
                    class="tech-tag"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </CommandLine>
          </div>
        </div>
      </div>
    </section>

    <AboutBackground
      :show-layer-corner="false"
      animation-line="25s"
      secondary-color="rgb(255, 71, 255)"
      primary-color="rgb(255, 122, 0)"
    />
  </div>
</template>

<style scoped>
.cyber-background {
  background: linear-gradient(to bottom, rgba(128, 0, 128, 0.1) 0%, rgba(0, 0, 0, 1) 15%);
  color: white;
  position: relative;
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

@media (min-width: 640px) {
  .cyber-heading {
    font-size: 2.25rem;
    letter-spacing: 3px;
    margin-bottom: 1rem;
  }
}

@media (min-width: 1024px) {
  .cyber-heading {
    font-size: 2.5rem;
  }
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

.bento-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.5rem;
  width: 100%;
}

@media (min-width: 768px) {
  .bento-grid {
    grid-template-areas:
      'item1 item1 item1 item1 item2 item2 item2 item2 item3 item3 item3 item3'
      'item4 item4 item4 item5 item5 item5 item5 item5 item5 item5 item5 item5';
  }
}

@media (min-width: 1024px) {
  .bento-grid {
    gap: 2rem;
    grid-template-areas:
      'item1 item1 item1 item1 item2 item2 item2 item2 item3 item3 item3 item3'
      'item4 item4 item4 item4 item4 item4 item5 item5 item5 item5 item5 item5';
  }
}

.bento-item-1 {
  grid-area: item1;
}
.bento-item-2 {
  grid-area: item2;
}
.bento-item-3 {
  grid-area: item3;
}
.bento-item-4 {
  grid-area: item4;
}
.bento-item-5 {
  grid-area: item5;
}

.service-card {
  transform-origin: center;
  perspective: 1000px;
  will-change: transform, opacity;
  transition: all 0.3s ease;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 122, 0, 0.2);
  display: flex;
  flex-direction: column;
  height: 100%;
}

.service-card:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 122, 0, 0.5);
  box-shadow: 0 0 20px rgba(255, 71, 255, 0.2);
}

.service-commandline {
  flex-grow: 1;
  background-color: transparent !important;
  height: 100%;
  display: flex;
  flex-direction: column;
}

:deep(.command-container) {
  height: 100%;
  position: relative;
}

:deep(.command-container .list-decimal) {
  height: calc(100% - 41px);
  position: relative;
}

.service-description {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.service-content {
  padding: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 1rem;
  margin-top: auto;
}

.tech-tag {
  font-size: 0.7rem;
  padding: 2px 8px;
  border: 1px solid rgba(255, 122, 0, 0.5);
  background-color: rgba(0, 0, 0, 0.4);
  color: #ff7a00;
  border-radius: 10px;
  display: inline-block;
  font-family: 'Courier New', monospace;
  letter-spacing: 0.5px;
  box-shadow: 0 0 5px rgba(128, 0, 128, 0.3);
  transition: all 0.2s ease;
}

.tech-tag:hover {
  background-color: rgba(255, 122, 0, 0.2);
  transform: translateY(-2px);
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
</style>
