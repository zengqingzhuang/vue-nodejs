<template>
	<div id="wrapper">
        <!--左侧导航开始-->
        <nav class="navbar-default navbar-static-side" role="navigation">
            <div class="nav-close"><i class="fa fa-times-circle"></i>
            </div>
            <div class="sidebar-collapse">
                <ul class="nav" id="side-menu">
                    <li class="nav-header">
                        <div class="dropdown profile-element">
                            <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                                <span class="clear">
                                    <span class="block m-t-xs" style="font-size:20px;">
                                        <i class="fa fa-area-chart"></i>
                                        <strong class="font-bold">EDU</strong>
                                    </span>
                                </span>
                            </a>
                        </div>
                        <div class="logo-element">EDU
                        </div>
                    </li>
                    <!-- <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">
                        <span class="ng-scope">分类</span>
                    </li> -->
                    <li>
                        <a class="J_menuItem" href="/#/">
                            <i class="fa fa-home"></i>
                            <span class="nav-label">主页</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa fa-table"></i>
                            <span class="nav-label">机构配置管理</span>
                            <span class="fa arrow"></span>
                        </a>
                        <ul class="nav nav-second-level">
                            <li>
                                <a class="J_menuItem" href="/#/orgnization/list">列表</a>
                            </li>
                            <li>
                                <a class="J_menuItem" href="/#/orgnization/add">新增</a>
                            </li>
                        </ul>
                    </li>
                    <!-- <li>
                        <a href="#">
                            <i class="fa fa-table"></i>
                            <span class="nav-label">通知地址管理</span>
                            <span class="fa arrow"></span>
                        </a>
                        <ul class="nav nav-second-level">
                            <li>
                                <a class="J_menuItem" href="/#/address/list">列表</a>
                            </li>
                        </ul>
                    </li> -->
                    <!-- <li>
                        <a href="#">
                            <i class="fa fa-table"></i>
                            <span class="nav-label">推送参数管理</span>
                            <span class="fa arrow"></span>
                        </a>
                        <ul class="nav nav-second-level">
                            <li>
                                <a class="J_menuItem" href="/#/params/list">列表</a>
                            </li>
                            <li>
                                <a class="J_menuItem" href="/#/params/add">新增</a>
                            </li>
                        </ul>
                    </li> -->
                    <li>
                        <a href="#">
                            <i class="fa fa-edit"></i>
                            <span class="nav-label">同步订单</span>
                            <span class="fa arrow"></span>
                        </a>
                        <ul class="nav nav-second-level">
                            <li>
                                <a class="J_menuItem" href="/#/getOrder">同步订单</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa fa-table"></i>
                            <span class="nav-label">课程信息查询</span>
                            <span class="fa arrow"></span>
                        </a>
                        <ul class="nav nav-second-level">
                            <li>
                                <a class="J_menuItem" href="/#/course/list">课程列表</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa fa-table"></i>
                            <span class="nav-label">用户信息查询</span>
                            <span class="fa arrow"></span>
                        </a>
                        <ul class="nav nav-second-level">
                            <li>
                                <a class="J_menuItem" href="/#/user/list">列表</a>
                            </li>
                        </ul>
                    </li>
                    <!-- <li>
                        <a href="#">
                            <i class="fa fa-cutlery"></i>
                            <span class="nav-label">日志查询</span>
                            <span class="fa arrow"></span>
                        </a>
                        <ul class="nav nav-second-level">
                            <li>
                                <a class="J_menuItem" href="/#/orgnization/list">列表</a>
                            </li>
                        </ul>
                    </li> -->
                    <li>
                        <a href="#">
                            <i class="fa fa-cutlery"></i>
                            <span class="nav-label">权限管理</span>
                            <span class="fa arrow"></span>
                        </a>
                        <ul class="nav nav-second-level">
                            <li>
                                <a class="J_menuItem" href="/#/auth/userList">用户列表</a>
                            </li>
                            <li>
                                <a class="J_menuItem" href="/#/auth/roleList">角色列表</a>
                            </li>
                            <li>
                                <a class="J_menuItem" href="/#/auth/list">权限分配</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
        <!--左侧导航结束-->
        <!--右侧部分开始-->
        <div id="page-wrapper" class="gray-bg dashbard-1">
            <div class="row border-bottom">
                <nav class="navbar navbar-static-top" role="navigation" style="margin-bottom: 0">
                    <div class="navbar-header"><a class="navbar-minimalize minimalize-styl-2 btn btn-info " href="#"><i class="fa fa-bars"></i> </a>
                        <form role="search" class="navbar-form-custom" method="post" action="search_results.html">
                            <div class="form-group">
                                <input type="text" placeholder="请输入您需要查找的内容 …" class="form-control" name="top-search" id="top-search">
                            </div>
                        </form>
                    </div>
                </nav>
            </div>
            <template v-if="curPage !== '/'">
				<keep-alive>
					<router-view></router-view>
				</keep-alive>
			</template>
			<template v-else>
				<keep-alive>
					<home></home>
				</keep-alive>
			</template>
        </div>
        <!--右侧部分结束-->
    </div>
</template>
<script type="text/ecmascript-6">
	import home from 'components/home';
	export default {
		data() {
			return {
				curPage: this.$router.currentRoute.path
			}
		},
		watch: {
	      '$route': 'changeRoute'
	    },
		methods: {
			selectCurPage(curPage) {
				this.curPage = curPage;
			},
			changeRoute() {
				this.curPage = this.$router.currentRoute.path;
			}
		},
		components: {
			home
		}
	}
</script>
<style lang="sass" rel="stylesheet/sass">
</style>