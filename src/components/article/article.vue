<!--
 * @Descripttion: 
 * @version: 
 * @Author: khdjj
 * @Date: 2019-08-13 11:52:28
 * @LastEditors: khdjj
 * @LastEditTime: 2019-08-13 15:07:05
 -->
<template>
  <div>
    <head-top></head-top>
    <div id="content">
      <div class="crumbs_nav">
        <a href="/">首页</a><span class="line">&gt;</span><a href="/gonglue/">礼物攻略</a><span class="line">&gt;</span><span class="gray9"></span>
      </div>
      <!-- /crumbs_nav -->
      <div class="box863 fl mr40">
        <div class="raiders-detail ask-detail-text">
          <div class="tbox">
            <h2 class="plate-title bWFtaW9vMTAxMQ==">{{article.title}}</h2>
            <p class="time">{{article.time}}
              &nbsp;&nbsp;作者：可可礼物&nbsp;&nbsp;原创内容严禁转载</p>
          </div>
          <!-- /tbox -->
          <div class="summary bWFtaW9vMTAxMQ==">
            <div class="sy-box bWFtaW9vMTAxMQ==">{{article.details}}</div>
          </div>
          <!-- /summary -->
          <div v-for="(item,index) in articleData" :key="index">
            <div class="stitle clearfix">
              <i class="ico g">{{index+1}}</i><strong class="bt bWFtaW9vMTAxMQ==">{{item.title}}</strong>
            </div>
            <!-- /stitle -->
            <div class="scont bWFtaW9vMTAxMQ==">{{item.details}}</div>
            <!-- /scont -->
            <div class="r-wzlist">
              <div class="r-imgbox">
                <a href="/item/2919" class="img-h" target="_blank"><img class="lazy" :src="item.image" :alt="item.title" style="display: inline;">
                </a><a class="likebut" onclick="likeGood('2919')" href="javascript:;" rel="0" id="like_2919" title="喜欢"></a>
              </div>
              <div class="r-button mb40">
                <span class="price">价格：<span class="price"><span class="rmb">¥</span><span class="m-num">{{item.price}}</span>
                  </span>
                </span><a href="/item/2919" class="sy-but bk" target="_blank">礼物详情</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /box863 -->
      <div class="box297 fl">
      </div>
      <div class="clear"></div>
    </div>
  </div>

</template>

<script>
import headTop from "../head/head"
import { mapState } from 'vuex'
export default {
  name: 'article',
  components: {
    headTop
  },
  data() {
    return {
      articleData: []
    }
  },
  computed: {
    ...mapState([
      'article'
    ])
  },
  mounted() {
    console.log(this.article);
    this.getArticle();
  },
  methods: {
    getArticle() {
      let self = this;
      $.ajax({
        url: '/api/findPushGift',
        type: 'POST',
        data: {
          articalId: this.article.id
        },
        success: function (res) {
          res = JSON.parse(res);
          console.log(res);
          res.result.forEach((item) => {
            let d = {};
            d.articalId = item.articalId;
            d.details = item.details;
            d.id = item.id;
            d.image = "http://192.168.21.49:8080/Gift" + item.image;
            d.link = item.link;
            d.price = item.price;
            d.title = item.title;
            self.articleData.push(d);
          })
        }
      })
    }
  }
}
</script>

<style >
@import "./article.css";
</style>