<!-- render>views>index.vue -->
<template>
  <div class="index">
    <div class="index-menu">
      {{$router.name}}
      <div
        v-for="(item,index) in MENU"
        :key="index"
        :class="$route.path.includes(item.path)?'active':''"
      >
        <div v-if="$route.path.includes(item.path)&&item.children.length">
          <div class="bigmenu">
            <router-link :to="item.path">{{item.title}} ∨</router-link>
          </div>
          <div
            v-for="(itema,index) in item.children"
            :key="index"
            :class="$route.path.includes(itema.path)?'active':''"
          >
            <router-link :to="itema.path">{{itema.title}}</router-link>
          </div>
        </div>
        <div class="bigmenu" v-else>
          <router-link :to="item.path">{{item.title}}</router-link>
        </div>
      </div>
    </div>
    <div class="index-main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // console.log(666.123, this.$route, this.$routes);
    // console.log(this.MENU);
  }
};
</script>
<style lang="scss" scoped>
.bigmenu {
  padding: 5px 12px;
}

.active > div {
  font-weight: normal;
}
.active,
.active > div.active {
  font-weight: bold;
  background-color: var(--colorb3);
  > a {
    color: var(--colorb);
  }
}
.active > .bigmenu {
  font-weight: bold;
  background-color: var(--colorb3);
  > a {
    color: var(--colorb);
  }
}

.index-menu > .active {
  background-color: var(--colorb2);
  > div {
    width: 100%;
    > div {
      padding: 5px 12px;
    }
  }
}
</style>