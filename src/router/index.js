/*
* 路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

//引入需要跳转的路由组件
import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

// 声明使用对象
Vue.use(VueRouter)

// 关于export/import,在es6中他们是一对，export是用于单页面组件定义，当有页面用到该组件就把它import进去就可以了
// 这里的 VueRouter 实例就是作为一个组件，其他需要它的页面去使用
export default new VueRouter({
  // 所有路由
  routes: [
    {
      path: '/msite',
      component: Msite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    { // 设置默认跳转路径
      path: '/',
      redirect: '/msite'
    }
  ]
})
