<template>
  首页
  <!-- 准备一个大小合适的div盒子 -->
  <div id="main" style="height: 400px; width: 100%"></div>
</template>
<script lang="ts" setup>
import echarts from 'echarts'
import { onMounted } from 'vue'

onMounted(() => {
  type EChartsOption = echarts.EChartsOption

  var chartDom = document.getElementById('main')!
  var myChart = echarts.init(chartDom)
  var option: EChartsOption

  // There should not be negative values in rawData
  const rawData = [
    [100, 302, 301, 334, 390, 330, 320],
    [320, 132, 101, 134, 90, 230, 210],
    [220, 182, 191, 234, 290, 330, 310],
    [150, 212, 201, 154, 190, 330, 410],
    [820, 832, 901, 934, 1290, 1330, 1320]
  ]
  const totalData = []
  for (let i = 0; i < rawData[0].length; ++i) {
    let sum = 0
    for (let j = 0; j < rawData.length; ++j) {
      sum += rawData[j][i]
    }
    totalData.push(sum)
  }
  const grid = {
    left: 100,
    right: 100,
    top: 50,
    bottom: 50
  }
  const series = ['Direct', 'Mail Ad', 'Affiliate Ad', 'Video Ad', 'Search Engine'].map(
    (name, sid) => {
      return {
        name,
        type: 'bar',
        stack: 'total',
        barWidth: '60%',
        label: {
          show: true,
          formatter: (params) => Math.round(params.value * 1000) / 10 + '%'
        },
        data: rawData[sid].map((d, did) => (totalData[did] <= 0 ? 0 : d / totalData[did]))
      }
    }
  )
  option = {
    legend: {
      selectedMode: false
    },
    tooltip: {
      trigger: 'axis',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
      //   formatter: '{c}', //折线图、柱状（条形）图、K线图 : {a}（系列名称），{b}（类目值），{c}（数值）, {d}（无）
      axisPointer: {
        type: 'cross' //line:直线指示器 || shadow:阴影指示器  || none 无指示器 || cross 十字准星指示器
      }
    },
    grid,
    yAxis: {
      type: 'value'
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    series
  }

  option && myChart.setOption(option)

  window.addEventListener('resize', () => {
    myChart.resize()
  })
})
</script>
<style lang="scss" scoped></style>
