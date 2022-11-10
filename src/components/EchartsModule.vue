<template>
  <div ref="eChartsRef" style="width: 100%; height: 100%"></div>
</template>

<script setup>
  import { defineProps, watch, nextTick, ref, onMounted, onBeforeUnmount } from 'vue'
  import * as echarts from 'echarts'
  import { useEventListener } from '@vueuse/core'

  const props = defineProps({
    // https://echarts.apache.org/zh/api.html#echarts.init
    // 初始化传入的 opts
    opts: {
      type: Object,
      default() {
        return {
          renderer: 'svg'
        }
      }
    },
    options: {
      type: Object,
      default() {
        return {}
      }
    },
    // 数据集合
    seriesData: {
      type: Array,
      default() {
        return []
      }
    },
    // 自动切换的时间跨度
    intervalTime: {
      type: Number,
      default: 2000
    }
  })

  const eChartsRef = ref()
  let myChart = null
  let echartsOptions = {}
  let myChartEvent = null
  function init() {
    destroyEchart() //判断是否有echart实例，如果有，先销毁
    myChart = echarts.init(eChartsRef.value, null, props.opts)
    update()
  }

  function update() {
    // 逻辑处理组件options参数
    const options = {
      ...props.options,
      series: props.seriesData
      // other options here ...
    }
    echartsOptions = options
    // 调用ECharts组件setOption更新
    nextTick(() => {
      myChart.setOption(options, true)
      //如果需要动态图表渲染，加在这...
    })
  }

  function destroyEchart() {
    if (myChart) {
      if (typeof myChart.clear === 'function') myChart.clear()
      if (typeof myChart.dispose === 'function') myChart.dispose()
      myChart = null
    }
  }

  function echartsPlay(dataIndex = -1) {
    let currentIndex = dataIndex
    if (!myChartEvent) {
      myChartEvent = setInterval(() => {
        console.log(111)
        const dataLen = echartsOptions.series[0].data.length
        if (myChart.dispatchAction) {
          // 取消之前高亮的图形
          myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: currentIndex
          })
          currentIndex = (currentIndex + 1) % dataLen
          // 高亮当前图形
          myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: currentIndex
          })
          // 显示 tooltip
          myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: currentIndex
          })
        }
      }, props.intervalTime)
    }
  }
  echartsPlay()

  onMounted(() => {
    init()
  })
  onBeforeUnmount(() => {
    destroyEchart()
    if (myChartEvent) clearInterval(myChartEvent)
  })

  watch(
    () => props.seriesData,
    () => {
      update()
    },
    { deep: true }
  )

  // 浏览器大小改变的时候，自动 resieze
  useEventListener(window, 'resize', () => {
    if (myChart) myChart.resize()
  })

  // export default {
  //   name: 'EchartsModule',
  //   props: {
  //     // https://echarts.apache.org/zh/api.html#echarts.init
  //     // 初始化传入的 opts
  //     opts: {
  //       type: Object,
  //       default() {
  //         return {
  //           renderer: 'svg'
  //         }
  //       }
  //     },
  //     options: {
  //       type: Object,
  //       default() {
  //         return {}
  //       }
  //     },
  //     // 数据集
  //     dataset: {
  //       type: Array,
  //       default() {
  //         return []
  //       }
  //     },
  //     // 数据集合
  //     seriesData: {
  //       type: Array,
  //       default() {
  //         return []
  //       }
  //     }
  //   },
  //   data() {
  //     return {
  //       // 组件实例对象
  //       myChart: null
  //     }
  //   },
  //   watch: {
  //     //监听数据变化，重新渲染echart图表
  //     seriesData: {
  //       handler() {
  //         this.$nextTick(() => {
  //           //重新渲染图表
  //           this.update()
  //         })
  //       },
  //       deep: true
  //     }
  //   },
  //   mounted() {
  //     //初始化 echart 实例
  //     this.init()
  //   },
  //   methods: {
  //     // 初始化ECharts组件
  //     init() {
  //       this.destroyEchart() //判断是否有echart实例，如果有，先销毁
  //       this.myChart = echarts.init(this.$refs.eChartsRef, null, this.opts)
  //       this.myChart.setOption(this.options)
  //       this.update()
  //     },
  //     // 更新组件数据
  //     update() {
  //       // 逻辑处理组件options参数
  //       const options = {
  //         series: this.seriesData
  //         // other options here ...
  //       }
  //       // 调用ECharts组件setOption更新
  //       this.$nextTick(() => {
  //         this.myChart.setOption(options)
  //         //如果需要动态图表渲染，加在这...
  //       })
  //     },
  //     // 销毁ECharts实例
  //     destroyEchart() {
  //       if (this.myChart) {
  //         this.myChart.clear()
  //         this.myChart.dispose()
  //         this.myChart = null
  //       }
  //     },
  //     // 可以从外部手动调用 resize
  //     resize() {
  //       if (this.myChart) this.myChart.resize()
  //     }
  //   },
  //   beforeDestroy() {
  //     //离开当前组件前销毁echart实例
  //     this.destroyEchart()
  //   }
  // }
</script>
