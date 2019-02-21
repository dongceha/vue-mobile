<template>
  <div id="app">
     <div>
       <router-link to="/drag">toDrag</router-link>
       <router-link to="/draggable">toDraggable</router-link>
       <router-link to="/dnd">toDnd</router-link>
       <router-view></router-view>
     </div>
  </div>
</template>
<script>
import getData from './util.js'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js'
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    async fetchData () {
      const data = await getData();
      this.msg = data;
    }
  }
}
</script>
