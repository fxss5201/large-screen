<template>
  <div class="scale-box" :style="{ width: cw + 'px', height: ch + 'px' }">
    <div class="scale-container" :style="{ transform: 'scale(' + scale + ')', width: width + 'px', height: height + 'px' }">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { useDebounceFn, useEventListener } from '@vueuse/core'

  // 容器宽高
  let cw = ref(0)
  let ch = ref(0)

  // UI规范宽高
  let width = 1920
  let height = 1080
  let scale = ref(1)

  function refresh() {
    // 可视区宽高比例
    let ww = window.innerWidth / width
    let wh = window.innerHeight / height

    // 计算实际最合适缩放比：以小者为缩放基准，内容不足处留白处理，确保内容展示的完整性。原理同背景图的background-size属性。
    scale.value = ww < wh ? ww : wh

    // 更新容器渲染宽高
    cw.value = width * scale.value
    ch.value = height * scale.value
  }

  refresh()
  // 防抖设置
  const debouncedFn = useDebounceFn(
    () => {
      refresh()
    },
    100,
    { maxWait: 500 }
  )

  useEventListener(window, 'resize', () => {
    debouncedFn()
  })
</script>

<style lang="less" scoped>
  .scale-box {
    width: 100%;
    height: 100%;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .scale-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-origin: 0 0;
    transition: all 0.3s linear;
    user-select: none;
  }
</style>
