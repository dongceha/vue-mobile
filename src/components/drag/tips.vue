<template>
  <div class="tips">
    <div class="tip move" v-show="nodeName">{{nodeName}}</div>
    <div class="tip" v-for="index in 5" :data-value="index"  @mousedown="down($event)">{{index}}排</div>
  </div>
</template>
<script>
export default {
  props: {
    nodeName: {
      type: String,
      default: ''
    }
  },
  methods: {
    down (event) {
      this.$emit('down', event)
    }
  }
}
</script>
<style lang="less">
.tips{
  width: 300px;
  position: relative;
  user-select:none;
  .tip{
    width: 40px;
    height: 40px;
    display: inline-block;
    background-color: #22f;
    color: white;
    text-align: center;
    line-height: 40px;
    margin-right: 10px;
    cursor: pointer;
    user-select:none;
  }
  .move{
    position: absolute;
    top: 0;
    left: 0;
    // z-index: 999;
  }
}
</style>
