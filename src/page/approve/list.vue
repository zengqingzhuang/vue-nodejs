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
                <button class="btn btn-info" type="button" @click="approve"><i class="fa fa-paste"></i> 审批</button>
                <button class="btn btn-danger" type="button" @click="refuse"><i class="fa fa-times"></i> 拒绝</button>
                <!-- <select name="" id="" class="pull-right search">
                    <option value="">审核中</option>
                    <option value="">审核通过</option>
                    <option value="">拒绝</option>
                </select> -->
            </div>
        </ui-table>

        <ui-dialog
            :show='markDialog === 1'>
            <div slot="content" v-if="markDialog === 1">
                <div class="modal-body">
                    <p>确认拒绝？</p>
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
    import list from './list.js';
    export default list;
</script>
<style lang="sass" scoped rel="stylesheet/sass">
</style>
