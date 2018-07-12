import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'
import toDoList from '@/pages/todolist/index.vue'
import filters from '@/pages/filters/index.vue'
import admin from '@/pages/admin/index.vue'
import productGallery from '@/pages/productGallery/index.vue'
import signup from '@/pages/signUp/index.vue'


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
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin
    },
    {
      path: '/productGallery',
      name: 'productGallery',
      component: productGallery
    },
    {
      path: '/validation',
      name: 'signup',
      component: signup
    }
    
  ],//setting 路徑及對應檔案
})
