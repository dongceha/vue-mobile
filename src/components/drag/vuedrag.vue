<template>
  <div id="drag">
    vuedrag
    <draggable v-model="dragArr" class="scr">
      <transition-group>
        <div class="dragDiv" v-for="(item, index) in dragArr" :key="item.name">
          {{item.name}}
        </div>
        <div class="dragDiv" v-for="(item, index) in dragArr2" :key="item.name">
          {{item.name}}
        </div>
      </transition-group>
    </draggable>
    {{dragArr}}
    <draggable v-model="dragArr2" class="scr">
      <transition-group>
        <div class="dragDiv" v-for="(item, index) in dragArr2" :key="item.name">
          {{item.name}}
        </div>
      </transition-group>
    </draggable>
    {{dragArr2}}
  </div>  
</template>
<script>
import draggable from 'vuedraggable';
export default {
  components: {
    draggable
  },
  data () {
    return {
      dragArr: [
        {
        id: 1,
        name: 'a'
      }, {
        id: 2,
        name: 'b'
      }, {
        id: 3,
        name: 'c'
      }, {
        id: 4,
        name: 'd'
      }, {
        id: 5,
        name: 'e'
      }, {
        id:6,
        name: 'f'
      }, {
        id: 7,
        name: 'g'
      }, {
        id: 8,
        name: 'h'
      }, {
        id: 9,
        name: 'i'
      }, {
        id: 10,
        name: 'j'
      }, {
        id: 11,
        name: 'k'
      }
      ],
      dragArr2: [
        {
        id: 1,
        name: 'aa'
      }, {
        id: 2,
        name: 'bb'
      }, {
        id: 3,
        name: 'cc'
      }, {
        id: 4,
        name: 'dd'
      }, {
        id: 5,
        name: 'ee'
      }, {
        id:6,
        name: 'ff'
      }, {
        id: 7,
        name: 'gg'
      }, {
        id: 8,
        name: 'hh'
      }, {
        id: 9,
        name: 'ii'
      }, {
        id: 10,
        name: 'jj'
      }, {
        id: 11,
        name: 'kk'
      }
      ],
      options: {
        group: 'description',
        animation: 300,
        scroll: true
      }
    }
  }
}
</script>
<style lang="less" scoped>
.scr{
  height: 200px;
  overflow: auto;
}
.dragDiv{
  width: 80px;
  height: 30px;
  border: 1px solid #999;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
  user-select: none;
  &:nth-of-type(odd){
    background: yellowgreen
  }
  &:nth-of-type(even) {
    background: blueviolet;
  }
}
</style>
