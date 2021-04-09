// 首页模板
import indexTpl from "../views/index.tpl";
// 登录模板
import signinTpl from "../views/signin.tpl";
// 用户列表模板
import usersTpl from "../views/users.tpl";
import usersListTpl from "../views/users-list.tpl";
// 分页模板
import usersPagesTpl from "../views/users-pages.tpl";

// 登录
const handleSubmit = (router) => {
    return (e) => {
        e.preventDefault();
        // console.log("ss");
        router.go("/");
    };
};
// 登录页面
const signinPage = (router) => {
    return (req, res, next) => {
        res.render(signinTpl);
        $("#submit").on("submit", handleSubmit(router));
    };
};

// 分页处理
const pageSize = 2;
let dataList = [];
const handlePage = (data) => {
    const total = data.length;
    const pageCont = Math.ceil(total / pageSize);
    let pageArr = new Array(pageCont);
    let html = template.render(usersPagesTpl, {
        pageArr,
    });
    $("#users-page").html(html);
    // 默认第一页active
    $("#users-page-list li:nth-child(2)").addClass("active");
    //not 排除
    $("#users-page-list li:not(:first-child,:last-child)").on(
        "click",
        function() {
            $(this).addClass("active").siblings().removeClass("active");
            getUserList($(this).index());
        }
    );
};

// 保存用户
const saveUsers = () => {
    // 关闭模态框
    $("#users-close").click();
    // 获取表单内容
    const data = $("#users-form").serialize();
    // 发送ajax请求
    $.ajax({
        url: "/api/users/signup",
        type: "post",
        data,
        success: () => {
            //添加数据后渲染
            loadData();
            getUserList(1);
        },
    });
};

// 加载数据
const loadData = () => {
    $.ajax({
        url: "/api/users/list",
        async: false,
        success: (res) => {
            dataList = res.data;
            // 分页
            handlePage(res.data);
            // 数据渲染
            getUserList(1);
        },
    });
};
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
// 首页
const indexPage = (router) => {
    return (req, res, next) => {
        res.render(indexTpl);
        //window resize 让页面撑满整个屏幕
        $(window, ".wrapper").resize();
        // 用户列表
        $("#content").html(usersTpl);
        // 初始页面渲染列表
        loadData();
        getUserList(1);

        $("#users-save").on("click", saveUsers);
    };
};

export { indexPage, signinPage };