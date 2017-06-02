<template>
    <div>
        <div class="wrapper wrapper-content animated fadeInRight">
            <button class="btn btn-info" type="button" @click="btnOk" style="margin-bottom:15px;"><i class="fa fa-paste"></i> 确认</button>
            <div class="row">
                <div class="col-sm-6">
                    <div class="ibox float-e-margins">
                        <div class="ibox-title">
                            <h5>线上</h5>
                        </div>
                        <div class="ibox-content">
                            <form class="form-horizontal">
                                <div class="form-group">
                                    <label class="col-sm-3 control-label">分配corpid:</label>
                                    <div class="col-sm-4">
                                        <label class="control-label">{{selectedRowO.corpid}}</label>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-3 control-label">crm-corpid:</label>
                                    <div class="col-sm-4">
                                        <label class="control-label">{{selectedRowO.crmcorpid}}</label>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-3 control-label">机构名称:</label>
                                    <div class="col-sm-4">
                                        <label class="control-label">{{selectedRowO.name}}</label>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-3 control-label">signKey:</label>
                                    <div class="col-sm-4">
                                        <label class="control-label">{{selectedRowO.signKey}}</label>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-3 control-label">签名地址:</label>
                                    <div class="col-sm-4">
                                        <label class="control-label">{{selectedRowO.signAddress}}</label>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-3 control-label">商户号:</label>
                                    <div class="col-sm-4">
                                        <label class="control-label">{{selectedRowO.shNumber}}</label>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-3 control-label">通知地址:</label>
                                    <div class="col-sm-4">
                                        <label class="control-label">www.111.com</label>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-3 control-label"></label>
                                    <div class="col-sm-4 address">
                                        <label class="control-label">www.222.com</label>
                                    </div>    
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="ibox float-e-margins">
                        <div class="ibox-title">
                            <h5>线下</h5>
                        </div>
                        <div class="ibox-content">
                            <form class="form-horizontal">
                                <div class="form-group has-error">
                                    <label class="col-sm-3 control-label">分配corpid:</label>
                                    <div class="col-sm-4">
                                        <label class="control-label">{{selectedRow.corpid}}</label>
                                    </div>
                                </div>
                                <div class="form-group has-error">
                                    <label class="col-sm-3 control-label">crm-corpid:</label>
                                    <div class="col-sm-4">
                                        <label class="control-label">{{selectedRow.crmcorpid}}</label>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-3 control-label">机构名称:</label>
                                    <div class="col-sm-4">
                                        <label class="control-label">{{selectedRow.name}}</label>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-3 control-label">signKey:</label>
                                    <div class="col-sm-4">
                                        <label class="control-label">{{selectedRow.signKey}}</label>
                                    </div>
                                </div>
                                <div class="form-group has-error">
                                    <label class="col-sm-3 control-label">签名地址:</label>
                                    <div class="col-sm-4">
                                        <label class="control-label">{{selectedRow.signAddress}}</label>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-3 control-label">商户号:</label>
                                    <div class="col-sm-4">
                                        <label class="control-label">{{selectedRow.shNumber}}</label>
                                    </div>
                                </div>
                                <div class="form-group has-error">
                                    <label class="col-sm-3 control-label">通知地址:</label>
                                    <div class="col-sm-4">
                                        <label class="control-label">www.333.com</label>
                                    </div>
                                </div>
                                <div class="form-group has-error">
                                    <label class="col-sm-3 control-label"></label>
                                    <div class="col-sm-4 address">
                                        <label class="control-label">www.444.com</label>
                                    </div>
                                </div>
                                <div class="form-group has-error">
                                    <label class="col-sm-3 control-label"></label>
                                    <div class="col-sm-4 address">
                                        <label class="control-label">www.555.com</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ui-dialog
            :show='markDialog === 1'>
            <div slot="content" v-if="markDialog === 1">
                <div class="modal-body">
                    <p>确认审核通过？</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" @click="closeDialog()">确定</button>
                    <button type="button" class="btn btn-white" @click="closeDialog()">取消</button>
                </div>
            </div>
        </ui-dialog>
    </div>
</template>
<script type="text/ecmascript-6">
    import compare from './compare.js';
    export default compare;
</script>
<style lang="sass" scoped rel="stylesheet/sass">
</style>
