import Vue from 'vue'
import Router from 'vue-router'
import User from '@/components/User'
import Iindex from '@/components/Iindex'
import Kefu from '@/components/Kefu'
import Nearby from '@/components/Nearby'
import Sos from '@/components/Sos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Sos',
      component: Sos
    },
    {
      path: '/index',
      name: 'Iindex',
      component: Iindex
    },
    {
      path: '/kefu',
      name: 'Kefu',
      component: Kefu
    },
    {
      path: '/nearby',
      name: 'Nearby',
      component: Nearby
    },
    {
      path: '/user',
      name: 'User',
      component: User
    }
  ]
})
