<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app',
  };
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "./assets/main.scss";

  .router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
  }

  .router-fade-enter, .router-fade-leave-active {
    opacity: 0;
  }

  #app {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #eef2f3;
  }

  a {
    text-decoration: none;
  }

  .scroll-content {
    overflow: scroll;
    width: 100%;
    height: 100%;
  }

  .grid {
    margin: 12px 0;
    position: relative;
    background-color: #fff;

  .row {
    position: relative;
    margin: 0;
    padding: 0;
    display: flex;
    padding: 5px;
    width: 100%;

  .col {
    text-align: center;
    position: relative;
    margin: 0;
    padding: 0;
    flex: 1;
    display: block;
    width: 100%;
  }

  }
  }
</style>
