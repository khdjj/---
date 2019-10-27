<!--
 * @Descripttion: 
 * @version: 
 * @Author: khdjj
 * @Date: 2019-08-07 15:42:06
 * @LastEditors: khdjj
 * @LastEditTime: 2019-08-16 15:04:07
 -->
<template>
  <div class="fillcontain">
    <div class="table_container">
      <el-row>
        <el-button type="primary"><a href="http://192.168.21.49:8080/Gift/excelgift">导出</a></el-button>
      </el-row>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="礼品标题">
                <span>{{ props.row.title }}</span>
              </el-form-item>
              <el-form-item label="商家地址">
                <span>{{ props.row.address }}</span>
              </el-form-item>
              <el-form-item label="礼品邮费">
                <span>{{ props.row.fare }}</span>
              </el-form-item>
              <el-form-item label="发货时间">
                <span>{{ props.row.time }}</span>
              </el-form-item>
              <el-form-item label="礼品品牌">
                <span>{{ props.row.brand }}</span>
              </el-form-item>
              <el-form-item label="适用场合">
                <span>{{ props.row.situation }}</span>
              </el-form-item>
              <el-form-item label="适用对象">
                <span>{{ props.row.partner }}</span>
              </el-form-item>
              <el-form-item label="分类">
                <span>{{ props.row.type }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="礼品标题" prop="title">
        </el-table-column>
        <el-table-column label="商家地址" prop="address">
        </el-table-column>
        <el-table-column label="操作" width="300">
          <template slot-scope="scope">
            <el-button size="mini" @click="modifyParam(scope.$index, scope.row)">修改参数</el-button>
            <el-button size="mini" type="Success" @click="addGiftParam(scope.$index, scope.row)">添加参数</el-button>
            <el-button size="mini" type="danger" v-if="scope.row.status != 0" @click="deleteGift(scope.$index, scope.row)">下架</el-button>
            <el-button size="mini" v-else disabled>已下架</el-button>
          </template>
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
      limit: 10,
      offset: 0
    }
  },
  mounted() {
    this.getTableData();
  },
  methods: {
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
    addGiftParam(index, row) {
      console.log(row.id);
      this.$router.push({ path: '/addGiftParam', query: { gift_id: row.id } })
    },
    modifyParam(index, row) {
      console.log(row.id);
      console.log("modifyGiftParam")
      this.$router.push({ path: '/modifyParam', query: { gift_id: row.id } });
    },
    deleteGift(index, row) {
      var self = this;
      var gift_id = row.id;
      console.log(row.status);
      $.ajax({
        type: "POST",
        url: "/api/changeGiftSta",
        data: {
          gstatus: row.status,
          gid: gift_id,
          limit: 10,
          offset: 0
        },
        success: function (res) {

          res = JSON.parse(res);
          console.log(res);
          if (res.code == 200) {
            self.format(res.gifts);
          }
        }
      })
    },
    getTableData() {
      let data = [];
      let self = this;
      $.ajax({
        type: "POST",
        url: "/api/getGiftList",
        data: {
          limit: this.limit,
          offset: this.offset
        },
        success: function (res) {
          console.log(JSON.parse(res));
          res = JSON.parse(res);
          data = res.results;
          self.format(data);
        }
      })
    },
    format(data) {
      var self = this;
      self.tableData = [];
      for (let i = 0; i < data.length; i++) {
        let d = {};
        d.title = data[i].title;
        d.address = data[i].address;
        d.time = data[i].time;
        d.brand = data[i].brand;
        d.fare = data[i].fare;
        d.situation = data[i].situation;
        d.type = data[i].type;
        d.partner = data[i].partner;
        d.id = data[i].id;
        d.status = data[i].status;
        self.tableData.push(d);
      }
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

