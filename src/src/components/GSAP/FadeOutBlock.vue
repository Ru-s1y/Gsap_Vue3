<template>
    <div>
        <button @click="clickEvent">ここ押す</button>
        <div id="target1">ターゲットはこいつだ</div>
        <div id="target2">ターゲットはこいつだ</div>
        <div id="target3">ターゲットはこいつだ</div>
        <div id="target4">ターゲットはこいつだ</div>
        <div id="target5">ターゲットはこいつだ</div>
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
    data: function () {
        return {
            count: 1
        }
    },
    methods: {
        clickEvent() {
            const intervalId = setInterval(() =>{
                this.clickMe('#target' + this.count);
                this.count++;
                if(this.count > 5){
                    this.count = 1;
                    clearInterval(intervalId);
                }
            }, 1000 / 30);
        },
        clickMe(el) {
            gsap.fromTo(el,
            {
                opacity: 1,
                x: 0
            },
            {
                duration: 1,
                opacity: 0,
                x: 200,
            })
        }
    }
}
</script>