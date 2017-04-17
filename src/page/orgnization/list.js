import Vue from 'vue';
import demo from 'components/demo';
export default {
	data(){
		return {
			orgList: []
		}
	},
	created(){
		this.$http.get('/organization/list.json', {}).then((res) => {
			let result = res.data.data || {};
			this.orgList = result.list;
		}).catch((res) => {
			alert('接口异常');
		});
	},
	components: {
        demo
    }
}