<template>
  <div id="part">
    <div id="wait">
      <div class="loading-inner">
        <div class="loading-cover"></div>
      </div>
    </div>
    <div class="map" @click="fresh">
      <img src="../../static/images/map.svg" alt="">
    </div>
    <div class="topic2">
      <div>上海商学院 奉浦校区</div>
    </div>
    <ContentSlide id="context"></ContentSlide>
    <div class="allscene">
      <img src="../../static/images/allscene.svg" alt="">
      <!-- <img src="https://ningjintest.oss-cn-beijing.aliyuncs.com/svg/bac.svg" alt="" id="bac"> -->
    </div>
    <div class="main">
      <!-- <img src="../../static/images/bac.svg" alt="" class="bacpic" id="bac"> -->
      <img src="https://ningjintest.oss-cn-beijing.aliyuncs.com/svg/bac.svg" alt="" class="bacpic" id="bac"
        @click="fresh">
      <div action="" class="alltags">
        <!-- 天鹅湖 -->
        <div v-on:click="changes" v-show="down">
          <img id="tag" style=" position: absolute;top: 75.83vw;left: 49vw;" src="../../static/images/park.png" alt=""
            v-show="downIcon" v-on:click="selectshow">
          <img id="tag" style=" position: absolute;top: 75.83vw;left: 50vw;" src="../../static/images/parkchange.png"
            alt="" v-show="!downIcon" v-on:click="selectshow">
        </div>
        <!-- 学生公寓 -->
        <div v-show="down2">
          <div v-on:click="changes2">
            <div>
              <!-- 5 -->
              <img id="tag" style=" position: absolute;top: 79.83vw;left: 35vw;" src="../../static/images/stu5.png"
                alt="" v-show="downIcon2">
              <img id="tag" style=" position: absolute;top: 79.83vw;left: 37vw;" src="../../static/images/stuchange.png"
                alt="" v-show="!downIcon2">
            </div>
            <div>
              <!-- 6 -->
              <img id="tag" style=" position: absolute;top: 85.83vw;left: 35vw;" src="../../static/images/stu6.png"
                alt="" v-show="downIcon2">
              <img id="tag" style=" position: absolute;top: 85.83vw;left: 37vw;" src="../../static/images/stuchange.png"
                alt="" v-show="!downIcon2">
            </div>
            <div>
              <!--1-->
              <img id="tag" style=" position: absolute;top: 67.83vw;left: 22vw;" src="../../static/images/stu1.png"
                alt="" v-show="downIcon2">
              <img id="tag" style=" position: absolute;top: 67.83vw;left: 24vw;" src="../../static/images/stuchange.png"
                alt="" v-show="!downIcon2">
            </div>
            <div>
              <!--2-->
              <img id="tag" style=" position: absolute;top: 73.83vw;left: 22vw;" src="../../static/images/stu2.png"
                alt="" v-show="downIcon2">
              <img id="tag" style=" position: absolute;top: 73.83vw;left: 24vw;" src="../../static/images/stuchange.png"
                alt="" v-show="!downIcon2">
            </div>
            <div>
              <!--3-->
              <img id="tag" style=" position: absolute;top: 79.83vw;left: 22vw;" src="../../static/images/stu3.png"
                alt="" v-show="downIcon2">
              <img id="tag" style=" position: absolute;top: 79.83vw;left: 24vw;" src="../../static/images/stuchange.png"
                alt="" v-show="!downIcon2">
            </div>
            <div>
              <!--4-->
              <img id="tag" style=" position: absolute;top: 85.83vw;left: 22vw;" src="../../static/images/stu4.png"
                alt="" v-show="downIcon2">
              <img id="tag" style=" position: absolute;top: 85.83vw;left: 24vw;" src="../../static/images/stuchange.png"
                alt="" v-show="!downIcon2">
            </div>
          </div>
          <div v-on:click="changes3">
            <div>
              <!--7-->
              <img id="tag" style=" position: absolute;top: 67.83vw;left: 8vw;" src="../../static/images/stu7.png"
                alt="" v-show="downIcon3">
              <img id="tag" style=" position: absolute;top: 67.83vw;left: 10vw;" src="../../static/images/stuchange.png"
                alt="" v-show="!downIcon3">
            </div>
            <div>
              <!--8-->
              <img id="tag" style=" position: absolute;top: 73.83vw;left: 8vw;" src="../../static/images/stu8.png"
                alt="" v-show="downIcon3">
              <img id="tag" style=" position: absolute;top: 73.83vw;left: 10vw;" src="../../static/images/stuchange.png"
                alt="" v-show="!downIcon3">
            </div>
            <div>
              <!--9-->
              <img id="tag" style=" position: absolute;top: 79.83vw;left: 8vw;" src="../../static/images/stu9.png"
                alt="" v-show="downIcon3">
              <img id="tag" style=" position: absolute;top: 79.83vw;left: 10vw;" src="../../static/images/stuchange.png"
                alt="" v-show="!downIcon3">
            </div>
            <div>
              <!--10-->
              <img id="tag" style=" position: absolute;top: 85.83vw;left: 8vw;" src="../../static/images/stu10.png"
                alt="" v-show="downIcon3">
              <img id="tag" style=" position: absolute;top: 85.83vw;left: 10vw;" src="../../static/images/stuchange.png"
                alt="" v-show="!downIcon3">
            </div>
          </div>
        </div>
        <!-- 教学楼 -->
        <div v-show="down3">
          <div v-on:click="changes4">
            <div>
              <!-- 1 -->
              <img id="tag" style=" position: absolute;top: 93.83vw;left: 37vw;"
                src="../../static/images/teachbuilding1.png" alt="" v-show="downIcon4">
              <img id="tag" style=" position: absolute;top: 93.83vw;left: 39vw;"
                src="../../static/images/teachange1.png" alt="" v-show="!downIcon4">
            </div>
            <div>
              <!-- 2 -->
              <img id="tag" style=" position: absolute;top: 99.83vw;left: 37vw;"
                src="../../static/images/teachbuilding2.png" alt="" v-show="downIcon4">
              <img id="tag" style=" position: absolute;top: 99.83vw;left: 39vw;"
                src="../../static/images/teachange2.png" alt="" v-show="!downIcon4">
            </div>
          </div>
          <div v-on:click="changes5">
            <div>
              <!-- 4 -->
              <img id="tag" style=" position: absolute;top: 91.83vw;left: 66vw;"
                src="../../static/images/teachbuilding4.png" alt="" v-show="downIcon5">
              <img id="tag" style=" position: absolute;top: 91.83vw;left: 69vw;"
                src="../../static/images/parkchange.png" alt="" v-show="!downIcon5">
            </div>
            <div>
              <!-- 3 -->
              <img id="tag" style=" position: absolute;top: 98.83vw;left: 66vw;"
                src="../../static/images/teachbuilding3.png" alt="" v-show="downIcon5">
              <img id="tag" style=" position: absolute;top: 98.83vw;left: 69vw;"
                src="../../static/images/parkchange.png" alt="" v-show="!downIcon5">
            </div>
          </div>
        </div>
        <!-- 食堂 -->
        <div v-on:click="changes6" v-show="down4">
          <img id="tag" style=" position: absolute;top: 99.83vw;left: 20vw;" src="../../static/images/cantee.png" alt=""
            v-show="downIcon6">
          <img id="tag" style=" position: absolute;top: 99.83vw;left: 20vw;" src="../../static/images/canteechange.png"
            alt="" v-show="!downIcon6">
        </div>
        <!-- 浴室 -->
        <div v-on:click="changes7" v-show="down5">
          <img id="tag" style=" position: absolute;top: 105.83vw;left: 18vw;" src="../../static/images/bathroom.png"
            alt="" v-show="downIcon7">
          <img id="tag" style=" position: absolute;top: 105.83vw;left: 18vw;"
            src="../../static/images/bathroomchange.png" alt="" v-show="!downIcon7">
        </div>
        <!-- 综合楼 -->
        <div v-on:click="changes8" v-show="down5">
          <img id="tag" style=" position: absolute;top: 67.83vw;left: 0vw;" src="../../static/images/synthesis.png"
            alt="" v-show="downIcon8">
          <img id="tag" style=" position: absolute;top: 67.83vw;left: 0vw;"
            src="../../static/images/synthesischange.png" alt="" v-show="!downIcon8">
        </div>
        <!-- 东北门 -->
        <div v-on:click="changes9" v-show="down5">
          <img id="tag" style=" position: absolute;top: 60.83vw;left: 1vw;" src="../../static/images/eastnorth.png"
            alt="" v-show="downIcon9">
          <img id="tag" style=" position: absolute;top: 60.83vw;left: 1vw;"
            src="../../static/images/eastnorthchange.png" alt="" v-show="!downIcon9">
        </div>
        <!-- 综合楼辅楼 -->
        <div v-on:click="changes10" v-show="down5">
          <img id="tag" style=" position: absolute;top: 80.83vw;left: 0vw;" src="../../static/images/synthesis2.png"
            alt="" v-show="downIcon10">
          <img id="tag" style=" position: absolute;top: 80.83vw;left: 0vw;"
            src="../../static/images/synthesis2change.png" alt="" v-show="!downIcon10">
        </div>
        <!-- 东北1门 -->
        <div v-on:click="changes11" v-show="down5">
          <img id="tag" style=" position: absolute;top: 90.83vw;left: 1vw;" src="../../static/images/eastnorth1.png"
            alt="" v-show="downIcon11">
          <img id="tag" style=" position: absolute;top: 90.83vw;left: 1vw;"
            src="../../static/images/eastnorth1change.png" alt="" v-show="!downIcon11">
        </div>
        <!-- 超市 -->
        <div v-on:click="changes12" v-show="down5">
          <img id="tag" style=" position: absolute;top: 95.83vw;left: 10vw;" src="../../static/images/supermarket.png"
            alt="" v-show="downIcon12">
          <img id="tag" style=" position: absolute;top: 95.83vw;left: 10vw;"
            src="../../static/images/supermarketchange.png" alt="" v-show="!downIcon12">
        </div>
        <!-- 图文信息楼 -->
        <div v-on:click="changes13" v-show="down5">
          <img id="tag" style=" position: absolute;top: 88.83vw;left: 51.2vw;" src="../../static/images/graphic.png"
            alt="" v-show="downIcon13">
          <img id="tag" style=" position: absolute;top: 88.83vw;left: 53.2vw;"
            src="../../static/images/graphicchange.png" alt="" v-show="!downIcon13">
        </div>
        <!-- 广场 -->
        <div v-on:click="changes14" v-show="down">
          <img id="tag" style=" position: absolute;top: 104.83vw;left: 53.2vw;" src="../../static/images/square.png"
            alt="" v-show="downIcon14">
          <img id="tag" style=" position: absolute;top: 104.83vw;left: 53.2vw;"
            src="../../static/images/squarechange.png" alt="" v-show="!downIcon14">
        </div>
        <!-- 北大门 -->
        <div v-on:click="changes15" v-show="down5">
          <img id="tag" style=" position: absolute;top: 112.83vw;left: 53.2vw;" src="../../static/images/north.png"
            alt="" v-show="downIcon15">
          <img id="tag" style=" position: absolute;top: 112.83vw;left: 53.2vw;"
            src="../../static/images/northchange.png" alt="" v-show="!downIcon15">
        </div>
        <!-- 行政楼 -->
        <div v-on:click="changes16" v-show="down5">
          <img id="tag" style=" position: absolute;top: 105.83vw;left: 68vw;"
            src="../../static/images/administrative.png" alt="" v-show="downIcon16">
          <img id="tag" style=" position: absolute;top: 105.83vw;left: 68vw;"
            src="../../static/images/administrativechange.png" alt="" v-show="!downIcon16">
        </div>
        <!-- 田径场 -->
        <div v-on:click="changes17" v-show="down6">
          <img id="tag" style=" position: absolute;top: 75.83vw;left: 85.5vw;" src="../../static/images/run.png" alt=""
            v-show="downIcon17">
          <img id="tag" style=" position: absolute;top: 75.83vw;left: 85.5vw;" src="../../static/images/runchange.png"
            alt="" v-show="!downIcon17">
        </div>
        <!-- 篮球场 -->
        <div v-on:click="changes18" v-show="down6">
          <img id="tag" style=" position: absolute;top: 75.83vw;left: 71vw;" src="../../static/images/basketball.png"
            alt="" v-show="downIcon18">
          <img id="tag" style=" position: absolute;top: 75.83vw;left: 71vw;"
            src="../../static/images/basketballchange.png" alt="" v-show="!downIcon18">
        </div>
        <!-- 体育馆 -->
        <div v-on:click="changes19" v-show="down6">
          <img id="tag" style=" position: absolute;top: 65.83vw;left: 71vw;" src="../../static/images/phyedu.png" alt=""
            v-show="downIcon19">
          <img id="tag" style=" position: absolute;top: 65.83vw;left: 71vw;" src="../../static/images/phyeduchange.png"
            alt="" v-show="!downIcon19">
        </div>
        <!-- 足球场 -->
        <div v-on:click="changes20" v-show="down6">
          <img id="tag" style=" position: absolute;top: 65.83vw;left: 60.5vw;" src="../../static/images/football.png"
            alt="" v-show="downIcon20">
          <img id="tag" style=" position: absolute;top: 65.83vw;left: 60.5vw;"
            src="../../static/images/footballchange.png" alt="" v-show="!downIcon20">
        </div>
        <!-- 实训楼 -->
        <div v-on:click="changes21" v-show="down5">
          <img id="tag" style=" position: absolute;top: 72.83vw;left: 60.5vw;" src="../../static/images/practra.png"
            alt="" v-show="downIcon21">
          <img id="tag" style=" position: absolute;top: 72.83vw;left: 60.5vw;"
            src="../../static/images/practrachange.png" alt="" v-show="!downIcon21">
        </div>
        <!-- 网球场 -->
        <div v-on:click="changes22" v-show="down6">
          <img id="tag" style=" position: absolute;top: 99.83vw;left: 82vw;" src="../../static/images/tennis.png" alt=""
            v-show="downIcon22">
          <img id="tag" style=" position: absolute;top: 99.83vw;left: 82vw;" src="../../static/images/tennischange.png"
            alt="" v-show="!downIcon22">
        </div>
        <!-- 南大门 -->
        <div v-on:click="changes23" v-show="down5">
          <img id="tag" style=" position: absolute;top: 62.83vw;left: 43.8vw;" src="../../static/images/sourth.png"
            alt="" v-show="downIcon23">
          <img id="tag" style=" position: absolute;top: 61.83vw;left: 43.8vw;"
            src="../../static/images/sourthchange.png" alt="" v-show="!downIcon23">
        </div>
      </div>
      <div class="contpart" v-show="!selctIcon">
        <div class="tianpic">
          <img src="../../static/images/tianepic.png" alt="">
        </div>
        <div class="rightcont">
          <div>{{obj.title}}</div>
          <div class="loacte">
            <img src="../../static/images/locate.svg" alt="">
            <div>{{obj.discribe}}</div>
          </div>
        </div>

        <router-link to="/VideoView">
          <div class="details">查看详情
          </div>
        </router-link>

      </div>
    </div>

  </div>
