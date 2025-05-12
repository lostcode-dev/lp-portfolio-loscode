<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import CommandLine from '@/components/CommandLine.vue'
import MeshGradient from '@/components/background/MeshGradientBg.vue'
import SkillCardButton from '@/components/section/letsWork/partials/SkillCardButton.vue'

// Refs for animations
const formRef = ref(null)
const formElementsRef = ref(null)
const gridRef = ref(null)
// Add a new ref for the section element to observe
const sectionRef = ref(null)

// Animation triggered flag
const animationsTriggered = ref(false)

// Run animations when component is visible
const runAnimations = () => {
  if (animationsTriggered.value) return
  animationsTriggered.value = true

  // Grid lines animation
  if (gridRef.value) {
    gsap.from('.grid-line', {
      width: 0,
      duration: 1.5,
      stagger: 0.05,
      ease: 'power3.out'
    })

    gsap.from('.grid-line-vertical', {
      height: 0,
      duration: 1.5,
      stagger: 0.05,
      ease: 'power3.out'
    })
  }

  // Form animations
  if (formRef.value) {
    gsap.from(formRef.value, {
      opacity: 0,
      y: 30,
      duration: 1.2,
      ease: 'back.out(1.2)'
    })
  }

  // Form elements staggered animation
  if (formElementsRef.value) {
    const elements = formElementsRef.value.querySelectorAll('.form-element')
    gsap.from(elements, {
      opacity: 0,
      x: -20,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out',
      delay: 0.3
    })
  }
}

// Set up Intersection Observer to trigger animations when section is visible
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          runAnimations()
          observer.disconnect()
        }
      })
    },
    { threshold: 0.1 }
  )

  // Use the section element for intersection observation instead of formRef
  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }

  // Cursor blink effect
  const blinkCursor = () => {
    const cursor = document.querySelector('.terminal-cursor')
    if (cursor) {
      gsap.to(cursor, {
        opacity: 0,
        duration: 0.5,
        repeat: -1,
        yoyo: true
      })
    }
  }

  blinkCursor()
})
</script>

<template>
  <div class="retro-futuristic relative overflow-hidden py-12 sm:py-16">
    <!-- Grid background -->
    <div ref="gridRef" class="retro-grid">
      <div v-for="i in 20" :key="`h-${i}`" class="grid-line" :style="`top: ${i * 5}%`"></div>
      <div
        v-for="i in 20"
        :key="`v-${i}`"
        class="grid-line-vertical"
        :style="`left: ${i * 5}%`"
      ></div>
    </div>

    <!-- Cyber circles decoration -->
    <div class="cyber-circle circle-1"></div>
    <div class="cyber-circle circle-2"></div>

    <section
      ref="sectionRef"
      id="talk_with_us_section"
      class="text-orange-300 w-full px-4 sm:px-8 lg:px-16 relative z-10"
    >
      <div class="terminal-header mb-1 max-w-3xl mx-auto flex items-center">
        <span class="terminal-prompt">$</span>
        <span class="ml-2 terminal-command">contact_init --mode=secure</span>
        <span class="terminal-cursor">_</span>
      </div>

      <CommandLine
        id="write-me"
        title="E:// SYSTEM ACCESS POINT // SECURE TRANSMITTER"
        class="mx-auto w-full max-w-3xl cyber-box"
        ref="formRef"
      >
        <div class="p-2 sm:p-6 bg-black/90">
          <div class="scanlines"></div>
          <div class="glow"></div>

          <form
            ref="formElementsRef"
            name="contact-form"
            action=""
            method="post"
            class="flex flex-col gap-6"
          >
            <input type="hidden" name="form-name" value="contact-form" />
            <input type="hidden" name="subject" value="New contact from website" />

            <div class="relative text-sm font-medium form-element">
              <div class="cyber-badge">01</div>
              <div class="flex flex-col pl-10">
                <label class="cyber-label" for="name">
                  <span>FULL-NAME <span class="text-orange-500">*</span></span>
                </label>
                <div class="cyber-input-container">
                  <input
                    id="name"
                    type="text"
                    class="cyber-input"
                    name="name"
                    placeholder="ENTER NAME"
                  />
                  <div class="input-glow"></div>
                </div>
              </div>
            </div>

            <div class="relative text-sm font-medium form-element">
              <div class="cyber-badge">02</div>
              <div class="flex flex-col pl-10">
                <label class="cyber-label" for="email">
                  <span>EMAIL <span class="text-orange-500">*</span></span>
                </label>
                <div class="cyber-input-container">
                  <input
                    id="email"
                    type="email"
                    class="cyber-input"
                    name="email"
                    placeholder="ENTER EMAIL"
                  />
                  <div class="input-glow"></div>
                </div>
              </div>
            </div>

            <div class="relative text-sm font-medium form-element">
              <div class="cyber-badge">03</div>
              <div class="flex flex-col pl-10">
                <label class="cyber-label" for="message">
                  <span>YOUR-MESSAGE <span class="text-orange-500">*</span></span>
                </label>
                <div class="cyber-input-container">
                  <textarea
                    id="message"
                    class="cyber-textarea"
                    rows="4"
                    name="message"
                    placeholder="ENTER MESSAGE"
                  ></textarea>
                  <div class="input-glow"></div>
                </div>
              </div>
            </div>

            <label class="hidden">More details: <input name="more-details" /></label>
            <div class="flex flex-col pl-10 form-element">
              <label class="flex items-start gap-2 py-0">
                <input type="checkbox" name="acceptance" class="cyber-checkbox" value="true" />
                <span class="block w-full text-white text-sm sm:text-base">
                  I agree with the terms of the Privacy Policy
                </span>
              </label>
            </div>

            <div class="pl-10 pt-4 form-element">
              <button type="submit" class="cyber-button">
                <span class="button-content">
                  <span class="button-text">TRANSMIT DATA</span>
                  <span class="button-icon">➤</span>
                </span>
                <span class="button-glitch"></span>
                <span class="button-glow"></span>
              </button>
            </div>
          </form>
        </div>
      </CommandLine>

      <div class="text-center mt-4 text-orange-500/60 text-sm glitch-text">
        SECURE TRANSMISSION PROTOCOL ENABLED // DATA ENCRYPTION ACTIVE
      </div>
    </section>
  </div>
