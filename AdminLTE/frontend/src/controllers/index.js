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
        // 获取表单内容
        const data = $("#users-submit").serialize();
        // 发送ajax请求
        $.ajax({
            url: "/api/users/signin",
            type: "post",
            dataType: "json",
            data,
            success(res) {
                if (res.res == 200) {
                    router.go("/index");
                } else {
                    alert("用户名或密码错误");
                }
            },
        });
    };
};
// 登录页面
const signinPage = (router) => {
    return (req, res, next) => {
        res.render(signinTpl);
        $("#users-submit").on("submit", handleSubmit(router));
    };
};

// 分页处理
const pageSize = 2;
let currentPage = 1;
let dataList = [];
const handlePage = (data) => {
    const total = data.length;
    const pageCont = Math.ceil(total / pageSize);
    // 转换成数组
    let pageArr = new Array(pageCont);
    let html = template.render(usersPagesTpl, {
        pageArr,
    });
    $("#users-page").html(html);
    // 设置当前页选中状态
    setPageActive(currentPage);
    // 默认第一页active
    // $("#users-page-list li:nth-child(2)").addClass("active");
    //not 排除
    // $("#users-page-list li:not(:first-child,:last-child)").on(
    //     "click",
    //     function() {
    //         $(this).addClass("active").siblings().removeClass("active");
    //         getUserList($(this).index());
    //     }
    // );
};
// 设置当前页选中状态
const setPageActive = (index) => {
    $("#users-page #users-page-list li:not(:first-child,:last-child)")
        .eq(index - 1)
        .addClass("active")
        .siblings()
        .removeClass("active");
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
            //添加数据后渲染
            loadData();
            getUserList(currentPage);
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
            handlePage(res.data);
            // 数据渲染
            getUserList(currentPage);
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
    const loadIndex = (res) => {
        // 渲染首页
        res.render(indexTpl);
        //window resize 让页面撑满整个屏幕
        $(window, ".wrapper").resize();

        // 渲染用户列表
        $("#content").html(usersTpl);
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
                        currentPage--;
                    }
                },
            });
        });
        // 切换页面
        $("#users-page").on(
            "click",
            "#users-page-list li:not(:first-child,:last-child)",
            function() {
                const index = $(this).index();
                getUserList(index);
                currentPage = index;
                setPageActive(index);
            }
        );

        // $("#users-page").on("click");
        // 上一页
        $("#users-page").on(
            "click",
            "#users-page-list li:first-child",
            function() {
                if (currentPage > 1) {
                    currentPage--;
                    getUserList(currentPage);
                    setPageActive(currentPage);
                }
            }
        );
        // 下一页
        $("#users-page").on("click", "#users-page-list li:last-child", function() {
            if (currentPage < Math.ceil(dataList.length / pageSize)) {
                currentPage++;
                getUserList(currentPage);
                setPageActive(currentPage);
            }
        });
        //添加数据后渲染
        loadData();

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

export { indexPage, signinPage };