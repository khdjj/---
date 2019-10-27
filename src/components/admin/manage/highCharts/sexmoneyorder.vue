<!--
 * @Descripttion: 
 * @version: 
 * @Author: khdjj
 * @Date: 2019-08-15 08:47:32
 * @LastEditors: khdjj
 * @LastEditTime: 2019-08-15 09:37:55
 -->
<template>
    <div>
        <div id="highcharts" class="high"></div>
      </div>
</template>
<script>
import HighCharts from 'highcharts'
export default {
  data() {
    return {
      option: {},
      tableData: [],
      other: {
        chart: {
          type: 'column'
        },
        title: {
          text: '价格区间的订单量'
        },
        subtitle: {
          text: '数据来源: 礼记'
        },
        xAxis: {
          categories: null,
          crosshair: true
        },
        yAxis: {
          min: 0,
          title: {
            text: '订单数'
          }
        },
        tooltip: {
          // head + 每个 point + footer 拼接成完整的 table
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>'
            + '<td style="padding:0"><b>{point.y} 个</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
        },
        plotOptions: {
          column: {
            borderWidth: 0
          }
        },
        series: []
      }
    }
  },
  components: {

  },
  mounted: function () {
    var myvue = this;
    this.getData();

  },
  methods: {
    getData() {
      var vm = this;
      var m = [],
        f = [],
        price = [],
        total = [];
      $.ajax({
        type: "post",
        async: false,
        cache: false,
        url: "/api/dataAnalysissexmoneyorder",
        dataType: "json",
        success: function (data) {
          data = JSON.parse(data).results;
          for (var i = 0; i < data.length; i++) {
            price.push(data[i][0]);
            m.push(data[i][1]);
            f.push(data[i][2]);
            total.push(data[i][3]);
          }
          var d1 = { name: '男', data:  m },
            d2 =  { name: '女', data:  f },
            d3 =  { name: '总量', data:  total };
          var num = [];
          num.push(d1);
          num.push(d2);
          num.push(d3);
          vm.other.series = num //数据
          vm.other.yAxis.title.text = '订单数'; //数据
          vm.other.xAxis.categories = price;
          vm.option = vm.other;
          HighCharts.chart('highcharts', vm.option);
        }
      });
    }
  },
}
</script>
