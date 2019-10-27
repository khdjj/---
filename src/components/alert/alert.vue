<!--
 * @Descripttion: 
 * @version: 
 * @Author: khdjj
 * @Date: 2019-08-05 15:33:06
 * @LastEditors: khdjj
 * @LastEditTime: 2019-08-16 14:14:56
 -->
<template>
  <div>
    <div id="alert">{{msg}}</div>
    <div id="shade"></div>
  </div>
  
</template>

<script>
export default {
  name: "alert",
  data(){
      return{
          msg:null
      }
  },
  methods: {
    show(msg) {
      this.msg = msg;
      let timer = null,
        time = 3,
        alert = document.getElementById("alert"),
        shade =  document.getElementById("shade");
      timer = setInterval(() => {
        time--;
        alert.style.display = "block";
        shade.style.display = "block";
        if (time == 0) {
          alert.style.display = "none";
          shade.style.display = "none";
          clearInterval(timer);
        }
      },1000);
    }
  }
};
</script>
<style>
#alert {
  display: none;
  height: 39px;
  background-color: black;
  position: absolute;
  top: 50%;
  left: 40%;
  color: #fff;
  border-radius: 5px;
  text-align: center;
  padding: 10px;
  z-index: 99999999;
}
#shade{
    display:none;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #000;
    opacity: 0.6;
    z-index: 9;
    min-height: 800px;
    z-index:99999998;
}
</style>
