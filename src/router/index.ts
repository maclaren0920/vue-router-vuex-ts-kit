import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
Vue.use(Router);

const Counter = () => import('../components/Counter.vue');

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/hello'
    },
    {
      path: '/hello',
      component: Home
    },
    {
      path: '/counter',
      component: Counter
    },
  ]
})
