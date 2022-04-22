<template>
    <transition
        appear
        @before-enter="headerBeforeEnter"
        @enter="headerEnter">
        <h1>吾輩は猫である</h1>
    </transition>
</template>

<script>
import gsap from "gsap";

export default {
    setup() {
        const headerBeforeEnter = (el) => {
            gsap.set(el, {
                y: "-100%",
                opacity: 0
            })
        }

        const headerEnter = (el, done) => {
            gsap.to(el, {
                opacity: 1,
                duration: 1,
                y: "0",
                ease: "Power0.easeOut",
                onComplete: done
            })
        }
        return { headerBeforeEnter, headerEnter }
    }
}
</script>
