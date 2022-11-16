<template>
  <div class="bg-white mx-auto" ref="box">
    <div class="mt-4">
      <div class="text-center">测试 组合式 vue-router</div>
      <div>routePath: {{ route.path }}</div>
      <button @click="changeRouter" class="border rounded-4 py-1 px-4 hover:border-blue-700">跳转到 optionApi</button>
    </div>
    <div class="mt-4">
      <div class="text-center">测试 组合式 vuex</div>
      <div>count: {{ count }}</div>
      <button @click="changeCount" class="border rounded-4 py-1 px-4 hover:border-blue-700">+1</button>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue'
  import { useStore, useRouter, useRoute } from './../utils/vueApi'

  const router = useRouter()
  const route = useRoute()
  function changeRouter() {
    router.push('/optionApi')
  }

  const store = useStore()
  const count = computed(() => store.state.count)
  function changeCount() {
    store.commit('setCount', count.value + 1)
  }
</script>
