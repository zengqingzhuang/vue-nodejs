<template>
    <div>
        <ui-table
            title='推送参数管理 / 列表'
            :list='paramsList'
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
            :show='markDialog === 1'>
            <div slot="content" v-if="markDialog === 1">
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
