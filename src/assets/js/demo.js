import Vue from 'vue';
import demo from '../../components/demo.vue';
export default {
	data(){
		return {
			name: '张三'
		}
	},
	created(){
		this.$http.get('/organization/list.json', {}).then((res) => {
			console.log(res, '22222');
		}).catch((res) => {
			
		});
	},
	components: {
        demo
    }
}