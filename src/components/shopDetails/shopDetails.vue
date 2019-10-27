<!--
 * @Descripttion: 
 * @version: 
 * @Author: khdjj
 * @Date: 2019-08-08 16:28:06
 * @LastEditors: khdjj
 * @LastEditTime: 2019-08-16 14:11:58
 -->
<template>
  <div>
    <head-top></head-top>
    <div id="bd">
      <div id="detail">
        <div class="tb-detail-bd tb-clear">
          <div class="tb-summary tb-clear">
            <div class="tb-item-info tb-clear">
              <div class="tb-item-info-l">
                <div class="tb-gallery">
                  <div class="tb-booth tb-pic tb-main-pic tb-video-mode">
                    <a href="javascript:;" rel="nofollow" target="_blank" data-spm-anchor-id="2013.1.0.0">
                      <span class="ks-imagezoom-wrap">
                          <img id="J_ImgBooth" :src="image" data-haszoom="700" data-size="400x400">
                        <span class="ks-imagezoom-icon" style=""></span>
                        <span style="position: absolute; top: 200px; left: 200px; width: 200px; height: 200px; display: none;" class="ks-imagezoom-lens" data-spm-anchor-id="2013.1.0.i3.2fd660eaore1VL"></span></span>
                    </a>
                    <div class="zoom-icon tb-iconfont" id="J_ZoomIcon">ő</div>
                  </div>
                  <ul id="J_UlThumb" class="tb-thumb tb-clearfix">
                    <li id="J_VideoThumb" class="tb-video-thumb tb-selected" v-for="(img,index) in shop.image" :key="index" @click="changeShowImg(img)">
                      <div class="tb-pic tb-s50"><a href="javascript:;">
                          <img :src="img"></a></div><span class="tb-video-logo tb-iconfont"></span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="tb-item-info-r" data-spm="iteminfo" data-spm-max-idx="32">
                <div class="tb-property tb-property-x">
                  <div class="tb-wrap tb-wrap-newshop">

                    <div id="J_Title" class="tb-title" shortcut-key="t" shortcut-label="查看宝贝标题" shortcut-effect="focus">
                      <h3 class="tb-main-title" :data-title="shop.title" data-spm-anchor-id="2013.1.iteminfo.i1.2fd660eaore1VL">

                        <span class="tb-stuff-status">定制</span>
                        {{shop.title}}
                      </h3>
                      <h2 style="font-size: 15px;margin-top: 10px; color: #ff6200;"><span class="tb-name tb-property-type">具体参数:</span>{{specific}}</h2>
                    </div>
                    <div id="J_Banner" class="tb-banner"></div>
                    <ul class="tb-meta tb-promo-meta">
                      <li id="J_PromoPrice" class="tb-detail-price tb-promo-price tb-clear">
                        <span class="tb-property-type">淘宝价</span>
                        <div class="tb-property-cont">
                          <div id="J_Promo" class="tb-promo-mod">
                            <div id="J_PromoHd" class="tb-promo-hd tb-promo-item">
                              <div class="tb-promo-item-bd"><strong class="tb-promo-price"><em class="tb-rmb">¥</em><em id="J_PromoPriceNum" class="tb-rmb-num">{{price}}</em></strong><span id="J_PromoType" class="tb-promo-type">惊喜价</span><span id="J_PromoTips" class="tb-promo-tips"></span></div>
                              <div class="tb-promo-item-ft"></div>
                            </div>
                            <div id="J_PromoBd" class="tb-promo-bd"></div>
                          </div>
                        </div>
                      </li>
                      <li id="J_Duty"></li>
                      <li id="J_ActivityPrice"></li>
                      <li id="J_Counter" class="tb-counter">
                        <span class="tb-property-type">销量</span>
                        <div class="tb-counter-bd">
                          <div class="tb-rate-counter">
                            <a id="J_ReviewTabTrigger" href="javascript:;" data-spm-anchor-id="2013.1.iteminfo.7">
                              <strong id="J_RateCounter">{{shop.comment}}</strong>
                              <span style="cursor:pointer">累计评论</span>
                            </a>
                          </div>
                          <div class="tb-sell-counter">
                            <a href="javascript:;" title="30天内已售出665件，其中交易成功341件" data-spm-anchor-id="2013.1.iteminfo.8">
                              <strong id="J_SellCounter">{{shop.deal}}</strong>
                              <span>交易成功</span>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li id="J_MorePromoSlider" class="tb-more-promo-slider tb-clearfix" style="display: none">
                        <ul id="J_MorePromoList"></ul>
                        <div class="post-script">以上价格可在付款时选择享用</div>
                      </li>
                    </ul>

                    <div id="J_StepPrice"></div>

                    <div id="J_logistic">
                      <div class="tb-logistic tb-clearfix"><span class="tb-name tb-property-type">配送</span>
                        <div id="J_LogisticInfo" class="tb-logistic-info">
                          <div class="wl-areainfo clearfix"><span id="J_WlAreaInfo" class="wl-areacon"><span id="J-From">广东惠州</span>
                              <!-- 至 <span id="J-To"><span class="wl-addressinfo" id="J_WlAddressInfo" title="广东中山">广东中山 <s></s></span>
                          </span> -->
                            </span><span class="loading" id="J-Loading"></span></div>
                          <div id="J_WlServiceInfo" class="wl-serviceinfo">
                            <span class="wl-servicetitle" id="J_WlServiceTitle" v-if="shop.fare==0">快递 免运费></span>
                            <span class="wl-servicetitle" id="J_WlServiceTitle" v-else>运费：{{shop.fare}}</span>
                          </div>
                          <div id="serviceFeeListInfo" class="wl-serviceinfo"></div>
                          <div id="J_WlServiceTitleMark" class="wl-serviceinfo"></div>
                        </div>
                      </div>
                    </div>
                    <div id="J_SepLine" class="sep-line"></div>
                    <div id="J_isku" class="tb-key tb-key-sku" shortcut-key="i" shortcut-label="挑选宝贝" shortcut-effect="focus">
                      <div class="tb-skin">
                        <dl class="J_Prop tb-prop tb-clear  J_Prop_Color ">
                          <dt class="tb-property-type">{{shopDetail[0].type}}</dt>
                          <dd>
                            <ul :data-property="shopDetail[0].type" class="J_TSaleProp tb-img tb-clearfix">

                              <li class="" v-for="(item,index) in shopDetail" :key="index" @click="changeItem(item)">
                                <a href="javascript:;" v-bind:style="{backgroundImage:'url('+item.image+')'}">
                                  <span>{{item.title}}</span>
                                </a>
                                <i>已选中</i>
                              </li>
                            </ul>
                          </dd>
                        </dl>
                        <dl class="tb-amount tb-clear">
                          <dt class="tb-property-type">数量</dt>
                          <dd>
                            <span class="tb-stock" id="J_Stock">
                              <a href="javascript:void(0);" title="减1" hidefocus="" class="tb-reduce J_Reduce tb-iconfont tb-disable-reduce" @click="shopNum = shopNum-1">-</a>
                              <input id="J_IptAmount" type="text" class="tb-text" value="1" maxlength="8" title="请输入购买量" v-model="shopNum">
                              <a href="javascript:void(0);" hidefocus="" class="tb-increase J_Increase tb-iconfont" title="加1" @click="shopNum= shopNum+1">+</a>件
                            </span>
                            <em>(库存<span id="J_SpanStock" class="tb-count">{{stock}}</span>件)</em>
                          </dd>
                        </dl>
                        <dl class="tb-amount tb-clear">
                          <dt class="tb-property-type">操作</dt>
                          <a class="likeout-num" href="javascript:;" @click="collectItem()">收藏宝贝</a>
                          <a class="ww-light ww-large" href="javascript:;" @click="contact()"></a>
                        </dl>
                        <div id="J_juValid" class="tb-action tb-clearfix ">

                          <div class="tb-btn-buy">

                            <a href="javascript:;" title="点击此按钮，到下一步确认购买信息" class="J_LinkBuy" @click="toConfirmOrder()">
                              立即购买
                            </a>

                          </div>

                          <div class="tb-btn-add" style="margin-left: 20px;">

                            <a href="javascript:;" title="加入购物车" class="J_LinkAdd" @click.prevent="addToByCar()">
                              <i class="tb-iconfont"></i>加入购物车
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tb-tabbar-wrap tb-clear">
          <div class="tb-tabbar-inner-wrap tb-clear">
            <ul id="J_TabBar" class="tb-tabbar tb-clear">
              <li class="tb-first selected" @click="changeTag($event)">
                <a class="tb-tab-anchor" href="javascript:void(0);" hidefocus="true" shortcut-key="g d" shortcut-label="查看宝贝详情" shortcut-effect="click" data-index="0" data-spm-click="gostr=/tbdetail;locaid=d1" data-spm-anchor-id="2013.1.20140004.d1">宝贝详情</a>
                <div class="tb-selected-indicator"></div>
              </li>
              <li class="tb_second" @click="changeTag($event)">
                <a class="tb-tab-anchor" @click.prevent="loadItemComment()" hidefocus="true" shortcut-key="g c" shortcut-label="查看累计评论" shortcut-effect="click" data-index="1" data-spm-click="gostr=/tbdetail;locaid=d2" data-spm-anchor-id="2013.1.20140004.d2">
                  累计评论
                  <em class="J_ReviewsCount">{{commentData.length}}</em>
                </a>
                <div class="tb-selected-indicator"></div>
              </li>
            </ul>
          </div>
        </div>
        <div class="main-wrap tb-clear J_TRegion" v-if="!isComment">
          <div class="sub-wrap tb-clear">
            <div id="attributes" class="attributes tb-clear">

              <!-- attributes div start -->

              <ul class="attributes-list tb-clear">
                <li title="私定spedear" v-for="(item,index) in shop.parameter" :key="index">{{item}}</li>
              </ul>
            </div>
            <div id="description" class="J_DetailSection tshop-psm ke-post">
              <div id="J_Customization"></div>
              <div id="J_DivItemDesc" class="content">
                <div>
                  <img align="absmiddle" :src="img" v-for="(img,index) in shop.detailsImage" :key="index" style="width: 100%;float: left;">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="kg-rate-main" v-if="isComment">
          <div class="kg-rate-wd-filter-bar">
            <ul class="J_KgRate_Filter filtering">
              <li class="is-current" v-for="(item,index) in commentStatus" :key="index">
                <label for="reviews-t-all">
                  <input type="radio" name="J_KgRate_ReviewType" id="reviews-t-all" @change="changeFindKey(item.status)" checked="">
                  {{item.name}}
                </label>
              </li>

            </ul>
          </div>
          <div class="tb-revbd">
            <ul>
              <li id="review-1053874356674" class="J_KgRate_ReviewItem kg-rate-ct-review-item" tabindex="0" v-for="(item,index) in commentData" :key="index">
                <div class="from-whom">
                  <img class="avatar" :src="item.uimage">
                  <div v-if="item.uname==''">{{item.uId}}</div>
                  <div v-else>{{item.uname}}</div>
                </div>
                <div class="review-details">
                  <div class="tb-rev-item " data-id="1053874356674">
                    <div class="J_KgRate_ReviewContent tb-tbcr-content ">
                      {{item.detail}}
                    </div>
                    <div class="tb-rev-item-media tb-clear">
                      <ul class="kg-photo-viewer-thumb-bar tb-tbcr-mt" v-if="item.image">
                        <li class="photo-item" v-for="(img,index) in item.image" :key="index">
                          <img :src="img">
                        </li>
                      </ul>
                    </div>
                    <div class="tb-r-act-bar">
                      <div class="tb-r-info">
                        <span class="tb-r-date">{{item.time}}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <alert ref="alert"></alert>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import headTop from '../head/head'
