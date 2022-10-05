<template>
  <div>
    <div class="topic">
      <router-link to="/HelloWorldVue">
        <div class="back">
          <img src="../../static/images/back.svg">
        </div>
      </router-link>
      <div class="Ti">
        <div class="title">
          女生寝室
        </div>
      </div>
    </div>
    <div class="video" style="">
      <video-player ref="videoPlayer" class="video-player vjs-custom-skin" :playsinline="false"
        :options="playerOptions" />
    </div>
    <div class="card">
      <div class="wordone">学生公寓1-6</div>
      <div class="lo">
        <div>
          <img src="../../static/images/locate.svg" alt="">
        </div>
        <div>女生公寓</div>
      </div>
      <div class="word">
        女寝公寓群是从后往前的排列顺序，一号楼在最里面，女生公寓群里有零食和饮料的自助售卖机，最外面的四号楼是集中的垃圾回收点，方便快捷。
      </div>
      <div class="wordtwo">
        照片预览
      </div>
      <div class="cardimage">
        <!-- <img src="../../static/images/tianeone.svg"> -->
        <div class="slider" id="slider" style="display: flex;">
          <img v-for="(src,index) in imgSrc" :key="index" :src="src" @touchstart="touchstart" @touchmove="touchmove"
            @click.self="showBigImage($event)" />
        </div>
      </div>
      <BigImg :visible="photoVisible" :url="bigImgUrl" @closeClick="()=>{photoVisible=false}"></BigImg>
    </div>
  </div>
</template>
<script>
import { videoPlayer } from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css';
import 'videojs-contrib-hls'
import BigImg from './BigImage.vue'
export default {
  components: {
    videoPlayer,
    BigImg
  },
  data() {
    return {
      imgSrc: [
        require('../../static/images/dormwomen1.png'),
        require('../../static/images/dormwomen2.png'),
        require('../../static/images/dormwomen3.png'),
        require('../../static/images/dormwomen4.png'),
      ],
      startPointX: 0,
      changePointX: 0,
      showIndex: 0,
      photoVisible: false,
      bigImgUrl: "",
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, // 如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '4:3', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "video/mp4", // m3u8 视频视频类型 这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目 
            src: require("../../static/video/womendorm.mp4")// url地址
          }
        ],
        hls: true,
        poster: '', // 你的封面地址
        width: 960, // 播放器宽度
        height: 720, // 高度
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: false,
          durationDisplay: false,
          remainingTimeDisplay: false,
          fullscreenToggle: false // 全屏按钮
        }
      },
    }
  },
  methods: {
    show(index) {
      this.changePointX = this.startPointX;
      let slider = document.getElementById('slider');
      slider.style.marginLeft = `-${window.screen.width / 100 * 88.15 * index}px`;
    },
    touchstart(e) {
      this.startPointX = e.changedTouches[0].pageX;
    },
    touchmove(e) {
      if (this.startPointX == this.changePointX) {
        return;
      }
      let currPointX = e.changedTouches[0].pageX;
      let leftSlide = this.startPointX - currPointX;
      if (leftSlide > 30 && this.showIndex < this.imgSrc.length - 1) {
        this.show(++this.showIndex)
      } else if (leftSlide < -30 && this.showIndex > 0) {
        this.show(--this.showIndex)
      }
    },
    showBigImage(e) {
      if (e != "") {
        this.photoVisible = true;
        this.bigImgUrl = e.currentTarget.src;
      }
    }
  },
}
</script>

<style lang="less">
html,
body {
  margin: 0;
  padding: 0;
}

.topic {
  width: 100vw;
  height: 12.8vw;
  position: absolute;
  background-color: #ffffff;
}

.Ti {
  height: 12.8vw;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: justify;
}

.title {
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 600;
  font-size: 4.61vw;
  line-height: 12.8vw;
}

.back {
  width: 9.23vw;
  height: 9.23vw;
  line-height: 18.8vw;
  margin-left: 2.61vw;
  position: absolute;
}

.video {
  width: 100vw;
  height: 71.02vw;
  margin-top: 13.33vw;
  position: absolute;
}

.card {
  width: 100vw;
  height: 158.46vw;
  margin-top: 75.7vw;
  position: absolute;
  background-color: #ffffff;
  border-radius: 6.67vw;
}

.wordone {
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 600;
  font-size: 3.85vw;
  line-height: 5.64vw;
  width: 12.56vw;
  height: 5.6vw;
  margin-left: 6.15vw;
  margin-top: 4.36vw;
  margin-bottom: 118.4vw;
  position: absolute;
  white-space: nowrap;
}

.lo {
  display: flex;
  justify-content: space-between;
}

.lo div:nth-child(1) img {
  /* display: flex; */
  flex: 1;
  width: 2.4vw;
  height: 3.27vw;
  margin-top: 14.1vw;
  margin-left: 7.26vw;
  position: absolute;
  font-style: normal;
  font-weight: bolder;
}

.lo div:nth-child(2) {
  flex: 1;
  width: 230px;
  height: 20px;
  margin-top: 14.1vw;
  margin-left: 11.54vw;
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 400;
  font-size: 2.82vw;
  line-height: 3.8vw;
  position: absolute;
  font-style: normal;
  font-weight: bolder;
  color: #A5CAF1;
}

.word {
  width: 86.67vw;
  height: 26.41vw;
  margin-top: 22.56vw;
  margin-left: 6.15vw;
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 400;
  font-size: 3.58vw;
  line-height: 4.61vw;
  position: absolute;
  font-style: normal;
  color: #8D94A2;
}

.wordtwo {
  width: 16.15vw;
  height: 5.6vw;
  margin-top: 53.08vw;
  margin-left: 6.15vw;
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 600;
  font-size: 3.84vw;
  line-height: 6.15vw;
  position: absolute;
  font-style: normal;
}

.cardimage {
  width: 86.15vw;
  height: 48.46vw;
  margin-top: 63.3vw;
  margin-left: 6.4vw;
  position: absolute;
  font-style: normal;
}

.slider {
  overflow: hidden;
  white-space: nowrap;
  transition: 1s;
  // padding: 0 calc(50vw - 160px);

  img {
    width: 86.15vw;
    height: 48.46vw;
    display: inline;
    margin-right: 4.87vw;
  }
}
</style>
