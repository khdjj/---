<!--
 * @Descripttion: 
 * @version: 
 * @Author: khdjj
 * @Date: 2019-08-05 10:58:08
 * @LastEditors: khdjj
 * @LastEditTime: 2019-08-15 21:04:52
 -->
<template>
  <div>
    <head-top @head=headData></head-top>
    <div class="swiper-container swiper-container-horizontal swiper-container-fade">
      <img src="https://img.kekeliwu.com/banner/9.jpg" alt="" class="container_img">
    </div>
    <div id="content">
      <div class="pro_search_box2 mb4">
        <div class="nbox fr"> 共<span class="num">4436</span>件礼物
        </div>
        <h2 class="tith fl">发现礼物</h2>
        <ul class="cz_but fl clearfix">
          <li><a class="hover" href="/liwujie"><strong>综合</strong></a></li>
          <li><a href="javascript:;" @click="priceSort()"><strong class="none">价格</strong></a></li>
          <li><a href="/liwujie?o=like"><strong>喜欢</strong></a></li>
          <li id="filter" class="" @mouseover="showClassfity"><a href="javascript:void(0)" class="alinks"><strong class="filter">礼物分类</strong><span class="tips" style="display: none;"><span class="text">更多分类</span><span class="close" onclick="closeDiv2()">关闭</span></span><i class="s"></i></a>
            <div class="filter-scont" @mouseout="hideClassfity">
              <div class="linksbox clearfix">
                <div class="column">
                  <div class="bt"><a href="/list/2">创意</a></div>
                  <div class="sbox"><a href="javascript:;" v-for="(item,index) in classfity[0]" :key="index">{{item}}</a></div>
                </div><!-- /column -->
                <div class="column">
                  <div class="bt"><a href="/list/10">配饰</a></div>
                  <div class="sbox"><a href="javascript:;" v-for="(item,index) in classfity[1]" :key="index">{{item}}</a></div>
                </div><!-- /column -->
                <div class="column">
                  <div class="bt"><a href="/list/1">百货</a></div>
                  <div class="sbox"><a href="javascript:;" v-for="(item,index) in classfity[2]" :key="index">{{item}}</a></div>
                </div><!-- /column -->
                <div class="column">
                  <div class="bt"><a href="#">综合</a></div>
                  <div class="sbox"><a href="javascript:;" v-for="(item,index) in classfity[3]" :key="index">{{item}}</a></div>
                </div><!-- /column -->
              </div><!-- /linksbox -->
              <div class="linksbox clearfix">
                <div class="column">
                  <div class="bt"><a href="/list/3">玩具</a></div>
                  <div class="sbox"><a href="javascript:;" v-for="(item,index) in classfity[4]" :key="index">{{item}}</a></div>
                </div><!-- /column -->
                <div class="column">
                  <div class="bt"><a href="/list/4">饰品</a></div>
                  <div class="sbox"><a href="javascript:;" v-for="(item,index) in classfity[5]" :key="index">{{item}}</a></div>
                </div><!-- /column -->
                <div class="column">
                  <div class="bt"><a href="/list/19">数码</a></div>
                  <div class="sbox"><a href="javascript:;" v-for="(item,index) in classfity[6]" :key="index">{{item}}</a></div>
                </div><!-- /column -->
              </div><!-- /linksbox -->
            </div>
          </li>
        </ul>
      </div>
      <div class="index-probox clearfix">
        <ul class="clearfix">
          <li id="good_147" class="" v-for="(item,index) in results" :key="index">
            <dl>
              <dt><a target="_blank" class="img-h" @click.prevent="shopDetails(item)" style="cursor:pointer"><img class="lazy" :alt="item.title" :src="item.image[0]" data-original="" style="display: inline;"></a>
                <a class="likebut" href="javascript:;" rel="274" id="like_147">月销售：{{item.sale}}
                </a><span class="bt">定制</span></dt>
              <dd class="name"><a target="_blank" href="">{{item.title}}</a></dd>
              <dd class="pricebox"><span class="price"><span class="rmb">¥</span><span class="m-num">{{item.price}}</span></span>
                <a href="javascript:;" rel="274" class="likebut-num" id="like_147_num" title="加入喜欢">274</a></dd>
            </dl>
          </li>
        </ul>
      </div>
    </div>
    <el-pagination background layout="prev, next" :total="1000" @next-click="getNext" @prev-click="getPrev">
    </el-pagination>
  </div>
