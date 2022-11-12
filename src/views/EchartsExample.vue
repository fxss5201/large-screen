<template>
  <div>
    <div class="flex items-start justify-between m-2">
      <div class="w-1/2 overflow-x-hidden border rounded-2">
        <h1 class="text-md my-2">1、默认展示，测试 seriesData 变更</h1>
        <button @click="changeDate1" class="border rounded-4 py-1 px-4">切换</button>
        <div class="h-80">
          <echarts-module :options="options1" :seriesData="seriesData1"></echarts-module>
        </div>
      </div>
      <div class="w-1/2 overflow-x-hidden border rounded-2 ml-2">
        <h1 class="text-md my-2">2、默认不展示，展示的时候，设置 seriesData</h1>
        <button @click="changeDate2" class="border rounded-4 py-1 px-4">切换</button>
        <div class="h-80">
          <echarts-module v-if="isShow" :options="options2" :seriesData="seriesData2"></echarts-module>
        </div>
      </div>
    </div>
    <div class="flex items-start justify-between m-2">
      <div class="w-1/2 overflow-x-hidden border rounded-2">
        <h1 class="text-md my-2">3、前后两次赋值的 seriesData[0].data.length 不一样，动画从头开始</h1>
        <button @click="changeDate3" class="border rounded-4 py-1 px-4">切换</button>
        <div class="h-80">
          <echarts-module :options="options3" :seriesData="seriesData3"></echarts-module>
        </div>
      </div>
      <div class="w-1/2 overflow-x-hidden border rounded-2 ml-2">
        <h1 class="text-md my-2">4、切换宽高，自动 resize</h1>
        <button @click="changeDate4" class="border rounded-4 py-1 px-4">切换宽度</button>
        <button @click="changeDate41" class="border rounded-4 py-1 px-4 ml-3">切换高度</button>
        <div class="h-80">
          <div :style="{ width: boxWidth4 ? '100%' : '50%', height: boxHeight4 ? '100%' : '75%' }">
            <echarts-module :options="options4" :seriesData="seriesData4"></echarts-module>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-start justify-between m-2">
      <div class="w-1/2 overflow-x-hidden border rounded-2">
        <h1 class="text-md my-2">5、通过 ref 调用开始结束动画，使用 ref 调用的好处是可以指定在第几项开始动画</h1>
        <button @click="changeDate5" class="border rounded-4 py-1 px-4">开始动画</button>
        <button @click="changeDate51" class="border rounded-4 py-1 px-4 ml-3">关闭动画</button>
        <div class="h-80">
          <echarts-module ref="echartsModule5" :options="options5" :seriesData="seriesData5" :autoPlay="false"></echarts-module>
        </div>
      </div>
      <div class="w-1/2 overflow-x-hidden border rounded-2 ml-2">
        <h1 class="text-md my-2">6、改变 autoPlay 开始结束动画，使用 autoPlay 改变的好处是可以从上次暂停动画项处继续动画</h1>
        <button @click="changeDate6" class="border rounded-4 py-1 px-4">{{ autoPlay6 ? '结束' : '开始' }}动画</button>
        <div class="h-80">
          <echarts-module ref="echartsModule6" :options="options6" :seriesData="seriesData6" :autoPlay="autoPlay6"></echarts-module>
        </div>
      </div>
    </div>
    <div class="flex items-start justify-between m-2">
      <div class="w-1/2 overflow-x-hidden border rounded-2">
        <h1 class="text-md my-2">7、切换动画跳动时间 5s -> 1s</h1>
        <button @click="changeDate7" class="border rounded-4 py-1 px-4">切换</button>
        <div class="h-80">
          <echarts-module :options="options7" :seriesData="seriesData7" :intervalTime="timeout"></echarts-module>
        </div>
      </div>
      <div class="w-1/2 overflow-x-hidden border rounded-2 ml-2">
        <h1 class="text-md my-2">8、通过 isAddOn 添加移除鼠标事件</h1>
        <button @click="changeDate8" class="border rounded-4 py-1 px-4">{{ isAddOn8 ? '移除' : '添加' }}</button>
        <div class="h-80">
          <echarts-module :options="options8" :seriesData="seriesData8" :isAddOn="isAddOn8"></echarts-module>
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
      data: ['Latte', 'Tea', 'Cocoa', 'Brownie']
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
  const boxWidth4 = ref(true)
  const boxHeight4 = ref(true)
  const options4 = reactive({
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
  const seriesData4 = ref([
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
  function changeDate4() {
    boxWidth4.value = !boxWidth4.value
  }
  function changeDate41() {
    boxHeight4.value = !boxHeight4.value
  }

  // 图表5
  const options5 = reactive({
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
  const seriesData5 = ref([
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
  const echartsModule5 = ref()
  function changeDate5() {
    echartsModule5.value.echartsPlay(true, 0, -1)
  }
  function changeDate51() {
    echartsModule5.value.echartsPause()
  }

  // 图表6
  const autoPlay6 = ref(false)
  const options6 = reactive({
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
  const seriesData6 = ref([
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
  const echartsModule6 = ref()
  function changeDate6() {
    autoPlay6.value = !autoPlay6.value
  }

  // 图表7
  const timeout = ref(5000)
  const options7 = reactive({
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
  const seriesData7 = ref([
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
  function changeDate7() {
    timeout.value = 1000
  }

  // 图表8
  const isAddOn8 = ref(false)
  const options8 = reactive({
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
  const seriesData8 = ref([
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
  function changeDate8() {
    isAddOn8.value = !isAddOn8.value
  }
</script>
