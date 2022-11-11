<template>
  <div>
    <div class="flex items-start justify-between">
      <div class="w-1/2 overflow-x-hidden">
        <h1 class="text-md mb-2">1、默认展示，测试 seriesData 变更</h1>
        <button @click="changeDate1" class="border rounded-4 py-1 px-4">切换</button>
        <div class="h-80">
          <echarts-module :options="options1" :seriesData="seriesData1"></echarts-module>
        </div>
      </div>
      <div class="w-1/2 overflow-x-hidden">
        <h1 class="text-md mb-2">2、默认不展示，展示的时候，设置 seriesData</h1>
        <button @click="changeDate2" class="border rounded-4 py-1 px-4">切换</button>
        <div v-if="isShow" class="h-80">
          <echarts-module :options="options2" :seriesData="seriesData2"></echarts-module>
        </div>
      </div>
    </div>
    <div class="flex items-start justify-between">
      <div class="w-1/2 overflow-x-hidden">
        <h1 class="text-md mb-2">3、前后两次赋值的 seriesData[0].data.length 不一样，动画从头开始</h1>
        <button @click="changeDate3" class="border rounded-4 py-1 px-4">切换</button>
        <div class="h-80">
          <echarts-module :options="options3" :seriesData="seriesData3"></echarts-module>
        </div>
      </div>
      <div class="w-1/2 overflow-x-hidden">
        <h1 class="text-md mb-2">4、手动开始动画</h1>
        <button @click="changeDate4" class="border rounded-4 py-1 px-4">开始动画</button>
        <button @click="changeDate41" class="border rounded-4 py-1 px-4 ml-3">关闭动画</button>
        <div class="h-80">
          <echarts-module ref="echartsModule4" :options="options4" :seriesData="seriesData4" :autoPlay="false"></echarts-module>
        </div>
      </div>
    </div>
    <div class="flex items-start justify-between">
      <div class="w-1/2 overflow-x-hidden">
        <h1 class="text-md mb-2">5、手动调用 resize</h1>
        <button @click="changeDate5" class="border rounded-4 py-1 px-4">切换</button>
        <div class="h-80" :style="{ width: boxWidth ? '100%' : '50%' }">
          <echarts-module ref="echartsModule5" :options="options5" :seriesData="seriesData5"></echarts-module>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, reactive, nextTick } from 'vue'
  import EchartsModule from './../components/EchartsModule.vue'

  // 图表1
  const options1 = reactive({
    legend: {},
    xAxis: {
      type: 'category',
      data: ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie', 'Brownie', 'Cheese']
    },
    yAxis: {},
    tooltip: {
      trigger: 'axis'
    }
  })
  const seriesData1 = ref([
    {
      type: 'bar',
      name: '2015',
      data: [89.3, 92.1, 94.4, 85.4, 88, 90]
    },
    {
      type: 'bar',
      name: '2016',
      data: [95.8, 89.4, 91.2, 76.9, 75, 68]
    },
    {
      type: 'bar',
      name: '2017',
      data: [97.7, 83.1, 92.5, 78.1, 95, 93]
    }
  ])
  function changeDate1() {
    seriesData1.value = [
      {
        type: 'bar',
        name: '2015',
        data: [89.3, 92.1, 94.4, 85.4, 50, 69]
      },
      {
        type: 'bar',
        name: '2016',
        data: [95.8, 89.4, 91.2, 76.9, 75, 68]
      }
    ]
  }

  // 图表2
  const isShow = ref(false)
  const options2 = reactive({
    legend: {},
    xAxis: {},
    yAxis: {
      type: 'category',
      data: ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie']
    },
    tooltip: {
      trigger: 'axis'
    }
  })
  const seriesData2 = ref([])
  function changeDate2() {
    isShow.value = true
    seriesData2.value = [
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

  // 图表3
  const options3 = reactive({
    legend: {},
    xAxis: {
      type: 'category',
      data: ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie', 'Brownie', 'Cheese']
    },
    yAxis: {},
    tooltip: {
      trigger: 'axis'
    }
  })
  const seriesData3 = ref([
    {
      type: 'bar',
      name: '2015',
      data: [89.3, 92.1, 94.4, 85.4, 88, 90]
    },
    {
      type: 'bar',
      name: '2016',
      data: [95.8, 89.4, 91.2, 76.9, 75, 68]
    },
    {
      type: 'bar',
      name: '2017',
      data: [97.7, 83.1, 92.5, 78.1, 95, 93]
    }
  ])
  function changeDate3() {
    seriesData3.value = [
      {
        type: 'bar',
        name: '2015',
        data: [89.3, 92.1]
      }
    ]
  }

  // 图表4
  const options4 = reactive({
    title: {
      text: '饼图程序调用高亮示例',
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
      confine: true
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    }
  })
  const seriesData4 = ref([
    {
      name: '访问来源',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [
        { value: 335, name: '直接访问' },
        { value: 310, name: '邮件营销' },
        { value: 234, name: '联盟广告' },
        { value: 135, name: '视频广告' },
        { value: 1548, name: '搜索引擎' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ])
  const echartsModule4 = ref()
  function changeDate4() {
    echartsModule4.value.echartsPlay(true, 0, -1)
  }
  function changeDate41() {
    echartsModule4.value.echartsPause()
  }

  // 图表5
  const boxWidth = ref(true)
  const options5 = reactive({
    legend: {},
    xAxis: {
      type: 'category',
      data: ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie', 'Brownie', 'Cheese']
    },
    yAxis: {},
    tooltip: {
      trigger: 'axis'
    }
  })
  const seriesData5 = ref([
    {
      type: 'line',
      name: '2015',
      data: [89.3, 92.1, 94.4, 85.4, 88, 90]
    },
    {
      type: 'line',
      name: '2016',
      data: [95.8, 89.4, 91.2, 76.9, 75, 68]
    },
    {
      type: 'line',
      name: '2017',
      data: [97.7, 83.1, 92.5, 78.1, 95, 93]
    }
  ])
  const echartsModule5 = ref()
  function changeDate5() {
    boxWidth.value = !boxWidth.value
    nextTick(() => {
      echartsModule5.value.echartsResize()
    })
  }
</script>
