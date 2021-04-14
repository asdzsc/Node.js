// 首页模板
import indexTpl from "../views/index.tpl";
import { auth } from "../models/auth";
// 首页
const indexPage = (router) => {
    return async(req, res, next) => {
        let result = await auth();
        if (result.res == 200) {
            // next();
            // 渲染首页
            res.render(indexTpl);
            //window resize 让页面撑满整个屏幕
            // next(indexTpl);
            $(window, ".wrapper").resize();

            const $lis = $("#sidebar-menu li:not(first-child)");

            $lis.on("click", function() {
                const url = $(this).attr("to");
                router.go(url);
            });

            let hash = location.hash.slice(1);
            console.log(hash);
            // router.go(url);
            console.log($lis.find(`[to="${hash}"]`));
            $lis
                .find(`[to="${hash}"]`)
                .addClass("active")
                .siblings()
                .removeClass("active");
        } else {
            router.go("/signin");
        }
    };
};

// export { indexPage, signinPage };
export default indexPage;