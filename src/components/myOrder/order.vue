<!--
 * @Descripttion: 
 * @version: 
 * @Author: khdjj
 * @Date: 2019-08-12 10:42:14
 * @LastEditors: khdjj
 * @LastEditTime: 2019-08-16 09:08:42
 -->
<template>
  <div>
    <head-top></head-top>
    <div id="J_bought_main" style="margin-left:120px;min-height: 600px;width:1080px;">
      <div id="tp-bought-root" class="index-mod__root___3ZrD7">
        <div class="tabs-mod__container___ICzlj nav-mod__tabs___1D0ZI">
          <div class="tabs-mod__main___74ZLv">
            <div class="tabs-mod__tab___3vuhD tabs-mod__selected___2DHDY"><span class="nav-mod__tab___1PnZ4"><span class="nav-mod__text___3O7jT">所有订单</span><span class="nav-mod__count___hc9IJ"></span></span><span class="tabs-mod__sep___waJNr">|</span></div>
          </div>
        </div>
        <span id="nav_anchor" style="visibility:hidden;height:0;" data-reactid=".0.3"></span>
        <table class="bought-table-mod__table___3u4gN table-head-mod__table___17eFg">
          <colgroup>
            <col class="bought-table-mod__col1___17JqJ">
            <col class="bought-table-mod__col2___1Y_Kl">
            <col class="bought-table-mod__col3___SzfHd">
            <col class="bought-table-mod__col4___3pLN6">
            <col class="bought-table-mod__col5___3dqJ_">
            <col class="bought-table-mod__col6___ImeZT">
            <col class="bought-table-mod__col7___RQijo">
          </colgroup>
          <tbody>
            <tr>
              <th>宝贝</th>
              <th>单价</th>
              <th>数量</th>
              <th>商品操作</th>
              <th>实付款</th>
              <th><span class="field-select-mod__select___1wyLH trade-select table-head-mod__status___SBEwU rc-select rc-select-enabled"><span class="rc-select-selection rc-select-selection--single" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false" tabindex="0"><span class="rc-select-selection__rendered"><span>交易状态</span></span><span class="rc-select-arrow" tabindex="-1" style="outline:none;"><b></b></span></span></span></th>
              <th>交易操作</th>
            </tr>
          </tbody>
        </table>

      </div>

      <div class="index-mod__order-container___1ur4- js-order-container">
        <div class="bought-wrapper-mod__trade-order___2lrzV">
          <table class="bought-table-mod__table___3u4gN bought-wrapper-mod__table___3xFFM" v-for="(item,index) in orderData" :key="index">
            <colgroup>
              <col class="bought-table-mod__col1___17JqJ">
              <col class="bought-table-mod__col2___1Y_Kl">
              <col class="bought-table-mod__col3___SzfHd">
              <col class="bought-table-mod__col4___3pLN6">
              <col class="bought-table-mod__col5___3dqJ_">
              <col class="bought-table-mod__col6___ImeZT">
              <col class="bought-table-mod__col7___RQijo">
            </colgroup>
            <tbody class="bought-wrapper-mod__head___2vnqo">
              <tr>
                <td class="bought-wrapper-mod__head-info-cell___29cDO">
                  <label class="bought-wrapper-mod__checkbox-label___3Va60"><span class="bought-wrapper-mod__checkbox___11anQ"></span>
                    <span class="bought-wrapper-mod__create-time___yNWVS">{{item.time}}</span></label>
                  <span><span>订单号</span>
                    <span>{{item.account}}
                    </span></span></td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td class="sol-mod__no-br___1PwLO">
                  <div class="ml-mod__container___2DOxT production-mod__production___1MKah suborder-mod__production___3WebF">
                    <img :src="item.image" />
                    <div style="margin-left:90px;">
                      <p><a href="javascript:;" target="_blank" rel="noopener noreferrer">
                          <span style="line-height:16px;">{{item.title}}</span></a>
                        <a href="" target="_blank" rel="noopener noreferrer">
                          [交易快照] </a></p>
                      <p><span class="production-mod__sku-item___3zYoT"><span>{{item.type}}</span><span>{{item.parameter}}</span></span></p>
                    </div>
                  </div>
                </td>
                <td class="sol-mod__no-br___1PwLO">
                  <div class="price-mod__price___157jz">

                    <p><span>￥</span><span>{{item.price}}</span></p>
                  </div>
                </td>
                <td class="sol-mod__no-br___1PwLO">
                  <div>
                    <p>1</p>
                  </div>
                </td>
                <td>
                  <div>
                    <p style="margin-bottom:3px;">
                      <a href="" class="text-mod__link___19F14 text-mod__hover___ew25K" rel="noopener noreferrer">退款/退货</a></p>
                  </div>
                </td>
                <td class="">
                  <div>
                    <div class="price-mod__price___157jz">
                      <p><strong><span>￥</span><span>{{item.price}}</span></strong></p>
                    </div>
                    <p style="color:#6c6c6c;font-family:verdana;"><span>(含运费：</span><span>￥0.00</span><span></span><span></span><span>)</span></p>
                    <div style="font-family:verdana;">
                      <div></div>
                    </div>
                    <p><a href="http://www.taobao.com/m?sprefer=symj28" title="手机订单" style="margin-right:5px;" target="_blank"></a></p>
                  </div>
                </td>
                <td class="">
                  <div>

                    <div>
                      <p style="margin-bottom:3px;"><a href="//trade.tmall.com/detail/orderDetail.htm?bizOrderId=570072226815396524" class="text-mod__link___19F14 text-mod__hover___ew25K" target="_blank" rel="noopener noreferrer" id="viewDetail">订单详情</a></p>
                    </div>
                  </div>
                </td>
                <td class="">
                  <div>
                    <p style="margin-bottom:3px;">
                      <a href="" v-if="item.status == 1" class="button-mod__button___3XSV8 button-mod__secondary___1p4be button-mod__button___2WM0P" target="_blank" id="confirmGood" @click.prevent="confimReciveGoods(item,item.account,item.id)">确认收货</a>
                      <a href="" v-if="item.status == 0" class="button-mod__button___3XSV8 button-mod__secondary___1p4be button-mod__button___2WM0P" target="_blank" id="confirmGood" @click.prevent="comment(item)">评价</a>
                      <a href="" v-if="item.status == 2" class="button-mod__button___3XSV8 button-mod__secondary___1p4be button-mod__button___2WM0P" target="_blank" id="confirmGood">正在退款</a>
                      <a href="" v-if="item.status == 0|| item.status == 1" class="button-mod__button___3XSV8 button-mod__secondary___1p4be button-mod__button___2WM0P" target="_blank" id="confirmGood" @click.prevent="refund(item)">退款</a>
                      <a href="" v-if="item.status == 3" class="button-mod__button___3XSV8 button-mod__secondary___1p4be button-mod__button___2WM0P" target="_blank" id="confirmGood">退款成功</a>
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
    </div>
    <alert ref="alert"></alert>
  </div>