</template>

<script>
import bus from '../components/bus.js'
import ContentSlide from '../components/ContentSlide.vue'
export default {
  components: {
    ContentSlide,
  },
  data() {
    return {
      down: true,
      down2: true,
      down3: true,
      down4: true,
      down5: true,
      down6: true,
      downIcon: true,
      downIcon2: true,
      downIcon3: true,
      downIcon4: true,
      downIcon5: true,
      downIcon6: true,
      downIcon7: true,
      downIcon8: true,
      downIcon9: true,
      downIcon10: true,
      downIcon11: true,
      downIcon12: true,
      downIcon13: true,
      downIcon14: true,
      downIcon15: true,
      downIcon16: true,
      downIcon17: true,
      downIcon18: true,
      downIcon19: true,
      downIcon20: true,
      downIcon21: true,
      downIcon22: true,
      downIcon23: true,
      selctIcon: true,
      obj: {},
      objcontent: [
        {
          img: "../../static/images/tianepic.svg",
          title: "天鹅湖",
          discribe: "绝佳的感受大自然之处"
        },
        {
          img: "../../static/images/tianepic.svg",
          title: "只因你太美",
          discribe: "急急急急急急"
        }
      ]
    };
  },
  methods: {
    fresh() {
      this.downIcon = true
      this.downIcon2 = true
      this.downIcon3 = true
      this.downIcon4 = true
      this.downIcon5 = true
      this.downIcon6 = true
      this.downIcon7 = true
      this.downIcon8 = true
      this.downIcon9 = true
      this.downIcon10 = true
      this.downIcon11 = true
      this.downIcon12 = true
      this.downIcon13 = true
      this.downIcon14 = true
      this.downIcon15 = true
      this.downIcon16 = true
      this.downIcon17 = true
      this.downIcon18 = true
      this.downIcon19 = true
      this.downIcon20 = true
      this.downIcon21 = true
      this.downIcon22 = true
      this.downIcon23 = true
      this.selctIcon = true
    },
    changes() {
      this.downIcon = !this.downIcon
      this.obj = this.objcontent[0]
    },
    changes2() {
      this.downIcon2 = !this.downIcon2
      this.obj = this.objcontent[1]
      this.selctIcon = !this.selctIcon
    },
    changes3() {
      this.downIcon3 = !this.downIcon3
    },
    changes4() {
      this.downIcon4 = !this.downIcon4
    },
    changes5() {
      this.downIcon5 = !this.downIcon5
    },
    changes6() {
      this.downIcon6 = !this.downIcon6
    },
    changes7() {
      this.downIcon7 = !this.downIcon7
    },
    changes8() {
      this.downIcon8 = !this.downIcon8
    },
    changes9() {
      this.downIcon9 = !this.downIcon9
    },
    changes10() {
      this.downIcon10 = !this.downIcon10
    },
    changes11() {
      this.downIcon11 = !this.downIcon11
    },
    changes12() {
      this.downIcon12 = !this.downIcon12
    },
    changes13() {
      this.downIcon13 = !this.downIcon13
    },
    changes14() {
      this.downIcon14 = !this.downIcon14
    },
    changes15() {
      this.downIcon15 = !this.downIcon15
    },
    changes16() {
      this.downIcon16 = !this.downIcon16
    },
    changes17() {
      this.downIcon17 = !this.downIcon17
    },
    changes18() {
      this.downIcon18 = !this.downIcon18
    },
    changes19() {
      this.downIcon19 = !this.downIcon19
    },
    changes20() {
      this.downIcon20 = !this.downIcon20
    },
    changes21() {
      this.downIcon21 = !this.downIcon21
    },
    changes22() {
      this.downIcon22 = !this.downIcon22
    },
    changes23() {
      this.downIcon23 = !this.downIcon23
    },
    selectshow() {
      this.selctIcon = !this.selctIcon
    }
  },
  mounted: function () {
    let img = document.getElementById('bac')
    let wait = document.getElementById('wait')
    img.onload = function () {
      wait.remove()
    }
  },
  created() {
    bus.$on('changeAll', (msg, nochange) => {
      this.down = nochange
      this.down2 = nochange
      this.down3 = nochange
      this.down4 = nochange
      this.down5 = nochange
      this.down6 = nochange
    })
    bus.$on('changeScene', (msg, nochange) => {
      this.down = nochange
      this.down2 = msg
      this.down3 = msg
      this.down4 = msg
      this.down5 = msg
      this.down6 = msg
    })
    bus.$on('changeteach', (msg, nochange) => {
      this.down = msg
      this.down2 = msg
      this.down3 = nochange
      this.down4 = msg
      this.down5 = msg
      this.down6 = msg
    })
    bus.$on('changecantee', (msg, nochange) => {
      this.down = msg
      this.down2 = msg
      this.down3 = msg
      this.down4 = nochange
      this.down5 = msg
      this.down6 = msg
    })
    bus.$on('changedorm', (msg, nochange) => {
      this.down = msg
      this.down2 = nochange
      this.down3 = msg
      this.down4 = msg
      this.down5 = msg
      this.down6 = msg
    })
    bus.$on('changesport', (msg, nochange) => {
      this.down = msg
      this.down2 = msg
      this.down3 = msg
      this.down4 = msg
      this.down5 = msg
      this.down6 = nochange
    })
    bus.$on('changeother', (msg, nochange) => {
      this.down = msg
      this.down2 = msg
      this.down3 = msg
      this.down4 = msg
      this.down5 = nochange
      this.down6 = msg
    })
  }
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  border: 0;
  background-color: #f2efe9;
}

