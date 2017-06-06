<template>
    <div>
        <div class="wrapper wrapper-content animated fadeInRight">
            <form class="form-horizontal">
                <div class="form-group">
                    <label class="col-sm-3 control-label">机构:</label>
                    <div class="col-sm-3">
                        <select class="form-control m-b" name="account">
                            <option>掌门</option>
                            <option>北风</option>
                            <option>华东</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-3 control-label">课程:</label>
                    <div class="col-sm-3">
                        <select class="form-control m-b" name="account">
                            <option>语文</option>
                            <option>数学</option>
                            <option>英语</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-3 control-label">订单ID:</label>
                    <div class="col-sm-3">
                        <input id="cemail" type="email" value="20170101124" placeholder="请输入订单号" class="form-control" name="email" required="" aria-required="true">
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-3 control-label">贷款金额:</label>
                    <div class="col-sm-3">
                        <input id="cemail" type="email" value="10000" placeholder="请输入贷款金额" class="form-control" name="email" required="" aria-required="true">
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-3 control-label">成交价格:</label>
                    <div class="col-sm-3">
                        <input id="cemail" type="email" value="9000" placeholder="请输入成交价格" class="form-control" name="email" required="" aria-required="true">
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-3 control-label">分期期数:</label>
                    <div class="col-sm-3">
                        <input id="cemail" type="email" value="0" placeholder="请输入分期期数" class="form-control" name="email" required="" aria-required="true">
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-3 control-label">用户编号:</label>
                    <div class="col-sm-3">
                        <input id="cemail" type="email" value="1" placeholder="请输入用户编号" class="form-control" name="email" required="" aria-required="true">
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-3 control-label">返回地址类型:</label>
                    <div class="col-sm-3">
                        <select class="form-control" name="" id="">
                            <option value="0">PC扫码页</option>
                            <option value="1">手机订单确认页</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-3 control-label">用户名:</label>
                    <div class="col-sm-3">
                        <input id="cemail" type="email" value="zhangsan" placeholder="请输入用户名" class="form-control" name="email" required="" aria-required="true">
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-3 control-label">邮箱:</label>
                    <div class="col-sm-3">
                        <input id="cemail" type="email" value="zhangsan@baidu.com" placeholder="请输入邮箱" class="form-control" name="email" required="" aria-required="true">
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-3 control-label">手机号:</label>
                    <div class="col-sm-3">
                        <input id="cemail" type="email" value="13888888888" placeholder="请输入手机号" class="form-control" name="email" required="" aria-required="true">
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-3 control-label"></label>
                    <div class="col-sm-3">
                        <button type="button" class="btn btn-primary" @click="btnSave">同步订单</button>
                    </div>
                </div>
            </form>
        </div>
        <ui-dialog
            :show='markDialog === 1'>
            <div slot="content">
                <div class="modal-body">
                    <p>同步订单成功！</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-white" @click="closeDialog">取消</button>
                    <button type="button" class="btn btn-primary" @click="redirect()">进入扫码页</button>
                </div>
            </div>
        </ui-dialog>
    </div>
</template>
<script type="text/ecmascript-6">
    import order from './order.js';
    export default order;
</script>
<style lang="sass" scoped rel="stylesheet/sass">
</style>
