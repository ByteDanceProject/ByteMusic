import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Home from '@/pages/home'
import Artists from '@/pages/artists'
import Listcate from '@/pages/listcate'
import Ucenter from '@/pages/ucenter'
import Mine from '@/pages/mine'
import Register from '@/pages/register'
import HotList from "@/pages/musiclist/hot_list"
import NewList from "@/pages/musiclist/new_list"
import artistsDetial from "@/pages/artistsDetial"
const Search = () => import('@/pages/Search/index')



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
          redirect: "home/hot",
          children: [
            {
              path: "hot",
              component: HotList
            },
            {
              path: "new",
              component: NewList
            },
          ]
        },
        {
          path: "artists",
          component: Artists
        },
        {
          path:"artistsDetial",
          component: artistsDetial,
          props:true
        }
        ,
        {
          path: "listcate",
          redirect: "/listcate/hot",
          component: Listcate,
          children: [
            {
              path: "hot",
              component: HotList
            },
            {
              path: "new",
              component: NewList
            },
          ]
        },
        {
          path: "ucenter",
          component: Ucenter,
          children: [
            {
              path: "mine",
              component: Mine
            },
            {
              path: "register",
              component: Register
            }
          ],
        },
        {
          path: "search",
          name: 'search',
          component: Search,
          redirect: "search/single",
          children: [
            {
              // 单曲
              path: "single",
              name: 'single',
              component: () => import('@/pages/Search/Single')
            },
            {
              // 专辑
              path: "album",
              name: 'album',
              component: () => import('@/pages/Search/Album')
            },
            {
              // 歌手
              path: "singer",
              name: 'singer',
              component: () => import('@/pages/Search/Singer')
            },
            {
              // 视频
              path: "vedio",
              name: 'vedio',
              component: () => import('@/pages/Search/Vedio')
            },
            {
              // 歌词
              path: "words",
              name: 'words',
              component: () => import('@/pages/Search/Words')
            },
            {
              // 歌单
              path: "singmenu",
              name: 'singmenu',
              component: () => import('@/pages/Search/Singmenu')
            },
            {
              // 电台
              path: "station",
              name: 'station',
              component: () => import('@/pages/Search/Station')
            },
            {
              // 用户
              path: "user",
              name: 'user',
              component: () => import('@/pages/Search/User')
            },
          ]
        },
        // 播放组件
        {
          path:"playdemo",
          component:() => import("../components/PlayDemo.vue")
        }
      ]
    },
    {
      path: "/player/:id/:name/:image",
      name: "Player",
      component: () => import("../components/PlayDemo.vue")
    },
  ]
})
