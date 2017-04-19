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
			            <a @click="selectCurPage('/orgnization/list')" :class="[curPage === '/orgnization/list' ? 'cur' : '']" href="/#/orgnization/list">机构列表</a>
			        </li>
			        <li>
			            <a @click="selectCurPage('/orgnization/add')" :class="[curPage === '/orgnization/add' ? 'cur' : '']" href="/#/orgnization/add">新增机构</a>
			        </li>
			    </ul>
			    <h3>订单管理</h3>
			    <ul>
			        <li>
			            <a @click="selectCurPage('/order/list')" :class="[curPage === '/order/list' ? 'cur' : '']" href="/#/order/list">订单列表</a>
			        </li>
			        <li>
			            <a @click="selectCurPage('/order/add')" :class="[curPage === '/order/add' ? 'cur' : '']" href="/#/order/add">新增订单</a>
			        </li>
			    </ul>
			</aside>
			<section class="right">
				<template v-if="curPage !== '/'">
					<keep-alive>
						<router-view></router-view>
					</keep-alive>
				</template>
				<template v-else>
					首页
				</template>
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
<style lang="sass" rel="stylesheet/sass">
	@import 'common/scss/pub';
	@import 'common/scss/sidebar';
	@import 'common/fonts/icon-font';
</style>