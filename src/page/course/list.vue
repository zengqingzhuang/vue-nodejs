<template>
    <div>
        <div class="content animated fadeInRight">
            <form role="form" class="form-inline">
                <div class="form-group">
                    <input type="text" placeholder="请输入机构ID" id="exampleInputEmail2" class="form-control">
                </div>
                <div class="form-group">
                    <input type="text" placeholder="请输入商户编码" id="exampleInputPassword2" class="form-control">
                </div>
                <div class="form-group">
                    <input type="text" placeholder="请输入门店ID" id="exampleInputPassword2" class="form-control">
                </div>
                <button class="btn btn-primary" type="button" @click="queryList"><i class="fa fa-search"></i> 查询</button>
            </form>
        </div>
        <ui-table
            title='课程信息 / 列表'
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
<style lang="sass" scoped rel="stylesheet/sass">
    .content {
        margin: 20px 0 0 20px;
    }
</style>
