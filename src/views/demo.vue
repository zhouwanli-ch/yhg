<template>
  <div class="home">
    <HelloWorld :msg="aa + '好了'" />
    <van-button type="primary">主要按钮</van-button>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      aa: process.env.VUE_APP_OUTPUT_DIR,
    };
  },
  mounted() {
    this.getaboutustable();
  },
  methods: {
    getaboutustable() {
      this.$api.systemManage
        .getaboutustable({})
        .then((data) => {
          console.log(data);
        })
        .finally(() => {});
    },
  },
};
</script>
