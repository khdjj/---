<!--
 * @Descripttion: 
 * @version: 
 * @Author: khdjj
 * @Date: 2019-08-15 08:47:32
 * @LastEditors: khdjj
 * @LastEditTime: 2019-08-15 09:34:14
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
      var ageregion = ['年龄:0-18', '年龄:18-30', '年龄:30-45', '年龄:45-65', '年龄:65以上', '总量'],
      price = [],
        age1 = [],
        age2 = [],
        age3 = [],
        age4 = [],
        age5 = [],
        total = [];
      $.ajax({
        type: "post",
        async: false,
        cache: false,
        url: "/api/dataAnalysisagemoneyorder",
        dataType: "json",
        success: function (data) {
          //alert(typeof data);
          console.log(data);
          data = JSON.parse(data).results;
          for (var i = 0; i < data.length; i++) {
            price.push(data[i][0]);
            age1.push(data[i][1]);
            age2.push(data[i][2]);
            age3.push(data[i][3]);
            age4.push(data[i][4]);
            age5.push(data[i][5]);
            total.push(data[i][6]);
          }
          var d1 = {name: ageregion[0],data:age1},
          d2 = {name: ageregion[1],data:age2},
          d3 = {name: ageregion[2],data:age3},
          d4 = {name: ageregion[3],data:age4},
          d5 = {name: ageregion[4],data:age5},
          d6 = {name: ageregion[5],data:total};
          var num = [];
          num.push(d1);
          num.push(d2);
          num.push(d3);
          num.push(d4);
          num.push(d5);
          num.push(d6);
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
