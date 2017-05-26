<template>
    <div class="wrapper wrapper-content animated fadeInRight">
        <form class="form-horizontal m-t" id="commentForm">
            <div class="form-group">
                <label class="col-sm-3 control-label">分类名称:</label>
                <div class="col-sm-3">
                    <input name="name" minlength="2" type="text" value="A分类" class="form-control" required="" aria-required="true">
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-3 control-label">推送参数:</label>
                <div class="col-sm-8">
                    <input id="cemail" type="email" value="money" class="form-control" name="email" required="" aria-required="true">
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-3 control-label"></label>
                <button type="button" class="btn btn-primary" @click="btnSave">保存</button>
            </div>
        </form>
        <ui-dialog
            :show='markDialog === 1'>
            <div slot="content">
                <div class="modal-body">
                    <p>保存成功！</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" @click="closeDialog()">确定</button>
                </div>
            </div>
        </ui-dialog>
    </div>
</template>
<script type="text/ecmascript-6">
    import edit from './edit.js';
    export default edit;
</script>
<style lang="sass" scoped rel="stylesheet/sass">
</style>
