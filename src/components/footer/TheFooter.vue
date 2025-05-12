<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import BlackHoleBg from '../background/BlackHoleBg.vue'
import TheHeaderLogo from '../header/partials/TheHeaderLogo.vue'
import EmailIcon from '../icons/EmailIcon.vue'
import GithubIcon from '../icons/GithubIcon.vue'
import InstagramIcon from '../icons/InstagramIcon.vue'
import LinkedinIcon from '../icons/LinkedinIcon.vue'

const links = [
  { text: 'home', href: '#home_section' },
  { text: 'who_am_i', href: '#about_section' },
  { text: 'what_do_i_do', href: '#what_do_i_do_section' },
  { text: 'portfolio', href: '#portfolio_section' },
  { text: 'article', href: '#article_section' },
  { text: 'contact_us', href: '#talk_with_us_section' }
]

const socialLinks = [
  { name: 'Instagram', href: 'https://www.instagram.com/ilostcode/', icon: InstagramIcon },
  { name: 'Linkedin', href: 'https://ilostcode.medium.com/', icon: LinkedinIcon },
  { name: 'GitHub', href: 'https://github.com/lostcode-dev', icon: GithubIcon },
  {
    name: 'Linkedin',
    href: 'mailto:lostcode.js@gmail.com?subject=Proposta%20de%20Colaboração',
    icon: EmailIcon
  }
]

const logoRef = ref<HTMLElement | null>(null)
const textRef = ref<HTMLParagraphElement | null>(null)
const navLinksRef = ref<HTMLUListElement | null>(null)
const socialLinksRef = ref<HTMLUListElement | null>(null)
const footerRef = ref<HTMLElement | null>(null)

const animationsTriggered = ref(false)

const runAnimations = () => {
  if (animationsTriggered.value) return
  animationsTriggered.value = true

  try {
    if (socialLinksRef.value) {
      const socialItems = Array.from(socialLinksRef.value.children) as HTMLElement[]
      for (let i = 0; i < socialItems.length; i++) {
        socialItems[i].style.opacity = '1'
        socialItems[i].style.transform = 'scale(1)'
      }
    }

    if (logoRef.value) {
      gsap.to(logoRef.value, {
        filter: 'brightness(1.3)',
        boxShadow: '0 0 15px rgba(255, 122, 0, 0.8)',
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })
    }

    if (textRef.value) {
      gsap.from(textRef.value, {
        opacity: 0,
        y: 20,
        duration: 1.2,
        ease: 'back.out(1.2)',
        onComplete: () => {
          const glitchEffect = () => {
            if (!textRef.value) return

            gsap.to(textRef.value, {
              skewX: 10,
              textShadow: '2px 0 #ff7a00, -2px 0 #fe848f',
              duration: 0.1,
              onComplete: () => {
                gsap.to(textRef.value, {
                  skewX: 0,
                  textShadow: 'none',
                  duration: 0.1
                })
              }
            })
          }

          setInterval(() => {
            if (Math.random() > 0.7) glitchEffect()
          }, 3000)
        }
      })
    }

    if (navLinksRef.value) {
      const navItems = Array.from(navLinksRef.value.children)

      gsap.from(navItems, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.3
      })

      gsap.to(navLinksRef.value, {
        backgroundPosition: '400px 0',
        duration: 8,
        repeat: -1,
        ease: 'linear'
      })
    }

    if (socialLinksRef.value) {
      const socialItems = Array.from(socialLinksRef.value.children)

      gsap.from(socialItems, {
        scale: 0.5,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'elastic.out(1, 0.5)',
        delay: 0.8,
        onComplete: () => {
          if (socialLinksRef.value) {
            const items = Array.from(socialLinksRef.value.children) as HTMLElement[]
            for (let i = 0; i < items.length; i++) {
              items[i].style.opacity = '1'
            }
          }
        }
      })

      socialItems.forEach((child, index) => {
        gsap.to(child, {
          y: -5,
          duration: 1.5 + index * 0.2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.1
        })
      })
    }

    if (footerRef.value) {
      gsap.from('.footer-grid-line', {
        width: 0,
        duration: 1.5,
        stagger: 0.05,
        ease: 'power3.out',
        delay: 0.2
      })

      gsap.from('.footer-grid-line-vertical', {
        height: 0,
        duration: 1.5,
        stagger: 0.05,
        ease: 'power3.out',
        delay: 0.2
      })
    }
  } catch (error) {
    console.error('Animation error:', error)
    if (socialLinksRef.value) {
      socialLinksRef.value.style.opacity = '1'
    }
  }
}

