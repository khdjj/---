<!--
 * @Descripttion: 
 * @version: 
 * @Author: khdjj
 * @Date: 2019-08-13 16:30:59
 * @LastEditors: khdjj
 * @LastEditTime: 2019-08-16 14:35:26
 -->
<template>
  <div>
    <el-form :model="formData" ref="formData" label-width="110px" class="demo-formData">
      <el-row v-for="(p, index) in param" :key="index">
        <el-col :span="12">
          <div class="grid-content bg-purple-dark">
            <el-divider content-position="left">产品参数{{index+1}}</el-divider>
            <el-form-item label='标题'>
              <el-input v-model="p.title" readonly></el-input>
            </el-form-item>
            <el-form-item label='产品参数'>
              <el-input v-model="p.parameter" readonly></el-input>
            </el-form-item>
            <el-form-item label='库存'>
              <el-input v-model="p.reseve"></el-input>
            </el-form-item>
            <el-form-item label='类别名称'>
              <el-input v-model="p.type" readonly></el-input>
            </el-form-item>
            <el-form-item label='价格'>
              <el-input v-model="p.price"></el-input>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
      <el-button type="primary" @click="save()">保存</el-button>
    </el-form>
    <alert ref="alert"></alert>
  </div>
</template>
<script>
import alert from '../../../alert/alert'
export default {
  components: {
    alert
  },
  data() {
    return {
      param: [],
      gid: '',
      formData: []
    }
  },
  mounted() {
    this.gid = this.$route.query.gift_id;
    console.log(this.gid);
    this.getAllParam();
  },
  methods: {
    getAllParam() {
      var self = this;
      $.ajax({
        url: '/api/GParams',
        type: "POST",
        data: {
          id: this.gid
        },
        success: function (res) {
          console.log(res);
          res = JSON.parse(res);
          res.GParams.forEach((item) => {
            let d = {};
            d.gId = item.gId;
            d.id = item.id;
            d.parameter = item.parameter;
            d.price = item.price;
            d.reseve = item.reseve;
            d.title = item.title;
            d.type = item.type;
            d.num = 1;
            self.param.push(d);
          })
          console.log(self.param);
        }
      })
    },
    save() {
      var vm = this;
      console.log(this.param);
      var gpid = '',
        price = '',
        reseve = '';
      this.param.forEach((item) => {
        gpid = gpid + item.id + ",";
        price = price + item.price + ",";
        reseve = reseve + item.reseve + ",";
      })
      gpid = gpid.substring(0, gpid.lastIndexOf(","));
      price = price.substring(0, price.lastIndexOf(","));
      reseve = reseve.substring(0, reseve.lastIndexOf(","));
      console.log(gpid,price,reseve);
      $.ajax({
        type:"POST",
        url:'/api/modifyGift',
        data:{
          gpId:gpid,
          gpreseve:reseve,
          gpprice:price
        },
        success:function(res){
          res = JSON.parse(res);
          if(res.status == 1){
            vm.$refs.alert.show("礼品参数修改成功");
            vm.$router.push({path:'/giftList'});
          }
        },
        error:function(){
           vm.$refs.alert.show("礼品参数修改失败");
        }
      })
    }

  }
}
</script>

<style>
</style>