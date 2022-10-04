<template>
  <div id="HomePage">
    <div id="main">
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
    }
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