// 首页模板
import router from "../routers";
import indexTpl from "../views/index.art";
// 登录模板
import siginTpl from "../views/siginTpl.art";

const handleSubmit = (router) => {
    return (e) => {
        e.preventDefault();
        // console.log("ss");
        router.go("/index");
    };
};

const indexPage = (router) => {
    return (req, res, next) => {
        res.render(indexTpl);
    };
};
const siginPage = (router) => {
    return (req, res, next) => {
        res.render(siginTpl);
        // handleSubmit();
        $("#submit").on("click", handleSubmit(router));
    };
};

export { indexPage, siginPage };