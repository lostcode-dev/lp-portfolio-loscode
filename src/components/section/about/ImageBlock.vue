<template>
    <div class="flex items-center select-none touch-none">
        <div class="rounded-full bg-white w-full picture mx-auto overflow-hidden touch-none reddit-mono-bold perfil">
            <img class="rounded-full w-full touch-none reddit-mono-bold" src="/img/perfil.jpeg" alt="" />
        </div>
    </div>
</template>

<style scoped>
.picture {
    animation: neon1 1.5s ease-in-out infinite alternate;
}

@keyframes neon1 {
    from {
        box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff11a7, 0 0 70px #ff11a7,
            0 0 80px #ff11a7, 0 0 100px #ff11a7, 0 0 150px #ff1177;
    }

    to {
        box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff11a7, 0 0 35px #ff11a7,
            0 0 40px #ff11a7, 0 0 50px #ff11a7, 0 0 75px #ff11a7;
    }
}
</style>