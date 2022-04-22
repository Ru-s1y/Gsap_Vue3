<template>
    <div class="container">
        <fade-in />
        <fade-out />
    </div>
</template>

<script>
import FadeIn from "./GSAP/FadeInBlock.vue";
import FadeOut from "./GSAP/FadeOutBlock.vue";
export default {
    components: { FadeIn, FadeOut },
    setup() {}
}
</script>

<style scoped>
.container {
    margin: 2rem;
}
</style>