<template>
    <div>
        <div class="wrapper wrapper-content animated fadeInRight">
            <button class="btn btn-info" type="button" @click="btnOk" style="margin-bottom:15px;"><i class="fa fa-paste"></i> 确认</button>
            <div class="row">
                <div class="col-sm-6">
                    <div class="ibox float-e-margins">
                        <div class="ibox-title">
                            <h5>线下</h5>
                        </div>
                        <div class="ibox-content">
                            <form class="form-horizontal">
                                <div class="form-group">
                                    <label class="col-sm-3 control-label">分配corpid:</label>
                                    <div class="col-sm-4">
                                        <input v-model="selectedRow.corpid" placeholder="请输入分配给机构的corpid" name="name" minlength="2" type="text" class="form-control" required="" aria-required="true">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-3 control-label">crm-corpid:</label>
                                    <div class="col-sm-4">
                                        <input v-model="selectedRow.crmcorpid" placeholder="请输入CRM系统的corpid" name="name" minlength="2" type="text" class="form-control" required="" aria-required="true">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-3 control-label">机构名称:</label>
                                    <div class="col-sm-4">
                                        <input v-model="selectedRow.name" placeholder="请输入机构名称" id="cemail" type="email" class="form-control" name="email" required="" aria-required="true">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-3 control-label">signKey:</label>
                                    <div class="col-sm-4">
                                        <input value="zhangmen" disabled="disabled" id="curl" type="url" class="form-control" name="url">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-3 control-label">签名地址:</label>
                                    <div class="col-sm-4">
                                        <input v-model="selectedRow.signAddress" value="www.qianming.com" placeholder="请输入获取首付签名的地址" id="curl" type="url" class="form-control" name="url">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-3 control-label">商户号:</label>
                                    <div class="col-sm-4">
                                        <input v-model="selectedRow.shNumber" id="curl" value="1" placeholder="请输入获取首付签名的商户号" type="url" class="form-control" name="url">
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
                                    <div class="col-sm-4">
                                        <input  id="curl" type="url" placeholder="请输入机构通知地址" value="www.222.com" class="form-control" name="url">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-3 control-label"></label>
                                    <div class="col-sm-4 address">
                                        <input id="curl" placeholder="请输入机构通知地址" value="www.baidu.com" type="url" class="form-control" name="url">
                                    </div>    
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-3 control-label"></label>
                                    <div class="col-sm-4 address">
                                        <input id="curl" placeholder="请输入机构通知地址" value="www.111.com" type="url" class="form-control" name="url">
                                    </div>    
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-3 control-label">推送参数:</label>
                                    <div class="col-sm-4">
                                        <input  id="curl" value="state,money" type="url" class="form-control" name="url" placeholder="多个参数以逗号分隔">
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
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
                                        <input v-model="selectedRowO.corpid" placeholder="请输入分配给机构的corpid" name="name" minlength="2" type="text" class="form-control" required="" aria-required="true">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-3 control-label">crm-corpid:</label>
                                    <div class="col-sm-4">
                                        <input v-model="selectedRowO.crmcorpid" placeholder="请输入CRM系统的corpid" name="name" minlength="2" type="text" class="form-control" required="" aria-required="true">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-3 control-label">机构名称:</label>
                                    <div class="col-sm-4">
                                        <input v-model="selectedRowO.name" placeholder="请输入机构名称" id="cemail" type="email" class="form-control" name="email" required="" aria-required="true">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-3 control-label">signKey:</label>
                                    <div class="col-sm-4">
                                        <input value="zhangmen" disabled="disabled" id="curl" type="url" class="form-control" name="url">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-3 control-label">签名地址:</label>
                                    <div class="col-sm-4">
                                        <input v-model="selectedRowO.signAddress" value="www.qianming.com" placeholder="请输入获取首付签名的地址" id="curl" type="url" class="form-control" name="url">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-3 control-label">商户号:</label>
                                    <div class="col-sm-4">
                                        <input v-model="selectedRowO.shNumber" id="curl" value="1" placeholder="请输入获取首付签名的商户号" type="url" class="form-control" name="url">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-3 control-label">通知地址:</label>
                                    <div class="col-sm-4">
                                        <input  id="curl" type="url" placeholder="请输入机构通知地址" value="www.222.com" class="form-control" name="url">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-3 control-label"></label>
                                    <div class="col-sm-4 address">
                                        <input id="curl" placeholder="请输入机构通知地址" value="www.333.com" type="url" class="form-control" name="url">
                                    </div>    
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-3 control-label">推送参数:</label>
                                    <div class="col-sm-4">
                                        <input  id="curl" value="state,money" type="url" class="form-control" name="url" placeholder="多个参数以逗号分隔">
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
