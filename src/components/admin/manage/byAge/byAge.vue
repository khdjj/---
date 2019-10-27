<template>
	<div>
		<el-table :data="tableData6" :span-method="objectSpanMethod" border style="width: 100%; margin-top: 20px">
			<el-table-column prop="age" label="年龄阶段划分" width="180">
				<template slot-scope="scope">
					<span style="margin-left: 10px">{{ scope.row.age }}</span>
				</template>
			</el-table-column>
			<el-table-column prop="type" label="礼品类型">
				<template slot-scope="scope">
					<span style="margin-left: 10px">{{ scope.row.type }}</span>
				</template>
			</el-table-column>
			<el-table-column prop="num" label="数量(件)">
				<template slot-scope="scope">
					<span style="margin-left: 10px">{{ scope.row.value }}</span>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tableData6: []
			};
		},
		mounted() {
			this.ajaxData();
		},
		methods: {
			//       arraySpanMethod({ row, column, rowIndex, columnIndex }) {
			//         console.log("row:"+row,column)
			//         if (row.id=='12987123') {
			//           if (columnIndex === 0) {
			//             return [2, 2];
			//           } 
			//           else if (columnIndex === 1) {
			//             return [0, 0];
			//           }
			//         }
			//       },

			objectSpanMethod({
				row,
				column,
				rowIndex,
				columnIndex
			}) {
				if (columnIndex === 0) {
					if (rowIndex % 5 === 0) {
						return {
							rowspan: 5,
							colspan: 1
						};
					} else {
						return {
							rowspan: 0,
							colspan: 0
						};
					}
				}
			},
			ajaxData() {
				var self = this;
				var arr = new Array("0~20岁","21~30岁","31~40岁","41~50岁","51~60岁","60岁以上");
				//console.log("arr:"+arr);
				$.ajax({
					type: "post",
					url: "/api/statisAge",
					success: function(data) {	
						console.log("显示数据了:"+arr[0]);
						self.showData(arr[0],data.results0);
						self.showData(arr[1],data.results1);
						self.showData(arr[2],data.results2);
						self.showData(arr[3],data.results3);
						self.showData(arr[4],data.results4);
						self.showData(arr[5],data.results5);

					},
					error: function() {
						console.log("error");
					}
				});
			},
			showData(arr,result){
				console.log("arr:"+arr);
				var vm = this;
				for (var i = 0, l = result.length; i < l; i++) {
					console.log(result[i]);
					for (var key in result[i]) {
						var d = {};
						d.age = arr;
						d.type = key;
						d.value = result[i][key];
						vm.tableData6.push(d);
					}
				}
			}
		}
	};
</script>
