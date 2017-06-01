<template>
    <div>
        <ui-table
            title='机构管理 / 列表'
            :list='orgList'
            :columns='columns'
            :pageSize='pageSize'
            :pageNumber='pageNumber'
            :pageTotal='pageTotal'
            @queryList='queryList'
            @onSelectRow='onSelectRow'>
            <div slot='content'>
                <button class="btn btn-info" type="button" @click="updateRow"><i class="fa fa-paste"></i> 编辑</button>
                <button class="btn btn-danger" type="button" @click="deleteRow"><i class="fa fa-times"></i> 删除</button>
                <button class="btn btn-info" type="button" @click="openRow"><i class="fa fa-check"></i> 开启</button>
                <button class="btn btn-danger" type="button" @click="stopRow"><i class="fa fa-warning"></i> 停用</button>
            </div>
        </ui-table>
        <ui-dialog
            :show='markDialog === 2 || markDialog === 3 || markDialog === 4'>
            <div slot="content" v-if="markDialog === 2">
                <div class="modal-body">
                    <p>确认删除？</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" @click="closeDialog">确定</button>
                    <button type="button" class="btn btn-white" @click="closeDialog">取消</button>
                </div>
            </div>
            <div slot="content" v-if="markDialog === 3">
                <div class="modal-body">
                    <p>确认开启？</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" @click="closeDialog">确定</button>
                    <button type="button" class="btn btn-white" @click="closeDialog">取消</button>
                </div>
            </div>
            <div slot="content" v-if="markDialog === 4">
                <div class="modal-body">
                    <p>确认停用？</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" @click="closeDialog">确定</button>
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
