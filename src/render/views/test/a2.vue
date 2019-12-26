<!-- render>views>index.vue -->
<template>
    <div class="content">
        <h1>test page!a2</h1>
        <button @click="goHome">回主页</button>
    </div>
</template>

<script>
export default {
    methods: {
        goHome() {
            this.$router.push({
                name: 'home'
            });
        }
    }
}
</script>
<style></style>