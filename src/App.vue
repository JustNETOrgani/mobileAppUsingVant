<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    reload () {
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    }
  },
  beforeCreate () {
    document.querySelector('body').setAttribute('style', 'background-color:#f5f6f7;')
  },
  beforeDestroy () {
    document.querySelector('body').removeAttribute('style')
  }
}
</script>

<style>
#app {
  font-family: "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  font-size: 16px;
  /* margin-top: 20px; */
  background-color: #f5f6f7;
}
</style>
