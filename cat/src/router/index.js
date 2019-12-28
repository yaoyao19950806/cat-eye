import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home/Home.vue'),
    redirect: '/tab1',
    children:[
      {
        path : 'tab1',
        name:'tab1',
        component: () => import(/* webpackChunkName: "tab1" */ '../views/Home/pages/Tab1.vue'),
      },
      {
        path : 'tab2',
        name:'tab2',
        component: () => import(/* webpackChunkName: "tab2" */ '../views/Home/pages/Tab2.vue'),
      },
    ]
  },
  {
    path: '/movie',
    name: 'movie',
    component: () => import(/* webpackChunkName: "movie" */ '../views/Movie.vue')
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import(/* webpackChunkName: "mine" */ '../views/Mine.vue')  
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
