<!--
 * @Descripttion: 
 * @version: 
 * @Author: khdjj
 * @Date: 2019-08-13 15:14:37
 * @LastEditors: khdjj
 * @LastEditTime: 2019-08-15 21:20:56
 -->
<template>
  <div id="content">

    <div id="mainContent">
      <!-- 五零提供的商品、tab区域 -->
      <div id="detailBox">
        <div class="db-showpanel">
          <a href="javascript:void(0)"> 
            <img align="absmiddle" :src="commentItem.image">
          </a>
        </div>
        <div class="db-icbu">
          <ol class="ui-form-bd">
            <li class="ui-form-row"><label class="ui-form-label">
                <h3>{{commentItem.title}}</h3>
              </label></li>
            <li class="ui-form-row superstar-price"><label class="ui-form-label">价格</label>
              <div class="ui-form-right">
                <strong>{{commentItem.price}}</strong> <span></span> 元
              </div>
            </li>
            <li class="ui-form-row"><label class="ui-form-label">配送</label>
              <div class="ui-form-right">快递:&nbsp; {{commentItem.fare}}</div>
            </li>

          </ol>

          <ol class="scinfo-bd">
            <li class="ui-form-row"><label class="ui-form-label">{{commentItem.type}}</label>
              <div class="ui-form-right">{{commentItem.parameter}}</div>
            </li>
            <li class="ui-form-row">
              <div class="ui-form-right">
                <div class="ui-form-valid">
                  <div class="ui-msg ui-form-msg">
                    <p class="ui-msg-con ui-msg-tip">
                      现在查看的是 您所购买商品的信息 <br> 于{{commentItem.time}}下单购买了此商品 <s class="ui-msg-icon"></s>
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
      <div class="banner-totalevolute">
        <div class="tv-leftbox">
          <div class="tv-lb-head"></div>
          <div class="tv-lb-content">
            <span>累计评价</span> <em class="superstar-ratetotal">2229</em>
          </div>
          <div class="tv-lb-bottom"></div>
        </div>
        <div class="tv-rightbox">
          <div class="tv-rb-cover">
            <a hidefocus="true" name="miaoposition" id="miaoposition">&nbsp;</a>
          </div>
          <div class="tv-rb-bottom"></div>
        </div>
      </div>
      <!-- 写评价组件 -->
      <div id="review" class="rate-w990 tm-rate rate-with-compose">
        <div class="rate-compose" style="display: block;">
          <iframe src="about:blank" name="RateWrite1565335694386" style="display:none"></iframe>
          <form method="post" id="RateWriteForm" target="RateWrite1565335694386" action="//ratewrite.tmall.com/rateWriteResult.htm" class="compose-inner">
            <input type="hidden" name="callback" value=""> <input type="hidden" name="_tb_token_" value="e3153e3573a6a"> <input type="hidden" name="um_token" value="T9310424bddde060c58ac28c4b9a77b60"> <input type="hidden" name="action" value="new_rate_write_action">
            <input type="hidden" name="event_submit_do_write" value="any">
            <input type="hidden" name="sellerId" value="2191422100"> <input type="hidden" name="bizOrderIdList" value="">
            <div class="compose-main">
              <div class="compose-header">
                <span data-spm-anchor-id="0.0.0.i0.67ac3b06l7sKi1">其他买家，需要你的建议哦！</span>
                <div class="compose-scrolltip">
                  <s></s>
                  <ul class="ks-switchable-content">
                    <li>认真写评价最多可获天猫达人成长值20点！</li>
                  </ul>
                </div>
              </div>
              <div>
              <el-form  class="demo-formData">
                <el-form-item label="评价">
                  <el-input type="textarea"   row="5" v-model="evaluate"></el-input>
                </el-form-item>
                <el-form-item label="晒图">
                  <el-upload 
                    action="/api/upload" 
                    list-type="picture-card" 
                    :on-preview="handlePictureCardPreview" 
                    :on-success="success"
                    :on-remove="handleRemove">
                    <i class="el-icon-plus"></i>
                  </el-upload>
                  <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                  </el-dialog>
                </el-form-item>
                  <el-form-item label="给个好评吧">
                <el-rate v-model="star" show-text>
                </el-rate>
                  </el-form-item>
              </el-form>
              </div>

            </div>
            <div class="compose-submit">
              <span class="compose-anony"> <input id="J_RateAnonyChk76" class="rate-anony" type="checkbox" name="anony" checked="checked" value="1"> <label for="J_RateAnonyChk76">匿名评价</label> </span> <span class="compose-btn">
              <span hidefocus="true" class="submit-comment"  @click="submitComment">提交评价</span> </span>
              <div class="rate-share" style="visibility: hidden;">
                <input type="hidden" class="rate-share-hidden" name="ishares">
                <div class="J_shareCtn"></div>
              </div>
            </div>
          </form>
        </div>
        <div class="rate-subject"></div>
        <div class="rate-charts"></div>
      </div>
    </div>
                <alert ref="alert"></alert>

  </div>
</template>

<script>
import alert from '../alert/alert'

import { mapActions, mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      star: '',
      evaluate:'',
      image:''
    }
  },
  computed:{
    ...mapState([
      'commentItem',"userId"
    ])
  },
  mounted(){
    console.log(this.commentItem);
  },
   components: {
    alert
  },
  methods:{
    submitComment(){
      console.log(this.star);
      console.log(this.evaluate);
      var self = this;
      this.image = this.image.substring(0,this.image.lastIndexOf(','));
      console.log(this.image);
      $.ajax({
        type:"POST",
        url:"/api/addcomment",
        data:{
          uid:this.userId,
          gid:this.commentItem.gId,
          detail:this.evaluate,
          image:this.image,
          rate:this.star
        },
        success:function(res){
          console.log(res);
              self.$refs.alert.show("评论提交成功");
              self.$router.push({name:'home'})
        }
      })
      
    },
    success(response, file, fileList) {
      this.fileChange(fileList);
    },
    fileChange(fileList) {
      console.log("fileList");
      let temp_str = '';
      if (fileList.length > 0) {
        for (let i = 0; i < fileList.length; i++) {
          if (fileList[i].response) {
            if (i === 0) {
              temp_str += fileList[i].response;
            } else {
              // 最终photo的格式是所有已上传的图片的url拼接的字符串（逗号隔开）
              temp_str += ',' + fileList[i].response;
            }
          }
        }
      }
    this.image = this.image+temp_str+',';
    console.log(temp_str);
    console.log(this.image);
    },
  },
  watch: {
    star() {
      console.log(this.star);
    }
  }
}
</script>

<style>
@import "element-ui/lib/theme-chalk/index.css";
@import "./comment.css";
.el-textarea__inner{
 width: 450px!important;
}
.submit-comment{
    color: #fff;
    padding: 5px;
    cursor: pointer;
    display: inline-block;
}
</style>