import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource'

import VueRouter from 'vue-router'
import Routes from './routes.js'

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

Vue.config.productionTip = false

//directive registerred locally in showBlog.vue
// Vue.directive('rainbow', {
//   bind(el){
//     el.style.color = "#" + Math.random().toString().slice(2,8);
//   }
// });

Vue.directive('theme', {
  bind(el, binding){
    if (binding.value == 'wide'){
      el.style.maxWidth = "1200px";
    } else if (binding.value == 'narrow'){
      el.style.maxWidth = '500px';
    }
    if (binding.arg == 'column'){
      el.style.background = '#ddd';
      el.style.padding = '20px';
    }
  }
});

//filters
//
//Registered locally in showBlog.vue
// Vue.filter('to-uppercase', function(value){
//   return value.toUpperCase();
// });

Vue.filter('snip', function(value){
  return value.slice(0,100) + '...';
})


new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
