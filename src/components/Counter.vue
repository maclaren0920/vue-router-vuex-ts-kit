<template>
  <div id="counter">
       Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}.
      <span>{{counter}}</span>
      <button @click='onIncrement'>increment</button>
      <button @click='onDecrement'>decrement</button>
      <button @click='onIncrementIfOdd'>Increment if odd</button>
      <button @click='onIncrementAsync'>Increment async</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Getter, Action } from 'vuex-class';

@Component
export default class Counter extends Vue {
  @Getter('count') counter: number
  @Getter('evenOrOdd') evenOrOdd: number
  @Action('increment') onIncrement: Function
  @Action('decrement') onDecrement: Function
  @Action('incrementIfOdd') onIncrementIfOdd: Function
  @Action('incrementAsync') onIncrementAsync: Function

  
}
</script>


<style lang="scss" scoped>
  #counter {
    padding-top: 50px;
    color: #333;
  }
</style>









