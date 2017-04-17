<template>
	<div>
		<header>
		    <div class="area">
		        <h1 class="l">
		            机构管理系统
		        </h1>
		    </div>
		</header>
		<article id="container" class="area clear">	
			<aside class="left">
			    <h3>机构管理</h3>
			    <ul>
			        <li>
			            <a @click="selectCurPage('/orgnization/list')" :class="[curPage === '/orgnization/list' ? 'cur-page' : '']" href="/#/orgnization/list">机构列表</a>
			        </li>
			        <li>
			            <a @click="selectCurPage('/orgnization/add')" :class="[curPage === '/orgnization/add' ? 'cur-page' : '']" href="/#/orgnization/add">新增机构</a>
			        </li>
			    </ul>
			    <h3>订单管理</h3>
			    <ul>
			        <li>
			            <a @click="selectCurPage('/order/list')" :class="[curPage === '/order/list' ? 'cur-page' : '']" href="/#/order/list">订单列表</a>
			        </li>
			        <li>
			            <a @click="selectCurPage('/order/add')" :class="[curPage === '/order/add' ? 'cur-page' : '']" href="/#/order/add">新增订单</a>
			        </li>
			    </ul>
			</aside>
			<section class="right">
				<router-view></router-view>	
			</section>
		</article>
		<footer>
			此处可以写一些介绍
		</footer>
	</div>
</template>
<script type="text/ecmascript-6">
	export default {
		data() {
			return {
				curPage: this.$router.currentRoute.path
			}
		},
		methods: {
			selectCurPage(curPage) {
				this.curPage = curPage;
			}
		}
	}
</script>
<style>
@import './common/css/pub.css';
@import './common/css/sidebar.css';
</style>