// 首页模板
import indexTpl from "../views/index.tpl";
// 用户列表模板
import usersTpl from "../views/users.tpl";
import usersListTpl from "../views/users-list.tpl";

// 分页组件
import handlePage from "../components/pagination";
// import { pageSize, currentPage } from "../databus/page";

import page from "../databus/page";

// 分页处理
const pageSize = page.pageSize;
const currentPage = page.currentPage;
let dataList = [];

// 获取用户列表
const getUserList = (pageNum) => {
    // 第一页数据
    let start = (pageNum - 1) * pageSize;
    let html = template.render(usersListTpl, {
        // data: dataList.slice((pageNum-1)*pageSize, pageNum * pageSize),
        data: dataList.slice(start, start + pageSize),
    });
    $("#users-list").html(html);
};

// 保存用户
const saveUsers = () => {
    // 关闭模态框
    $("#users-close").click();
    // 获取表单内容
    const data = $("#users-form").serialize();
    // 发送ajax请求
    $.ajax({
        url: "/api/users/",
        type: "post",
        data,
        success: function() {
            page.setCurrentPage(1);
            //添加数据后渲染
            loadData();
            // getUserList(currentPage);
        },
    });
};

// 加载数据
const loadData = () => {
    $.ajax({
        url: "/api/users/",
        // async: false, //把异步改成同步
        success: function(res) {
            dataList = res.data;
            // 分页
            handlePage(dataList, currentPage);
            // 数据渲染
            getUserList(currentPage);
        },
    });
};

// 事件绑定
const methods = () => {
    // 删除用户
    $("#users-list").on("click", ".del-user", function() {
        // const data = $(this).attr("data-id");
        // console.log($(this).data("id"));
        // 在列表中移除该元素
        $.ajax({
            url: "/api/users/",
            type: "delete",
            data: {
                id: $(this).attr("data-id"),
            },
            success: function() {
                //添加数据后渲染
                loadData();
                // 是否是最后一页
                const isLastPage =
                    Math.ceil(dataList.length / pageSize) === currentPage;
                // 剩一条的时候删除跳转前一页
                const resOne = dataList.length % pageSize === 1;
                // 第几页
                const notFirstPage = currentPage > 0;
                if (isLastPage && resOne && notFirstPage) {
                    // currentPage--;
                    page.setCurrentPage(page.currentPage - 1);
                }
            },
        });
    });
    //用户退出
    $("#users-logout").on("click", function(e) {
        e.preventDefault();
        $.ajax({
            url: "/api/users/signout",
            dataType: "json",
            success(res) {
                if (res.res == 200) {
                    router.go("#/singin");
                }
            },
        });
    });
    // 保存用户列表 提交表单
    $("#users-save").on("click", saveUsers);
};

// 发布事件
const subscribe = () => {
    // $(".body").on("changeCurrentPage", function(e, index) {
    //     console.log("ss");
    //     // getUserList(index);
    // });
    console.log("ee");
    $("body").on("changeCurrentPage", function(e, index) {
        console.log("ss");
        getUserList(index);
    });
};

// 首页
const indexPage = (router) => {
    const loadIndex = (res) => {
        // 渲染首页
        res.render(indexTpl);
        //window resize 让页面撑满整个屏幕
        $(window, ".wrapper").resize();

        // 渲染用户列表
        $("#content").html(usersTpl);
        //添加数据后渲染
        loadData();
        // 事件绑定
        methods();
        // 订阅事件
        subscribe();
    };
    return (req, res, next) => {
        $.ajax({
            url: "/api/users/isAuth",
            dataType: "json",
            success(result) {
                if (result.res == 200) {
                    loadIndex(res);
                } else {
                    router.go("/singin");
                }
            },
        });
    };
};

// export { indexPage, signinPage };
export default indexPage;