.slide .van-tabs .van-tabs__wrap {
  height: 11.28vw;
}

.topic2 {
  z-index: 10;
  position: relative;
  background-color: #f2efe9;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: justify;
}

.topic2 div {
  background-color: #FFFFFF;
  width: 100vw;
  height: 12.82vw;
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 600;
  font-size: 4.6vw;
  line-height: 12.82vw;
  padding-left: 29.118vw;
}

.map img {
  position: absolute;
  top: 0px;
  height: 100vh;
  width: 100vw;
}

.bacpic {
  width: 100vw;
  height: 57vw;
  z-index: 10;
  position: absolute;
}

.allscene img {
  margin-left: 85.23vw;
  margin-top: 2.56vw;
  margin-right: 4.10vw;
  width: 10.77vw;
  height: 10.77vw;
  z-index: 10;
  position: absolute;
}

.main {
  margin-top: 58.46vw;
}

#wait {
  z-index: 100;
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: linear-gradient(to top, #17a9f0, #35e0d7, #9afab5, #ecf79e);
}

.loading-inner {
  width: 180px;
  height: 180px;
  background-color: #56effd;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  animation: loadingBreath 5s infinite;
}

@keyframes loadingBreath {
  0% {
    box-shadow: 0 0 5px 0 #85f7fb;
  }

  25% {
    box-shadow: 0 0 20px 0 #85f7fb;
  }

  50% {
    box-shadow: 0 0 5px 0 #85f7fb;
  }

  75% {
    box-shadow: 0 0 20px 0 #85f7fb;
  }

  100% {
    box-shadow: 0 0 5px 0 #85f7fb;
  }
}

