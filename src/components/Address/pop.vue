<!--
 * @Descripttion: 
 * @version: 
 * @Author: khdjj
 * @Date: 2019-08-09 20:27:57
 * @LastEditors: khdjj
 * @LastEditTime: 2019-08-16 14:51:17
 -->
<template>
  <div class="m-layer z-show">
    <div class="zbar">
      <div class="zttl f-thide">新增地址</div>
    </div>
    <div class="zcnt">
      <!-- 注册 -->
      <div class="lyct lyct-1">
        <div class="n-log2 n-log2-2">
          <div class="j-mob">
            <div class="u-phonewrap">
              <div class="txtwrap">
                <input type="text" name="p" id="p" class="j-phone txt u-txt" placeholder="请输入收货人姓名" autocomplete="off" v-model="name" />
              </div>
            </div>
          </div>
          <div class="f-mgt10">
            <input type="text" name="pw" id="pw" class="j-pwd u-txt" placeholder="请输入收货人电话" autocomplete="new-password" v-model="phone" />
          </div>
           <div class="f-mgt10">
            <textarea  placeholder="请输入收货人详细地址" autocomplete="new-password" v-model="address" style="width:229px;height:45px;" ></textarea>
          </div>  
           <div class="f-mgt10">
            <input  type="checkbox" value="0" v-model="defalt" />设置为默认收货地址
          </div>        
          <div class="f-mgt20">
            <a class="j-primary u-btn2 u-btn2-2" hidefocus="true" href="#"  @click="saveAdress()">保存
            </a>
          </div>
        </div>
        
      </div>
    </div>
    <span class="zcls" title="关闭窗体" @click="hide()">×</span>
    <alert ref="alert"></alert>
  </div>
</template>
<script>
import {mapMutations,mapState} from "vuex";
import alert from '../alert/alert'
export default {
  name:'address',
  data(){
    return {
      phone:'',
      name:'',
      address:'',
      defalt:0
    }
  },
  components:{
    alert
  },
  computed:{
    ...mapState([
      'userId'
    ])
  },
  methods:{
    ...mapMutations([
      'SAVE_ADDRESS'
    ]),
    //显示此pop组件
    show() {
      document.getElementsByClassName("m-layer")[0].style.display = "block";
    },
    //隐藏此pop组件
    hide() {
      this.reset();
      document.getElementsByClassName("m-layer")[0].style.display = "none";
    },
    reset(){
      this.phone = '';
      this.name = '';
      this.address = '';
      this.defalt = 0;
    },
    saveAdress(){
      var self = this;
      var d = false;
      if(this.defalt){
        d = 1;
      }else{
        d = 0;
      }
      $.ajax({
        type:'POST',
        url:"/api/addAddress",
        data:{
          userid:this.userId,
          type:d,
          name:this.name,
          tel:this.phone,
          address:this.address,
        },
        success:function(res){
          console.log(res);
          res = JSON.parse(res);
          if(res.status == 1){
            // self.$refs.alert.show("添加地址成功");
            self.SAVE_ADDRESS(res.address);
          }
          self.hide();
        }
      })
    }
  }
};
</script>

<style scoped >
@import url("./pop.css");
</style>

