import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Home from '@/pages/home'
import Artists from '@/pages/artists'
import Listcate from '@/pages/listcate'
import Ucenter from '@/pages/ucenter'
import Search from '@/pages/search'



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
          component: Home
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
          component: Search
        },
      // 定义了一个meta 方便前端权限验证
    {path: '/login',
     name:'Login',
     component:Login, meta: { isPublic: true } },
  ]})
// vue router文档
    router.beforeEach((to, from ,next) => {
   // 如果要去的页面是不公开的 并且token为空
  if (!to.meta.isPublic && !localStorage.token) {
      //跳转到登录
    return next('/login')
  }
    // 正常情况放行
  next()
})


      ]
    }
  ]
})
