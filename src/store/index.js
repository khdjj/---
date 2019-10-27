/*
 * @Descripttion: 
 * @version: 
 * @Author: khdjj
 * @Date: 2019-08-05 11:04:56
 * @LastEditors: khdjj
 * @LastEditTime: 2019-08-13 14:29:31
 */
import Vue from 'vue';
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);
const state = {
    userId:'',
    shop:{
        address:'',
        brand:'',
        comment:'',
        deal:'',
        detailsImage:'',
        fare:'',
        id:'',
        image:'',
        price:'',
        nprice:'',
        oprice:'',
        parameter:'',
        partner:'',
        sale:'',
        situation:'',
        status:'',
        time:'',
        title:'',
        type:''
    },
    buyitem:[],
    address:[],
    users:[],
    admin:{},
    userinfo:{},
    article:{},
    commentItem:{}
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})