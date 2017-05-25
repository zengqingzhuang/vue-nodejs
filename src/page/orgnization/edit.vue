<template>
    <div>
        <div class="wrapper wrapper-content animated fadeInRight">
            <form class="form-horizontal">
                <div class="form-group">
                    <label class="col-sm-3 control-label">分配corpid:</label>
                    <div class="col-sm-3">
                        <input v-model="selectedRow.corpid" name="name" minlength="2" type="text" class="form-control" required="" aria-required="true">
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-3 control-label">crm-corpid:</label>
                    <div class="col-sm-3">
                        <input v-model="selectedRow.crmcorpid" name="name" minlength="2" type="text" class="form-control" required="" aria-required="true">
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
                        <input type="radio" value="option1" id="optionsRadios1" name="optionsRadios">开启</label>
                    <label>
                        <input type="radio" checked="" value="option2" id="optionsRadios2" name="optionsRadios">停用</label>
                </div>
                <div class="form-group">
                    <label class="col-sm-3 control-label">通知地址:</label>
                    <div class="col-sm-3">
                        <input value="www.baidu.com" id="curl" type="url" class="form-control" name="url">
                    </div>
                </div>
                <div class="form-group" v-for="item in addressList">
                    <label class="col-sm-3 control-label"></label>
                    <div class="col-sm-3 address">
                        <input v-model="item.address" id="curl" type="url" class="form-control" name="url">
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