</template>

<style scoped>
.retro-futuristic {
  background: #000;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff7a00;
}

.terminal-header {
  font-family: 'Courier New', monospace;
  color: #ff7a00;
  font-size: 14px;
  padding: 8px 0;
}

.terminal-prompt {
  color: #ff7a00;
  font-weight: bold;
}

.terminal-command {
  color: white;
}

.terminal-cursor {
  color: #ff7a00;
  font-weight: bold;
  animation: blink 1s infinite;
}

/* Grid background */
.retro-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  opacity: 0.3;
  pointer-events: none;
}

.grid-line {
  position: absolute;
  height: 1px;
  width: 100%;
  background: linear-gradient(90deg, transparent 0%, #ff7a00 50%, transparent 100%);
}

.grid-line-vertical {
  position: absolute;
  width: 1px;
  height: 100%;
  background: linear-gradient(0deg, transparent 0%, #ff7a00 50%, transparent 100%);
}

/* Cyber circles */
.cyber-circle {
  position: absolute;
  border-radius: 50%;
  border: 2px solid rgba(255, 122, 0, 0.3);
  box-shadow: 0 0 20px rgba(255, 122, 0, 0.2);
  z-index: 1;
}

.circle-1 {
  width: 400px;
  height: 400px;
  top: -100px;
  right: -80px;
  border-top-color: #ff7a00;
  border-right-color: transparent;
  transform: rotate(-30deg);
}

.circle-2 {
  width: 300px;
  height: 300px;
  bottom: -50px;
  left: -100px;
  border-bottom-color: #ff7a00;
  border-left-color: transparent;
  transform: rotate(45deg);
}

/* Cyber box styling */
.cyber-box {
  background: black;
  border: 1px solid rgba(255, 122, 0, 0.6);
  box-shadow:
    0 0 20px rgba(255, 122, 0, 0.4),
    0 0 30px rgba(255, 122, 0, 0.2) inset;
  position: relative;
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
}

.cyber-box::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: linear-gradient(90deg, transparent, rgba(255, 122, 0, 0.8), transparent);
  opacity: 0.7;
}

.cyber-badge {
  position: absolute;
  left: 0;
  top: 0;
  color: #ff7a00;
  font-weight: 800;
  background-color: rgba(0, 0, 0, 0.8);
  border: 1px solid #ff7a00;
  padding: 0 8px;
  font-family: monospace;
  clip-path: polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%);
}

/* Form element styling */
.cyber-label {
  padding: 0 0 8px 0;
  color: #ff7a00;
  font-family: 'Courier New', monospace;
  font-weight: 600;
  letter-spacing: 1px;
  text-shadow: 0 0 5px rgba(255, 122, 0, 0.5);
}

.cyber-input-container {
  position: relative;
  margin-bottom: 8px;
}

