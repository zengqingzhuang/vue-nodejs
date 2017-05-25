<template>
    <div>
        <ui-table
            title='机构管理 / 列表'
            :list='orgList'
            :columns='columns'
            :pageSize='pageSize'
            :pageNumber='pageNumber'
            :pageTotal='pageTotal'
            :showAdd="false"
            @updateRow='updateRow'
            @addRow='addRow'
            @deleteRow='deleteRow'
            @queryList='queryList'>
        </ui-table>
    </div>
</template>
<script type="text/ecmascript-6">
    import list from './list.js';
    export default list;
</script>
<style lang="sass" scoped rel="stylesheet/sass">
</style>
