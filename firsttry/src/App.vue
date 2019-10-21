<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
<!--    <router-view/>-->
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>

  import MainTabBar from "./components/content/mainTabBar/MainTabBar";
export default {
  name: 'App',
  components:{
    MainTabBar
  }
}
</script>

<style>
/*#app {*/
/*  font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/

@import "./assets/css/base.css";
</style>
