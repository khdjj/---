<!--
 * @Descripttion: 
 * @version: 
 * @Author: khdjj
 * @Date: 2019-08-09 15:41:21
 * @LastEditors: khdjj
 * @LastEditTime: 2019-08-16 14:50:13
 -->
<template>
  <div>
    <head-top></head-top>
    <div id="content">

      <div class="order-address addr-much" id="address_1">
        <h2>选择收货地址</h2>
        <div class="list">
          <div :class="{'addr-cur':address==defaultAddress, 'addr-def':address == defaultAddress,'addr suggest-address':true}" v-for="(address,index) in address" :key="index" @click="defaultAddress = address">
            <div class="inner">
              <div class="addr-hd" :title="address.name"> <span>({{address.name}}收)</span></div>
              <div class="addr-bd" :title="address.address"><span>&nbsp;{{address.address}}</span></div>
            </div>
            <div class="curMarker"></div>
            <div class="floater"></div>
            <div class="option"></div>
          </div>
        </div>
        <div class="control">
          <a class="manageAddr" href="javascript:;">管理收货地址</a>
          <input class="addAddr" type="button" value="使用新地址" @click="showAddressPop()"></div>
      </div>
      <div class="order-orderDesc" id="orderDesc_0">
        <!-- <h2 class="buy-th-title">确认订单信息</h2> -->
        <div class="buy-th buy-th-column-6">
          <div class="buy-td td-0">店铺宝贝</div>
          <div class="buy-td td-1">商品属性</div>
          <div class="buy-td td-2">单价</div>
          <div class="buy-td td-3">数量</div>
          <div class="buy-td td-4">优惠方式</div>
          <div class="buy-td td-5">小计</div>
        </div>
      </div>
      <div class="order-order" data="" v-for="(item,index) in buyitem" :key="index">
        <div class="order-item order-item-column-4">
          <div class="order-itemInfo">
            <div class="info-detail info-cell">
              <div class="info-cell">
                <a class="info-img" href="" target="_blank">
                  <img class="info-img" v-if="item.image" :src="item.image">
                  <img class="info-img" v-else :src="item.img"></a>
              </div>
              <div class="info-cell info-msg">
                <a href="javascript:;" class="info-title" target="_blank">{{shop.title}}</a></div>
            </div>
            <div class="info-sku info-cell">
              <p><span class="bd">{{item.type}}:{{item.title}}</span></p>
            </div>
            <div class="info-price info-cell">{{item.price}}</div>
          </div>
          <div class="order-quantity" id="quantity_24f8fca0a0be8521bacbca99e2fd5086">
            <div class="quantity-inner"><span class="operate left grey" @click="item.num = item.num-1,allMoney = allMoney - item.price">-</span>
              <input class="amount" v-model="item.num"><span class="operate right" @click="item.num = item.num +1,allMoney = allMoney + item.price">+</span>
            </div>
          </div>
          <div class="order-promotion item-promotion" id="promotion_24f8fca0a0be8521bacbca99e2fd5086">
            <div class="item-promotion-selecter">
              <span>省281:88狂欢价</span>
              <div class="item-promotion-gift"></div>
            </div>
          </div>
          <div class="order-itemPay" id="itemPay_24f8fca0a0be8521bacbca99e2fd5086"><span class="simple-price">{{item.price*item.num}}</span></div>
        </div>
        <div id="" class="order-orderExt tb-clear">
          <div id="" class="order-extUser tb-clear">
            <div class="order-memo" id="" style="float:left"><label>给卖家留言：</label>
              <div class="memo-detail"><textarea class="text-area-input memo-input" placeholder="选填,请先和商家协商一致" id="" v-model="item.msg"></textarea></div>
            </div>
          </div>
        </div>
      </div>

      <div class="order-payInfo" id="payInfo_1">
        <div class="payInfo-wrapper">
          <div class="payInfo-shadow">
            <div class="order-realPay">
              <div><span class="realPay-title">实付款：</span><span class="order-price">￥</span>
                <span class="realPay-price">{{allMoney}}</span></div>
            </div>
            <div class="order-confirmAddr" id="confirmAddr_1" v-if="defaultAddress">
              <div class="confirmAddr-addr" :title="defaultAddress.address">
                <span class="confirmAddr-title">寄送至：</span>
                <span class="confirmAddr-addr-bd">
                  <!-- <span class="prov">广东</span><span class="city">中山</span>
                  <span class="town">火炬开发区</span> -->
                  <span class="street" data-street="">{{defaultAddress.address}}</span></span></div>
              <div class="confirmAddr-addr-user"><span class="confirmAddr-title">收货人：</span><span class="confirmAddr-addr-bd" v-if="defaultAddress"><span>{{defaultAddress.name}}</span><span>{{defaultAddress.tel}}</span></span></div>
            </div>
            <div></div>
            <div class="order-confirmAddr"></div>
          </div>
        </div>
      </div>
      <div class="order-submitOrder" id="submitOrder_1">
        <div class="wrapper"><a role="button" title="提交订单" class="go-btn" @click="submitOrder()">提交订单</a></div>
      </div>
      <div class="seperator"></div>
    </div>
        <alert ref="alert"></alert>

    <address-pop ref="address"></address-pop>
  </div>
