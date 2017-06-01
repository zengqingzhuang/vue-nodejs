<template>
    <div>
        <div class="wrapper wrapper-content animated fadeInRight">
            <form class="form-horizontal">
                <div class="form-group">
                    <label class="col-sm-3 control-label">分配corpid:</label>
                    <div class="col-sm-3">
                        <input v-model="selectedRow.corpid" placeholder="请输入分配给机构的corpid" name="name" minlength="2" type="text" class="form-control" required="" aria-required="true">
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-3 control-label">crm-corpid:</label>
                    <div class="col-sm-3">
                        <input v-model="selectedRow.crmcorpid" placeholder="请输入CRM系统的corpid" name="name" minlength="2" type="text" class="form-control" required="" aria-required="true">
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-3 control-label">机构名称:</label>
                    <div class="col-sm-3">
                        <input v-model="selectedRow.name" placeholder="请输入机构名称" id="cemail" type="email" class="form-control" name="email" required="" aria-required="true">
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-3 control-label">signKey:</label>
                    <div class="col-sm-3">
                        <input value="zhangmen" disabled="disabled" id="curl" type="url" class="form-control" name="url">
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-3 control-label">签名地址:</label>
                    <div class="col-sm-3">
                        <input v-model="selectedRow.signAddress" placeholder="请输入获取首付签名的地址" id="curl" type="url" class="form-control" name="url">
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-3 control-label">商户号:</label>
                    <div class="col-sm-3">
                        <input v-model="selectedRow.shNumber" id="curl" placeholder="请输入获取首付签名的商户号" type="url" class="form-control" name="url">
                    </div>
                </div>
                <!-- <div class="form-group radio">
                    <label class="col-sm-3 control-label">状态:</label>
                    <label>
                        <input type="radio" value="option1" id="optionsRadios1" name="optionsRadios">开启</label>
                    <label>
                        <input type="radio" checked="" value="option2" id="optionsRadios2" name="optionsRadios">停用</label>
                </div> -->
                <div class="form-group">
                    <label class="col-sm-3 control-label">通知地址:</label>
                    <div class="col-sm-3">
                        <input  id="curl" type="url" placeholder="请输入机构通知地址" class="form-control" name="url">
                    </div>
                </div>
                <div class="form-group" v-for="item in addressList">
                    <label class="col-sm-3 control-label"></label>
                    <div class="col-sm-3 address">
                        <input v-model="item.address" id="curl" placeholder="请输入机构通知地址" type="url" class="form-control" name="url">
                    </div>    
                </div>
                <div class="form-group">
                    <label class="col-sm-3 control-label"></label>
                    <div class="col-sm-8">
                        <button type="button" @click='addSendAddress' class="btn btn-default btn-sm rounded"><i class="fa fa-plus"></i></button>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-3 control-label">推送参数:</label>
                    <div class="col-sm-2">
                        <input  id="curl" type="url" class="form-control" name="url" placeholder="多个参数以逗号分隔">
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-3 control-label"></label>
                    <div class="col-sm-8">
                        <button type="button" class="btn btn-primary" @click="btnSave">保存</button>
                    </div>
                </div>
            </form>
        </div>
        <ui-dialog
            :show='markDialog === 1'>
            <div slot="content">
                <div class="modal-body">
                    <p>保存成功！</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" @click="closeDialog()">确定</button>
                </div>
            </div>
        </ui-dialog>
    </div>
</template>
<script type="text/ecmascript-6">
    import add from './add.js';
    export default add;
</script>
<style lang="sass" scoped rel="stylesheet/sass">
    .address {
        margin-top: 10px;
    }
</style>
