/*
 * @Descripttion: 
 * @version: 
 * @Author: khdjj
 * @Date: 2019-08-05 10:36:53
 * @LastEditors: khdjj
 * @LastEditTime: 2019-08-15 08:20:13
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from '../src/store/index'
import elementUI from 'element-ui'

import VueHighcharts from 'vue-highcharts';
 
Vue.use(VueHighcharts);

Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.use(elementUI);

new Vue({
  el: '#app',
  store,
  router,
  data:{
    Bus:new Vue()
  }
}).$mount('#app')