</template>
<script>
import headTop from "../head/head"
import { classfity } from "../../common/label"
import { mapActions, mapState, mapMutations } from 'vuex'
export default {
  name: 'home',
  components: {
    headTop
  },
  data() {
    return {
      classfity: null,
      results: [],
      sort: 0,
      limit: 24,
      offset: 0
    }
  },
  computed: {
    ...mapState([
      'userId'
    ])
  },
  mounted() {
    this.classfity = classfity;
    this.getUserId();
    this.getData();
    // this.byClassfitySearch()
    console.log(this.userId);
  },
  methods: {
    ...mapActions([
      'getUserId'
    ]),
    ...mapMutations([
      'SAVE_SHOP'
    ]),
    getNext() {
      console.log("getNext");
      this.offset = this.offset + this.limit;
      console.log(this.offset);
      this.getData();
    },
    getPrev() {
      console.log("getPrev");
      this.offset = this.offset - this.limit;
      console.log(this.offset);
      this.getData();
    },
    output() {
    },
    byClassfitySearch() {
      var vm = this;
      $('.sbox a').click(function () {
        var key = $(this).text();
        console.log(key);
        $.ajax({
          type: "POST",
          url: '/api/findGiftByType',
          data: {
            type: key
          },
          success: function (res) {
            console.log(JSON.parse(res));
            vm.analysis(JSON.parse(res));
          }
        });
      })
    },
    priceSort() {
      this.sort = !this.sort;
      var vm = this;
      let d = vm.results;
      let temp;
      console.log(this.sort);
      if (this.sort) {
        for (let i = 0; i < d.length; i++) {
          for (let j = i + 1; j < d.length; j++) {
            if (parseFloat(d[i].price) > parseFloat(d[j].price)) {
              temp = d[i];
              d[i] = d[j];
              d[j] = temp;
            }
          }
        }
      } else {
        for (let i = 0; i < d.length; i++) {
          for (let j = i + 1; j < d.length; j++) {
            if (parseFloat(d[i].price) < parseFloat(d[j].price)) {
              temp = d[i];
              d[i] = d[j];
              d[j] = temp;
            }
          }
        }
      }
      vm.results = d;
      vm.results.push({});
      vm.results.splice(vm.results.length - 1, 1);
    },
    shopDetails(item) {
      this.SAVE_SHOP(item);
      this.$router.push({ name: 'shop' });
    },
    showClassfity() {
      $('.filter-scont').addClass('show');
    },
    hideClassfity() {
      $('.filter-scont').removeClass('show');
    },
    getData() {
      var self = this;
      $.ajax({
        type: "POST",
        url: '/api/index',
        data: {
          userid: this.userId,
          limit: this.limit,
          offset: this.offset
        },
        success: function (res) {
          self.analysis(res);
          self.byClassfitySearch();
        }
      })
    },
    analysis(res) {
      var self = this;
      console.log(res);
      self.results = [];
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
        self.results.push(r);
      })
      console.log(self.results);
    },
    headData(res) {
      this.analysis(res);
    },
    watch: {

    }
  }
}
</script>

<style>
@import "element-ui/lib/theme-chalk/index.css";

.container_img {
  width: 100%;
  height: 450px;
}
.index-probox li {
  float: left;
  width: 232px !important;
  height: 330px;
  padding: 30px 30px 0 30px;
  overflow: hidden;
  background: #fff;
  margin-right: 4px;
  margin-bottom: 4px;
}
</style>

