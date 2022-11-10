<template>
  <div>
    <div class="flex items-start justify-between">
      <div class="w-1/2 overflow-x-hidden">
        <h1 class="text-md mb-2">1、默认展示，测试 seriesData 变更</h1>
        <button @click="changeDate" class="border rounded-4 py-1 px-4">切换</button>
        <div class="h-80">
          <echarts-module :options="options1" :seriesData="seriesData1"></echarts-module>
        </div>
      </div>
      <div class="w-1/2 overflow-x-hidden">
        <h1 class="text-md mb-2">2、默认不展示，展示的时候，设置 seriesData</h1>
        <button @click="changeDate1" class="border rounded-4 py-1 px-4">切换</button>
        <div v-if="isShow" class="h-80">
          <echarts-module :options="options2" :seriesData="seriesData2"></echarts-module>
        </div>
      </div>
    </div>
    <div class="flex items-start justify-between">
      <div class="w-1/2 overflow-x-hidden">
        <h1 class="text-md mb-2">3、默认展示，测试 seriesData 变更</h1>
        <button @click="changeDate" class="border rounded-4 py-1 px-4">切换</button>
        <div class="h-80">
          <echarts-module :options="options1" :seriesData="seriesData1"></echarts-module>
        </div>
      </div>
      <div class="w-1/2 overflow-x-hidden">
        <h1 class="text-md mb-2">4、默认不展示，展示的时候，设置 seriesData</h1>
        <button @click="changeDate1" class="border rounded-4 py-1 px-4">切换</button>
        <div v-if="isShow" class="h-80">
          <echarts-module :options="options1" :seriesData="seriesData2"></echarts-module>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import EchartsModule from './../components/EchartsModule.vue'

  export default {
    name: 'EchartsExample',
    components: {
      EchartsModule
    },
    data() {
      return {
        isShow: false,
        options1: {
          xAxis: {
            type: 'category',
            data: ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie']
          },
          yAxis: {},
          tooltip: {
            trigger: 'axis'
          }
        },
        seriesData1: [
          {
            type: 'bar',
            name: '2015',
            data: [89.3, 92.1, 94.4, 85.4]
          },
          {
            type: 'bar',
            name: '2016',
            data: [95.8, 89.4, 91.2, 76.9]
          },
          {
            type: 'bar',
            name: '2017',
            data: [97.7, 83.1, 92.5, 78.1]
          }
        ],

        options2: {
          xAxis: {},
          yAxis: {
            type: 'category',
            data: ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie']
          },
          tooltip: {
            trigger: 'axis'
          }
        },
        seriesData2: []
      }
    },
    methods: {
      changeDate() {
        this.seriesData1 = [
          {
            type: 'bar',
            name: '2015',
            data: [89.3, 92.1, 94.4, 85.4]
          }
        ]
      },
      changeDate1() {
        this.isShow = true
        this.seriesData2 = [
          {
            type: 'bar',
            name: '2015',
            data: [89.3, 92.1, 94.4, 85.4]
          },
          {
            type: 'bar',
            name: '2016',
            data: [95.8, 89.4, 91.2, 76.9]
          }
        ]
      }
    }
  }
</script>
