<template>
    <Teleport to="body">
        <transition>
            <div v-show="model"
                class="bg-black shadow-2xl min-w-1/2 fixed top-24 right-4 px-10 py-8 z-50 border-white border">
                <div class="flex gap-4 justify-around">
                    <HeaderLogo class="mb-8" size="h-12" />
                    <HamburgerIcon v-model="model" color="white" class="text-white relative -right-4 -top-2" />
                </div>
    
                <ul class="grid gap-10 text-white text-xl ">
                    <NavbarLink v-for="link in menuLinks" :key="`${link.href}${$i18n.locale}`" @click="model = false"
                        :link="link" />
                </ul>
            </div>
        </transition>
    </Teleport>
</template>

<script setup>
import { menuLinks } from './navbarLinks'
import HeaderLogo from './HeaderLogo.vue';
import NavbarLink from './NavbarLink.vue'
import HamburgerIcon from '../icons/HamburgerIcon.vue';

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