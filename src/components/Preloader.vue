<template>
    <div class="sk-wave">
        <div class="sk-rect sk-rect-1"></div>
        <div class="sk-rect sk-rect-2"></div>
        <div class="sk-rect sk-rect-3"></div>
        <div class="sk-rect sk-rect-4"></div>
        <div class="sk-rect sk-rect-5"></div>
    </div>
</template>

<script>
    export default {
        name: "Preloader"
    }
</script>

<style scoped>
    .sk-wave {
        width: 6em;
        height: 4em;
        margin: auto;
        text-align: center;
        font-size: 1em;
    }
    .sk-wave .sk-rect {
        background-color: #337ab7;
        height: 100%;
        width: .5em;
        display: inline-block;
        -webkit-animation: sk-wave-stretch-delay 1.2s infinite ease-in-out;
        animation: sk-wave-stretch-delay 1.2s infinite ease-in-out;
    }
    .sk-wave .sk-rect-1 {
        -webkit-animation-delay: -1.2s;
        animation-delay: -1.2s;
    }
    .sk-wave .sk-rect-2 {
        -webkit-animation-delay: -1.1s;
        animation-delay: -1.1s;
    }
    .sk-wave .sk-rect-3 {
        -webkit-animation-delay: -1s;
        animation-delay: -1s;
    }
    .sk-wave .sk-rect-4 {
        -webkit-animation-delay: -0.9s;
        animation-delay: -0.9s;
    }
    .sk-wave .sk-rect-5 {
        -webkit-animation-delay: -0.8s;
        animation-delay: -0.8s;
    }

    @-webkit-keyframes sk-wave-stretch-delay {
        0%, 40%, 100% {
            -webkit-transform: scaleY(0.4);
            transform: scaleY(0.4);
        }
        20% {
            -webkit-transform: scaleY(1);
            transform: scaleY(1);
        }
    }

    @keyframes sk-wave-stretch-delay {
        0%, 40%, 100% {
            -webkit-transform: scaleY(0.4);
            transform: scaleY(0.4);
        }
        20% {
            -webkit-transform: scaleY(1);
            transform: scaleY(1);
        }
    }
</style>