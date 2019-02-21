<template>
  <div id="dnd">
    <div v-for="(item, index) in dragData" :key="index">
      <draggable :data="item.name">
        <div>{{item.name}}</div>
      </draggable>
    </div>
      <droppable
        @drop="onDrop"
        @dragenter="onDragEnter"
        @dragleave="onEnterLeave"
      >
      <div class="dragArea" id="dragArea">
        <!-- <vuedraggable :data="dropData">
          <transition-group>
            <div v-for="(item, index) in dropData" :key="index" class="spark">{{item}}</div>
          </transition-group>
        </vuedraggable> -->
        <div v-dragx @bindUpdate="bindUpdate" v-for="(item, index) in dropData" :key="index" class="spark drag">{{item}}</div>
      </div>
      </droppable>
    </div>
  </div>
</template>
<script>
import Draggable from './drag/draggable.vue';
import Droppable from './drag/droppable.vue';
import vuedraggable from 'vuedraggable';
import '../../js/dragx.js';
export default {
  components: {
    Draggable,
    Droppable,
    vuedraggable
  },
  data () {
    return {
      dragData: [
        {
          name: 'drag1'
        }, {
          name: 'drag2'
        }, {
          name: 'drag3'
        }, {
          name: 'drag4'
        }, {
          name: 'drag5'
        }, {
          name: 'drag6'
        }
      ],
      dropData: [
      ],
      dragBox:{
			        dragBarClass:"drag",
			        left:0,
			        top:10,
			        width:500,
			        height:400,
              dirctDom:false,
              // canDrag: true,
              // dragContainerId: 'dragArea'
			    },
    }
  },
  mounted () {
  },
  methods: {
    onDrop (params) {
      let dropArea = document.querySelector('.dragArea');
      dropArea.classList.remove('bck999');
      this.dropData.push(params.data)
    },
    onDragEnter (params) {
      let dropArea = document.querySelector('.dragArea');
      dropArea.classList.add('bck999')
    },
    onEnterLeave (params) {
      let dropArea = document.querySelector('.dragArea');
      dropArea.classList.remove('bck999')
    },
    bindUpdate (event) {
      // var data = event.detail;
      // console.log(data.left);
      // var target = event.target;
      // console.log(target)
      // target.style.transform = `translate(${data.left}px, ${data.top}px)`;
    }
  }
}
</script>
<style lang="less" scoped>
.dnd-drop-content{
  width: 300px;
}
.dnd-drag-content{
  width: 100px
}
.dragArea{
  width: 150px;
  height: 300px;
  border: 1px solid #999;
  .spark{
    background: #57f;
    width: 100px;
    text-align: center;
    height: 30px;
    line-height: 30px;
    display: inline-block;
    margin: 5px;
  }
}
.bck999{
  background-color: #eee;
  box-shadow: inset 0px 0px 40px 20px #ccc;
}
</style>
