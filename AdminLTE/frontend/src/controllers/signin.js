// 登录模板
import signinTpl from "../views/signin.tpl";

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
export default signinPage;