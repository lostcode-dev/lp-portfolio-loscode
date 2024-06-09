<script setup>
import ArrowLeftIcon from '@/components/icons/ArrowLeftIcon.vue'
import MessageIcon from '@/components/icons/MessageIcon.vue'

const props = defineProps(['icon'])

const icons = {
  'message': MessageIcon,
  'arrow-left': ArrowLeftIcon
}
</script>


<template>
    <button class="button">
        <span class="text">
            <slot> </slot>
        </span>
        <component class="action-button__icon text-black mr-2" :is="icons[icon]" />
    </button>
</template>

<style scoped>
.button {
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
    cursor: pointer;
    border: 3px solid #60dcd3;
    background-color: #60dcd3;
    box-shadow: 2px 2px 10px rgb(255, 71, 255);
    transition: all 0.5s;
}

.text {
    height: 100%;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(27, 27, 27);
    color: white;
}


.button:hover {
    border: 3px solid #96AAE1;
    background-color: #96AAE1;
    box-shadow: 2px 2px 10px #60dcd3;
}

.button:hover .action-button__icon {
    animation: slide-in-left 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@keyframes slide-in-left {
    0% {
        transform: translateX(-8px);
        opacity: 0;
    }

    100% {
        transform: translateX(0px);
        opacity: 1;
    }
}

.button:active {
    transform: scale(0.97);
}
</style>