</template>

<script>
import alert from '../alert/alert'

import headTop from "../head/head"
import addressPop from "../Address/pop"
import { mapActions, mapState, mapMutations } from 'vuex'
export default {
  name: 'confim',
  computed: {
    ...mapState([
      'userId', 'buyitem', 'shop', 'address'
    ])
  },
  components: {
    headTop, addressPop,alert
  },
  data() {
    return {
      defaultAddress: null,
      allMoney: 0
    }
  },
  mounted() {
    this.getAllUserAddress();
    this.getAllMoney();
    console.log(this.buyitem);
  },
  methods: {
    ...mapMutations([
      'SAVE_ADDRESS'
    ]),
    changeMoney(item) {
      console.log("eeeeeeeeeeeeeeeee")
    },
    submitOrder() {
      console.log("submit");
      var self = this;
      console.log(this.buyitem.length);
      console.log(this.buyitem[0].id);
      console.log(this.buyitem.length > 1);
      if (this.buyitem.length == 1) {
        console.log("直接购买");
        console.log(this.buyitem[0]);
        $.ajax({
          type: "POST",
          url: "/api/buySingloten",
          data: {
            userid: this.userId,
            gpid: this.buyitem[0].id,
            giftid: this.shop.id,
            money: this.allMoney,
            num: this.buyitem[0].num,
            msg: this.buyitem[0].msg,
            addressid:this.defaultAddress.id
          },
          success: function (res) {
            console.log(res);
            self.$refs.alert.show("购买成功,即将跳往订单页面");
            self.$router.push({path:'/order'});
          }
        })
      } else {
        console.log("从购物车买");
        var item = this.buyitem;
        var gpid = '',
            gid = '',
            num = '',
            price = '',
            msg = '',
            cid = '';
            console.log(")))))0")
        for (let i = 0; i < item.length; i++) {
          gpid = gpid + item[i].gPid + ",";
          gid = gid + item[i].gId + ",";
          num = num + item[i].num + ",";
          price = price + item[i].price + ",";
          msg = msg + item[i].msg + ",";
          cid = cid + item[i].id + ",";
        }
        gpid = gpid.substring(0, gpid.lastIndexOf(','));
        gid = gid.substring(0, gid.lastIndexOf(','));
        num = num.substring(0, num.lastIndexOf(','));
        price = price.substring(0, price.lastIndexOf(','));
        msg = msg.substring(0,msg.lastIndexOf(","));
        cid = cid.substring(0,cid.lastIndexOf(","));
        console.log(gpid,gid,num,price);
        console.log(gpid,gid);
        $.ajax({
          type:"POST",
          url:'/api/buyProperty',
          data:{
            gpid:gpid,
            giftid:gid,
            money:price,
            num:num,
            userid:this.userId,
            addressid:this.defaultAddress.id,
            msg:msg,
            scid:cid
          },
          success:function(res){
            console.log(res);
            self.$router.push({path:'/order'});
          }
        })
      }

    },
    changeAddress(add) {
      console.log("aaaaaaaaaaaaa");
    },
    getAllMoney() {

      for (let i = 0; i < this.buyitem.length; i++) {
        this.allMoney = this.allMoney + this.buyitem[i].price * this.buyitem[i].num;
      }
      console.log(this.allMoney);
    },
    getAllUserAddress() {
      var self = this;
      $.ajax({
        type: 'POST',
        url: '/api/findAllAddress',
        data: {
          userid: this.userId
        },
        success: function (res) {
          console.log(res);
          res = JSON.parse(res);
          if (res.status == 1) {
            res.address.forEach((item) => {
              if (item.type == 1) {
                self.defaultAddress = item;
              }
            })
            self.SAVE_ADDRESS(res.address);
          }
        }
      })
    },
    changeAddress() {

    },
    showAddressPop() {
      this.$refs.address.show();
    },

  },
  watch: {
    defaultAddress() {
      console.log(this.defaultAddress);
    }
  }
}
</script>
<style>
@import "./confim.css";
</style>
