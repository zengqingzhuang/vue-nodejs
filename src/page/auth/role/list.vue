<template>
    <div>
        <ui-table
            title='权限管理 / 角色列表'
            :list='roleList'
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
                            <label class="col-sm-3 control-label">角色编码:</label>
                            <div class="col-sm-8">
                                <input v-model="selectedRow.Code" id="cemail" type="email" class="form-control" name="email" required="" aria-required="true">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">角色名称:</label>
                            <div class="col-sm-8">
                                <input v-model="selectedRow.Name" id="curl" type="url" class="form-control" name="url">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">场景:</label>
                            <div class="col-sm-8">
                                <select class="form-control m-b" name="account">
                                    <option>教育</option>
                                    <option>租房</option>
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
<style lang="sass" scoped rel="stylesheet/sass">
</style>
