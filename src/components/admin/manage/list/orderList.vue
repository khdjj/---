<!--
 * @Descripttion: 
 * @version: 
 * @Author: khdjj
 * @Date: 2019-08-15 08:16:58
 * @LastEditors: khdjj
 * @LastEditTime: 2019-08-15 16:10:15
 -->
<template>
  <div class="fillcontain">
    <div class="table_container">
      <el-row>
        <el-button type="primary"><a href="http://192.168.21.49:8080/Gift/excelorder">导出</a></el-button>
      </el-row>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="礼品参数">
                <span>{{ props.row.parameter }}</span>
              </el-form-item>
              <el-form-item label="礼品类型">
                <span>{{ props.row.type }}</span>
              </el-form-item>
              <el-form-item label="交易数量">
                <span>{{ props.row.num }}</span>
              </el-form-item>
              <el-form-item label="交易用户id">
                <span>{{ props.row.uid }}</span>
              </el-form-item>
              <el-form-item label="交易账号">
                <span>{{ props.row.acctount }}</span>
              </el-form-item>
              <el-form-item label="留言信息">
                <span>{{ props.row.msg }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="订单号" prop="id">
        </el-table-column>
        <el-table-column label="礼品标题" prop="title">
        </el-table-column>
        <el-table-column label="交易金额" prop="money">
        </el-table-column>
        <el-table-column label="交易时间" prop="time">
        </el-table-column>
      </el-table>
      <el-pagination background layout="prev, next" :total="1000" @next-click="getNext" @prev-click="getPrev">
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: 'giftList',
  data() {
    return {
      tableData: [],
      limit: 20,
      offset: 0
    }
  },
  mounted() {
    this.getTableData();
  },
  methods: {
    addOrderParam(index, row) {
      console.log(row.id);
      this.$router.push({ path: '/addOrderParam', query: { gift_id: row.id } })
    },
    getNext() {
      console.log("getNext");
      this.offset = this.offset + this.limit;
      console.log(this.offset);
      this.getTableData();
    },
    getPrev() {
      console.log("getPrev");
      this.offset = this.offset - this.limit;
      console.log(this.offset);
      this.getTableData();
    },
    getTableData() {
      let data = [];
      let self = this;
      self.tableData = [];
      $.ajax({
        type: "POST",
        url: "/api/getOrderList",
        data: {
          limit: this.limit,
          offset: this.offset
        },
        success: function (data) {
          console.log(data);
          data = data.results;
          for (let i = 0; i < data.length; i++) {
            let d = {};
            console.log(data[i].id);
            d.id = data[i].id;
            d.title = data[i].title;
            d.money = data[i].total;
            d.time = data[i].time;
            d.parameter = data[i].parameter;
            d.num = data[i].num;
            d.type = data[i].type;
            d.uid = data[i].uId;
            d.acctount = data[i].account;
            d.msg = data[i].msg;
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

