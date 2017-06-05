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
                    <label class="col-sm-3 control-label">orderid:</label>
                    <div class="col-sm-3">
                        <input id="cemail" type="email" value="" placeholder="请输入订单号" class="form-control" name="email" required="" aria-required="true">
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-3 control-label">money:</label>
                    <div class="col-sm-3">
                        <input id="cemail" type="email" value="" placeholder="请输入贷款金额" class="form-control" name="email" required="" aria-required="true">
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-3 control-label">dealmoney:</label>
                    <div class="col-sm-3">
                        <input id="cemail" type="email" value="" placeholder="请输入成交价格" class="form-control" name="email" required="" aria-required="true">
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-3 control-label">period:</label>
                    <div class="col-sm-3">
                        <input id="cemail" type="email" value="" placeholder="请输入分期期数" class="form-control" name="email" required="" aria-required="true">
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-3 control-label">oauthid:</label>
                    <div class="col-sm-3">
                        <input id="cemail" type="email" value="" placeholder="请输入用户编号" class="form-control" name="email" required="" aria-required="true">
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