</template>

<script>
import headTop from '../head/head'
import alert from '../alert/alert'
import { mapActions, mapState, mapMutations } from 'vuex'
export default {
  name: 'order',
  components: {
    headTop, alert
  },
  data() {
    return {
      orderData: []
    }
  },
  computed: {
    ...mapState([
      'userId'
    ])
  },
  mounted() {
    this.getOrder();
    // this.$refs.alert.show("收货成功");
  },
  methods: {
    ...mapActions([
      ''
    ]),
    ...mapMutations([
      'SAVE_COMMENTSHOP'
    ]),
    refund(item) {
      this.SAVE_COMMENTSHOP(item);
      this.$router.push({ path: '/refund' });
    },
    comment(item) {
      this.SAVE_COMMENTSHOP(item);
      console.log(item);
      this.$router.push({ path: '/comment' });
    },
    confimReciveGoods(item, account, id) {
      
      console.log("oid值：" + id);
      console.log(account, id);
      $.ajax({
        type: 'POST',
        url: '/api/comfirmGift',
        data: {
          oid: id,
          account: account
        },
        success: function (res) {
          console.log(res);
          res = JSON.parse(res);
          if (res.status == 1) {
            item.status = 0;
          }
        }
      })
    },
    getOrder() {
      console.log(this.userId);
      var vm = this;
      $.ajax({
        type: "POST",
        url: '/api/showAllOrder',
        data: {
          id: this.userId
        },
        success: function (res) {
          console.log(JSON.parse(res));
          res = JSON.parse(res);
          res.orders.forEach((item) => {
            var d = {};
            d.fare = item.fare;
            d.gId = item.gId;
            d.gPid = item.gPid;
            d.id = item.id;
            d.image = "http://192.168.21.49:8080/Gift" + item.img;
            d.num = item.num;
            d.parameter = item.parameter;
            d.price = item.price;
            d.reseve = item.reseve;
            d.time = item.time;
            d.title = item.title;
            d.type = item.type;
            d.status = item.status;
            d.account = item.account;
            vm.orderData.push(d);
          })
        }
      })
    }
  }
}
</script>

<style>
@import "./order.css";
</style>