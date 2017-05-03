<template>
    <div>
        <div class="layer" v-show="show"></div>
        <div class="ui-dialog fade-in"
            :style="{width: width + 'px'}"
            v-show="show">
            <div class="modal-content">
                <!-- <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                    <h4 class="modal-title">窗口标题</h4>
                    <small class="font-bold">这里可以显示副标题。</small>
                </div>
                <div class="modal-body">
                    <p><strong>H+</strong> 是一个完全响应式，基于Bootstrap3.3.6最新版本开发的扁平化主题，她采用了主流的左右两栏式布局，使用了Html5+CSS3等现代技术，她提供了诸多的强大的可以重新组合的UI组件，并集成了最新的jQuery版本(v2.1.1)，当然，也集成了很多功能强大，用途广泛的jQuery插件，她可以用于所有的Web应用程序，如网站管理后台，网站会员中心，CMS，CRM，OA等等，当然，您也可以对她进行深度定制，以做出更强系统。</p>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-white" data-dismiss="modal">关闭</button>
                    <button type="button" class="btn btn-primary">保存</button>
                </div> -->
                <slot name="content"></slot>
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
     * @property {boolean} show.sync - 显示或隐藏, 默认隐藏, 传入必须为双向数据绑定类型
     * @property {number} width -宽度默认值500
     */
    export default {
        props: {
            show: {
                type: Boolean,
                default: false
            },
            width: {
                type: Number,
                default: 500
            }
        }
    }
</script>

<style lang="sass" scoped rel="stylesheet/sass">
    .layer {
        z-index: 999;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;  
        background-color: #000;
        opacity: 0.7;
    }
    .ui-dialog {
        background: #fff;
        position: fixed;
        z-index: 1000;
        opacity: 1;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -45%);
        -webkit-transform: translate(-50%, -45%);
        border-radius: 4px;
    }
    .fade-in {
        animation: fade .5s;
        -webkit-animation: fade .5s;
    }
    @keyframes fade {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
</style>