import alert from '../alert/alert'
export default {
  name: 'showDetails',
  data() {
    return {
      isComment: false,
      shopNum: 1,
      shopDetail: [],
      specific: '',//商品的具体参数
      image: '',//商品的展示图片
      price: '',//商品的具体价格
      stock: '',//商品的库存,
      buyid: '',//购买商品的具体id
      money: '',
      title: '',
      buyitem: null,
      commentData: [],
      commentStatus: [{
        name: '全部',
        status: 0
      }, {
        name: '图片',
        status: 2,
      }, {
        name: '追评',
        status: 1
      }, {
        name: '差评',
        status: 3
      }, {
        name: '中评',
        status: 4
      }, {
        name: '好评',
        status: 5
      }]
    }
  },
  components: {
    headTop, alert
  },
  computed: {
    ...mapState([
      'shop', 'userId', 'userinfo'
    ])
  },
  mounted() {
    console.log(this.shop);
    this.getShopDetails();
    this.getIsCollect();
  },
  beforeUpdate() {  
  },
  methods: {
    ...mapMutations([
      'SAVE_ITEM', 'SAVE_USERS'
    ]),
    getImg() {
      console.log($('#J_ImgBooth'));
    },
    getIsCollect() {
      $.ajax({
        type: "POST",
        url: '/api/isCollect',
        data: {
          userid: this.userId,
          giftid: this.shop.id
        },
        success: function (res) {
          console.log("eeeeeeeeeee")
          console.log(res);

        }
      })
    },
    changeFindKey(status) {
      var vm = this;
      console.log(status);
      $.ajax({
        type: "POST",
        url: '/api/findcomment',
        data: {
          choice: status,
          gid: this.shop.id
        },
        success: function (res) {

          vm.commentData = [];
          res = JSON.parse(res);
          console.log(res);
          console.log(res.results[0].uimage);
          res.results.forEach((item) => {
            var d = {};
            d.detail = item.detail;
            d.gId = item.gId;
            d.gtitle = item.gtitle;
            d.id = item.id;
            var i = item.image.split(',');
            console.log(i);
            var a = [];
            if (i[0] != '') {
              i.forEach((item) => {
                a.push("http://192.168.21.49:8080/Gift" + item);
              });
            }
            d.image = a;
            d.rate = item.rate;
            d.redetail = item.redetail;
            d.review = item.review;
            d.time = item.time;
            d.uId = item.uId;
            console.log(item.uimage.indexOf('http://'));
            if (item.uimage.indexOf('http://') != -1) {
              d.uimage = item.uimage;
            } else {
              d.uimage = "http://192.168.21.49:8080/Gift" + item.uimage;
            }
            d.uname = item.uname;
            vm.commentData.push(d);
          })
          console.log(vm.commentData);
        }
      })
    },
    loadItemComment() {
      var vm = this;
      $.ajax({
        type: "POST",
        url: "/api/findAllComment",
        data: {
          gid: this.shop.id,
          limitset: 20,
          offset: 0
        },
        success: function (res) {
          vm.commentData = [];
          res = JSON.parse(res);
          console.log(res);
          res.results.forEach((item) => {
            var d = {};
            d.detail = item.detail;
            d.gId = item.gId;
            d.gtitle = item.gtitle;
            d.id = item.id;
            var i = item.image.split(',');
            console.log(i);
            var a = [];
            if (i[0] != '') {
              i.forEach((item) => {
                a.push("http://192.168.21.49:8080/Gift" + item);
              });
            }
            d.image = a;
            d.rate = item.rate;
            d.redetail = item.redetail;
            d.review = item.review;
            d.time = item.time;
            d.uId = item.uId;
            if (item.uimage.indexOf('http://') != -1) {
              d.uimage = item.uimage;
            } else {
              d.uimage = "http://192.168.21.49:8080/Gift" + d.uimage;
            }
            d.uname = item.uname;
            vm.commentData.push(d);
          })
          console.log(vm.commentData);
        }
      })
    },
    collectItem() {
      var self =this;
      $.ajax({
        type: "POST",
        url: '/api/yesCollect',
        data: {
          userid: this.userId,
          giftid: this.shop.id
        },
        success: function (res) {
          console.log(res);
          res = JSON.parse(res);
          if (res.status == 1) {
            $('.likeout-num').addClass('hover');
            $('.likeout-num').html('已收藏');
            self.$refs.alert.show("收藏成功");
          }
        }
      })
    },
    contact() {
      this.SAVE_USERS(this.userinfo);
      this.$router.push({ path: '/chat' });
    },
    changeTag(e) {
      $('.tb_second').toggleClass('selected');
      $('.tb-first').toggleClass('selected');
      this.isComment = !this.isComment;
    },
    toConfirmOrder() {
      console.log(this.buyitem);
      if (!this.buyitem || this.buyitem == null) {
        this.$refs.alert.show("未选择任何商品");
        return;
      }
      console.log(this.buyitem);
      this.SAVE_ITEM(this.buyitem);
      this.$router.push({ path: '/confim' });
    },
    addToByCar() {

      //userid gpid、gid、num,地址id、money、留言
      var self = this;
      this.money = this.money * this.shopNum;
      console.log(this.buyid);
      console.log(this.userId);
      $.ajax({
        type: "POST",
        url: '/api/addCar',
        data: {
          gpid: this.buyid,
          userid: this.userId,
          num: this.shopNum,
          title: this.shop.title
        },
        success: function (res) {
          console.log(res);
          if (res.status == 1) {
            console.log("添加购物车成功");
            self.$refs.alert.show("添加购物车成功");
          }
        }
      })
    },
    getShopDetails() {
      var self = this;
      console.log(this.shop.id);
      $.ajax({
        url: '/api/GParams',
        type: "POST",
        data: {
          id: this.shop.id
        },
        success: function (res) {
          console.log(res);
          res = JSON.parse(res);
          res.GParams.forEach((item) => {
            let d = {};
            d.gId = item.gId;
            d.id = item.id;
            d.image = "http://192.168.21.49:8080/Gift" + item.image;
            d.parameter = item.parameter;
            d.price = item.price;
            d.reseve = item.reseve;
            d.title = item.title;
            d.type = item.type;
            d.num = 1;
            d.msg = '';
            self.shopDetail.push(d);
          })
          console.log(self.shopDetail);
          self.specific = self.shopDetail[0].parameter;
          self.image = self.shopDetail[0].image;
          self.price = self.shopDetail[0].price;
          self.stock = self.shopDetail[0].stock;
        }
      })
    },
    showComment() {
      this.isComment = !this.isComment;
    },
    changeShowImg(img) {
      this.image = img;
    },
    changeItem(item) {
      console.log(item);
      this.buyid = item.id;
      this.money = item.price;
      this.title = item.title;
      this.specific = item.parameter;
      this.price = item.price;
      this.stock = item.reseve;
      this.image = item.image;
      this.buyitem = item;
    }
  },
  watch: {
    shopNum() {
      if (this.shopNum < 1) {
        this.shopNum = 1;
      }
    },
    isComment() {
      console.log(this.isComment);
    }
  }

}
</script>

<style>
@import "./shopDetails.css";
</style>
