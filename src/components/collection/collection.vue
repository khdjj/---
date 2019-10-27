<!--
 * @Descripttion: 
 * @version: 
 * @Author: khdjj
 * @Date: 2019-08-12 14:22:04
 * @LastEditors: khdjj
 * @LastEditTime: 2019-08-15 21:10:14
 -->
<template>
  <div>
    <head-top></head-top>
    <div class="mercury-cont">
      <div class="fav-floatbar">
        <div class="fav-bar-height">
          <div class="fav-bar-float">
            <div class="fav-bar-float-layout clearfix">
              <div class="fav-select" data-spm="1997989129">
                <ul>
                  <li class="fav-sel-item fav-sel-item-first J_SelItemsTags ">
                    <span class="fav-sel-link fav-sel-select">全部宝贝<em>{{collects.length}}</em></span>
                  </li>
                </ul>
              </div>
              <div class="fav-show">
                <span class="fav-show-img fav-show-select"></span>
                <a tabindex="-1" class="fav-show-list" href="" data-spm=""></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="fav-list">
        <ul class="img-item-list J_FavList clearfix">
          <li class="J_FavListItem g-i-item fav-item istmall"  v-for="(item,index) in collects" :key="index" >
            <div class="img-controller-box J_FavImgController">
              <div class="img-controller-img-box">
                <a href="" class="img-controller-img-link"  :title="item.title" @click.prevent="toShopDetails(item)">
                  <img class="img-controller-img" :src="item.image[0]" :alt="item.title">
                </a>
              </div>
              <a href="javascript:;">
                <div class="delete-shop" @click.prevent="cancelCollect(item)">
                </div>
              </a>
            </div>
            <div class="img-item-title">
              <a class="img-item-title-link" :title="item.title"  href="" data-spm="">{{item.title}}</a>
            </div>
            <div class="price-container">
              <div class="g_price-box">
                <div  class="J_PriceIcon_c picon-c" >
                  <!-- 促 -->
                </div>
                <div class="g_price">
                  <span>¥</span>
                  <strong>{{item.price}}</strong>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    			<alert ref="alert"></alert>		

  </div>
</template>

<script>
	import alert from '../alert/alert.vue'

import headTop from '../head/head'
import { mapActions, mapState, mapMutations } from 'vuex'
export default {
  name: 'collection',
  data() {
    return {
      collects: []
    }
  },
  components: {
    headTop,alert
  },
  computed: {
    ...mapState([
      'userId'
    ])
  },
  mounted() {
    this.getCollection();
  },
  methods: {
    ...mapMutations([
      'SAVE_SHOP'
    ]),
    toShopDetails(item){
      this.SAVE_SHOP(item);
      this.$router.push({ name: 'shop' });
    },
    cancelCollect(item){
      var vm = this;
      $.ajax({
        type:"POST",
        url:'/api/noCollect',
        data:{
          userid:this.userId,
          giftid:item.id
        },
        success:function(res){
          console.log(res);
          res = JSON.parse(res);
          if(res.code == 200){
            var index = vm.collects.splice(vm.collects.indexOf(item),1);
            vm.$refs.alert.show("已从收藏夹移除成功");
            window.reload();
          }
        }
      })
    },
    getCollection() {
      var vm = this;
      $.ajax({
        type: "POST",
        url: '/api/findcollect',
        data: {
          uid: this.userId,
          pagesize: 24
        },
        success: function (res) {
          res = JSON.parse(res);
          console.log(res);

          if (res.code == 200) {
            res.results.forEach((item, index) => {
              let r = {};
              let temp = [];
              r.address = item.address;
              r.brand = item.brand;
              r.comment = item.comment;
              r.deal = item.deal;
              r.detailsImage = item.detailsImage.split(',');
              for (let i = 0; i < r.detailsImage.length; i++) {
                r.detailsImage[i] = "http://192.168.21.49:8080/Gift" + r.detailsImage[i];

              }
              r.fare = item.fare;
              r.id = item.id;
              r.image = item.image.split(',');
              for (let i = 0; i < r.image.length; i++) {
                r.image[i] = "http://192.168.21.49:8080/Gift" + r.image[i];
              }
              if (item.nprice.indexOf('-') == -1) {
                r.price = item.nprice;
              } else {
                r.price = item.nprice.substring(0, item.nprice.indexOf('-'));
              }
              r.nprice = item.nprice;
              r.oprice = item.oprice;
              r.parameter = item.parameter.split(',');
              r.partner = item.partner;
              r.sale = item.sale;
              r.situation = item.situation;
              r.status = item.status;
              r.time = item.time;
              r.title = item.title;
              r.type = item.type;
              vm.collects.push(r);
            })
            console.log(vm.collects);
          }
        }
      })
    }
  }
}
</script>

<style >
@import url("./collection.css");
</style>