<template>
  <div class="home">
    <h1>electron-vue</h1>
    <h2>name:{{userInfo.name}}</h2>
    <h2>address:{{userInfo.address}}</h2>
    <button @click="changeLang">翻译</button>
    <button @click="addClick">点击次数{{click}}</button>
    <button @click="toTestPage">去测试页</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["userInfo", "click"])
  },
  methods: {
    ...mapMutations(["setUserInfo", "setClick"]),
    changeLang() {
      this.setUserInfo({
        name: "阿赛",
        address: "南京"
      });
    },
    addClick() {
      this.setClick(this.click + 1);
    },
    toTestPage() {
      this.$router.push({
        name: "test"
      });
    }
  }
};
</script>
<style lang="less" scoped>
</style>