.loading-inner::before {
  content: 'Loading...';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  color: #10a7b9;
  font: 18px;
  letter-spacing: 2px;
  font-family: sans-serif;
}

.loading-inner::after {
  content: '';
  width: 100%;
  height: 25%;
  background-image: linear-gradie nt(to top, #12c8e0, #36e9ff, #5ffbf1);
  position: absolute;
  bottom: 0;
  animation: loadingRun 5s ease-in-out infinite;
}

@keyframes loadingRun {
  0% {
    height: 25%;
  }

  100% {
    height: 100%;
  }
}

.loading-cover::before {
  content: '';
  position: absolute;
  left: -50%;
  z-index: 10;
  width: 200%;
  height: 200%;
  background-color: #85f7fb;
  border-radius: 52% 25% 62% 69% / 25% 38%;
  animation: loadingWave 5s linear infinite;
}

.loading-cover::after {
  content: '';
  position: absolute;
  left: -50%;
  z-index: 20;
  width: 200%;
  height: 200%;
  background-color: #d0f4ff;
  border-radius: 42% 38% 40% 62% / 48% 35%;
  animation: loadingWave 5s linear infinite;
}

@keyframes loadingWave {
  0% {
    top: -100%;
    transform: rotate(0);
  }

  100% {
    top: -200%;
    transform: rotate(360deg);
  }
}

.alltags {
  z-index: 10;
  position: absolute;
  top: 19.7vw;

}

#tag {
  height: 6.4vw;
}

