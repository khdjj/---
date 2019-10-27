<!--
 * @Descripttion: 
 * @version: 
 * @Author: khdjj
 * @Date: 2019-08-07 15:58:54
 * @LastEditors: khdjj
 * @LastEditTime: 2019-08-16 15:10:21
 -->
<template>
  <div>
    <el-row style="margin-top: 20px;">
      <el-col :span="12" :offset="4">
        <el-form :model="formData" :rules="rules" ref="formData" label-width="110px" class="demo-formData">
          <el-row v-for="(p, index) in param" :key="index">
            <el-col :span="12">
              <div class="grid-content bg-purple-dark">
                <el-form-item label='库存'>
                  <el-input v-model="p.stock"></el-input>
                </el-form-item>
                <el-form-item label='类别名称'>
                  <el-input v-model="p.name"></el-input>
                </el-form-item>
                <el-form-item label='价格'>
                  <el-input v-model="p.price"></el-input>
                </el-form-item>
                <el-form-item label='标题'>
                  <el-input v-model="p.title"></el-input>
                </el-form-item>
                <el-form-item label='产品参数'>
                  <el-input v-model="p.params"></el-input>
                </el-form-item>
                <el-form-item label="产品图片">
                 <el-upload 
                        action="/api/upload"
                        list-type="picture"
                        :on-preview="handlePictureCardPreview" 
                        :on-remove="handleRemove"
                        :on-success="success">
                     <i class="el-icon-plus"></i>
               </el-upload>
                <el-button @click.prevent="removeParam(p)">删除</el-button>
                </el-form-item>
              </div>
             </el-col>
          </el-row>
          <el-form-item>
            <el-button type="primary" @click="addParam()">新增</el-button>
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
import { who, target, classfity } from '../../../../common/label'
import alert from '../../../alert/alert'
export default {
  name: 'addGift',
  data() {
    return {
      param: [{
        stock: '',
        name: '',
        price: '',
        params: '',
        title: '',
        image:''
      }],
      image:'',
      giftId:'',
      imageUrl:''
    }
  },
  components:{
    alert
  },
  mounted() {
    this.getData();
    this.giftId = this.$route.query.gift_id;
    console.log(this.giftId);
  },
  methods: {
    onSubmit() {
      var vm = this;
        // console.log(this.param);
        var stock = '',
            name = '',
            price = '',
            params = '',
            title = '';
        const p = this.param;
        for(let i = 0;i<p.length;i++){
            stock = stock +p[i].stock+ ',';
            name = name + p[i].name + ',';
            price = price + p[i].price + ',';
            params = params + p[i].params + ',';
            title = title + p[i].title+ ',';
        }

        stock = stock.substring(0,stock.lastIndexOf(','));
        name = name.substring(0,name.lastIndexOf(','));
        price = price.substring(0,price.lastIndexOf(','));
        params = params.substring(0,params.lastIndexOf(','));
        title = title.substring(0,title.lastIndexOf(','));
        this.image = this.image.substring(0,this.image.lastIndexOf(','));
        console.log(stock);
        console.log(name);
        console.log(price);
        console.log(params);
        console.log(title);
        console.log(this.image);
        $.ajax({
            type:'POST',
            url:'/api/addGiftParam',
            data:{
                name:name,
                stock:stock,
                price:price,
                params:params,
                title:title,
                image:this.image,
                giftId:this.giftId
            },
            success:function(res){
              vm.$router.push({path:'/giftList'});
            }
        })
    },
    addParam() {
      this.param.push({
        stock: '',
        name: '',
        price: '',
        params: '',
        title: ''
      })
    },
    removeParam(p) {
      let index = this.param.indexOf(p);
      if (index !== -1) {
        this.param.splice(index, 1)
      }
    },
    success(response, file, fileList) {
    console.log("aaaaaaaaaaaaaa");
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
    this.image = this.image+temp_str+',';
    console.log(temp_str);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    addProduct() {
      this.product.push({
        value: '',
        name: ''
      })
    },
    removeProduct(item) {
      let index = this.product.indexOf(item)
      if (index !== -1) {
        this.product.splice(index, 1)
      }
    },
    getData() {

    }
  }
}
</script>
<style>
@import "element-ui/lib/theme-chalk/index.css";
</style>
