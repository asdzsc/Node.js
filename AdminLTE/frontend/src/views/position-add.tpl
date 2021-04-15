<!-- /.modal-content -->
<div class="modal fade" id="positions-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">添加职位</h4>
            </div>
            <div class="modal-body">
                <div class="box box-primary">
                    <!-- form start -->
                    <form role="form" id="positions-form">
                        <div class="box-body">
                            <div class="form-group">
                                <label for="compony-logo">公司名称</label>
                                <input type="text" name="compony-logo" class="form-control" id="compony-logo" placeholder="请输入公司名称">
                            </div>

                            <div class="form-group">
                                <label for="position-name">职位名称</label>
                                <input type="text" name="position-name" class="form-control" id="position-name" placeholder="请输入职位名称">
                            </div>

                            <div class="form-group">
                                <label for="city">工作城市</label>
                                <input type="text" name="city" class="form-control" id="city" placeholder="请输入工作城市">
                            </div>

                            <div class="form-group">
                                <label for="salary">职位薪资</label>
                                <input type="text" name="salary" class="form-control" id="salary" placeholder="请输入职位薪资">
                            </div>
                        </div>
                        <!-- /.box-body -->
                    </form>
                </div>
                <!-- /.box -->
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" id="positions-close" data-dismiss="modal">关闭</button>
                <button type="button" class="btn btn-primary" id="positions-save">保存</button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>
<!-- /.modal -->