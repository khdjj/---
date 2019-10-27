<!--
 * @Descripttion: 
 * @version: 
 * @Author: khdjj
 * @Date: 2019-08-06 14:28:33
 * @LastEditors: khdjj
 * @LastEditTime: 2019-08-15 11:30:17
 -->
<template>
	<div class="manage_page fillcontain">
		<el-row style="height: 100%;">
	  		<el-col :span="4"  style="min-height: 100%; background-color: #324057;">
				<el-menu :default-active="defaultActive" style="min-height: 100%;" theme="dark" router>
					<el-menu-item index="manage"><i class="el-icon-menu"></i>首页</el-menu-item>
					<el-submenu index="2">
						<template slot="title"><i class="el-icon-document"></i>数据管理</template>
						<el-menu-item index="giftList">礼品列表</el-menu-item>
						<el-menu-item index="orderList">订单列表</el-menu-item>
						<el-menu-item index="refundList">退款列表</el-menu-item>
					</el-submenu>
					<el-submenu index="3">
						<template slot="title"><i class="el-icon-plus"></i>添加数据</template>
						<el-menu-item index="addGift">添加礼品</el-menu-item>
						<el-menu-item index="addArticle">添加文章</el-menu-item>
						<!-- <el-menu-item index="addGoods">添加礼品参数</el-menu-item> -->
					</el-submenu>
					<el-submenu index="4">
						<template slot="title"><i class="el-icon-star-on"></i>图表</template>
						<el-menu-item index="byAge">用户喜欢礼品</el-menu-item>
						<el-menu-item index="monthSale">月销售</el-menu-item>
						<el-menu-item index="refundReason">用户退款原因统计</el-menu-item>
						<el-menu-item index="agemoneyorder">用户年龄数据统计</el-menu-item>
						<el-menu-item index="sexmoneyorder">用户性别数据统计</el-menu-item>
						<el-menu-item index="agesexmoneyorder">用户年龄性别数据统计</el-menu-item>
					</el-submenu>
					<el-submenu index="5">
						<template slot="title"><i class="el-icon-edit"></i>编辑</template>
						<!-- <el-menu-item index="uploadImg">上传图片</el-menu-item> -->
						<el-menu-item index="vueEdit">文本编辑</el-menu-item>
					</el-submenu>
					<el-submenu index="6">
						<template slot="title"><i class="el-icon-setting"></i>设置</template>
						<el-menu-item index="adminSet">管理员设置</el-menu-item>
						<!-- <el-menu-item index="sendMessage">发送通知</el-menu-item> -->
					</el-submenu>
					<el-submenu index="7">
						<template slot="title"><i class="el-icon-warning"></i>说明</template>
						<el-menu-item index="explain">说明</el-menu-item>
					</el-submenu>
				</el-menu>
			</el-col>
			<el-col :span="20" style="height: 100%;overflow: auto;">
				<keep-alive>
				    <router-view></router-view>
				</keep-alive>
			</el-col>
		</el-row>
  	</div>
</template>

<script>
    export default {
		computed: {
			defaultActive: function(){
				return this.$route.path.replace('/', '');
			}
		},
    }
</script>


<style>
@import 'element-ui/lib/theme-chalk/index.css';
a, article, aside, b, body, button, dd, div, dl, dt, figcaption, figure, footer, h1, h2, h3, h4, h5, h6, header, i, input, li, nav, p, section, select, span, textarea, ul {
    padding: 0;
    margin: 0;
    list-style: none;
    font-style: normal;
    text-decoration: none;
    border: none;
    font-family: Microsoft Yahei,sans-serif;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
}
.el-menu-item, .el-submenu__title {
    height: 56px;
    line-height: 56px;
    font-size: 14px;
    color: #48576a;
    padding: 0 20px;
    cursor: pointer;
    position: relative;
    transition: border-color .3s,background-color .3s,color .3s;
    box-sizing: border-box;
    white-space: nowrap;
}
.el-table .cell{
	word-break: break-all;
    line-height: 24px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.el-pagination{
	text-align: center;
}

</style>