.cyber-input,
.cyber-textarea {
  width: 100%;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.8);
  border: 2px solid rgba(255, 122, 0, 0.6);
  color: white;
  font-family: 'Courier New', monospace;
  letter-spacing: 1px;
  caret-color: #ff7a00;
  position: relative;
  transition: all 0.3s;
}

.cyber-input {
  height: 45px;
  clip-path: polygon(
    0 0,
    calc(100% - 10px) 0,
    100% 10px,
    100% 100%,
    10px 100%,
    0 calc(100% - 10px)
  );
}

.cyber-textarea {
  resize: none;
  clip-path: polygon(
    0 0,
    calc(100% - 15px) 0,
    100% 15px,
    100% calc(100% - 15px),
    calc(100% - 15px) 100%,
    0 100%
  );
}

.input-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  border: 2px solid #ff7a00;
  opacity: 0;
  transition: opacity 0.3s;
  clip-path: inherit;
  box-shadow: 0 0 10px rgba(255, 122, 0, 0.5);
}

.cyber-input:focus,
.cyber-textarea:focus {
  outline: none;
  border-color: #ff7a00;
}

.cyber-input:focus + .input-glow,
.cyber-textarea:focus + .input-glow {
  opacity: 1;
}

.cyber-input::placeholder,
.cyber-textarea::placeholder {
  color: rgba(255, 122, 0, 0.4);
  font-family: 'Courier New', monospace;
}

/* Checkbox styling */
.cyber-checkbox {
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 122, 0, 0.6);
  background: black;
  cursor: pointer;
  position: relative;
  margin-top: 3px;
}

.cyber-checkbox:checked {
  background: #ff7a00;
}

.cyber-checkbox:checked:before {
  content: '✓';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  font-size: 14px;
  font-weight: bold;
}

.cyber-checkbox:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(255, 122, 0, 0.5);
}

/* Button styling */
.cyber-button {
  position: relative;
  padding: 10px 24px;
  background: black;
  border: 2px solid #ff7a00;
  color: white;
  font-family: 'Courier New', monospace;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 70%, 90% 100%, 0 100%);
  transition: all 0.3s;
}

.button-content {
  position: relative;
  display: flex;
  align-items: center;
  z-index: 1;
}

.button-text {
  margin-right: 8px;
}

.button-icon {
  font-size: 14px;
  color: #ff7a00;
  transition: transform 0.3s;
}

.button-glitch {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 122, 0, 0.3);
  transform: translateX(-100%);
  transition: transform 0.2s;
}

.button-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 122, 0, 0.5), transparent);
  transform: translateX(-100%);
}

.cyber-button:hover {
  background-color: rgba(255, 122, 0, 0.1);
  box-shadow: 0 0 15px rgba(255, 122, 0, 0.5);
  transform: translateY(-2px);
}

.cyber-button:hover .button-icon {
  transform: translateX(3px);
}

.cyber-button:hover .button-glitch {
  transform: translateX(100%);
  transition: transform 0.2s;
}

.cyber-button:hover .button-glow {
  transform: translateX(100%);
  transition: transform 0.8s;
}

/* Scanlines effect */
.scanlines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.05) 50%);
  background-size: 100% 4px;
  pointer-events: none;
  z-index: 10;
  opacity: 0.2;
}

/* Glow effect */
.glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at center, rgba(255, 122, 0, 0.1) 0%, transparent 70%);
  pointer-events: none;
  z-index: 2;
}

/* Glitch text effect */
.glitch-text {
  position: relative;
  letter-spacing: 1px;
  text-shadow: 0 0 3px rgba(255, 122, 0, 0.5);
}

.glitch-text:before,
.glitch-text:after {
  content: 'SECURE TRANSMISSION PROTOCOL ENABLED // DATA ENCRYPTION ACTIVE';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.8;
}

.glitch-text:before {
  color: #0ff;
  z-index: -1;
  opacity: 0.2;
  animation: glitch 3s infinite;
}

.glitch-text:after {
  color: #f0f;
  z-index: -2;
  opacity: 0.1;
  animation: glitch 2s infinite;
}

@keyframes glitch {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-2px, 2px);
  }
  40% {
    transform: translate(-2px, -2px);
  }
  60% {
    transform: translate(2px, 2px);
  }
  80% {
    transform: translate(2px, -2px);
  }
  100% {
    transform: translate(0);
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

@media (max-width: 640px) {
  .cyber-input {
    height: 40px;
  }

  .cyber-label {
    font-size: 0.85rem;
  }
}
</style>
