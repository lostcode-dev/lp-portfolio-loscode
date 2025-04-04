import { gsap } from 'gsap'

export function useAnimation() {
    function fadeIn(element: string | HTMLElement, duration = 0.5) {
        gsap.fromTo(
            element,
            { opacity: 0 },
            { opacity: 1, duration, ease: 'power2.inOut' }
        )
    }

    function fadeOut(element: string | HTMLElement, duration = 0.5) {
        gsap.fromTo(
            element,
            { opacity: 1 },
            { opacity: 0, duration, ease: 'power2.inOut' }
        )
    }

    function slideInFromLeft(element: string | HTMLElement, duration = 0.5, distance = 100) {
        gsap.fromTo(
            element,
            { x: -distance, opacity: 0 },
            { x: 0, opacity: 1, duration, ease: 'power2.out' }
        )
    }

    function slideInFromRight(element: string | HTMLElement, duration = 0.5, distance = 100) {
        gsap.fromTo(
            element,
            { x: distance, opacity: 0 },
            { x: 0, opacity: 1, duration, ease: 'power2.out' }
        )
    }

    function bounce(element: string | HTMLElement, duration = 1) {
        gsap.fromTo(
            element,
            { y: -20 },
            { y: 0, duration, ease: 'bounce.out', repeat: -1, yoyo: true }
        )
    }

    function createLetterAnimationTimeline(className: string, duration = 0.15) {
        const letters = document.getElementsByClassName(`${className} letter`)
        const timeline = gsap.timeline({ repeat: 1, yoyo: true })
        Array.from(letters).forEach((letter) => {
            timeline.fromTo(
                letter,
                { opacity: 0, display: 'none' },
                { opacity: 1, duration, display: 'inline-flex' }
            )
        })
        return timeline
    }

    function initializeCursorAndTextAnimation(
        items: string[],
        cursorSelector: string,
        masterTimeline: gsap.core.Timeline,
        cursorDuration = 0.25,
        letterDuration = 0.15
    ) {
        gsap.to(cursorSelector, {
            opacity: 0,
            repeat: -1,
            yoyo: true,
            duration: cursorDuration,
            ease: 'power2.inOut'
        })
        items.forEach((item) => masterTimeline.add(createLetterAnimationTimeline(item, letterDuration)))
    }

    return {
        fadeIn,
        fadeOut,
        slideInFromLeft,
        slideInFromRight,
        bounce,
        createLetterAnimationTimeline,
        initializeCursorAndTextAnimation
    }
}
