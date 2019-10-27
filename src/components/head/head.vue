<!--
 * @Descripttion: 
 * @version: 
 * @Author: khdjj
 * @Date: 2019-08-08 08:37:16
 * @LastEditors: khdjj
 * @LastEditTime: 2019-08-16 08:36:39
 -->
<template>
  <div id="header" class="cocodiy-shead">
    <div id="header">
      <div class="hbox clearfix">
        <h1 class="logo"><a title="可可礼物网" href="/">可可礼物网</a></h1>
        <div class="nav" id="head_nav">
          <div class="box">
            <ul id="nav_links" class="select_main clearfix">
              <li><a class="menu" href="/"><strong>首页</strong></a></li>
              <li id="menu1" class="" @mouseover="showWho()"><a class="menu"><strong class="icon">送给谁</strong></a></li>
              <li>
                <router-link class="menu" to="/shopCar"><strong>我的购物车</strong></router-link>
              </li>
              <li>
                <router-link class="menu" to="/collection"><strong>我的收藏</strong></router-link>
              </li>
              <li><a class="menu" href="/liwujie"><strong>发现礼物</strong></a></li>
              <li v-if="isLogin">
                <router-link class="menu" to="/order"><strong>个人中心</strong></router-link>
              </li>
              <li v-else>
                <router-link class="menu" to="/register"><strong>登录/注册</strong></router-link>
              </li>
              <li class="last" id="menubox">
                <router-link class="menu" to="/giftIntro"><strong class="icon">礼物攻略</strong>
                </router-link>
              </li>
              <li v-if="isLogin"><a class="menu" @click.prevent="logout()"><strong>退出</strong></a></li>
            </ul>
          </div><!-- /box -->
          <div id="sbox1" class="s_linksbox">
            <div class="cbox clearfix">
              <div class="links">
                <div class="tith"><i class="ico i1"></i><strong class="t">亲爱的ta</strong><i class="go"></i></div>
                <div class="abox"><a href="javascript:;">女友</a><a href="javascript:;">男友</a><a href="javascript:;">老婆</a><a href="javascript:;">老公</a><a href="javascript:;">闺蜜</a><a href="javascript:;">兄弟</a><a href="javascript:;">情侣礼物</a><a href="javascript:;">浪漫礼物</a><a href="javascript:;">恋爱纪念</a><a href="javascript:;">结婚纪念</a><a href="javascript:;">约会礼物</a><a href="javascript:;">创意礼物</a></div>
              </div>
              <div class="links">
                <div class="tith"><i class="ico i2"></i><strong class="t">挚友同学</strong><i class="go"></i></div>
                <div class="abox"><a href="javascript:;">女生</a><a href="javascript:;">男生</a><a href="javascript:;">女同学</a><a href="javascript:;">男同学</a><a href="javascript:;">女性朋友</a><a href="javascript:;">男性朋友</a></div>
              </div>
              <div class="links">
                <div class="tith"><i class="ico i3"></i><strong class="t">家人师长</strong><i class="go"></i></div>
                <div class="abox"><a href="javascript:;">妈妈</a><a href="javascript:;">爸爸</a><a href="javascript:;">孩子</a><a href="javascript:;">老人</a><a href="javascript:;">女儿</a><a href="javascript:;">儿子</a><a href="javascript:;">女老师</a><a href="javascript:;">男老师</a><a href="javascript:;">长辈</a><a href="javascript:;">婴儿</a><a href="javascript:;">健康礼品</a><a href="javascript:;">实用礼物</a></div>
              </div>
              <div class="links">
                <div class="tith"><i class="ico i4"></i><strong class="t">商务职场</strong><i class="go"></i></div>
                <div class="abox"><a href="javascript:;">领导</a><a href="javascript:;">客户</a><a href="javascript:;">同事</a><a href="javascript:;">员工</a><a href="javascript:;">外国人</a><a href="javascript:;">商务礼品</a></div>
              </div>
              <div class="links">
                <div class="tith"><i class="ico i5"></i><strong class="t">为啥送</strong><i class="go"></i></div>
                <div class="abox"><a href="javascript:;">结婚</a><a href="javascript:;">表白</a><a href="javascript:;">生日</a><a href="javascript:;">毕业</a><a href="javascript:;">生子</a><a href="javascript:;">祝寿</a><a href="javascript:;">开业</a><a href="javascript:;">乔迁</a><a href="javascript:;">成年礼</a><a href="javascript:;">情人节</a><a href="javascript:;">圣诞节</a><a href="/topic/">更多</a></div>
              </div>
              <div class="clear"></div>
            </div>
          </div><!-- /s_linksbox -->
        </div><!-- /nav -->
        <div class="search_form">
          <input type="text" style="color: rgb(182, 183, 185);" v-model="searchKey" autocomplete="off" name="wd" value="搜索礼物" class="sr">
          <input type="submit" class="sub" value="搜索" @click="search()">
        </div>
        <!--/ search_form-->
      </div>
    </div><!-- /header -->
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from 'vuex'
export default {
  name: 'head',
  data() {
    return {
      isLogin: false,
      searchKey: ''
    }
  },
  computed: {
    ...mapState([
      'userId'
    ])
  },

  mounted() {
    this.getUserId();
    if (this.userId != '' && this.userId != null) {
      this.isLogin = true;
    }
    this.clickNav();
    console.log(this.isLogin)
  },
  methods: {
    ...mapActions([
      'getUserId'
    ]),
    ...mapMutations([
      'LOGOUT'
    ]),
    showWho() {
      $('#sbox1').toggleClass('show');
    },
    search() {
      var vm = this;
      console.log("aaaaaaa");
      console.log(this.searchKey);
      $.ajax({
        type: 'POST',
        url: '/api/findgift',
        data: {
          title: this.searchKey,
          pagesize: 24
        },
        success: function (res) {
          console.log(res);
          vm.$emit('head', JSON.parse(res));
        }
      })
    },
    logout() {
      this.LOGOUT();
      // window.location.reload();
    },
    clickNav(){
      var vm  = this;
      $('.abox a').click(function(){
        var key = $(this).text();
        console.log(key);
        $.ajax({
          type:"POST",
          url:'/api/findGiftByPartner',
          data:{
            partner:key
          },
          success:function(res){
            console.log(JSON.parse(res));
            vm.$emit('head', JSON.parse(res));
          }
        })
      })
    }

  }
}
</script>
<style>
@import url("https://img.kekeliwu.com/static/www/css/cocodiy2017.css");
.show {
  display: block !important;
}

.showMore {
  display: block;
}
a {
  text-decoration: none !important;
}
#header .sr {
  width: 240px;
  vertical-align: middle;
  color: #ababab;
  color: #999;
  line-height: 34px;
  height: 34px;
  font-size: 12px;
  background: none;
  float: left;
  width: 200px;
  border: none;
  text-indent: 15px;
}
#header .sub {
  width: 38px;
  height: 34px;
  border: none;
  background: none;
  cursor: pointer;
  vertical-align: middle;
  float: left;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  text-indent: -9999px;
}
</style>


