<!--
 * @Descripttion: 
 * @version: 
 * @Author: khdjj
 * @Date: 2019-08-06 14:23:31
 * @LastEditors: khdjj
 * @LastEditTime: 2019-08-16 15:03:42
 -->
<template>
  <div>
    <el-row style="margin-top: 20px;">
      <el-col :span="12" :offset="4">
        <el-form :model="formData" :rules="rules" ref="formData" label-width="110px" class="demo-formData">
          <el-form-item label="礼品标题" prop="title">
            <el-input v-model="formData.title"></el-input>
          </el-form-item>
          <el-form-item label="详细地址" prop="address">
            <el-input v-model="formData.address"></el-input>
          </el-form-item>
          <el-form-item label="礼品所需邮费" prop="postage">
            <el-input v-model.number="formData.fare" maxLength="11"></el-input>
          </el-form-item>
          <el-form-item label="商家发货时间" prop="deliveryTime">
            <el-input v-model="formData.time"></el-input>
          </el-form-item>
          <el-form-item label="品牌名" prop="brandName">
            <el-input v-model="formData.brand"></el-input>
          </el-form-item>
          <el-form-item label="礼品适用场合">
            <el-cascader :options="occasioData" v-model="formData.situation" :show-all-levels="false"></el-cascader>
          </el-form-item>
          <el-form-item label="送礼对象">
            <el-cascader :options="targetData" v-model="formData.partner" :show-all-levels="false"></el-cascader>
          </el-form-item>
           <el-form-item label="价格区间" >
            <el-input v-model="formData.price"></el-input>
          </el-form-item>
          <el-form-item label="礼品分类">
            <el-cascader :options="classifyData" v-model="formData.type" :show-all-levels="false"></el-cascader>
          </el-form-item>
          <el-form-item v-for="(param, index) in product" :label="'规格参数' + (index+1)" :key="index">
            <el-input v-model="param.name" placeholder="请输入参数名称"></el-input>
            <el-input v-model="param.value" placeholder="请输入参数内容"></el-input>
            <el-button @click.prevent="removeProduct(param)">删除</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="addProduct()">新增</el-button>
          </el-form-item>
          <el-form-item label="上传礼品图片(可多张)">
            <el-upload action="/api/upload" list-type="picture-card" 
                        :on-preview="handlePictureCardPreview" 
                        :on-remove="handleRemove"
                        :on-success="gift_success">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="" class="gift_img">
            </el-dialog>
          </el-form-item>
          <el-form-item label="上传礼品详情图片(可多张)">
            <el-upload action="/api/upload"
                        list-type="picture-card"
                        :on-preview="handlePictureCardPreview" 
                        :on-remove="handleRemove"
                        :on-success="gift_param_success">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="" class="gift_param_img">
            </el-dialog>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import alert from '../../../alert/alert.vue'
import { who, target, classfity } from '../../../../common/label'
export default {
  name: 'addGift',
  data() {
    return {
      occasioData: [],//适用场合数组
      classifyData: [],//分类场合数组
      targetData: [],//适用对象数组 
      readonly: true,
      product: [{
        value: '',
        name: ''
      }
      ],
      dialogImageUrl: '',
      dialogVisible: false,
      formData: {
        title: '',//礼品标题
        address: '',//商家地址
        fare: '',//邮费
        time: '',//商家发货时间
        brand: '',//品牌名
        parameter: '',//产品规格参数
        situation: '',//适用场合
        partner: '',//送礼对象 
        type: '',//分类
        image:'',//礼品图片
        detailsImage:'',//礼品具体图片,
        price:'0-0'
      },
      rules: {
        title: [
          { required: true, message: '请输入礼品标题', trigger: 'blur' },
        ],
        address: [
          { required: true, message: '请输入商家地址', trigger: 'blur' }
        ],
        fare: [
          { required: true, message: '请输入商品需要的邮费', trigger: 'blur' },
          { type: 'number', message: '邮费必须是数字' }
        ],
        time: [
          { required: true, message: '请输入商家发货时间,如(七天之内)' },
        ],
      },
    }
  },
  mounted() {
    this.getData();
  },
  components: {
    alert
  },
  methods: {
    onSubmit(){
      this.formData.partner = this.formData.partner[1];
      this.formData.type = this.formData.type[1];
      this.formData.situation = this.formData.situation[1];
      let p = '';
      let product = this.product;
      for(let i = 0;i<product.length;i++){
        if(i==0){
          p = p + product[i].name+":"+product[i].value;
        }else{
          p = p + ',' + product[i].name+":"+product[i].value;
        }
      }
      this.formData.parameter = p;
      console.log(this.formData);
      
      $.ajax({
        type:'POST',
        url:'/api/addGift',
        data:this.formData,
        success:function(data){
          console.log(data);
					self.$router.push({path:'/giftList'});
        }
      })

    },
    gift_success(response, file, fileList){
      this.fileChange(fileList,"gift_success");
    },
    gift_param_success(response, file, fileList){
      this.fileChange(fileList,"gift_param_success");
    },
    fileChange(fileList,status) {
        let temp_str = '';
        if(fileList.length > 0){
          for(let i=0; i<fileList.length; i++){
            if(fileList[i].response){
                if(i===0){
                  temp_str += fileList[i].response;
                } else {
                  // 最终photo的格式是所有已上传的图片的url拼接的字符串（逗号隔开）
                  temp_str += ',' + fileList[i].response; 
                }
            }
          }
        }
        console.log(temp_str);
        status == "gift_success" && (this.formData.image = temp_str);
        status == "gift_param_success" && (this.formData.detailsImage = temp_str);
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
      //targetData
      for (let i = 0; i < who.length; i++) {
        let t = {};
        i == 0 && (t.value = "恋人师友", t.label = "恋人师友");
        i == 1 && (t.value = "家人亲戚", t.label = "家人亲戚");
        i == 2 && (t.value = "其他人", t.label = "其他人");
        let children = [];
        for (let j = 0; j < who[i].length; j++) {
          let a = {};
          a.value = who[i][j];
          a.label = who[i][j];
          children.push(a);
        }
        t.children = children;
        this.targetData.push(t);
      }

      //occasioData
      for (let i = 0; i < target.length; i++) {
        let t = {};
        i == 0 && (t.value = "庆生祝寿", t.label = "庆生祝寿");
        i == 1 && (t.value = "婚恋", t.label = "婚恋");
        i == 2 && (t.value = "礼仪礼节", t.label = "礼仪礼节");
        let children = [];
        for (let j = 0; j < target[i].length; j++) {
          let a = {};
          a.value = target[i][j];
          a.label = target[i][j];
          children.push(a);
        }
        t.children = children;
        this.occasioData.push(t);
      }




      // classifyData
      for (let i = 0; i < classfity.length; i++) {
        let t = {};
        i == 0 && (t.value = "创意", t.label = "创意");
        i == 1 && (t.value = "配饰", t.label = "配饰");
        i == 2 && (t.value = "综合", t.label = "综合");
        i == 3 && (t.value = "玩具", t.label = "玩具");
        i == 4 && (t.value = "数码", t.label = "数码");
        let children = [];
        for (let j = 0; j < classfity[i].length; j++) {
          let a = {};
          a.value = classfity[i][j];
          a.label = classfity[i][j];
          children.push(a);
        }
        t.children = children;
        this.classifyData.push(t);
      }


      console.log(this.targetData);
      console.log(this.occasioData);
      console.log(this.classifyData);

    }
  }
}
</script>
<style>
@import "element-ui/lib/theme-chalk/index.css";
</style>
