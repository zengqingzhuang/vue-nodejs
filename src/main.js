import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App.vue';
import orgList from './page/orgnization/list.vue';
import orgAdd from './page/orgnization/add.vue';
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
