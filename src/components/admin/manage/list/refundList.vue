<!--
 * @Descripttion: 
 * @version: 
 * @Author: khdjj
 * @Date: 2019-08-15 08:16:58
 * @LastEditors: khdjj
 * @LastEditTime: 2019-08-16 14:09:04
 -->
<template>
  <div class="fillcontain">
    <div class="table_container">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="用户账号">
                <span>{{ props.row.uid }}</span>
              </el-form-item>
              <el-form-item label="订单号">
                <span>{{ props.row.oid }}</span>
              </el-form-item>
              <el-form-item label="交易账号">
                <span>{{ props.row.account }}</span>
              </el-form-item>
              <el-form-item label="礼品参数">
                <span>{{ props.row.parameter }}</span>
              </el-form-item>
              <el-form-item label="礼品类型">
                <span>{{ props.row.type }}</span>
              </el-form-item>
              <el-form-item label="退款原因">
                <span>{{ props.row.cause }}</span>
              </el-form-item>
              <el-form-item label="退款理由">
                <span>{{ props.row.desc }}</span>
              </el-form-item>
              <el-form-item label="退款照片">
                <img :src="props.row.image" min-width="70" height="70">
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="退款id" prop="id">
        </el-table-column>
        <el-table-column label="礼品标题" prop="title">
        </el-table-column>
        <el-table-column label="退款时间" prop="time">
        </el-table-column>
        <el-table-column label="退款金额" prop="money">
        </el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <el-button size="mini"   @click="allowRefund(scope.$index, scope.row)">同意退款</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <alert ref="alert"></alert>
  </div>
</template>
<script>
import alert from '../../../alert/alert'
export default {
  name: 'refundList',
  data() {
    return {
      tableData: [],
      limit: 20,
      offset: 0
    }
  },
  components:{
    alert
  },
  mounted() {
    this.getTableData();
  },
  methods: {
 
    allowRefund(scope, row) {
      console.log(row.id);
      var vm = this;
      $.ajax({
        type:"POST",
        url:'/api/cancelOrder',
        data:{
          rid:row.id,
          gpid:row.gpid,
          oid:row.oid,
          account:row.account,
          uid:row.uid
        },
        success:function(res){
          res = JSON.parse(res);
          console.log(res);
          if(res.status == 1){
            vm.$refs.alert.show("退款成功");
            vm.getTableData();
          }
        }
      })
    },
    getTableData() {
      let data = [];
      let self = this;
      this.tableData = [];
      $.ajax({
        type: "POST",
        url: "/api/getRetundList",
        data: {
          limit: this.limit,
          offset: this.offset
        },
        success: function (res) {
          data = res.results;
          console.log(data)
          for (let i = 0; i < data.length; i++) {
            let d = {};
            d.id = data[i].id;
            d.title = data[i].title;
            d.time = data[i].time;
            d.money = data[i].money;
            d.gid = data[i].gid;
            d.gpid = data[i].gpid;
            d.uid = data[i].uid;
            d.oid = data[i].oid;
            d.account = data[i].account;
            d.parameter = data[i].parameter;
            d.type = data[i].type;
            d.cause = data[i].cause;
            d.desc = data[i].desc;
            d.image = "http://192.168.21.49:8080/Gift"+data[i].image;
            self.tableData.push(d);
          }
        }
      })
    }
  }
}
</script>

<style>
@import "element-ui/lib/theme-chalk/index.css";
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.table_container {
  padding: 20px;
}
.Pagination {
  display: flex;
  justify-content: flex-start;
  margin-top: 8px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #20a0ff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 120px;
  height: 120px;
  line-height: 120px;
  text-align: center;
}
.avatar {
  width: 120px;
  height: 120px;
  display: block;
}
.el-table .cell {
  white-space: normal;
  word-break: break-all;
  line-height: 24px;
  text-align: center;
}
</style>

