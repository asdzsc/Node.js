// 用户列表模板
import usersTpl from "../../views/users.tpl";
import usersListTpl from "../../views/users-list.tpl";

// 分页组件
import handlePage from "../../components/pagination";
// import { pageSize, currentPage } from "../databus/page";

import page from "../../databus/page";

import { addUsers } from "./add-users";
import { usersList } from "../../models/users-list";
import { auth } from "../../models/auth";
import { usersRemove } from "../../models/users-remove";

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

// 加载数据
const loadData = async() => {
    let res = await usersList();
    dataList = res.data;
    // 分页
    handlePage(dataList, currentPage);
    // 数据渲染
    getUserList(currentPage);
};

// 事件绑定
const methods = () => {
    // 删除用户
    $("#users-list").on("click", ".del-user", async function() {
        let result = await usersRemove($(this).attr("data-id"));
        if (result.res == 200) {
            //添加数据后渲染
            loadData();
            // 是否是最后一页
            const isLastPage = Math.ceil(dataList.length / pageSize) === currentPage;
            // 剩一条的时候删除跳转前一页
            const resOne = dataList.length % pageSize === 1;
            // 第几页
            const notFirstPage = currentPage > 0;
            if (isLastPage && resOne && notFirstPage) {
                // currentPage--;
                page.setCurrentPage(page.currentPage - 1);
            }
        }
        // const data = $(this).attr("data-id");
        // console.log($(this).data("id"));
        // 在列表中移除该元素
        // $.ajax({
        //     url: "/api/users/",
        //     type: "delete",
        //     data: {
        //         id: $(this).attr("data-id"),
        //     },
        //     headers: {
        //         "X-Access-Token": localStorage.getItem("lg-token") || null,
        //     },
        //     success: function() {
        //         //添加数据后渲染
        //         loadData();
        //         // 是否是最后一页
        //         const isLastPage =
        //             Math.ceil(dataList.length / pageSize) === currentPage;
        //         // 剩一条的时候删除跳转前一页
        //         const resOne = dataList.length % pageSize === 1;
        //         // 第几页
        //         const notFirstPage = currentPage > 0;
        //         if (isLastPage && resOne && notFirstPage) {
        //             // currentPage--;
        //             page.setCurrentPage(page.currentPage - 1);
        //         }
        //     },
        // });
    });
    //用户退出
    $("#users-logout").on("click", function(e) {
        e.preventDefault();
        // $.ajax({
        //     url: "/api/users/signout",
        //     dataType: "json",
        //     headers: {
        //         "X-Access-Token": localStorage.getItem("lg-token") || null,
        //     },
        //     success(res) {
        //         if (res.res == 200) {
        //             router.go("#/signin");
        //         }
        //     },
        // });
        localStorage.setItem("lg-token", "");
        location.reload();
    });
};

// 发布事件
const subscribe = () => {
    // $(".body").on("changeCurrentPage", function(e, index) {
    //     console.log("ss");
    //     // getUserList(index);
    // });
    console.log("ss");
    $("body").on("changeCurrentPage", function(e, index) {
        console.log("ss");
        getUserList(index);
    });

    $("body").on("add-user", function(e) {
        console.log("ss");
        loadData();
    });
};

// 首页
const indexPage = (router) => {
    const loadIndex = (res, next) => {
        // 渲染用户列表
        // next();
        $("#content").html(usersTpl);

        // res.render(usersTpl);

        $("#add-user-btn").on("click", addUsers);
        //添加数据后渲染
        loadData();
        // 事件绑定
        methods();
        // 订阅事件
        subscribe();
    };
    return async(req, res, next) => {
        let result = await auth();
        if (result.res == 200) {
            loadIndex(res, next);
        } else {
            router.go("/signin");
        }
        // $.ajax({
        //     url: "/api/users/isAuth",
        //     dataType: "json",
        //     headers: {
        //         "X-Access-Token": localStorage.getItem("lg-token") || null,
        //     },
        //     success(result) {
        //         if (result.res == 200) {
        //             loadIndex(res);
        //         } else {
        //             router.go("/signin");
        //         }
        //     },
        // });
    };
};

// export { indexPage, signinPage };
export default indexPage;