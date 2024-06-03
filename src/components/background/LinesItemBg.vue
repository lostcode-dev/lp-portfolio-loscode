<template>
    <div id="layer-0">
        <div id="layer-1">
            <div id="layer-2">
                <div id="lines">
                    <div id="layer-corner"></div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
#container-bg {
    position: absolute;
    overflow: hidden;
    height: 100vh;
    width: 100%;
}

#layer-0 {
    background: rgba(92, 71, 255, 0);
    background: linear-gradient(to bottom,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 1) 25%,
            rgba(255, 71, 255, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#5c47ff', endColorstr='#ff47ff', GradientType=0);
    height: 400px;
    width: 200vw;
    opacity: 1;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 -50%;
    overflow: hidden;
    transform: perspective(200px) rotateX(60deg);
}

#layer-1 {
    background: rgba(92, 71, 255, 1);
    background: linear-gradient(45deg,
            rgba(92, 71, 255, 1) 0%,
            rgba(92, 71, 255, 0) 50%,
            rgba(92, 71, 255, 0) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#5c47ff', endColorstr='#5c47ff', GradientType=1);
    height: inherit;
    width: inherit;
    opacity: 1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: -3;
}

#layer-2 {
    background: rgba(92, 71, 255, 0);
    background: linear-gradient(135deg,
            rgba(92, 71, 255, 0) 0%,
            rgba(92, 71, 255, 0) 50%,
            rgba(92, 71, 255, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#5c47ff', endColorstr='#5c47ff', GradientType=1);
    height: inherit;
    width: inherit;
    opacity: 1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: -2;
}

#layer-corner {
    background: rgba(71, 255, 203, 1);
    background: linear-gradient(to bottom,
            rgba(71, 255, 203, 1) 0%,
            rgba(96, 130, 223, 0) 54%,
            rgba(117, 24, 240, 0) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#47ffcb', endColorstr='#7518f0', GradientType=0);
    height: inherit;
    width: inherit;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: -5;
    animation: layercorneranim 1.5s ease-in-out infinite alternate;
}

#lines {
    background-size: 40px 40px;
    background-image: repeating-linear-gradient(0deg,
            #60dcd3,
            #60dcd3 2px,
            transparent 1px,
            transparent 40px),
        repeating-linear-gradient(-90deg, #60dcd3, #60dcd3 2px, transparent 2px, transparent 40px);
    height: 400px;
    width: 100%;
    opacity: 1;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    animation: moveBackground 120s linear infinite;
}

@keyframes moveBackground {
    0% {
        background-position: 0 0, 0 0;
    }

    100% {
        background-position: 1200px 1200px, 0px 0px;
    }
}

@keyframes layercorneranim {
    from {
        height: 400px;
    }

    to {
        height: 540px;
    }
}
</style>