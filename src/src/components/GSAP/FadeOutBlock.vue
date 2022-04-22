<template>
    <div>
        <button @click="clickMe()">ここ押す</button>
        <div id="target">ターゲットはこいつだ</div>
        <transition
            appear
            @before-enter="blockBeforeEnter"
            @enter="blockEnter"
        >
            <p>あああああああああああああああ</p>
        </transition>
    </div>
</template>

<script>
import gsap from "gsap";
export default {
    setup() {
        const blockBeforeEnter = (el) => {
            gsap.set(el, {
                y: "0",
                opacity: 1
            })
        }

        const blockEnter = (el, done) => {
            gsap.to(el, {
                y: "-100%",
                opacity: 0,
                duration: 1,
                onComplete: done
            })
        }

        return { blockBeforeEnter, blockEnter }
    },
    methods: {
        clickMe() {
            const el = '#target'
            gsap.set(el, {
                opacity: 1,
                x: 0
            })
            gsap.to(el, {
                duration: 1,
                opacity: 0,
                x: 200,
            })
        }
    }
}
</script>