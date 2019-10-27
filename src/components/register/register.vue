<!--
 * @Descripttion: 
 * @version: 
 * @Author: khdjj
 * @Date: 2019-08-05 11:17:00
 * @LastEditors: khdjj
 * @LastEditTime: 2019-08-16 09:05:58
 -->
<template>
  <div>
    <div class="wrap">
      <!-- start of 头部导航-->
      <div class="head_top">
        <div class="head clearfix">
          <!--头部左边-->
          <div class="topLeft left">
            <a href="index.html" title="Darry Ring" class="logo_box"></a>
          </div>
          <!--头部左边end-->
          <!--头部右边-->
          <ul class="topRight right">
            <li>国际权威认证</li>
            <li class="tr_2">15天无理由退换</li>
            <li class="tr_3">终身保养</li>
          </ul>
          <!--头部左边end-->
        </div>
      </div>

      <!--end of 头部导航-->
      <!-- starto of container -->
      <div class="container" v-if="!login">
        <!--中间内容-->
        <div class="cmain ddd">
          <!--内容右边-->
          <div class="cort-right right">
            <div class="r_bg"></div>
            <!--登陆框内-->
            <div class="cr_border">
              <div class="tits">
                <span class="em focus"><em></em>邮箱注册</span>
              </div>
              <!--邮箱注册-->
              <form>
                <input type="hidden" value="2" name="type">
                <input type="hidden" value="login.html" name="forward">
                <div class="photo_show">
                  <!--邮箱-->
                  <div class="the_input ">
                    <span class="member"></span>
                    <input type="text" placeholder="请输入邮箱" v-model="email" class="al_Input dr_photo" value="" name="email">
                  </div>
                  <!--邮箱end-->

                  <!--密码-->
                  <div class="the_input ">
                    <span class="pw"></span>
                    <input type="password" placeholder="请输入密码" v-model="pwd" maxlength="21" class="al_Input dr_photo" value="" name="email_pwd">
                  </div>
                  <!--密码end-->
                  <!--密码-->
                  <div class="the_input ">
                    <span class="pw"></span>
                    <input type="password" placeholder="确认密码" v-model="confimpwd" maxlength="21" class="al_Input dr_photo" value="" name="email_pwd_confirm">
                  </div>
                  <!--密码end-->

                  <!--验证-->
                  <div style="border:none" class="the_input">
                    <span class="password"></span>
                    <input type="text" style="width:93px;" placeholder="请输入验证码" v-model="code" class="al_Input ls" value="" name="email_code">
                    <div class="action_code" @click="sendCode()" v-if="send">发送验证码</div>
                    <div class="action_code" v-else>重新发送{{this.time}}</div>

                  </div>
                  <!--验证码end-->

                  <div class="other_input">
                    <div class="left">
                      <input type="checkbox" id="email_check" name="email_check">
                      <label for="email_check">已经仔细阅读并同意<a target="_blank" href="index.html/help_se/49.html">《Darry Ring用户注册协议》</a></label>
                    </div>
                  </div>

                  <!--其他合作-->
                  <div class="other_hz">
                    <input type="button" value="立即注册" id="email_reg" class="up" @click="register">
                  </div>
                  <!--其他合作end-->
                </div>
              </form>
              <div><span style="font-size: 12px; display: inline-block;padding-top: 10px;float:left;margin-left: 176px; ">已经有账号，</span><span style="color: #8e4f1b; font-size: 12px; display: inline-block; float: right; margin-right: 42px; padding-top: 10px;">
                  <a href="javascript:;" @click.prevent="login = !login">立即登录</a></span></div>
              <!--邮箱注册end-->
            </div>
            <!--登陆框内end-->
          </div>
          <!--内容右边end-->
        </div>
        <!--中间内容end-->
      </div>
      <!-- end of container -->

      <!-- 登录 -->

      <!-- starto of container -->
      <div class="container" v-if="login">
        <!--中间内容-->
        <div class="cmain ddd">
          <!--内容右边-->
          <div class="cort-right right">
            <div class="r_bg"></div>
            <!--登陆框内-->
            <form id="loginform">
              <div class="cr_border">
                <h3>登录</h3>
                <!--邮箱-->
                <div id="cssName" class="the_input ">
                  <span class="member"></span>
                  <input type="text" placeholder="请输入邮箱/手机号码" v-model="email" id="txtName" class="al_Input dr_email" value="" name="data[email]" />
                  <i id="tname"></i>
                </div>
                <!--邮箱end-->
                <!--密码-->
                <div style="margin-top:15px;" class="the_input" id="cssPwd">
                  <span class="password"></span>
                  <input type="password" placeholder="请输入密码" v-model="pwd" id="txtPwd" class="al_Input" value="" name="data[password]" />
                  <i id="pwdd"></i>
                </div>
                <!--验证码-->
                <!--验证码end-->
                <!--报错信息-->
                <div class="ts_wrong" id="showWrong" style="display: none">
                  <span id="wrong"> <span id="Label1">Label</span></span>
                </div>
                <!--报错信息end-->
                <!--其他选项-->
                <div class="other_input">
                  <div class="left">
                    <input type="checkbox" name="remember" id="check" value="1" />
                    <label for="check">记住密码</label>
                  </div>
                  <div class="right">
                    <a href="forget.html" class="forget">忘记密码</a>
                  </div>
                </div>
                <!--其他选项end-->
                <!--按钮-->
                <div class="other_input">
                  <div class="bt1 clearfix" id="login">
                    <span class="left" @click.prevent="login=!login">注册</span>
                    <span class="right focus" @click="loginMethod">登录</span>
                  </div>
                </div>
                <!--按钮end-->
                <!--其他合作-->
                <div class="other_hz">
                  <p> <span>更多合作网站帐号登录:</span> <a href="/syncLogin/qq" class="oth_qq" target="black"></a> <a href="/syncLogin/weibo" class="oth_wb" target="black"></a> <a href="/syncLogin/weixin" class="oth_wx" target="black"></a> </p>
                </div>
                <!--其他合作end-->
              </div>
              <input type="hidden" value="index.html" name="forward" />
            </form>
            <!--登陆框内end-->
          </div>
          <!--内容右边end-->
        </div>
        <!--中间内容end-->
      </div>
      <!-- end of container -->

      <!--底部end-->
      <div class="cmain bc_yz">
        <div class="db_cort">
          <p>Copyright &copy; 2006-2015 www.darryring.com 戴瑞珠宝 All Rights Reserved. 粤ICP备11012085号</p>
          <p>中国互联网违法信息举报中心 | 中国公安网络110报警服务 | 本网站提供所售商品的正式发票</p>
        </div>
      </div>

    </div>
    <alert ref="alert"></alert>
  </div>
