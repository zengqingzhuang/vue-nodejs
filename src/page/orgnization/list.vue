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
        <ui-dialog
            :show='markDialog === 1 || markDialog === 2'>
            <div slot="content" v-if="markDialog === 1">
                <div class="ibox-content">
                    <form class="form-horizontal m-t" id="commentForm">
                        <div class="form-group">
                            <label class="col-sm-3 control-label">corpid:</label>
                            <div class="col-sm-8">
                                <input v-model="selectedRow.corpid" name="name" minlength="2" type="text" class="form-control" required="" aria-required="true">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">机构名称:</label>
                            <div class="col-sm-8">
                                <input v-model="selectedRow.name" id="cemail" type="email" class="form-control" name="email" required="" aria-required="true">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">signKey:</label>
                            <div class="col-sm-8">
                                <input v-model="selectedRow.signKey" id="curl" type="url" class="form-control" name="url">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">签名地址:</label>
                            <div class="col-sm-8">
                                <textarea v-model="selectedRow.signAddress" id="ccomment" name="comment" class="form-control" required="" aria-required="true"></textarea>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">商户号:</label>
                            <div class="col-sm-8">
                                <textarea v-model="selectedRow.shNumber" id="ccomment" name="comment" class="form-control" required="" aria-required="true"></textarea>
                            </div>
                        </div>
                        <div class="radio">
                            <label class="col-sm-3 control-label">状态:</label>
                            <label>
                                <input type="radio" checked="" value="option1" id="optionsRadios1" name="optionsRadios">开启</label>
                            <label>
                                <input type="radio" value="option2" id="optionsRadios2" name="optionsRadios">停用</label>
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
                    <button type="button" class="btn btn-white" @click="closeDialog">取消</button>
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
