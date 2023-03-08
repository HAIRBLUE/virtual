<template>
  <div id="HomePage">
    <div id="main">
    <div id="change" @click="change">
        <img src="../static/images/langue.png" alt="">
      </div>
      <div class="background-img"></div>
      <router-link to="/HelloWorldVue">
        <div id="coming" v-on:click="goTo">
          <img src="../static/images/welcomebutton.svg" alt="">
        </div>
      </router-link>
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
export default {
  name: 'HomePage',
  methods: {
    goTo() {
      this.$router.push('./components/HelloWorld.vue')
    },
    change() {
      window.location.href = "http://172.100.48.194:8081"
    },
  }
}
</script>

<style>
.background-img {
  height: 100vh;
  z-index: -1;
  background: url(../static/images/welcome.png) no-repeat center center fixed;
  -webkit-background-size: cover;
  -o-background-size: cover;
}

#change img {
  z-index: 10;
  position: absolute;
  margin-top: 2vh;
  margin-left: 85vw;
}

#coming img {
  z-index: 10;
  width: 50.8vw;
  height: 13.6vw;
  margin-right: 24.6vw;
  margin-left: 24.6vw;
  margin-top: -23.48vw;
  position: absolute;
}
</style>
