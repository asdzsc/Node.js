import page from "../../databus/page";
// 添加用户模板
import userAddTpl from "../../views/users-add.tpl";

import { usersAdd } from "../../models/user-add";

// 添加保存用户
export const addUsers = () => {
    // 渲染模板
    $("#users-list-box").after(userAddTpl);
    // 提交表单
    const saveUsers = async() => {
        // 关闭模态框
        $("#users-close").click();
        // 获取表单内容
        const data = $("#users-form").serialize();
        // 发送ajax请求
        let result = await usersAdd(data);

        if (result.res == 200) {
            page.setCurrentPage(1);
            $("body").trigger("add-user");
        }

        // $.ajax({
        //     url: "/api/users/",
        //     type: "post",
        //     headers: {
        //         "X-Access-Token": localStorage.getItem("lg-token") || null,
        //     },
        //     data,
        //     success: function() {
        //         page.setCurrentPage(1);
        //         // 添加数据后 告诉list组件 重新渲染页面
        //         $("body").trigger("add-user");
        //         // loadData();
        //         // getUserList(currentPage);
        //     },
        // });
    };
    // 保存用户列表 提交表单
    $("#users-save").on("click", saveUsers);
};