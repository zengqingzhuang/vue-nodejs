<template>
    <div class="wrapper wrapper-content animated fadeInRight">
        <div class="row">
            <div class="col-sm-12">
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>基本 <small>分类，查找</small></h5>
                        <div class="ibox-tools">
                            <a class="collapse-link">
                                <i class="fa fa-chevron-up"></i>
                            </a>
                            <a class="dropdown-toggle" data-toggle="dropdown" href="table_data_tables.html#">
                                <i class="fa fa-wrench"></i>
                            </a>
                            <ul class="dropdown-menu dropdown-user">
                                <li><a href="#">新增</a>
                                </li>
                                <li><a href="#">编辑</a>
                                </li>
                            </ul>
                            <a class="close-link">
                                <i class="fa fa-times"></i>
                            </a>
                        </div>
                    </div>
                    <div class="ibox-content">
                        <table class="table table-striped table-bordered table-hover dataTables-example">
                            <thead>
                                <tr>
                                    <th>序号</th>
                                    <th>机构名称</th>
                                    <th>创建时间</th>
                                    <th>金额</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="gradeX" v-for='item in orgList'>
                                    <td>{{ item.number }}</td>
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.createTime }}
                                    <td>{{ item.money }}</td>
                                </tr>
                            </tbody>
                            <!-- <tfoot>
                                <tr>
                                    <th>渲染引擎</th>
                                    <th>浏览器</th>
                                    <th>平台</th>
                                    <th>引擎版本</th>
                                </tr>
                            </tfoot> -->
                        </table>

                    </div>
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
    @import 'list';
</style>
