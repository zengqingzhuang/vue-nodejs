<template>
    <div>
        <div class="content animated fadeInRight">
            <form role="form" class="form-inline">
                <div class="form-group">
                    <select class="form-control" name="account">
                        <option>请选择机构</option>
                        <option value="">vipabc</option>
                        <option>掌门</option>
                        <option>北风</option>
                        <option>华东</option>
                    </select>
                </div>
                <div class="form-group">
                    <input type="text" placeholder="请输入订单ID" id="exampleInputPassword2" class="form-control">
                </div>
                <button class="btn btn-primary" type="button" @click="queryList"><i class="fa fa-search"></i> 查询</button>
            </form>
        </div>
        <ui-table
            title='用户信息 / 列表'
            :list='userList'
            :columns='columns'
            :pageSize='pageSize'
            :pageNumber='pageNumber'
            :pageTotal='pageTotal'
            :showAdd="false"
            :showUpdate="false"
            :showDelete="false">
        </ui-table>
    </div>
</template>
<script type="text/ecmascript-6">
    import list from './list.js';
    export default list;
</script>
<style lang="scss" scoped type="text/scss">
    .content {
        margin: 20px 0 0 20px;
    }
</style>
