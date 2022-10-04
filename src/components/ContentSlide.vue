<template>
  <div class="slide">
    <van-tabs v-model="active" @click="onClick">
      <van-tab title="全部">全部</van-tab>
      <van-tab title="景点">景点</van-tab>
      <van-tab title="教学楼">教学楼</van-tab>
      <van-tab title="食堂">食堂</van-tab>
      <van-tab title="宿舍楼">宿舍楼</van-tab>
      <van-tab title="运动场所">运动场所</van-tab>
      <van-tab title="其他">其他</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import bus from '../components/bus.js'
import Vue from 'vue';
import { Tab, Tabs } from 'vant';
Vue.use(Tab);
Vue.use(Tabs);
export default {
  data() {
    return {
      active: 0,
      nochange: true,
      scene: false,
    };
  },
  methods: {
    onClick(title) {
      if (title == 0) {
        bus.$emit('changeAll', this.scene, this.nochange)
      }
      if (title == 1) {
        bus.$emit('changeScene', this.scene, this.nochange)
      }
      if (title == 2) {
        bus.$emit('changeteach', this.scene, this.nochange)
      }
      if (title == 3) {
        bus.$emit('changecantee', this.scene, this.nochange)
      }
      if (title == 4) {
        bus.$emit('changedorm', this.scene, this.nochange)
      }
      if (title == 5) {
        bus.$emit('changesport', this.scene, this.nochange)
      }
      if (title == 6) {
        bus.$emit('changeother', this.scene, this.nochange)
      }
    },
  },
}
</script>

<style lang="less">
.van-tab__text {
  z-index: 2;
  color: black;
}

.van-tab--active .van-tab__text {
  color: #ffffff;
}


.van-tabs__nav div:nth-child(8) {
  position: absolute;
  z-index: 1;
  margin-top: 1.54vw;
  margin-bottom: 2vw;
  width: 17vw;
  height: 6.67vw;
  background-color: #65A3F0;
  border-radius: 7.7vw;
}

.van-tabs__content {
  display: none;
}
</style>
