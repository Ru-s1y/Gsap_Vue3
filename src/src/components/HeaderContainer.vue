<template>
    <div>
        <ul class="flex">
            <li><router-link :to="{ path: '/'}">HOME</router-link></li>
            <li><router-link :to="{ path: '/about'}">ABOUT</router-link></li>
            <li><router-link :to="{ path: '/gsap'}">GSAP</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
.flex {
    display: flex;
}
li {
    list-style: none;
    margin-right: 1rem;
}
li:last-child {
    margin-right: 0;
}
</style>