</template>

<script>
import alert from '../alert/alert'
import axios from 'axios'
import $ from 'jquery'
import { mapMutations} from 'vuex'
export default {
  name: 'register',
  data() {
    return {
      email: null,
      pwd: null,
      confimpwd: null,
      code: null,
      time: 60,
      EMAIL_REGEX: /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/,//邮箱验证正则表达式
      send: true,
      login: false,
    }
  },
  components: {
    alert
  },
  methods: {
    ...mapMutations([
      'SAVE_USERID','SAVE_USERINFO'
    ]),
    showMsg(msg) {
      this.$refs.alert.show(msg);
    },
    loginMethod() {
      var self = this;
      if (!this.EMAIL_REGEX.test(this.email)) {
        this.showMsg("邮箱格式错误");
        return;
      }
      if (this.pwd == '') {
        this.showMsg("密码不能为空");
        return;
      }
      console.log(this.email);
      console.log(this.pwd);
      $.ajax({
        url: '/api/Gift/login',
        type: 'POST',
        data: {
          email: this.email,
          pwd: this.pwd
        },
        success: function (data) {
           console.log(data);
          data = JSON.parse(data);
          if(data.status == 1 ){
            self.showMsg("登录成功");
            console.log(data);
            self.SAVE_USERID(data.user.id);
            self.SAVE_USERINFO(data.user);
            self.$router.push({path:'myInfo'});
          }else{
						console.log("用户名或密码错误！");
						self.$refs.alert.show("用户名或密码错误！");
					}
        }
      })
    },
    sendCode() {
      if (!this.EMAIL_REGEX.test(this.email)) {
        this.showMsg("邮箱格式错误");
        return;
      }
      if (this.pwd == '') {
        this.showMsg("密码不能为空");
        return;
      }
      if (this.confimpwd == '') {
        this.showMsg("确认密码不能为空");
        return;
      }
      console.log(this.email);
      $.ajax({
        type: 'POST',
        url: '/api/Gift/createCaptcha',
        data: {
          email: this.email
        },
        success: function (data) {
          console.log(data);
        }
      })
      this.send = false;
      let timer = setInterval(() => {
        this.time--;
        if (this.time == 0) {
          this.time = 60;
          this.hint = null;
          clearInterval(timer);
          this.send = true;
        }
      }, 1000);
    },
    register() {
      var self = this;
      console.log(this.email);
      if (this.email == '' || this.email == null) {
        this.showMsg("邮箱不能为空");
        return;
      }
      if (this.pwd == '' || this.pwd == null) {
        this.showMsg("密码不能为空");
        return;
      }
      if (this.confimpwd == '' || this.confimpwd == null) {
        this.showMsg("确认密码不能为空");
        return;
      }
      if (this.code == '' || this.code == null) {
        this.showMsg("验证码不能为空");
        return;
      }
      if (this.pwd != this.confimpwd) {
        return;
        this.showMsg("两次密码不一致");
      }
      console.log("aaaaaaaaaaaaaaa");
      $.ajax({
        url: '/api/Gift/register',
        type: "POST",
        data: {
          email: this.email,
          pwd: this.pwd,
          validate: this.code
        },
        success:function(data){
          console.log(data);
         
             self.showMsg("注册成功");
          
        }
      })
    }
  }
}
</script>

<style>
@import "../../common/style.css";
.logo_box {
  width: 180px;
  height: 50px;
  display: block;
  line-height: 200px;
  overflow: hidden;
  background: url(https://img.kekeliwu.com/static/www/images/icon_all.png)
    no-repeat -200px 0px;
}
</style>
