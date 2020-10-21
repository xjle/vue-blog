import Vue from 'vue'
import VueRouter from 'vue-router'
import Manage from '@/views/manage/index.vue'
import Forget from '@/views/Forget.vue'
import Auth from '@/views/Auth.vue'

Vue.use(VueRouter)

const routes = [
  // { path: '/', redirect: '/home' },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/index.vue'),
    children: [
      {
        path: '',
        name: 'Homepage',
        component: () => import('@/views/homepage/index.vue')
      },
      {
        path: '/settlement',
        name: 'Settlement',
        component: () => import('@/views/settlement/index.vue')
      },
      {
        path: '/shop',
        name: 'Shop',
        component: () => import('@/views/shop/index.vue')
      }
    ]
  },
  {
    path: '/manage',
    name: 'Manage',
    component: Manage,
    children: [
      { path: '', component: () => import('@/views/manage/article.vue') },
      { path: 'user', component: () => import('@/views/manage/user.vue') }
    ]
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/forget',
    name: 'Forget',
    component: Forget
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
