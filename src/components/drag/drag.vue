<template>
                                              <!-- 事件是先捕获再冒泡的  -->
  <div id="drag" @mousemove="move" @mouseup="up" @click.capture="reset">{{msg}}
    <tips @down="down" :nodeName="nodeName"></tips>
    <graph :nodeName="nodeName" :moveNode="moveNode" @clearNode="clearNode" ref="graph"></graph>
    <draw :nodeName="nodeName" :moveNode="moveNode" ref="draw"></draw>
  </div>
</template>
<script>
import draw from './draw.vue';
import graph from './graph.vue';
import tips from './tips.vue';
export default {
  components: {
    tips,
    draw,
    graph
  },
  data () {
    return {
      msg: 'echarts',
      moveNode: '',
      nodeName: '',
      checkIndex: ''
    }
  },

  methods: {

    down (event) {
      this.moveNode = event.target;
      // console.log(this.moveNode);
      this.nodeName = this.moveNode.textContent;
      this.$nextTick(() => {
        let moveShadow = document.getElementsByClassName('move')[0];
        moveShadow.style.transform  = `translate(${event.pageX - 10}px,${event.pageY - 80}px)`;
      })
    },
    clearNode () {
      this.moveNode = ''
    },
    up () {
      this.nodeName = '';
      this.moveNode = ''
    },
    reset () {
      this.$refs.draw.reset()
    },

    move (event) {
      // console.log(event.pageX)
      let moveShadow = document.getElementsByClassName('move')[0];
      if (moveShadow) {
        moveShadow.style.transform  = `translate(${event.pageX - 10}px,${event.pageY - 80}px)`;
        // moveShadow.style.top  = `${event.pageY - 80}px`
        // moveShadow.style.left  = `${event.pageX}px`
      }

    },

  }
}
</script>
<style lang="less" scoped>

</style>
