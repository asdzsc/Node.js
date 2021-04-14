import SMERouter from "sme-router";

// 挂载路由
const router = new SMERouter("root");

import indexPage from "../controllers/users/index";
import signinPage from "../controllers/signin";
import { auth } from "../models/auth";

// 路由守卫
router.use(async(req) => {
    // 第一次打开的页面
    let result = await auth();
    if (result.res == 200) {
        router.go("/index");
    } else {
        router.go("/signin");
    }
});

router.route("/", indexPage(router));
router.route("/index", indexPage(router));
router.route("/signin", signinPage(router));

export default router;