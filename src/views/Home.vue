<template>
  <div class="home flex items-center justify-center">
    <img class="home-img" alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
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
};
</script>

<style lang="less" scoped>
.home {
  .home-img {
    width: 300px;
  }
}
</style>
