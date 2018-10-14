import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vueScrollto from 'vue-scrollto'


Vue.use(vueScrollto, {
     container: "body",
     duration: 1000,
     easing: "ease",
     offset: 0,
     force: true,
     cancelable: true,
     onStart: false,
     onDone: false,
     onCancel: false,
     x: false,
     y: true
 })
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
