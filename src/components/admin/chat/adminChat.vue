<!--
 * @Descripttion: 
 * @version: 
 * @Author: khdjj
 * @Date: 2019-08-11 15:41:31
 * @LastEditors: khdjj
 * @LastEditTime: 2019-08-12 21:36:05
 -->
<template>
  <div class="chatContent">
    <div class="head">客服工作台</div>
    <div class="list-left">
      <ul v-if="users[0]">
        <li class="select" v-for="(item,index) in getusers" :key="index" @click="triggerPersonal(item)">
          <span class="avator">
            <img :src="item.avator" />
          </span>
          <span class="nickname">{{item.nickname}}</span>
          <span class="tips-num">{{getMsgNum(item)}}</span>
        </li>
      </ul>
    </div>
    <div class="chatcontent-right">
      <p>{{title}}</p>
      <div class="chatbox tb-clear">
        <div v-for="(item,index) in currentMessage" :key="index">
          <div class="left" v-if="item.uid !=admin.id">
            <dl>
              <dt class="avator"><img :src="item.avator" /></dt>
              <dd>
                <span class="time">>{{item.date}}}</span>
                <span class="recive-msg">{{item.msg}}</span>
              </dd>
            </dl>
          </div>
          <div class="right" v-else>
            <dl class="tb-clear">
              <dt class="avator"><img :src="item.avator" /></dt>
              <dd>
                <span class="time">2019-08-11 19:13</span>
                <span class="recive-msg">{{item.msg}}</span>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div class="send-message tb-clear" style="position: relative;">
        <textarea name="" id="" cols="30" rows="10" class="msg" v-model="msg">
                </textarea>
        <input type="submit" value="发送" class="send">
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      title: '聊天',
      id: '',
      nickname: '',
      socket: '',
      msg: '',
      // 当前用户所有消息
      messageList: [],
      bridge: [],
      users: []
    }
  },
  computed: {
    ...mapState([
      'admin'
    ]),
    // 当前对话渲染的msg列表
    currentMessage() {
      let vm = this;
      // 筛选只有bridge相同的对话，展示出来
      // 数组比较，先转成字符串
      console.log(vm.messageList);
      let data = vm.messageList.filter(item => {
        return item.bridge.sort().join(',') == vm.bridge.sort().join(',')
      })
      data.map(item => {
        item.status = 0
        return item;
      })
      return data;
    },
    getusers() {
      let vm = this;
      let data = vm.users.filter((item) => {
        return item.uid != vm.admin.id
      });
      console.log("users" + data);
      return data;
    }
  },
  created() {
    console.log("created");
    this.SAVE_USERS();
    this.SAVE_ADMIN();
  },
  mounted() {

    console.log(this.users);
    let vm = this;
    // this.GET_USERS();
    console.log(this.admin);
    console.log(this.users);
    if (!vm.admin.id) {

    } else {
      vm.conWebSocket();
    }
    document.onkeydown = function (event) {
      var e = event || window.event;
      if (e && e.keyCode == 13) { //回车键的键值为13
        vm.send()
      }
    }
  },
  methods: {
    ...mapMutations([
      'SAVE_USERS',
      'SAVE_ADMIN',
      'GET_USERS'
    ]),

    getMsgNum(user) {
      console.log(user);
      if (!user) {
        return this.messageList.filter(item => {
          return !item.bridge.length && item.status === 1
        }).length
      }
      return this.messageList.filter(item => {
        return item.bridge.length && item.id === user.id && item.status === 1
      }).length
    },
    // 切到具体个人
    triggerPersonal(item) {
      console.log("(((((((((((((((((")
      if (this.admin.id === item.id) {
        return;
      }
      // 将当前用户uid，和需要对话的uid放入bridge
      this.bridge = [this.admin.id, item.uid];
      this.title = '和' + item.uid + '聊天';
    },
    send() {
      if (!this.msg) {
        return
      }
      this.sendMessage(2, this.msg)
    },
    sendMessage(type, msg) {
      this.socket.send(JSON.stringify({
        uid: this.admin.id,
        type: type,
        nickname: this.admin.nickname,
        msg: msg,
        // 增加bridge参数
        bridge: this.bridge,
        avator: this.admin.image
      }));
      this.msg = '';
    },
    conWebSocket() {
      let vm = this;
      if (window.WebSocket) {
        vm.socket = new WebSocket('ws://localhost:8001');
        let socket = vm.socket;

        socket.onopen = function (e) {
          console.log("连接服务器成功");
          if (!vm.id) {
            vm.sendMessage(1)
          }
          // 这里将sendMessage方法if外面
          vm.sendMessage(1)
        }
        socket.onclose = function (e) {
          console.log("服务器关闭");
        }
        socket.onerror = function () {
          console.log("连接出错");
        }
        // 接收服务器的消息
        socket.onmessage = function (e) {
          let message = JSON.parse(e.data);
          vm.messageList.push(message);
          if (message.users) {
            vm.users = message.users;
          }
        }
      }
    },
  }
}
</script>

<style>
@import "./adminChat.css";
</style>