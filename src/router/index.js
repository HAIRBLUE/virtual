import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelloWorldVue from '../components/HelloWorld.vue'
import VideoView from '../components/VideoView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/HellpWorldVue',
    name: 'HelloWorldVue',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: HelloWorldVue
  },
  {
    path: '/VideoView',
    name: 'VideoView',
    component: VideoView
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: __dirname,
  routes
})

export default router
