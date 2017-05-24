<template>
    <div>
        <ui-table
            title='权限管理 / 用户列表'
            :list='userList'
            :columns='columns'
            :pageSize='pageSize'
            :pageNumber='pageNumber'
            :pageTotal='pageTotal'
            @updateRow='updateRow'
            @addRow='addRow'
            @deleteRow='deleteRow'
            @queryList='queryList'>
        </ui-table>
        <ui-dialog
            :show='markDialog === 1 || markDialog === 2'>
            <div slot="content" v-if="markDialog === 1">
                <div class="ibox-content">
                    <form class="form-horizontal m-t" id="commentForm">
                        <div class="form-group">
                            <label class="col-sm-3 control-label">账号名称:</label>
                            <div class="col-sm-8">
                                <input v-model="selectedRow.accountName" name="name" minlength="2" type="text" class="form-control" required="" aria-required="true">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">姓名:</label>
                            <div class="col-sm-8">
                                <input v-model="selectedRow.Name" id="cemail" type="email" class="form-control" name="email" required="" aria-required="true">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">手机号:</label>
                            <div class="col-sm-8">
                                <input v-model="selectedRow.Mobile" id="curl" type="url" class="form-control" name="url">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">邮箱:</label>
                            <div class="col-sm-8">
                               <input v-model="selectedRow.Email" id="curl" type="url" class="form-control" name="url">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">角色:</label>
                            <div class="col-sm-8">
                                <select class="form-control m-b" name="account">
                                    <option>RD</option>
                                    <option>QA</option>
                                    <option>PM</option>
                                    <option>OP</option>
                                </select>
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
                </div>
            </div>
        </ui-dialog>
    </div>
</template>
<script type="text/ecmascript-6">
    import list from './list.js';
    export default list;
</script>
<style lang="sass" scoped rel="stylesheet/sass">
</style>
