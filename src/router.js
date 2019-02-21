import Vue from "vue";
import VueRouter from 'vue-router';
import { resolve } from "path";

Vue.use(VueRouter);

const routes = [
  { path: '/drag', component: resolve => { require(['./components/drag/drag.vue'], resolve) } },
  { path: '/draggable', component: resolve => { require(['./components/drag/vuedrag.vue'], resolve) } },
  { path: '/dnd', component: resolve => { require(['./components/drag/dnd.vue'], resolve) } },
];
var router = new VueRouter({
  routes
})
export default router;