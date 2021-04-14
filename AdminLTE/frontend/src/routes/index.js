import SMERouter from "sme-router";

// 挂载路由
const router = new SMERouter("root");

import indexPage from "../controllers/index";
import signinPage from "../controllers/signin";

// 路由守卫
router.use((req) => {
    // 第一次打开的页面
    $.ajax({
        url: "/api/users/isAuth",
        dataType: "json",
        headers: {
            "X-Access-Token": localStorage.getItem("lg-token") || null,
        },
        success(res) {
            if (res.res == 200) {
                router.go("/index");
            } else {
                router.go("/signin");
            }
        },
    });
});

router.route("/", indexPage(router));
router.route("/index", indexPage(router));
router.route("/signin", signinPage(router));

export default router;