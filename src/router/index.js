import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Home from '@/pages/home'
import Artists from '@/pages/artists'
import Listcate from '@/pages/listcate'
import Ucenter from '@/pages/ucenter'
import HotList from "@/pages/musiclist/hot_list"
import KingList from "@/pages/musiclist/king_list"
import NewList from "@/pages/musiclist/new_list"
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
            {
              path: "king",
              component: KingList
            }
          ]
        },
        {
          path: "artists",
          component: Artists
        },
        {
          path: "listcate",
          component: Listcate
        },
        {
          path: "ucenter",
          component: Ucenter
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

      ]
    }
  ]
})
