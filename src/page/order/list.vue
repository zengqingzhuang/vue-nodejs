<template>
    <div class="common_table clear">
        <table cellpadding="0" cellspacing="0">
            <tr>
                <th class="w70">序号</th>
                <th class="w120">机构名称</th>
                <th class="w130">创建时间</th>
                <th class="w130">金额</th>
                <th class="w70">操作</th>
            </tr>
            <tr v-for='item in orgList'>
                <td class="of_text">{{ item.number }}</td>
                <td class="of_text">{{item.name}}</td>
                <td class="of_text">{{item.createTime}}</td>
                <td class="of_text">{{item.money}}</td>
                <td class="of_text"><a class="operation" href="javascript:void(0)">编辑</a><a class="operation" href="javascript:void(0)">删除</a></td>
            </tr>
        </table>
    </div>
</template>
<script type="text/ecmascript-6">
    import list from './list.js';
    export default list;
</script>
<style lang="sass" scoped rel="stylesheet/sass">
    @import 'list.scss';
</style>
