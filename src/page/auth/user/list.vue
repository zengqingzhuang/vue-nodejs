<template>
    <div>
        <ui-table
            title='权限管理 / 用户列表'
            :list='userList'
            :columns='columns'
            :pageSize='pageSize'
            :pageNumber='pageNumber'
            :pageTotal='pageTotal'
            @queryList='queryList'
            @onSelectRow='onSelectRow'>
            <div slot='content'>
                <button class="btn btn-primary" type="button" @click="addRow"><i class="fa fa-plus"></i> 新增</button>
                <button class="btn btn-info" type="button" @click="updateRow"><i class="fa fa-paste"></i> 编辑</button>
                <button class="btn btn-danger" type="button" @click="deleteRow"><i class="fa fa-times"></i> 删除</button>
            </div>
        </ui-table>
        <ui-dialog
            :show='markDialog === 1 || markDialog === 2'>
            <div slot="content" v-if="markDialog === 1">
                <div class="ibox-content">
                    <form class="form-horizontal m-t" id="commentForm">
                        <div class="form-group">
                            <label class="col-sm-3 control-label">账号名称:</label>
                            <div class="col-sm-8">
                                <input v-model="selectRow.accountName" name="name" minlength="2" type="text" class="form-control" required="" aria-required="true">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">姓名:</label>
                            <div class="col-sm-8">
                                <input v-model="selectRow.Name" id="cemail" type="email" class="form-control" name="email" required="" aria-required="true">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">手机号:</label>
                            <div class="col-sm-8">
                                <input v-model="selectRow.Mobile" id="curl" type="url" class="form-control" name="url">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">邮箱:</label>
                            <div class="col-sm-8">
                               <input v-model="selectRow.Email" id="curl" type="url" class="form-control" name="url">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">角色:</label>
                            <div class="col-sm-8">
                                <label class="checkbox-inline">
                                    <input type="checkbox" checked="checked" value="option1" id="inlineCheckbox1">RD</label>
                                <label class="checkbox-inline">
                                    <input type="checkbox" value="option1" id="inlineCheckbox1">QA</label>
                                <label class="checkbox-inline">
                                    <input type="checkbox" value="option1" id="inlineCheckbox1">EDU-PM</label>
                                <label class="checkbox-inline">
                                    <input type="checkbox" value="option1" id="inlineCheckbox1">ZF-PM</label>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-white" @click="closeDialog">取消</button>
                    <button type="button" class="btn btn-primary" @click="btnSave">保存</button>
                </div>
            </div>
            <div slot="content" v-if="markDialog === 2">
                <div class="modal-body">
                    <p>确认删除?</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" @click="deleteCurRow">确定</button>
                    <button type="button" class="btn btn-white" @click="closeDialog">取消</button>
                </div>
            </div>
        </ui-dialog>
    </div>
</template>
<script type="text/ecmascript-6">
    import list from './list.js';
    export default list;
</script>
<style lang="scss" scoped type="text/scss">
</style>
