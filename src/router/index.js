import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Home from '@/pages/home'
import Artists from '@/pages/artists'
import Listcate from '@/pages/listcate'
import Ucenter from '@/pages/ucenter'
import Search from '@/pages/search'
import HotList from "@/pages/musiclist/hot_list"
import NewList from "@/pages/musiclist/new_list"
import PlayDemo from "@/components/PlayDemo"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      redirect: "/home",
      component: Index,
      children: [
        {
          path: "home",
          component: Home,
        },
        {
          path: "artists",
          component: Artists,
        },
        {
          path: "listcate",
          redirect: "/listcate/hot",
          component: Listcate,
          children:[
            {
              path:"hot",
              component:HotList
            },
            {
              path:"new",
              component:NewList
            },
          ]
        },
        {
          path: "ucenter",
          component: Ucenter
        },
        {
          path: "search",
          component: Search
        },
        // 播放组件
        {
          path:"playdemo",
          component:PlayDemo
        }
      ]
    },
    {
      path:"/player/:id/:name/:image",
      name:"Player",
      component:() => import("../components/PlayDemo.vue")
    },
  ]
})
