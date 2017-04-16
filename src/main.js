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
// 新增订单页面
import orderAdd from './page/order/add.vue';
// demo页面
import demo from './page/demo.vue';

Vue.use(VueRouter);
Vue.use(VueResource);
//Vue.config.devtools = true

const router = new VueRouter({
	routes: [{
			path: '/',
			component: App,
			children: [{
				path: '/orgnization/list',
				component: orgList
			},{
				path: '/orgnization/add',
				component: orgAdd
			},{
				path: '/order/list',
				component: orderList
			},{
				path: '/order/add',
				component: orderAdd
			}]
		}, {
			path: '/demo',
			component: demo
		}
	]
});

new Vue({
	router
}).$mount('#app');
