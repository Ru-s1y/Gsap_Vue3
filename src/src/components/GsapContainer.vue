<template>
    <div class="container">
        <fade-in />
        <fade-out />
        <loop />
    </div>
</template>

<script>
import FadeIn from "./GSAP/FadeInBlock.vue";
import FadeOut from "./GSAP/FadeOutBlock.vue";
import Loop from "./GSAP/LoopBlock.vue";
export default {
    components: { FadeIn, FadeOut, Loop },
    setup() {}
}
</script>

<style scoped>
.container {
    margin: 2rem;
}
</style>