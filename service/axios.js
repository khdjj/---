import axios from 'axios';
import {getStore} from './getStoreData';
let baseUrl = "http://localhost:8001";

axios.defaults.withCredentials=true;

// 请求拦截器
export default (url = '', data = {}, type = "GET",token) => {
    type = type.toUpperCase();
    url = baseUrl + url;
    console.log(type);
    if (type == 'GET') {
        return new Promise((resolve, reject) => {
            axios.get(url, {
                params: data,
                userId:getStore("userId")
            },{
                withCredentials:true
            }).then(function (res) {
                resolve(res);
            }).catch(function (error) {
                reject();
                console.log(error);
            });
        })
    }
    if (type == 'POST') {
            return new Promise((resolve, reject) => {
                axios.post(url, data).then(function (res) {
                    resolve(res);
                }).catch(function (error) {
                    reject();
                    console.log(error);
                });
            })
        }
    
}