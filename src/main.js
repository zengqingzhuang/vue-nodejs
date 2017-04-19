import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App.vue';

// 机构列表页面
import orgList from './page/orgnization/list.vue';
// 新增机构页面
import orgAdd from './page/orgnization/add.vue';
// 订单列表页面
import orderList from './page/order/list.vue';
// demo页面
import demo from './page/demo.vue';

Vue.use(VueRouter);
Vue.use(VueResource);
//Vue.config.devtools = true
// 路由地址必须与文件路径一致，便于根据路由来查找文件
const router = new VueRouter({
	routes: [
		{ path: '/', component: App },
		{ path: '/orgnization/list', component: orgList },
		{ path: '/orgnization/add', component: orgAdd },
		{ path: '/order/list', component: orderList },
		{ path: '/demo', component: demo }
	]
});

new Vue({
	router,
	el: '#app',
	render: (h) => h(App)
});