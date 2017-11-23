<template>
  <div id="app">
    <span class="link">
      <router-link to="/hello">Home</router-link>
    </span>
    <span class="link">
      <router-link to="/counter">Counter</router-link>
    </span>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class App extends Vue {
  
}
</script>



<style lang="scss" scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    .link {
      padding: 0 6px;
    }
  }
</style>
