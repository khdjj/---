/*
 * @Descripttion: 
 * @version: 
 * @Author: khdjj
 * @Date: 2019-08-05 10:36:53
 * @LastEditors: khdjj
 * @LastEditTime: 2019-08-15 09:43:58
 */
import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login/login'
import Home from '../components/home/home'
import Register from "../components/register/register"
// import AdminLogin from "../components/admin/login/login"
Vue.use(Router)
const AdminLogin = r => require.ensure([], () => r(require('../components/admin/login/login')), 'adminLogin');
const AddGift = r => require.ensure([], () => r(require('../components/admin/manage/addGift/addGift')), 'addGift');
const giftList = r => require.ensure([], () => r(require('../components/admin/manage/list/giftList')), 'giftList');
const addGiftParam = r => require.ensure([], () => r(require('../components/admin/manage/addGiftParam/addGiftParam')), 'addGiftParam');
const manage = r => require.ensure([], () => r(require('../components/admin/manage/manage')), 'manage');
const adminHome = r => require.ensure([], () => r(require('../components/admin/home/home')), 'adminHome');
const shop = r => require.ensure([], () => r(require('../components/shopDetails/shopDetails.vue')), 'shopDetails');
const confim = r => require.ensure([], () => r(require('../components/confimOrder/confim.vue')), 'confim');
const shopCar = r => require.ensure([], () => r(require('../components/shopCar/shopCar.vue')), 'shopCar');
const chat = r => require.ensure([], () => r(require('../components/chat/chat.vue')), 'chat');
const adminchat = r => require.ensure([], () => r(require('../components//admin/chat/adminChat.vue')), 'adminChat');
const addarticle = r => require.ensure([], () => r(require('../components//admin/manage/addArticle/addArticle.vue')), 'addArticle');
const order = r => require.ensure([], () => r(require('../components/myOrder/order.vue')), 'order');
const collection = r => require.ensure([], () => r(require('../components/collection/collection.vue')), 'collection');
const giftIntro = r => require.ensure([], () => r(require('../components/giftIntro/giftIntro.vue')), 'giftIntro');
const article = r => require.ensure([], () => r(require('../components/article/article.vue')), 'article');
const comment = r => require.ensure([], () => r(require('../components/comment/comment.vue')), 'comment');
const refund = r => require.ensure([], () => r(require('../components/refund/refund.vue')), 'refund');
const myInfo = r => require.ensure([], () => r(require('../components/myInfo/myInfo.vue')), 'myInfo');
const byAge = r => require.ensure([], () => r(require('../components/admin/manage/byAge/byAge.vue')), 'byAge');
const orderList = r => require.ensure([], () => r(require('../components/admin/manage/list/orderList.vue')), 'orderList');
const highCharts = r => require.ensure([], () => r(require('../components/admin/manage/highCharts/highCharts.vue')), 'highCharts');
const refundList = r => require.ensure([], () => r(require('../components/admin/manage/list/refundList.vue')), 'refundList');
const refundReason =  r => require.ensure([], () => r(require('../components/admin/manage/highCharts/refundReason.vue')), 'refundReason');
const agemoneyorder =  r => require.ensure([], () => r(require('../components/admin/manage/highCharts/agemoneyorder.vue')), 'agemoneyorder');
const agesexmoneyorder =  r => require.ensure([], () => r(require('../components/admin/manage/highCharts/agesexmoneyorder.vue')), 'agesexmoneyorder');
const sexmoneyorder =  r => require.ensure([], () => r(require('../components/admin/manage/highCharts/sexmoneyorder.vue')), 'sexmoneyorder');
const modifyParam =  r => require.ensure([], () => r(require('../components/admin/manage/modifyGiftParam/modifyGiftParam.vue')), 'modifyGiftParam');

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },{
      path:'/giftIntro',
      component:giftIntro
    },{
      path:'/article',
      component:article
    },{
      path:'/comment',
      component:comment
    },{
      path:'/myInfo',
      component:myInfo
    },
    {
      path:'/adminlogin',
      name:'adminlogin',
      component:AdminLogin
    },{
      path:'/collection',
      component:collection
    },
    {
      path:'/adminChat',
      component:adminchat
    },
    {
      path:'/order',
      component:order
    },{
      path:'/refund',
      component:refund
    },
    {
      path:'/chat',
      name:'chat',
      component:chat
    },
    {
      path:'/shop',
      name:'shop',
      component:shop
    },
    {
      path:'/confim',
      name:'confim',
      component:confim
    },
    {
      path:'/shopCar',
      component:shopCar
    },
    {
      path:'/manage',
      name:'manage',
      component:manage,
      children: [{
        path: '',
        component: adminHome,
      },{
        path:'/addGift',
        component:AddGift
      },{
			  path:'/orderList',
			  component:orderList
			}, {
        path:'/refundList',
        component:refundList,
      },{
        path:'/byAge',
        component:byAge
      },{
        path:'/monthSale',
        component:highCharts
      },{
        path:'/refundReason',
        component:refundReason
      },
      {
        path:'/giftList',
        component:giftList,
      },{
        path:'/agemoneyorder',
        component:agemoneyorder
      },{
        path:'/sexmoneyorder',
        component:sexmoneyorder
      }, {
        path:'/agesexmoneyorder',
        component:agesexmoneyorder
      },{
        path:'/modifyParam',
        component:modifyParam
      },
        {
          path:'/addGiftParam',
          component:addGiftParam
        },{
          path:'/addArticle',
          component:addarticle
        },{
          path:'/refundList',
          component:refundList
        }
    ]
    }
  ]
})
