<!--
 * @Descripttion: 
 * @version: 
 * @Author: khdjj
 * @Date: 2019-08-13 21:59:13
 * @LastEditors: khdjj
 * @LastEditTime: 2019-08-16 10:20:42
 -->
<template>
  <div>
    <div id="App" class="tmall">
      <div id="apply" class="apply" data-reactid=".0">
        <div id="root_1" class="apply-root" data-reactid=".0.$root_1">
          <div id="processBarContainer_18" class="mod-processbar-pc" data-reactid=".0.$root_1.1:$processBarContainer_18" style="height:38px;">

            <div style="width:33.33333333333333%;" class="step-item" data-reactid=".0.$root_1.1:$processBarContainer_18.$0">
              <div class="step-arrow step-0 doing" data-reactid=".0.$root_1.1:$processBarContainer_18.$0.0"></div>
              <div class="step-cell-doing" data-reactid=".0.$root_1.1:$processBarContainer_18.$0.1">
                <span class="icon" data-reactid=".0.$root_1.1:$processBarContainer_18.$0.1.0">1</span><span data-reactid=".0.$root_1.1:$processBarContainer_18.$0.1.1">买家申请仅退款</span>
              </div>
            </div>
            <div class="refund_container">
              <div class="goods">
                <p>购买商品:</p>
                <div class="good-desc">
                  <h3 :title="commentItem.title">{{commentItem.title}}</h3>
                  <dl>
                    <dt> <img class="iteminfo-img" :src="commentItem.image" :alt="commentItem.title"></dt>
                    <dd>
                      <span>{{commentItem.type}}</span>
                      <span>{{commentItem.parameter}}</span>
                    </dd>
                  </dl>
                </div>
              </div>

              <el-form>
                <el-form-item :model="formData" label="退款原因">
                  <el-select placeholder="请选择退款原因" size="small" v-model="formData.reason">
                    <el-option label="订单信息拍错" value="订单信息拍错"></el-option>
                    <el-option label="我不想要了" value="我不想要了"></el-option>
                    <el-option label="地址/电话信息填写错误" value="地址/电话信息填写错误"></el-option>
                    <el-option label="没用/少用优惠" value="没用/少用优惠"></el-option>
                    <el-option label="缺货" value="缺货"></el-option>
                  </el-select>
                  <el-form-item label="退款说明">
                    <el-input type="textarea" v-model="formData.desc" row="3" style="width:400px"></el-input>
                  </el-form-item>
                  <el-form-item label="上传凭证">
                    <el-upload action="/api/upload" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-success="success" :on-remove="handleRemove">
                      <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                      <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                  </el-form-item>
                </el-form-item>
                <el-button type="success" @click="applyRefund()">申请</el-button>
              </el-form>
            </div>
          </div>
        </div>
      </div>
    </div>
     <alert ref="alert"></alert>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import alert from '../alert/alert'

export default {
  name: 'refund',
  data() {
    return {
      formData: {
        reason: '',
        desc: '',
      },
      image: ''
    }
  },
  components: {
    alert
  },
  computed: {
    ...mapState([
      'commentItem', "userId"
    ])
  },
  methods: {
    applyRefund() {
      var self =this;
      console.log(this.formData);
      console.log(this.commentItem);
      console.log(this.image);
      this.image = this.image.substring(0,this.image.lastIndexOf(','));
      $.ajax({
          type:'POST',
          url:'/api/addRefund',
          data:{
              money:this.commentItem.price,
              cause:this.formData.reason,
              image:this.image,
              desc:this.formData.desc,
              oid:this.commentItem.id,
              account:this.commentItem.account,
              uid:this.userId,
              gid:this.commentItem.gId,
              gpid:this.commentItem.gPid
          },
          success:function(res){
              console.log(res);
              self.$refs.alert.show("退款提交成功");
              self.$router.push({path:'/order'})
          }
      })
    },
    success(response, file, fileList) {
      this.fileChange(fileList);
    },
    fileChange(fileList) {
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
      this.image = this.image + temp_str + ',';
      console.log(temp_str);
    },
  }
}
</script>

<style>
@import "element-ui/lib/theme-chalk/index.css";

@import url("./refund.css");
</style>