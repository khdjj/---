/*
 * @Descripttion: 
 * @version: 
 * @Author: khdjj
 * @Date: 2019-08-11 08:15:30
 * @LastEditors: khdjj
 * @LastEditTime: 2019-08-12 20:56:55
 */
var ws  = require('nodejs-websocket')
var date = require("../service/utils")
console.log("开始建立连接");
let users = [];
let conns = []; 

function boardcast(obj){

    if(obj.bridge&&obj.bridge.length){
        obj.bridge.forEach(item=>{
            console.log("conns[item'\t"+conns[item])
            conns[item].sendText(JSON.stringify(obj));
        })
        return ;
    }
    server.connections.forEach((conn, index) => {
        conn.sendText(JSON.stringify(obj));
    })    
}

var server = ws.createServer(function(conn){
    conn.on("text",function(obj){
        console.log("消息传来");
        obj = JSON.parse(obj);
        console.log(obj);
        console.log(users);
        conns[obj.uid] = conn;
        if(obj.type == 1){
            let isuser = users.some(item=>{{
                return item.uid == obj.uid;
            }})
            if(!isuser){
                users.push({
                    nickname:obj.nickname,
                    uid:obj.uid
                })
            }
            boardcast({
                type:1,
                date:date.format(),
                msg:obj.nickname+"连接成功，可以开始对话",
                users:users,
                uid:obj.uid,
                nickname:obj.nickname,
                bridge:obj.bridge,
                avator:obj.avator,
                status:1
            })
        }else{
            boardcast({
                type:2,
                date:date.format(),
                msg:obj.msg,
                users:users,
                uid:obj.uid,
                nickname:obj.nickname,
                bridge:obj.bridge,
                avator:obj.avator,
                status:1
            })
        }
        
    })
    conn.on("close",function(code,reason){
        console.log("关闭连接");
    });
    conn.on("error",function(code,reason){
        console.log("异常关闭");
    })
}).listen(8001);

server.connections.forEach((conn,index)=>{
    conn.sendText(JSON.stringify(obj));
})
console.log("websocket建立完毕");