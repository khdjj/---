<!--
 * @Descripttion: 
 * @version: 
 * @Author: khdjj
 * @Date: 2019-08-15 08:16:45
 * @LastEditors: khdjj
 * @LastEditTime: 2019-08-15 15:46:49
 -->
<template>
	  <div>
		    <div id="highcharts" class="high"></div>
		  </div>
</template>
<script>
	import HighCharts from 'highcharts'
	// import XChart from './charts.vue'
	export default {
		data() {
			return {
				option: {},
				tableData: [],
				other: {
					chart : {
						type : 'spline'
					},
					title : {
						text : '月销售周期变化'
					},
					subtitle : {
						text : " 17月 至 18月 "
					},
					xAxis : {
						type : 'datetime',
						title : {
							text : null
						}
					},
					colors : [ '#6CF', '#39F', '#06C', '#036', '#000' ],
					yAxis : {
						title : {
							text : '月销 (件)'
						},
						min : 0
					},
					tooltip : {
						headerFormat : '<b>{series.name}</b><br>',
						pointFormat : '{point.x:%e. %b}: {point.y:.2f} 件'
					},
					plotOptions : {
						spline : {
							marker : {
								enabled : true
							}
						}
					},
					series : [ {
						name :"7月 至 8月 ",
						data : []
					} ]
				}

			}
		},
		components: {
			// XChart
		},
		mounted: function() {
			var myvue = this;
			// myvue.other.title.text = '2010 ~ 2016 年太阳能行业就业人员发展情况';
			// myvue.other.subtitle.text = '数据来源：thesolarfoundation.com';
			this.getData();
// 			myvue.other.series[0].data = myvue.tableData //数据
// 			myvue.other.yAxis.title.text = '就业人数'; //数据
// 			myvue.option = myvue.other;
// 			console.log(this.option);
// 			HighCharts.chart('highcharts',this.option);
		},
		methods: {
			getData() {
				var vm = this;
				$.ajax({
					url: "/api/monthSale",
					success: function(data) {
						console.log(data);
						var toDay = data.toDay;
						var monDay = data.monDay;
						data = data.results[0];
						Object.keys(data).forEach(function(key) {
							var d = new Array();
							d.push(new Date(key).getTime(), parseInt(data[key]));
							vm.tableData.push(d);
						});
						vm.other.series[0].data = vm.tableData //数据
						vm.other.yAxis.title.text = '月销 (件)'; //数据
						vm.option = vm.other;
						HighCharts.chart('highcharts',vm.option);
					}
				});
			}
		},
	}
</script>
