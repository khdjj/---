<!--
 * @Descripttion: 
 * @version: 
 * @Author: khdjj
 * @Date: 2019-08-10 11:13:08
 * @LastEditors: khdjj
 * @LastEditTime: 2019-08-15 21:12:41
 -->
<template>
  <div id="content">
    <head-top></head-top>
    <div class="cart-layout-TB ">
      <div id="J_Cart" class="cart">
        <div id="J_FilterBar" class="cart-filter-bar">
          <ul id="J_CartSwitch" class="switch-cart">
            <li class="btn-switch-cart switch-cart-0 current"><a href="https://cart.taobao.com/cart.htm?t=1565335740244" class="J_MakePoint" data-point="tbcart.8.35"><em>全部商品</em><span class="number">{{shopCar.length}}</span><span class="pipe"></span></a></li>

          </ul>
          <div class="cart-sum"><span class="pay-text">已选商品（不含运费）</span><strong class="price"><em id="J_SmallTotal"><span class="total-symbol">&nbsp;￥</span>{{allMoney}}</em></strong>
          <a id="J_SmallSubmit" class="submit-btn" @click.prevent="buyShopCarItem()">结&nbsp;算</a></div>
          <div class="wrap-line">
            <div class="floater" style="width: 132px; left: -1px;"></div>
          </div>
        </div>
        <div id="J_CartMain" class="cart-main">
          <div class="cart-table-th">
            <div class="wp">
              <div class="th th-chk">
                <div id="J_SelectAll1" class="select-all J_SelectAll selected">
                  <div class="cart-checkbox cart-checkbox-checked"><input class="J_CheckBoxShop" id="J_SelectAllCbx1" type="checkbox" name="select-all" value="true"><label for="J_SelectAllCbx1">勾选购物车内所有商品</label></div>&nbsp;&nbsp;全选
                </div>
              </div>
              <div class="th th-item">
                <div class="td-inner">商品信息</div>
              </div>
              <div class="th th-info">
                <div class="td-inner">&nbsp;</div>
              </div>
              <div class="th th-price">
                <div class="td-inner">单价</div>
              </div>
              <div class="th th-amount">
                <div class="td-inner">数量</div>
              </div>
              <div class="th th-sum">
                <div class="td-inner">金额</div>
              </div>
              <div class="th th-op">
                <div class="td-inner">操作</div>
              </div>
            </div>
          </div>
          <div class="items" v-for="(item,index) in shopCar" :key="index">
            <div class="item-holder">
              <div id="" class="last-item item-selected">
                <ul class="item-content clearfix">
                  <li class="td td-chk">
                    <div class="td-inner">
                      <div class="cart-checkbox cart-checkbox-checked">
                        <input class="J_CheckBoxItem" type="checkbox" v-model="item.state" @change="changeItemSelect(item)" checked="checked">
                      </div>
                    </div>
                  </li>
                  <li class="td td-item">
                    <div class="td-inner">
                      <div class="item-pic J_ItemPic img-loaded"><a href="" target="_blank" class="J_MakePoint J_GoldReport">
                          <img :src="item.img" class="itempic J_ItemImg"></a></div>
                      <div class="item-info">
                        <div class="item-basic-info"> <a href="" target="_blank" :title="item.title" class="item-title J_GoldReport J_MakePoint" data-point="tbcart.8.11">{{item.title}}</a>
                        </div>

                      </div>
                    </div>
                  </li>
                  <li class="td td-info">
                    <div class="item-props "></div>
                  </li>
                  <li class="td td-price">
                    <div class="td-inner">
                      <div class="item-price price-promo-">
                        <div class="price-content">
                          <div class="price-line"><em class="J_Price price-now" tabindex="0">￥{{item.price}}</em></div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="td td-amount">
                    <div class="td-inner">
                      <div class="amount-wrapper amount-has-error">
                        <div class="item-amount "><a href="#" class="J_Minus no-minus" @click.prevent="item.num = item.num -1,allMoney = allMoney-(item.price+item.fare)">-</a>
                          <input type="text" value="1" class="text text-amount J_ItemAmount" data-max="5" data-now="1" autocomplete="off" v-model="item.num"><a href="#" class="J_Plus plus" @click.prevent="item.num = item.num+1,allMoney = allMoney+item.price+item.fare">+</a></div>
                      </div>
                    </div>
                  </li>
                  <li class="td td-sum">
                    <div class="td-inner"><em tabindex="0" class="J_ItemSum number">{{item.price*item.num}}</em>
                      <div class="J_ItemLottery"></div>
                    </div>
                  </li>
                  <li class="td td-op">
                    <div class="td-inner"><a href="javascript:;" data-point-url="" class="J_Del J_MakePoint">删除</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import headTop from '../head/head'
export default {
  name: 'shopCar',
  mounted() {
    this.getAllShopCar();
    this.getAllMoney();
  },
  components: {
    headTop
  },
  data() {
    return {
      shopCar: [],
      allMoney: 0,
      selectItem:[]
    }
  },
  computed: {
    ...mapState([
      'userId'
    ])
  },
  methods: {

    ...mapMutations([
      'SAVE_ITEM'
    ]),
    buyShopCarItem(){

    this.SAVE_ITEM(this.selectItem);
    this.$router.push({path:'/confim'});


    },
    getAllMoney() {

    },
    changeItemSelect(item) {
      if(item.state){

        if(this.selectItem.indexOf(item) == -1){
           this.selectItem.push(item);
        }
          this.allMoney = this.allMoney + item.price * item.num + item.fare;
      }else{
        var index = this.selectItem.indexOf(item);
        if(index !== -1){
          this.selectItem.splice(index,1);
        }
          this.allMoney = this.allMoney - item.price * item.num + item.fare;
      }
      console.log(this.allMoney);
      console.log(this.selectItem);
    },
    getAllShopCar() {
      var self = this;
      $.ajax({
        type: "POST",
        url: '/api/showShoppingCar',
        data: {
          userid: this.userId
        },
        success: function (res) {
          console.log(res);
          if (res.status == 1) {
            self.shopCar = res.results;
            for (let i = 0; i < self.shopCar.length; i++) {
              self.shopCar[i].img = "http://192.168.21.49:8080/Gift/" + self.shopCar[i].img;
              self.shopCar[i].state = false;
            }
            console.log(self.shopCar);
          }

        }
      })
    }
  },
  //  watch:{
  //     shopCar:{
  //       handler(a,b){
  //         this.changeItemSelect();
  //       },
  //       deep:true
  //     },
  //   }
}
</script>

<style>
@import url("./shopCar.css");
</style>

