<template>
  <div class="home">
    <HelloWorld :msg="aa" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      aa: process.env.NODE_ENV,
    };
  },
  mounted() {
    console.log(456465, process.env);
  },
};
</script>
