<!--
 * @Descripttion: 
 * @version: 
 * @Author: khdjj
 * @Date: 2019-08-13 10:24:38
 * @LastEditors: khdjj
 * @LastEditTime: 2019-08-13 14:33:48
 -->
<template>
  <div>
    <head-top></head-top>
    <div class="raiders-probox">
      <div class="cont">
        <ul class="clearfix">
          <li v-for="(item,index) in articleList" :key="index">
            <dl>
              <dt>
                <a target="_blank" href="" class="img-h">
                  <img :src="item.img" :alt="item.title" class="lazy" style="display: inline;" @click.prevent="toArticle(item)">
                </a>
              </dt>
              <dd class="stitle">
                <a href="" target="_blank">{{item.title}}</a>
              </dd>
              <dd class="sbox">
                <span class="time">{{item.time}}</span><span class="num"></span>
              </dd>
            </dl>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
import headTop from "../head/head"
import {mapMutations} from 'vuex'
export default {
  name: 'giftIntro',
  components: {
    headTop
  },
  data() {
    return {
      articleList: []
    }
  },
  mounted() {
    this.getAllArticle();
  },
  methods: {
    ...mapMutations([
        'SAVE_ARTICLE'
    ]),
    toArticle(item){
        this.SAVE_ARTICLE(item);
        this.$router.push({path:'/article'});
    },
    getAllArticle() {
      var vm = this;
      $.ajax({
        url: '/api/showArtical',
        type: "POST",
        data: {
          page: 1,
          pagesize: 24
        },
        success: function (res) {
          res = JSON.parse(res);
          console.log(res);
          vm.articleList = res.result;
        }
      })
    }
  }
}
</script>

<style>
@import url("./giftIntro.css");
</style>