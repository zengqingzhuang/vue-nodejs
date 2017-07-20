<template>
	<div class="wrapper wrapper-content animated fadeInRight">
		<slot name="content"></slot>
        <div class="row mgin">
            <div class="col-sm-12">
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>{{ title }}</h5>
                        <!-- <div class="ibox-tools" v-if="showAdd || showUpdate || showDelete">
                            <a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown">
                                <i class="fa fa-wrench"></i>
                            </a>
                            <ul class="dropdown-menu dropdown-user">
                                <li v-if="showAdd"><a href="javascript:void(0)" @click="addRow">新增</a>
                                </li>
                                <li v-if="showUpdate"><a href="javascript:void(0)" @click="updateRow">编辑</a>
                                </li>
                                <li v-if="showDelete"><a href="javascript:void(0)" @click="deleteRow">删除</a>
                                </li>
                            </ul>
                        </div> -->
                    </div>
                    <div class="ibox-content">
                        <table class="table table-bordered" :class="[striped ? 'table-striped' : '' , hover ? 'table-hover' : '']">
                            <thead>
                                <tr>
                                	<th v-for="value in columns">
                                		{{ value }}
                                	</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for='(row, index) in list' @click="onSelectRow(row, index)" :class="[index === selectIndex ? 'success' : '']">
                                	<td v-for='value in row'>
                                		{{ value }}
                                	</td>
                                </tr>
                            </tbody>
                            <tfoot v-if="foots.length > 0">
                                <tr>
                                	<th v-for="value in foots">
                                		{{ value }}
                                	</th>
                                </tr>
                            </tfoot>
                        </table>
        				<ui-pagination
        					:pageSize='pageSize'
        					:pageNumber='pageNumber'
        					:pageTotal='pageTotal'
        					:namespace='namespace'>
        				</ui-pagination>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
	/**
     * @file ui-dialog
     * @author dazhuang(zengqingzhuang@baidu.com)
     * @since 2017/5/3
     */

    /**
     * @property {String} title 列表标题
     * @property {Array} columns 列表表头
     * @property {Array} list 数据集
     * @property {Array} foots 表尾
     * @property {Array} striped 是否奇偶行区分颜色
     * @property {Array} hover 行hover颜色
     * @property {Array} showAdd 是否显示新增按钮
     * @property {Array} showUpdate 是否显示编辑按钮
     * @property {Array} showDelete 是否显示删除按钮
     */
    import uiPagination from 'components/uiPagination';
	export default {
		data() {
			return {
				selectIndex: -1
			}
		},
		props: {
			title: { // 标题
				type: String,
				default: ''
			},
			columns: { // 列集合
				type: Array,
				default: function () {
					return []
				},
				require: true
			},
			list: { // 数据集
				type: Array,
				default: function () {
					return []
				},
				require: true
			},
			foots: { // 表尾
				type: Array,
				default: function () {
					return []
				}
			},
			striped: { // 是否奇偶行区分颜色
				type: Boolean,
				default: false
			},
			hover: { // 行hover颜色
				type: Boolean,
				default: true	
			},
			pageSize: { // 每页大小
				type: Number,
				default: 20
			},
			pageNumber: { // 当前页码
				type: Number,
				default: 0
			},
			pageTotal: { // 总页数
				type: Number,
				default: 0
			}
		},
		methods: {
			onSelectRow(row, index) {
				this.selectIndex = index;
				let fucName = this.$store.getters['namespace'] ? this.$store.getters['namespace'] + '/' + 'onSelectRow' : 'onSelectRow';
				this.$store.dispatch(fucName, row);
			}
		},
		components: {
			uiPagination
		}
	}
</script>
<style lang="sass" scoped rel="stylesheet/sass">
	.mgin {
		margin-top: 15px;
	}
</style>