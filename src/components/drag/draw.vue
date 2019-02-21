<template>
  <div>
    <div id="mycharts" @mouseup="upToCharts"></div>
    <div id="check" v-show="visible" @click="doDelete">
      <ul>
        <li data-do="delete">删除</li>
        <li data-do="cancel">取消</li>
      </ul>
    </div>
  </div>
</template>
<script>
import echarts from '../../js/echarts.min.js';
export default {
  data () {
    return {
      visible: false,
      myCharts: '',      
      seriesData: [2, 4, 6, 8, 6, 4],
      xData: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高更鞋', '袜子'],  
    }
  },
  props: {
    nodeName: {
      type: String,
      default: ''
    },
    moveNode:{
      default: ''
    }
  },
  mounted () {
    this.drawCharts()
  },
  methods: {
    drawCharts() {
      if (!!this.myCharts){
        this.myCharts.dispose();
      }
      this.myCharts = echarts.init(document.getElementById('mycharts'));
      var option = {
        title: {
          text: '柱状图测试'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: this.xData
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: this.seriesData
        }]
      }
      this.myCharts.setOption(option);
      setTimeout(() => {
        window.onresize = () => {
          // 想要resize 成功，宽度就不能固定，可以使用  %
          this.myCharts.resize()
        }
      }, 100);
      
      this.myCharts.on('click', (params) => {
        var check = document.getElementById('check');
        var event = params.event;
        this.visible = true;
        this.checkIndex = params.dataIndex
        // this.seriesData.splice(params.dataIndex, 1);
        // this.xData.splice(params.dataIndex, 1);
        // this.drawCharts();
        check.style.transform  = `translate(${event.offsetX - 10}px,${event.offsetY - 580}px)`;
      })
    },
    doDelete (event) {
      var target = event.target;
      var cDo = target.dataset.do;
      switch (cDo) {
        case 'delete':
          this.seriesData.splice(this.checkIndex, 1);
          this.xData.splice(this.checkIndex, 1);
          this.drawCharts();
          break;
        case 'cancel':

          break;
        default:
          break;
      }
    },
    upToCharts () {
      if (this.nodeName) {
        let value = this.moveNode.dataset.value;
        let name = this.moveNode.textContent;
        this.seriesData.push(value);
        this.xData.push(name);
        this.drawCharts();
        console.log(this.xData);
      }
    },
    reset () {
      this.visible = false;
    },
  }
  
}
</script>
<style lang="less" scoped>
#mycharts{
  width: 45%;
  height: 500px;
}

#check{
  position: absolute;
  z-index: 999;
  ul{
    position: relative;
    padding: 0;
    list-style-type: none;
    background-color: white;
    border: 1px solid black;
    li{
      width: 60px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      cursor: pointer;
      &:nth-of-type(1){
        border-bottom: 1px solid black;
      }
    }
  }
}
</style>
