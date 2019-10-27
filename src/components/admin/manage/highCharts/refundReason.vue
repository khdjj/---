<!--
 * @Descripttion: 
 * @version: 
 * @Author: khdjj
 * @Date: 2019-08-15 08:47:32
 * @LastEditors: khdjj
 * @LastEditTime: 2019-08-15 08:56:31
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
          text: '每个原因退订量'
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
            text: '退订数'
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
        series: [
          {
            name: '数量',
            data: []
          }]
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
      var cause = [],
        num = [];
      $.ajax({
        type: "post",
        async: false,
        cache: false,
        url: "/api/dataAnalysisrefund",
        dataType: "json",
        success: function (data) {
          //alert(typeof data);
          console.log(data);
          data = JSON.parse(data).results;
          for (var i = 0; i < data.length; i++) {
            cause.push(data[i][0]);
            num.push(data[i][1]);
          }
            vm.other.series[0].data = num //数据
            vm.other.yAxis.title.text = '退订数'; //数据
            vm.other. xAxis.categories = cause;
            vm.option = vm.other;
            HighCharts.chart('highcharts', vm.option);
        }
      });
    }
  },
}
</script>
