<!--
 * @Descripttion: 
 * @version: 
 * @Author: khdjj
 * @Date: 2019-08-12 08:25:45
 * @LastEditors: khdjj
 * @LastEditTime: 2019-08-16 14:32:46
 -->
<template>
  <div>
    <el-row style="margin-top: 20px;">
      <el-col :span="12" :offset="4">
        <el-form :model="formData" :rules="rules" ref="formData" label-width="110px" class="demo-formData">
          <el-form-item label="文章标题">
            <el-input v-model="formData.title"></el-input>
          </el-form-item>
          <el-form-item label="文章描述">
            <el-input v-model="formData.desc" autosize></el-input>
          </el-form-item>
          <el-form-item label="文章封面">
                <el-upload
                  class="avatar-uploader"
                  action="/api/upload"
                  :show-file-list="false"
                  :on-success="coversuccess">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>
          <el-form-item v-for="(art, index) in article" :label="'推荐' + (index+1)" :key="index">
            <el-form-item label='标题'>
              <el-input v-model="art.title"></el-input>
            </el-form-item>
            <el-form-item label='描述'>
              <el-input v-model="art.desc"></el-input>
            </el-form-item>
             <el-form-item label="文章片断图片">
                 <el-upload 
                        action="/api/upload"
                        list-type="picture"
                        :on-preview="handlePictureCardPreview" 
                        :on-remove="handleRemove"
                        :on-success="success">
                     <i class="el-icon-plus"></i>
               </el-upload>
            </el-form-item>
            <el-form-item label='价格'>
              <el-input v-model="art.price"></el-input>
            </el-form-item>
            <el-form-item label='礼品id'>
              <el-input v-model="art.giftid"></el-input>
            </el-form-item>
            <el-button @click.prevent="removeArticle(art)">删除</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="addArticle()">新增</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
     <alert ref="alert"></alert>
  </div>
</template>

<script>
import alert from '../../../alert/alert.vue'
export default {
  name: 'addArticle',
  data() {
    return {
      imageUrl:'',
      currart:{},
      formData: {
        title: '',
        desc: ''
      },
      article: [{
        title: '',
        desc: '',
        image: '',
        price: '',
        giftid: ''
      }],
      image:''
    }
  },
  components:{
    alert
  },
  methods: {
    removeArticle(p) {
      let index = this.article.indexOf(p);
      if (index !== -1) {
        this.article.splice(index, 1)
      }
    },
    coversuccess(response, file, fileList){
        this.imageUrl ="http://192.168.21.49:8080/Gift"+file.response;   
    },
    addArticle(){
      this.article.push({
        title: '',
        desc: '',
        image: '',
        price: '',
        giftid: ''
      })
    },
    success(response, file, fileList) {
      this.currart.image ="http://192.168.21.49:8080/Gift"+file.response;   
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
    onSubmit(){
        console.log(this.formData);
        console.log(this.article);
        var self = this;
        let a = this.article;
        var t = '';
        var d = '';
        var p = '';
        var id = '';
        for(let i=0;i<a.length;i++){
            t = t + a[i].title+',';
            d = d + a[i].desc + ',';
            p = p + a[i].price + ',';
            id = id + a[i].giftid + ',';
        }
        console.log(this.image);
        this.image = this.image.substring(0,this.image.lastIndexOf(','));
        t = t.substring(0,t.lastIndexOf(','));
        d = d.substring(0,d.lastIndexOf(','));
        p = p.substring(0,p.lastIndexOf(','));
        id = id.substring(0,id.lastIndexOf(','));
        console.log(t,d,p,id);
        $.ajax({
          type:"POST",
          url:'/api/addArtical',
          data:{
            title:this.formData.title,
            details:this.formData.desc,
            img:this.imageUrl,
            pgtitle:t,
            pgdetails:d,
            pgprice:p,
            pglink:id,
            pgimage:this.image
          },
          success:function(res){
            res = JSON.parse(res);
            window.location.reload();
            self.$refs.alert.show("文章添加成功");
          },
          error:function(res){
            self.$refs.alert.show("文章添加失败");
          }
        })
    }
  }


}
</script>
<style>
 .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>