<template>
  <div class="container">
    <div class="main">
      <router-view />
    </div>
    <div class="footer">
      <!-- <Tabbar /> -->
      <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o">标签</van-tabbar-item>
        <van-tabbar-item icon="search">标签</van-tabbar-item>
        <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
        <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
  <script>
//   import Tabbar from "@/components/Home/Tabbar.vue";
export default {
  components: {
    //   Tabbar
  },
  data() {
    return {
      active: 0,
      showFooter: true,
    };
  },
  watch: {
    $route() {
      if (
        this.$route.path === "/home-page" ||
        this.$route.path === "/personal-center" ||
        this.$route.path === "/recommend"
      ) {
        this.showFooter = true;
      } else {
        this.showFooter = false;
      }
    },
  },
};
</script>
  <style lang="scss" scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  .main {
    height: 0;
    flex-grow: 1;
    overflow-y: scroll;
  }
  .footer {
    width: 100%;
    height: vw(150);
  }
}
</style>
  