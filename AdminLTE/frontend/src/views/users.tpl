<div class="box">
    <div class="box-header">
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">添加</button>
    </div>
    <!-- /.box-header -->
    <div class="box-body">
        <table class="table table-bordered">
            <tr>
                <th style="width: 10px">#</th>
                <th>用户名</th>
                <th style="width: 40px">操作</th>
            </tr>
            <tbody id="users-list"></tbody>
        </table>
        <div class="box-footer clearfix" id="users-page">

        </div>
    </div>
    <!-- /.modal-content -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">添加用户</h4>
                </div>
                <div class="modal-body">
                    <div class="box box-primary">
                        <!-- form start -->
                        <form role="form" id="users-form">
                            <div class="box-body">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">用户名</label>
                                    <input type="text" name="username" class="form-control" id="exampleInputEmail1" placeholder="请输入用户名">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">密码</label>
                                    <input type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="请输入密码">
                                </div>

                            </div>
                            <!-- /.box-body -->
                        </form>
                    </div>
                    <!-- /.box -->
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" id="users-close" data-dismiss="modal">关闭</button>
                    <button type="button" class="btn btn-primary" id="users-save">保存</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
</div>