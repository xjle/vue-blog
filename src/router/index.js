import Vue from 'vue'
import VueRouter from 'vue-router'
// import Manage from '@/views/manage/index.vue'
// import Forget from '@/views/Forget.vue'
// import Auth from '@/views/auth/index.vue'
// const Manage = () => import('@/views/manage/index.vue')
// const Forget = () => import('@/views/Forget.vue')
// const Auth = () => import('@/views/auth/index.vue')

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
    component: () => import('@/views/manage/index.vue'),
    children: [
      { path: '', component: () => import('@/views/manage/article.vue') },
      { path: 'user', component: () => import('@/views/manage/user.vue') }
    ]
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('@/views/auth/index.vue')
  },
  {
    path: '/forget',
    name: 'Forget',
    component: () => import('@/views/Forget.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