.contpart {
  white-space: nowrap;
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 90vw;
  height: 32vw;
  background: #FFFFFF;
  border-radius: 3.1vw;
  margin-right: 4.6vw;
  margin-left: 4.6vw;
  margin-bottom: 1vw;
  animation: window-open 0.5s 1;
  bottom: 0;
  z-index: 10;
}

@keyframes window-open {
  0% {
    bottom: -5.5rem;
  }

  100% {
    bottom: 0;
  }
}

.tianpic img {
  flex: 1;
  margin-right: 3.7vw;
  margin-top: 3.7vw;
  margin-left: 3.7vw;
}

.rightcont {
  flex: 1;
  padding-top: 3.1vw;
}

.rightcont div:nth-child(1) {
  text-align: left;
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 500;
  font-size: 4.1vw;
  line-height: 5.6vw;
}

.rightcont div:nth-child(2) {
  width: 37.1vw;
  height: 3.5vw;
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 400;
  font-size: 2.6vw;
  line-height: 3.6vw;
  color: #73A1EA;
}

.loacte {
  display: flex;
  justify-content: space-between;
}

.details {
  width: 16.7vw;
  height: 7.1vw;
  background: #93C0F2;
  border-radius: 2.3vw;
  margin-top: 22.8vw;
  margin-right: 4.7vw;
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 500;
  font-size: 3.07vw;
  line-height: 5.64vw;
  text-align: center;
  color: #FFFFFF;
}
</style>