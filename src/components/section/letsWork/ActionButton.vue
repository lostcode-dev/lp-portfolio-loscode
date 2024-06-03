<template>
    <button class="button">
        <span class="text">
            <slot> </slot>
        </span>
        <svg class="arrow" viewBox="0 0 448 512" height="1em" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z">
            </path>
        </svg>
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

.arrow {
    padding: 0 10px;
}

.arrow path {
    fill: rgb(19, 19, 19);
}

.button:hover {
    border: 3px solid #96AAE1;
    background-color: #96AAE1;
    box-shadow: 2px 2px 10px #60dcd3;

}

.button:hover .arrow {
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