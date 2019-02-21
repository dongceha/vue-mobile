<template>
  <div id="graphCharts" @mouseup="toFirstNode"></div>
</template>
<script>
import echarts from '../../js/echarts.min.js';
import svgImg from '../../img/polygon.svg'
export default {
  data () {
    return {
      graphCharts: ''  ,
      graphData: [],
      graphLink: []
    }
  },
  props: {
    nodeName: {
      type: String,
      default: ''
    },
    moveNode: {
      default: ''
    }
  },
  mounted () {
    this.graphCharts = echarts.init(document.getElementById('graphCharts'));    
    this.initGraph();
    this.drawGraph();
  },
  methods: {
    toFirstNode () {
      // console.log(this.moveNode)
      if (this.moveNode && this.graphData.length == 0) {
        let name = this.moveNode.textContent;
        let value = this.moveNode.dataset.value;
        let name2 = name + new Date().getTime()
        this.graphData.push({
          name: name2,
          value,
          realName: name,
          symbolSize: 40
        })
        this.drawGraph()
      }
    },
    drawGraph () {
      let option = {
        series: [
          {
            type: 'graph',
            layout: 'force',
            force: {
              repulsion: 500,
              // gravity: 20
            },
            label: {
              show: true,
              formatter: function (params) {
                return `${params.data.realName}:\n\n ${params.value}`
              },
              color: '#fff',
              fontFamily: 'Microsoft YaHei'
            },
            roam: true,
            draggable: true,
            symbol: 'image://' + svgImg,
            symbolSize: [20,10],
            edgeSymbol: ['none', 'arrow'],
            data: this.graphData,
            links: this.graphLink
          }
        ]
      }
      this.graphCharts.setOption(option);
      setTimeout(() => {
        window.onresize = () => {
          this.graphCharts.resize()
        }
      }, 100);
    },
    initGraph () {
      this.graphCharts.on('mouseup', (params) => {
        if (this.moveNode) {
          let name = this.moveNode.textContent;
          let value = this.moveNode.dataset.value;
          let name2 = name + new Date().getTime()
          this.graphData.push({
            name: name2,
            value,
            realName: name,
            symbolSize: 40
          })
          this.graphLink.push({
            target: params.name,
            source: name2
          })
          this.$emit('clearNode');
          this.drawGraph()
        } else {
          console.log(params)
        }
      })
    }
  }
}
</script>
<style lang="less">
#graphCharts{
  width: 45%;
  height: 500px;
}
</style>

