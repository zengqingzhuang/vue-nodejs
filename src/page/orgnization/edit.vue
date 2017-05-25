<template>
    <div>
        <div class="wrapper wrapper-content animated fadeInRight">
            <form class="form-horizontal">
                <div class="form-group">
                    <label class="col-sm-3 control-label">corpid:</label>
                    <div class="col-sm-3">
                        <input v-model="selectedRow.corpid" name="name" minlength="2" type="text" class="form-control" required="" aria-required="true">
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-3 control-label">机构名称:</label>
                    <div class="col-sm-3">
                        <input v-model="selectedRow.name" id="cemail" type="email" class="form-control" name="email" required="" aria-required="true">
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-3 control-label">signKey:</label>
                    <div class="col-sm-3">
                        <input v-model="selectedRow.signKey" id="curl" type="url" class="form-control" name="url">
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-3 control-label">签名地址:</label>
                    <div class="col-sm-3">
                        <input v-model="selectedRow.signAddress" id="curl" type="url" class="form-control" name="url">
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-3 control-label">商户号:</label>
                    <div class="col-sm-3">
                        <input v-model="selectedRow.shNumber" id="curl" type="url" class="form-control" name="url">
                    </div>
                </div>
                <div class="form-group radio">
                    <label class="col-sm-3 control-label">状态:</label>
                    <label>
                        <input type="radio" checked="" value="option1" id="optionsRadios1" name="optionsRadios">开启</label>
                    <label>
                        <input type="radio" value="option2" id="optionsRadios2" name="optionsRadios">停用</label>
                </div>
                <div class="form-group">
                    <label class="col-sm-3 control-label">通知地址:</label>
                    <div class="col-sm-7 address">
                        <div class="row" v-for="item in addressList">
                            <div class="col-md-5">
                                <input v-model="item.address" id="curl" type="url" class="form-control" name="url">
                            </div>
                            <div class="col-md-2">
                                <select class="form-control col-md-3" name="account">
                                    <option>A分类</option>
                                    <option>B分类</option>
                                    <option>C分类</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-3 control-label"></label>
                    <div class="col-sm-8">
                        <button type="button" @click='addSendAddress' class="btn btn-default btn-sm rounded"><i class="fa fa-plus"></i></button>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-3 control-label"></label>
                    <button type="button" class="btn btn-primary" @click="btnSave">保存</button>
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
    import edit from './edit.js';
    export default edit;
</script>
<style lang="sass" scoped rel="stylesheet/sass">
    .address .row {
        margin-top: 10px;
    }
    .param-c {
        width: 100px;
    }
</style>
