import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'
import toDoList from '@/pages/todolist/index.vue'
import filters from '@/pages/filters/index.vue'


Vue.use(Router)


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
    },
    {
      path: '/filter',
      name: 'filters',
      component: filters
    }
  ],//setting 路徑及對應檔案
})
