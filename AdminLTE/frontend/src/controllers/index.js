// 首页模板
import indexTpl from "../views/index.tpl";
// 登录模板
import signinTpl from "../views/signin.tpl";
// 用户列表模板
import usersTpl from "../views/users.tpl";

// 登录
const handleSubmit = (router) => {
    return (e) => {
        e.preventDefault();
        // console.log("ss");
        router.go("/");
    };
};
// 保存用户
const saveUsers = () => {
    // 关闭模态框
    $("#users-close").click();
    // 获取表单内容
    const data = $("#users-form").serialize();
    // 发送ajax请求
    $.ajax({
        url: "/api/usrs/singin",
        type: "post",
        data,
        "Content-Type": "application / x-www-form-urlencoded",
        success: (res) => {
            console.log(res);
        },
    });
};
const signinPage = (router) => {
    return (req, res, next) => {
        res.render(signinTpl);
        // handleSubmit();
        $("#submit").on("submit", handleSubmit(router));
    };
};

const indexPage = (router) => {
    return (req, res, next) => {
        res.render(indexTpl);
        //window resize 让页面撑满整个屏幕
        $(window, ".wrapper").resize();
        // 用户列表
        $("#content").html(usersTpl);
        $("#users-save").on("click", saveUsers);
    };
};

export { indexPage, signinPage };