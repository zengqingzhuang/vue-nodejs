<template>
    <div>
        <ui-table
            title='通知地址管理 / 列表'
            :list='addressList'
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
                            <label class="col-sm-3 control-label">corpid:</label>
                            <div class="col-sm-8">
                                <input v-model="selectedRow.corpid" name="name" minlength="2" type="text" class="form-control" required="" aria-required="true">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">通知地址:</label>
                            <div class="col-sm-8">
                                <input v-model="selectedRow.address" id="cemail" type="email" class="form-control" name="email" required="" aria-required="true">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">参数分类:</label>
                            <div class="col-sm-8">
                                <select class="form-control m-b" name="account">
                                    <option>A分类</option>
                                    <option>B分类</option>
                                    <option>C分类</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">推送参数:</label>
                            <div class="col-sm-8">
                                <label class="col-sm-3 control-label">state,money</label>
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
