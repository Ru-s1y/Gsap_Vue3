<template>
    <div>
        <button @click="clickLoop">Loop</button>
        <div class="margin">
            <div id="loop" class="loop-block">
                <span>●</span>
            </div>
        </div>
    </div>
</template>

<script>
import gsap from 'gsap';
export default {
    methods: {
        clickLoop() {
            gsap.to("#loop", {
                x: 0,
                y: 0,
            })
            gsap.to("#loop", {
                duration: 1.5,
                rotation: 450,
                ease: "Power2.easeOut",
                repeat: -1
            })
        }
    },
}
</script>

<style scoped>
.margin {
    margin-top: 2.5rem;
}
.loop-block {
    width: 5rem;
    transform: rotate(90deg);
}
</style>