let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          runAnimations()
          if (observer) observer.disconnect()
        }
      })
    },
    {
      threshold: 0.1
    }
  )

  if (footerRef.value) {
    observer.observe(footerRef.value)
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
    observer = null
  }
})
</script>

<template>
  <footer ref="footerRef" class="relative footer-container bg-black">
    <div class="footer-grid"></div>

    <div class="container mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 relative z-10">
      <div class="flex justify-center">
        <TheHeaderLogo
          ref="logoRef"
          class="flex mt-4 sm:mt-0 transform transition duration-300 hover:scale-110"
          size="h-16 sm:h-20 lg:h-16 xl:h-20"
        />
      </div>

      <div class="nav-container mt-8 max-w-xl mx-auto">
        <p ref="textRef" class="text-center leading-relaxed cyberpunk-text">
          Forjado com ideias, código e um toque de caos interestelar. <br />
          Explorando ideias, desenvolvendo soluções, conectando pixels e pessoas. <br />
          © {{ new Date().getFullYear() }} Todos os direitos reservados — mas o código é livre. 🚀
        </p>
      </div>

      <div class="nav-container">
        <ul ref="navLinksRef" class="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          <li v-for="link in links" :key="link.text">
            <a class="cyberpunk-link" :href="link.href">
              {{ $t(link.text).toUpperCase() }}
            </a>
          </li>
        </ul>
      </div>

      <ul ref="socialLinksRef" class="mt-12 flex justify-center gap-6 md:gap-8">
        <li v-for="social in socialLinks" :key="social.name" class="social-icon" style="opacity: 1">
          <a
            :href="social.href"
            rel="noreferrer"
            target="_blank"
            class="text-white transition block"
          >
            <span class="sr-only">{{ social.name }}</span>
            <component :is="social.icon" class="h-6 w-6 icon-inner" />
          </a>
        </li>
      </ul>
    </div>
    <BlackHoleBg class="opacity-90" />
  </footer>
</template>

<style scoped>
.footer-container {
  position: relative;
  isolation: isolate;
  overflow: hidden;
}

.footer-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  opacity: 0.3; /* Increased from 0.15 for better visibility */
  pointer-events: none;
  backdrop-filter: blur(3px);
}

.cyberpunk-text {
  color: white;
  text-shadow: 0 0 5px rgba(255, 122, 0, 0.7); /* Changed from blue to neon orange */
  font-family: 'Courier New', monospace;
  letter-spacing: 0.5px;
}

.nav-container {
  position: relative;
  padding: 0.5rem;
  background: transparent;
  margin: 10px auto;
  /* Add subtle background to contrast with the black hole */
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 122, 0, 0.1),
    transparent
  ); /* Changed from blue to neon orange */
  border-radius: 8px;
}

.cyberpunk-link {
  display: inline-block;
  padding: 0.4rem 0.8rem;
  color: rgba(255, 255, 255, 0.95); /* Increased opacity for better contrast */
  border-bottom: 1px solid rgba(255, 255, 255, 0.5); /* Brighter border */
  border-radius: 4px;
  transition: all 0.3s ease;
  position: relative;
  font-family: 'Courier New', monospace;
  font-weight: normal;
  letter-spacing: 1px;
  text-shadow: 0 0 2px rgba(255, 255, 255, 0.3); /* Subtle glow for better contrast */
}

.cyberpunk-link::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 50%;
  width: 0;
  height: 2px; /* Thicker line for better visibility */
  background-color: white;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.cyberpunk-link:hover {
  transform: translateY(-2px);
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.7); /* Brighter glow on hover */
  color: white;
}

.cyberpunk-link:hover::after {
  width: 100%;
  background-color: #ff7a00;
  box-shadow: 0 0 8px rgba(255, 122, 0, 0.8); /* Changed from blue to neon orange */
}

.social-icon {
  background: black;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(255, 255, 255, 0.5); /* Changed to white */
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5); /* Changed to white */
}

.social-icon::before {
  content: '';
  position: absolute;
  inset: -5px;
  border-radius: 50%;
  border: 1px solid transparent;
  background: linear-gradient(45deg, white, transparent, #ff7a00) border-box; /* Changed to neon orange */
  -webkit-mask:
    linear-gradient(#fff 0 0) padding-box,
    linear-gradient(#fff 0 0);
  mask:
    linear-gradient(#fff 0 0) padding-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.social-icon:hover {
  transform: scale(1.15) rotate(10deg);
}

.social-icon:hover::before {
  opacity: 1;
}

.icon-inner {
  color: white;
  transition: all 0.3s ease;
}

.social-icon:hover .icon-inner {
  color: #ff7a00; /* Changed to neon orange */
  filter: drop-shadow(0 0 5px rgba(255, 122, 0, 0.8)); /* Changed to neon orange */
}
</style>
