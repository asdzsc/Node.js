// 首页模板
import indexTpl from "../views/index.tpl";
import { auth } from "../models/auth";
import page from "../databus/page";

import pageHeader from "../components/pageheader";
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

            const $as = $("#sidebar-menu li:not(first-child) a");
            // $as.on("click", function() {
            //     const url = $(this).attr("to");
            //     router.go(url);
            // });

            let hash = location.hash;
            $as
                .filter(`[href="${hash}"]`)
                .parent()
                .addClass("active")
                .siblings()
                .removeClass("active");
            //加载页面导航
            pageHeader();

            console.log(page.currentRoute);

            // 当前url保存
            page.setCurrentRoute(hash);
        } else {
            router.go("/signin");
        }
    };
};

// export { indexPage, signinPage };
export default indexPage;