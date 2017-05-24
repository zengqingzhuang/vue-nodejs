import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App.vue';

// 机构列表页面
import orgList from './page/orgnization/list.vue';
// 通知地址页面
import addressList from './page/address/list.vue';
// 推送参数列表页面
import paramsList from './page/params/list.vue';
// 推送参数新增页面
import paramsAdd from './page/params/add.vue';
// 推送参数编辑页面
import paramsEdit from './page/params/edit.vue';
// 同步订单页面
import getOrder from './page/getOrder/order.vue';
// 用户信息查询页面
import getUserInfo from './page/userInfo/list.vue';
// 权限管理-用户列表
import authUserList from './page/auth/user/list.vue';
// 权限管理-角色列表
import authRoleList from './page/auth/role/list.vue';
// 权限管理-权限分配列表
import authList from './page/auth/auth/list.vue';

Vue.use(VueRouter);
Vue.use(VueResource);
//Vue.config.devtools = true
// 路由地址必须与文件路径一致，便于根据路由来查找文件
const router = new VueRouter({
	routes: [
		{ path: '/', component: App, children: [
			{ path: '/orgnization/list', component: orgList },
			{ path: '/address/list', component: addressList },
			{ path: '/params/list', component: paramsList },
			{ path: '/params/add', component: paramsAdd },
			{ path: '/params/edit', component: paramsEdit },
			{ path: '/getOrder', component: getOrder },
			{ path: '/user/list', component: getUserInfo },
			{ path: '/auth/userList', component: authUserList },
			{ path: '/auth/roleList', component: authRoleList },
			{ path: '/auth/list', component: authList }
		]}
	]
});

new Vue({
	router
}).$mount('#app');