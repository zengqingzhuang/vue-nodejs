<template>
    <div class="wrapper wrapper-content animated fadeInRight row">
        <div class="wrapper">
            <select class="form-control m-b select-role" name="account">
                <option>RD</option>
                <option>QA</option>
                <option>PM</option>
                <option>OP</option>
            </select>
            <button type="button" class="btn btn-primary" @click="btnSave">保存</button>
        </div>
        <div class="col-sm-4">
            <div class="ibox float-e-margins">
                <div class="ibox-title">
                    <h5>菜单权限</h5>
                </div>
                <div class="ibox-content">
                    <label class="checkbox-inline">
                        <input type="checkbox" checked="checked" value="option1" id="inlineCheckbox1">机构管理</label>
                    <label class="checkbox-inline">
                        <input type="checkbox" checked="checked" value="option3" id="inlineCheckbox3">推送参数管理</label>
                    <label class="checkbox-inline">
                        <input type="checkbox" value="option3" id="inlineCheckbox3">同步订单</label>
                    <label class="checkbox-inline">
                        <input type="checkbox" checked="checked" value="option3" id="inlineCheckbox3">用户信息查询</label>
                    <label class="checkbox-inline">
                        <input type="checkbox" value="option3" id="inlineCheckbox3">权限管理</label>
                </div>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="ibox float-e-margins">
                <div class="ibox-title">
                    <h5>页面权限</h5>
                </div>
                <div class="ibox-content">
                    <h3>机构管理</h3>
                    <label class="checkbox-inline">
                        <input type="checkbox" checked="checked" value="option1" id="inlineCheckbox1">列表</label>
                    <h3>推送参数管理</h3>
                    <label class="checkbox-inline">
                        <input type="checkbox" checked="checked" value="option1" id="inlineCheckbox1">列表</label>
                    <label class="checkbox-inline">
                        <input type="checkbox" checked="checked" value="option1" id="inlineCheckbox1">新增</label>
                    <label class="checkbox-inline">
                        <input type="checkbox" checked="checked" value="option1" id="inlineCheckbox1">编辑</label>
                    <h3>同步订单</h3>
                    <label class="checkbox-inline">
                        <input type="checkbox" value="option1" id="inlineCheckbox1">同步订单</label>
                    <h3>用户信息查询</h3>
                    <label class="checkbox-inline">
                        <input type="checkbox" checked="checked" value="option1" id="inlineCheckbox1">列表</label>
                    <h3>权限管理</h3>
                    <label class="checkbox-inline">
                        <input type="checkbox" value="option1" id="inlineCheckbox1">用户列表</label>
                    <label class="checkbox-inline">
                        <input type="checkbox" value="option1" id="inlineCheckbox1">角色列表</label>
                    <label class="checkbox-inline">
                        <input type="checkbox" value="option1" id="inlineCheckbox1">权限分配</label>
                </div>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="ibox float-e-margins">
                <div class="ibox-title">
                    <h5>功能权限</h5>
                </div>
                <div class="ibox-content">
                    <h3>机构管理页面</h3>
                    <label class="checkbox-inline">
                        <input type="checkbox" checked="checked" value="option1" id="inlineCheckbox1">查询</label>
                    <label class="checkbox-inline">
                        <input type="checkbox" checked="checked" value="option1" id="inlineCheckbox1">新增</label>
                    <label class="checkbox-inline">
                        <input type="checkbox" checked="checked" value="option1" id="inlineCheckbox1">编辑</label>
                    <label class="checkbox-inline">
                        <input type="checkbox" checked="checked" value="option1" id="inlineCheckbox1">删除</label>
                    <h3>推送参数管理页面</h3>
                    <label class="checkbox-inline">
                        <input type="checkbox" checked="checked" value="option1" id="inlineCheckbox1">查询</label>
                    <label class="checkbox-inline">
                        <input type="checkbox" checked="checked" value="option1" id="inlineCheckbox1">新增</label>
                    <label class="checkbox-inline">
                        <input type="checkbox" checked="checked" value="option1" id="inlineCheckbox1">编辑</label>
                    <label class="checkbox-inline">
                        <input type="checkbox" checked="checked" value="option1" id="inlineCheckbox1">删除</label>
                    <h3>同步订单页面</h3>
                    <label class="checkbox-inline">
                        <input type="checkbox" value="option1" id="inlineCheckbox1">同步订单</label>
                    <h3>用户信息查询页面</h3>
                    <label class="checkbox-inline">
                        <input type="checkbox" checked="checked" value="option1" id="inlineCheckbox1">查询</label>
                    <h3>权限管理</h3>
                    <h5>用户列表页面</h5>
                    <label class="checkbox-inline">
                        <input type="checkbox" value="option1" id="inlineCheckbox1">查询</label>
                    <label class="checkbox-inline">
                        <input type="checkbox" value="option1" id="inlineCheckbox1">新增</label>
                    <label class="checkbox-inline">
                        <input type="checkbox" value="option1" id="inlineCheckbox1">编辑</label>
                    <label class="checkbox-inline">
                        <input type="checkbox" value="option1" id="inlineCheckbox1">删除</label>
                    <h5>角色列表页面</h5>
                    <label class="checkbox-inline">
                        <input type="checkbox" value="option1" id="inlineCheckbox1">查询</label>
                    <label class="checkbox-inline">
                        <input type="checkbox" value="option1" id="inlineCheckbox1">新增</label>
                    <label class="checkbox-inline">
                        <input type="checkbox" value="option1" id="inlineCheckbox1">编辑</label>
                    <label class="checkbox-inline">
                        <input type="checkbox" value="option1" id="inlineCheckbox1">删除</label>
                    <h5>权限分配页面</h5>
                    <label class="checkbox-inline">
                        <input type="checkbox" value="option1" id="inlineCheckbox1">分配</label>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import list from './list.js';
    export default list;
</script>
<style lang="sass" scoped rel="stylesheet/sass">
    .ibox-content {
        min-height: 200px;
    }
    .select-role {
        display: inline-block;
        width: 300px;
    }
</style>
