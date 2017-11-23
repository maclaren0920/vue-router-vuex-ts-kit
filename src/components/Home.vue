<template>
  <div class="hello">
    <h1 v-color>{{ msg }}</h1>
    <span>{{title | upperCase}}</span>
    <div>
      <img src="../assets/logo.png" alt="">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: {
    title: {
      type: String,
      default: 'hello world'
    }
  },
  filters: {
    upperCase (val: string): string{
      return val.toUpperCase();
    }
  },
  directives: {
    color: {
      inserted: function (el) {
        el.style.color = 'red';
      }
    }
  }
})
export default class Home extends Vue {
  msg = 'Welcome to Your Vue.js App';
  
}
</script>


<style lang="scss" scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>


