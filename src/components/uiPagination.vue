<template>
	<div id="uiPagination" v-html="pageHtml"></div>
</template>
<script type="text/ecmascript-6">
	/**
     * @file ui-dialog
     * @author dazhuang(zengqingzhuang@baidu.com)
     * @since 2017/5/4
     */

    /**
     * @property {Number} pageSize 每页大小
     * @property {Number} pageNumber 当前页码
     * @property {Number} pageTotal 总页数
     * @property {Number} viewStep 中心页码前后范围步数
     * @property {Number} pageNumMax 最大显示页数，如果值为0或者false，那么不限制最大页码
     * @property {Number} pages 总页码，如果此字段存在，那么pageTotal失效
     * @property {Boolean} showOneBar 如果只有一页，是否显示，默认不显示
     * @property {Array} showItems 可显示的配置项，默认显示["prev", "no_prev", "next", "no_next", "page", "cu_page", "abbr"]也就是["total", "gopage"]是可配置的
     */
    export default {
    	data() {
    		return {
    			pageHtml: ''
    		}
    	},
    	props: {
    		pageSize: {
				type: Number,
				default: 20
			},
			pageNumber: {
				type: Number,
				default: 0
			},
			pageTotal: {
				type: Number,
				default: 0
			},
			viewStep: {
				type: Number,
				default: 1
			},
			pageNumMax: {
				type: Number,
				default: 99
			},
			pages: {
				type: Number,
				default: 0
			},
			showOneBar: {
				type: Boolean,
				default: false
			},
			showItems: {
				type: Array,
				default: function() {
					return ["total", "gopage"]
				}
			}
    	},
    	watch: {
    		pageTotal(val) {
    			this.createPage();
    		},
    		pageNumber(val) {
    			this.createPage();	
    		}
    	},
    	mounted() {
    		document.getElementById('uiPagination').onclick = (event) => {
    			if (event.target.tagName === 'A') {
    				this.clickPage(event.target.getAttribute('page') || document.getElementById('iptNum').value);
    			}
    		}
    	},
    	methods: {
    		createPage() {
    			let current = parseInt(this.pageNumber), // 当前页码
			        total = this.pageTotal, // 总条目数
			        per = this.pageSize, // 每页条目数
			        max = this.pageNumMax, // 最大显示页数
			        pages = this.pages, //总页码数
			        showOneBar = this.showOneBar,
			        showItems = this.showItems,
			        boat = {
			            step: this.viewStep,
			            size: this.viewStep * 2 + 1 // 浮动页码长度 = 前后步长 + 本身占位
			        };
			    // 当前页码校验
			    if (typeof current !== 'number') {
			        current = 1;
			    } else if (current < 1) {
			        current = 1;
			    } else if (!!max && current > max) {
			        current = max;
			    }

			    // 总页数, 最少为1页
			    if (!pages) {
			        pages = parseInt(total % per) > 0? parseInt(total / per) + 1: parseInt(total / per);
			    }
			    // 页数小于等于1页时, 不显示
			    if (pages <= 1) {
			        if (!showOneBar) {
			            return '';
			        }
			    }
			    else if (!!max && pages > max) {
			        pages = max;
			    }

			    let html = [];

			    // 显示模板
			    let tpl = {
			        prev: function(num) {
			            return '<a class="np-page" href="javascript:void(0)" page="' + num + '">上一页</a> ';
			        },
			        no_prev: function() {
			            return '<span class="selected">上一页</span> ';
			        },
			        next: function(num) {
			            return '<a class="np-page" href="javascript:void(0)" page="' + num + '">下一页</a> ';
			        },
			        no_next: function() {
			            return '<span class="selected">下一页</span> ';
			        },
			        page: function(num) {
			            return '<a href="javascript:void(0)" page="' + num + '">' + num + '</a> ';
			        },
			        cu_page: function(num) {
			            return '<span>' + num + '</span> ';
			        },
			        abbr: function() {
			            return '<span class="dd">...</span> ';
			        },
			        total: function(total) {
			            return '共' + total + '页，';
			        },
			        gopage: function(num) {
			            return '到第<input id="iptNum" type="text" class="text" value="' + num + '">页<a href="javascript:void(0)">确定</a> ';
			        }
			    }

			    // 上一页
			    html.push(current === 1 ? tpl.no_prev() : tpl.prev(current - 1));
			    // 第一页
			    html.push(current === 1 ? tpl.cu_page(1) : tpl.page(1));

			    // 是否需要缩略显示
			    if (pages > 1 + boat.size) {
			        boat.start = current - boat.step;
			        boat.end = current + boat.step;

			        // 浮动页面起始位置修正
			        if (boat.start < 2) {
			            boat.start = 2;
			            boat.end = 2 + boat.step * 2;
			        }
			        else if (boat.end > pages) {
			            boat.end = pages;
			            boat.start = pages - boat.step * 2;
			        }

			        // 前置缩略
			        if (boat.start - 1 > 1 ) {
			            html.push(tpl.abbr());
			        }

			        // 浮动页码
			        for (let p = boat.start; p <= boat.end; p++) {
			            html.push(current === p ? tpl.cu_page(p) : tpl.page(p));
			        }

			        // 后置缩略
			        if (boat.start + boat.size < pages) {
		            	html.push(tpl.abbr());
		            }
			        if (boat.end + 1 <= pages) {
			            
			            html.push(tpl.page(pages));

			        }
			    }
			    // 不需要缩略
			    else{
			        // 页码
			        for(let p = 2; p <= pages; p++){
			            html.push(current === p ? tpl.cu_page(p) : tpl.page(p));
			        }
			    }

			    // 下一页
			    html.push(current + 1 > pages ? tpl.no_next() : tpl.next(current + 1));

			    if (showItems.indexOf("total") > -1) {
			        html.push(tpl.total(pages));
			    }
			    if (showItems.indexOf("gopage") > -1) {
			        html.push(tpl.gopage(current))
			    }

			    // 输出
			    this.pageHtml = html.join('');
    		},
    		clickPage(page) {
    			this.$emit('queryList', page);
    		}
    	}
    }
</script>
<style lang="css" rel="stylesheet/sass">
	#uiPagination {
		text-align: right;
	}
	#uiPagination span{
		background:#e02f2f;
		color:#fff;
		display: inline-block;
		height:24px;
		line-height:24px;
		margin:0 2px;
		padding: 0 8px;
	}
	#uiPagination span.selected {
		background: none;
		color: #b5b5b5
	}
	#uiPagination a {
		display: inline-block;
		height:24px;
		line-height:24px;
		margin:0 2px;
		padding: 0 8px;
		text-align: center;
		vertical-align:middle;
	}
	#uiPagination a:hover {
		text-decoration: none;
		color:#666;
	}
	#uiPagination a.np-page:hover {
		color: #e02f2f;
	}
	#uiPagination .dd {
		background:none;
		color:#666
	}
	#uiPagination .current{
		background:none;
		color:#e02f2f
	}
	#uiPagination .text {
		width:36px; 
		height:22px;
		line-height:22px; 
		border:1px solid #dedede;
		text-indent: 5px; 
		color: #666; 
		margin:0 3px;
		outline: none;
	}
</style>