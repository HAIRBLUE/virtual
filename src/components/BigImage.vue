<template>
  <div v-show="visible" @click="closeClick" class="showPhoto">
    <img class="img" :src="url" alt="图片加载失败" />
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: "",
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeClick() {
      this.$emit("closeClick");
    },
  },
};
</script>
<style lang="css" scoped>
.showPhoto {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: window-open 0.5s 1;
}

.showPhoto .img {
  display: block;
  margin: auto 0;
  max-width: 100%;
  text-align: center;
  animation: window-open 0.5s 1;
}

@keyframes window-open {
  0% {
    bottom: -5.5rem;
  }

  100% {
    bottom: 0;
  }
}
</style>