import Vue from 'vue'
import App from './App.vue'


import Home from './HomePage.vue'
import HelloWorldVue from './components/HelloWorld.vue'
import VideoView from './components/VideoView.vue'


import VueRouter from  'vue-router'
Vue.config.productionTip = false
// import Vant from 'vant';
import 'vant/lib/index.css';

import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)
// 这里是为了兼容m3u8
const hls = require('videojs-contrib-hls')
Vue.use(hls)
// Vue.use(Vant);
Vue.use(VueRouter);

//配置路由
const router = new VueRouter({
  routes: [//当路径为/时 跳转到Home组件中
    { path: "/", component: HelloWorldVue },
    { path: "/HelloWorldVue", component: HelloWorldVue},
    { path: "/VideoView", component: VideoView},
  ],
//路由模式为历史模式
  mode: "hash"
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
