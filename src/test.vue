<!--
 * @Descripttion: 
 * @version: 
 * @Author: khdjj
 * @Date: 2019-08-11 09:08:33
 * @LastEditors: khdjj
 * @LastEditTime: 2019-08-11 15:41:37
 -->

<template>
  <!-- v-if="item.uid!=uid"  -->
  <div class="web-im">
    <div class="dis-flex">
      <div class="user-list">
        <div class="user" @click="triggerGroup">群1</div>
        <div>
          <div class="user" @click="triggerPersonal(item)" v-for="item in getusers" :key="item">{{item.nickname}}> </div>
        </div>
      </div>
      <div class="msg-content">
        <div class="header im-title">{{title}}</div>
        <div class="content im-record">
          <div class="li" :class="{user: item.uid == uid}" v-for="item in currentMessage" :key="item">
            <template v-if="item.type===1">
              <p class="join-tips">{{item.msg}}</p>
            </template>
            <template v-else>
              <div class="img">{{item.nickname}}</div>
              <p class="message-box">{{item.msg}}</p>
            </template>
          </div>
        </div>
        <div class="footer im-input">
          <input type="text" v-model="msg" placeholder="请输入内容">
          <button @click="send">发送</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
      title: '群聊',
      uid: '',
      nickname: '',
      socket: '',
      msg: '',
      // 当前用户所有消息
      messageList: [],
      users: [],
      bridge: []
    }
  },
  mounted() {
    let vm = this;
    //     // let user = localStorage.getItem('WEB_IM_USER');
    //     // user = user && JSON.parse(user) || {};
    //     // vm.uid = user.uid;
    //     // vm.nickname = user.nickname;
    //     // vm.uid = "abc";
    this.users = [
      {
        uid: '大白'
      }, {
        uid: '大龙'
      }
    ]
    this.uid = this.$route.query.uid;

    vm.nickname = "开花的季节";
    if (!vm.uid) {

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
  computed: {
    // 当前对话渲染的msg列表
    currentMessage() {
      let vm = this;
      // 筛选只有bridge相同的对话，展示出来
      // 数组比较，先转成字符串
      let data = vm.messageList.filter(item => {
        return item.bridge.sort().join(',') == vm.bridge.sort().join(',')
      })
      return data;
    },
    getusers(){
        let vm = this;
        let data = vm.users.filter((item)=>{
            return item.uid!=vm.uid
        });
        console.log(data);
        return data;
    }
  },
  methods: {
    // 切换到群聊
    triggerGroup() {
      this.bridge = [];
      this.title = '群聊';
    },
    // 切到具体个人
    triggerPersonal(item) {
        console.log("(((((((((((((((((")
      if (this.uid === item.uid) {
        return;
      }
      // 将当前用户uid，和需要对话的uid放入bridge
      this.bridge = [this.uid, item.uid];
      this.title = '和' + item.nickname + '聊天';
    },
    send() {
      if (!this.msg) {
        return
      }
      this.sendMessage(2, this.msg)
    },
    sendMessage(type, msg) {
      this.socket.send(JSON.stringify({
        uid: this.uid,
        type: type,
        nickname: this.nickname,
        msg: msg,
        // 增加bridge参数
        bridge: this.bridge
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
          if (!vm.uid) {
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
    }
  }
}





















// export default {
//   data() {
//     return {
//       title: "群聊",
//       uid: '',
//       nickname: "abc",
//       socket: "",
//       msg: "我是khdjj",
//       messageList: [],
//       users: [],
//       bridge: [],
//     }
//   },
//   mounted() {
//     // this.users=[
//     //       {
//     //           uid:'大白'
//     //       },{
//     //           uid:'大龙'
//     //       }

//     //   ]
//     // //   this.conWebSocket();
//       this.uid = this.$route.query.uid;
//     //   console.log(this.uid);
//     //   if(this.uid == 'aaa'){
//     //     //   this.bridge.push('abc');
//     //   }else{
//     //     //   this.bridge.push('aaa');
//     //   }


//     let vm = this;
//     // let user = localStorage.getItem('WEB_IM_USER');
//     // user = user && JSON.parse(user) || {};
//     // vm.uid = user.uid;
//     // vm.nickname = user.nickname;
//     // vm.uid = "abc";
//     vm.nickname = "开花的季节";
//     if(!vm.uid){

//     } else {
//       vm.conWebSocket();
//     }
//     document.onkeydown = function (event) {
//         var e = event || window.event;
//         if (e && e.keyCode == 13) { //回车键的键值为13
//             vm.send()
//         }
//     }

//   },
//   computed: {
//     currentMessage() {
//       let vm = this;
//       let data = vm.messageList.filter(item => {
//         return item.bridge.sort().join(',') == vm.bridge.sort().join();
//       });
//       return data;
//     }
//   },
//   methods: {
//     triggerGroup() {
//       this.bridge = [];
//       this.title = "群聊";
//     },
//     triggerPersonal(item) {
//         console.log("aaaaaaaaaaa");
//       if (this.uid === item.uid) {
//         return;
//       }
//       this.bridge = [this.uid,item.uid];
//       console.log(this.bridge);
//       this.title = "和" + item.nickname + "聊天";
//     },
//     send() {
//       if (!this.msg) {
//         return;
//       }
//       this.sendMessage(2, this.msg);
//     },
//     sendMessage(type, msg) {
//         console.log("发送消息")
//       this.socket.send(JSON.stringify({
//         uid: this.uid,
//         type: type,
//         nickname: this.nickname,
//         msg: msg,
//         bridge: this.bridge
//       }));
//       this.msg = "";
//     },
//     conWebSocket() {
//       let vm = this;
//       if (window.WebSocket) {
//         vm.socket = new WebSocket("ws://localhost:8001");
//         let socket = vm.socket;
//         socket.onopen = function (e) {
//           console.log("连接服务器成功");
//           if (vm.uid) {

//           }
//           vm.sendMessage(1,"hi 我是开花的季节");
//         }
//         socket.onclose = function (e) {
//           console.log("服务器关闭");
//         }
//         socket.onerror = function () {
//           console.log("连接出错");
//         },
//         socket.onmessage = function (e) {
//             let message = JSON.parse(e.data);
//             vm.messageList.push(message);
//             if (message.users) {
//               vm.users = message.users;
//             }
//           }
//       }
//     }
//   }
// }



</script>
<style>
</style>