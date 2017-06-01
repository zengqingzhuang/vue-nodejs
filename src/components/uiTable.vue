<template>
	<div class="wrapper wrapper-content animated fadeInRight">
		<div class="btns" v-if="showAdd || showUpdate || showDelete">
			<button v-if="showAdd" class="btn btn-primary" type="button" @click="addRow"><i class="fa fa-plus"></i> 新增</button>
			<button v-if="showUpdate" class="btn btn-info" type="button" @click="updateRow"><i class="fa fa-paste"></i> 编辑</button>
			<button v-if="showDelete" class="btn btn-danger" type="button" @click="deleteRow"><i class="fa fa-times"></i> 删除</button>
			<button v-if="showOpen" class="btn btn-info" type="button" @click="openRow"><i class="fa fa-check"></i> 开启</button>
			<button v-if="showStop" class="btn btn-danger" type="button" @click="stopRow"><i class="fa fa-warning"></i> 停用</button>
		</div>
        <div class="row">
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
        					@queryList='queryList'>
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
				selectedRow: '',
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
			showAdd: { // 是否显示新增按钮
				type: Boolean,
				default: true
			},
			showUpdate: { // 是否显示编辑按钮
				type: Boolean,
				default: true
			},
			showDelete: { // 是否显示删除按钮
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
			},
			showOpen: {
				type: Boolean,
				default: false
			},
			showStop: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			addRow() { // 新增
				this.$emit('addRow');
			},
			updateRow() { // 编辑
				this.$emit('updateRow', this.selectedRow);
			},
			deleteRow() { // 删除
				this.$emit('deleteRow', this.selectedRow);
			},
			openRow() {
				this.$emit('openRow', this.selectedRow);
			},
			stopRow() {
				this.$emit('stopRow', this.selectedRow);
			},
			onSelectRow(row, index) {
				if (!Object.is(this.selectedRow, row)) {
					this.selectedRow = row;
					this.selectIndex = index;
				}
			},
			queryList(page) {
				this.$emit('queryList', page)
			}
		},
		components: {
			uiPagination
		}
	}
</script>
<style lang="sass" scoped rel="stylesheet/sass">
	.btns {
		margin-bottom: 15px;
	}
</style>