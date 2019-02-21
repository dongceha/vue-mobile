<template>
  <div class="body">
    d3Geo
  </div>
</template>
<script>
import d3 from '../../js/d3.js';
import china from '../../json/china.geo.json'
export default {
  data () {
    return {
      width: 800,
      height: 800,
    }
  },
  mounted () {
    this.initSvg();
  },
  methods: {
    initSvg () {
      var svg = d3.select('.body')
                   .append('svg')
                   .attr('width', this.width)
                   .attr('height', this.height);
      
      // 投影函数
      var projection = d3.geo.mercator()
                              .center([107, 31])
                              .scale(700)
                              .translate([this.width/2, this.height/2]);
      // 地理路径生成器
      var path = d3.geo.path()
                        .projection(projection);
      var color = d3.scale.category20();
      svg.selectAll('path')
              .data(china.features)
              .enter()
              .append('path')
              .attr('stroke', '#000')
              .attr('stroke-width', 1)
              .attr('fill', function (d, i) {
                return color(i)
              })
              .attr('d', path)  // 使用地理路径生成器 等价于 function(d){return path(d)}
              .on('mouseover', function (d, i) {
                d3.select(this)
                  .attr('fill', 'yellow');
              })
              .on('mouseout', function (d, i) {
                d3.select(this)
                  .attr('fill', color(i))
              })
    }
  }
}
</script>
