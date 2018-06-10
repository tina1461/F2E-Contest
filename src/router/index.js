import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'
import toDoList from '@/pages/todolist/index.vue'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(Router)
Vue.use(iView);

export default new Router({
  // mode: 'history',//remove hashtag '/#'
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/todolist',
      name: 'toDoList',
      component: toDoList
    }
  ],//setting 路徑及對應檔案
})
