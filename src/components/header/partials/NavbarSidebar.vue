<template>
    <Teleport to="body">
        <transition>
            <div v-show="model" @mouseleave="model = false" @mouseout="model = false"
                class="bg-black shadow-2xl min-w-1/2 fixed top-24 right-4 z-50 border-white border lg:hidden">
                <div class="border-b border-b-white p-2 flex items-center select-none text-white silkscreen-regular">
                    <p>menu</p>
                    <div class="flex gap-2 text-base-300 ml-auto" style="touch-action: none">
                        <MinimizeIcon class="opacity-50" />
                        <ResizeIcon class="opacity-50" />
                        <CloseIcon @click="model=false" />
                    </div>
                </div>
                <div class="px-10 pt-6 pb-8 mr-10">
                    <ul class="grid gap-10 text-white text-xl ">
                        <NavbarLink v-for="link in menuLinks" :key="`${link.href}${$i18n.locale}`"
                            @clickLink="model = false" :link="link" />
                    </ul>
                </div>
            </div>
        </transition>
    </Teleport>
</template>

<script setup>
import { menuLinks } from './navbarLinks'
import NavbarLinkItem from './NavbarLinkItem.vue'

import CloseIcon from '../../icons/CloseIcon.vue';
import ResizeIcon from '../../icons/ResizeIcon.vue';
import MinimizeIcon from '../../icons/MinimizeIcon.vue';

const model = defineModel()
</script>


<style scoped>
.v-enter-active,
.v-leave-active {
    transition: transform 1.5s ease;
}

.v-enter-from,
.v-leave-to {
    transform: translateX(100%);
}
</style>