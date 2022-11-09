<template>
  <div ref="eChartsRef" style="width: 100%; height: 100%"></div>
</template>

<script>
  import * as echarts from 'echarts'
  import { useEventListener } from '@vueuse/core'

  export default {
    name: 'EchartsModule',
    props: {
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
        type: Array,
        default() {
          return []
        }
      },
      // 数据集
      dataset: {
        type: Array,
        default() {
          return []
        }
      },
      // 数据集合
      seriesData: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        // 组件实例对象
        myChart: null
      }
    },
    watch: {
      //监听数据变化，重新渲染echart图表
      seriesData: {
        handler() {
          this.$nextTick(() => {
            //重新渲染图表
            this.update()
          })
        },
        deep: true
      }
    },
    setup() {
      // 浏览器大小该表的时候，自动 resieze
      useEventListener(window, 'resize', () => {
        if (this.myChart) this.myChart.resize()
      })
    },
    mounted() {
      //初始化 echart 实例
      this.init()
    },
    methods: {
      // 初始化ECharts组件
      init() {
        this.destroyEchart() //判断是否有echart实例，如果有，先销毁
        this.myChart = echarts.init(this.$refs.eChartsRef, null, this.opts)
        this.update()
      },
      // 更新组件数据
      update() {
        // 逻辑处理组件options参数
        const options = {
          series: this.seriesData
          // other options here ...
        }
        // 调用ECharts组件setOption更新
        this.$nextTick(() => {
          this.myChart.setOption(options, true)
          //如果需要动态图表渲染，加在这...
        })
      },
      // 销毁ECharts实例
      destroyEchart() {
        if (this.myChart) {
          this.myChart.clear()
          this.myChart.dispose()
          this.myChart = null
        }
      },
      // 可以从外部手动调用 resize
      resize() {
        if (this.myChart) this.myChart.resize()
      }
    },
    beforeDestroy() {
      //离开当前组件前销毁echart实例
      this.destroyEchart()
    }
  }
</script>
