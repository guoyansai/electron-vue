<!-- render>views>index.vue -->
<template>
  <div class="main">
    <div class="main-show">
      <router-view></router-view>
    </div>
    <div class="main-other">
      <h1>test page!</h1>
      <button @click="goHome">回主页</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push({
        name: "home"
      });
    }
  }
};
</script>
<style></style>