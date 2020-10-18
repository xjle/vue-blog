import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/manage',
    name: 'Manage',
    component: () => import(/* webpackChunkName: "manage" */ '@/views/manage/index.vue'),
    children: [
      { path: '', component: () => import('@/views/manage/article.vue') },
      { path: 'user', component: () => import('@/views/manage/user.vue') }
    ]
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('@/views/Auth.vue')
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
