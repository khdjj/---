/*
 * @Descripttion: vuex的数据保存处理
 * @version: 
 * @Author: khdjj
 * @Date: 2019-06-06 10:24:45
 * @LastEditors: khdjj
 * @LastEditTime: 2019-08-13 19:34:42
 */
import {setStore,removeStore,getStore} from "../../service/getStoreData"
export default {

    SAVE_COMMENTSHOP(state,item){
        state.commentItem = item;
    },
    SAVE_USERID(state,userId){
        state.userId = userId;
        setStore("userId",userId);
    },
    SAVE_SHOP(state,shop){
        state.shop = shop;
    },
    SAVE_ARTICLE(state,article){
        state.article = article;
    },
    SAVE_USERINFO(state,userinfo){
        state.userinfo = userinfo;
        setStore('userinfo',userinfo);
    },
    GET_USERINFO(state){
        state.userinfo = getStore('userinfo');
    },
    SAVE_ITEM(state,item){

        console.log("dddddd"+item);
        if(Object.prototype.toString.call(item) == "[object Array]"){
            state.buyitem = item;
        }else{
            state.buyitem.push(item);
        }
        console.log(state.buyitem);
    },
    SAVE_ADDRESS(state,address){
        console.log(Object.prototype.toString.call(address));
        if(Object.prototype.toString.call(address) == "[object Array]"){
            state.address = address;
        }else{
            state.address.push(address);
        }
        console.log(state.address);
    },
    GET_USERS(state,user){
       state.users = getStore('users');
    },
    SAVE_USERS(state,users){
        setStore('users',users);
    },
    SAVE_ADMIN(state){
        var admin = {
            id:'khdjj',
            nickname:'店家',
            image:'http://p1.music.126.net/yO4zHhl-nO_-V8odeeljXw==/1397479281885153.jpg?param=34y34'
        }
        state.admin = admin;
    },

    LOGOUT(state){
        state.userId = null;
        removeStore('userId');
    }
}