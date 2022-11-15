<template>
  <div id="app">
    <scale-box>
      <div class="w-full h-full overflow-hidden">
        <div id="nav">
          <router-link to="/">Home</router-link>
          |
          <router-link to="/about">About</router-link>
          |
          <router-link to="/tailwindcss">tailwindcss</router-link>
          |
          <router-link to="/echartsExample">echartsExample</router-link>
        </div>
        <router-view />
      </div>
    </scale-box>
  </div>
</template>

<script setup>
  import ScaleBox from './components/ScaleBox.vue'
</script>

<style lang="less">
  html,
  body {
    height: 100%;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100%;
    height: 100%;
    background: #0d144f;
    overflow: hidden;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #fff;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
