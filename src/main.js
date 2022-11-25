import Vue from 'vue'
import App from './App.vue'


import Home from './HomePage.vue'
import HelloWorldVue from './components/HelloWorld.vue'
import TianeView from './components/TianeView.vue'
import DormmanView from './components/DormmanView.vue'
import DormwomenView from './components/DormwomenView.vue'
import CanteeView from './components/CanteeView.vue'
import EastGate from './components/EastGate.vue'
import SythesizeView from './components/SythesizeView.vue'
import Sythesize2View from './components/Sythesize2View.vue'
import Teaching12View from './components/Teaching12View.vue'
import Teaching34View from './components/Teaching34View.vue'
import BathView from './components/BathView.vue'
import EastGate1View from './components/EastGate1.vue'
import SupermarketView from './components/SupermarketView.vue'
import GraphicView from './components/GraphicView.vue'
import SquareView from './components/SquareView.vue'
import NorthGate from './components/NorthgateView.vue'
import Administrative from './components/AdministrativeView.vue'
import RunView from './components/RunView.vue'
import Basketball from './components/BasketballView.vue'
import PhyeduView from './components/PhyeduView.vue'
import Football from './components/FootballView.vue'
import PractraView from './components/PractraView.vue'
import TennisView from './components/TennisView.vue'
import SourthGate from './components/SourthgateView.vue'
import LibraryView from '@/components/LibraryView.vue'


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
    { path: "/", component: Home },
    { path: "/HelloWorldVue", component: HelloWorldVue},
    { path: "/TianeView", component: TianeView},
    { path: "/DormmanView", component: DormmanView},
    { path: "/DormwomenView", component: DormwomenView},
    { path: "/CanteeView", component: CanteeView},
    { path: "/EastGate", component: EastGate},
    { path: "/SythesizeView", component: SythesizeView},
    { path: "/Sythesize2View", component: Sythesize2View},
    { path: "/Teaching12View", component: Teaching12View},
    { path: "/Teaching34View", component: Teaching34View},
    { path: "/BathView", component: BathView},
    { path: "/EastGate1View", component: EastGate1View},
    { path: "/SupermarketView", component: SupermarketView},
    { path: "/GraphicView", component: GraphicView},
    { path: "/SquareView", component: SquareView},
    { path: "/NorthGate", component: NorthGate},
    { path: "/Administrative", component: Administrative},
    { path: "/RunView", component: RunView},
    { path: "/Basketball", component: Basketball},
    { path: "/PhyeduView", component: PhyeduView},
    { path: "/Football", component: Football},
    { path: "/PractraView", component: PractraView},
    { path: "/TennisView", component: TennisView},
    { path: "/SourthGate", component: SourthGate},
    { path: "/LibraryView", component: LibraryView},
  ],
//路由模式为历史模式
  mode: "hash"
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
