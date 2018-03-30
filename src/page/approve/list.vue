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
                <div class="pull-right">
                    <div class="pull-left search columns columns-right"><input class="form-control input-outline" type="text" placeholder="请输入要查询的信息"></div>
                    <div class="pull-left">
                        <select class="form-control" name="state">
                            <option value="0">全部</option>
                            <option>审批中</option>
                            <option>审批通过</option>
                            <option>拒绝</option>
                        </select>    
                    </div>
                    <button class="btn btn-default btn-outline" type="button"><i class="fa fa-check"></i> 查询</button>
                </div>
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
<style lang="scss" scoped type="text/scss">
    .pull-left {
        margin-right: 5px;
    }
</style>
