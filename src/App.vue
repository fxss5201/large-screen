<template>
  <div id="app">
    <scale-box>
      <div class="w-full h-full overflow-hidden">
        <div id="nav" class="flex items-center justify-center">
          <div class="ml-2 first:ml-0" v-for="item in routes" :key="item.path">
            <router-link :to="item.path">{{ item.name }}</router-link>
          </div>
        </div>
        <router-view />
      </div>
    </scale-box>
  </div>
</template>

<script setup>
  import ScaleBox from './components/ScaleBox.vue'

  const routes = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'tailwindcss',
      path: '/tailwindcss'
    },
    {
      name: 'echartsExample',
      path: '/echartsExample'
    },
    {
      name: 'optionApi',
      path: '/optionApi'
    },
    {
      name: 'compositionApi',
      path: '/compositionApi'
    }
  ]
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
