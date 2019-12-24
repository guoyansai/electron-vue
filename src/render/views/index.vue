<!-- render>views>index.vue -->
<template>
  <div class="index">
    <div class="index-menu">
        <div v-for="(item,index) in MENU" :key="index">{{item.title}}</div>
    </div>
    <div class="index-main">
      <router-view></router-view>
    </div>
    <div class="index-other">
      <router-view name="other"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.MENU);
  }
};
</script>
<style>
</style>