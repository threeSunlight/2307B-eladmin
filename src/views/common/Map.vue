<template>
  我是地图
  <!-- 

   1. 绘制中国地图
    第一步: 先准备好中国地图的json数据,也就是经纬度的数据集合
    第二步: 在assets文件夹下面,新建json文件夹,放置我们中国json数据
    第三步:  * 准备一个盒子,设置宽和高
            * 实例化div盒子,
            * 注册可用的地图，只在 geo 组件或者map图表类型中使用
            * 设置图表 option


 -->
  <div id="echart_china" ref="echart_china"></div>
</template>
<script>
import echarts from 'echarts'
import chinamap from '@/assets/json/china.json'
export default {
  data() {
    return {
      myChart: null
    }
  },
  methods: {},
  mounted() {
    // 1. 因为要获取dom元素,所以需要再实例挂在后,才能获取
    let chinaDom = document.getElementById('echart_china')
    // 2. 实例化当前echarts图标
    this.myChart = echarts.init(chinaDom)
    // 3. 使用map类型的地图,进行注册地图
    echarts.registerMap('china', chinamap) //用导入的json文件注册一个name:china的地图组件
    // 4. 设置图标options选项
    var option = {
      series: [
        {
          name: '中国地图',
          type: 'map',
          map: 'china', // 这个是上面注册时的名字哦，registerMap（'这个名字保持一致'）
          label: {
            show: true
          }
        }
      ]
    }
    console.log('option1:', option)
    //5. 显示地图
    this.myChart.setOption(option) // 用 option 和 option2 效果一样
  }
}
</script>
<style scoped>
#echart_china {
  width: 100vw;
  height: 100vh;
  background-color: #f1f3f4;
}
</style>
