/*
路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'


import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'

// const MSite = () => import('../pages/MSite/MSite.vue')
// const Search = () => import('../pages/Search/Search.vue')
// const Order = () => import('../pages/Order/Order.vue')
// const Profile = () => import('../pages/Profile/Profile.vue')

import Login from '../pages/Login/Login.vue'
// import Shop from '../pages/Shop/Shop.vue'
// import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
// import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'
// import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'

// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  // 所有路由
  routes: [
    {
      path: '/msite',
      component: MSite,
      meta: {
        footer: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        footer: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        footer: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        footer: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      redirect: '/msite',
      meta: {
        footer: true
      }
    }
  ]
})