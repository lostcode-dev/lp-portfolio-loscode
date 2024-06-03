<template>
    <div id="background"></div>
</template>


<style scoped>
#background {
    background: radial-gradient(ellipse at center,
            rgba(127, 0, 173, 0.6) 0%,
            rgba(0, 0, 0, 0.8) 60%,
            rgba(0, 0, 0, 1) 90%),
        url(/img/stars.jpg);

    background-size: cover;
    position: fixed;
    z-index: -5;
    color: white;

    height: 100vh;
    width: 100vw;
    animation: pulse 60s infinite;
}

@keyframes pulse {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.6);
    }

    100% {
        transform: scale(1);
    }
}
</style>