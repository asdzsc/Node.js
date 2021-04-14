import gp21Router from "gp21-router";

// 挂载路由
// const router = new SMERouter("root");
const router = new gp21Router("root");

import indexPage from "../controllers/index";
import signinPage from "../controllers/signin";
import listUser from "../controllers/users/list-users";
import listPosition from "../controllers/positions/list-position";
import { auth } from "../models/auth";

// 路由守卫
router.use(async(req) => {
    // 第一次打开的页面
    let result = await auth();
    if (result.res == 200) {
        router.go(req.url);
    } else {
        router.go("/signin");
    }
});

// router.route("/", indexPage(router));
router.route("/index", indexPage(router));
router.route("/index/users", listUser(router));
router.route("/index/positions", listPosition(router));
router.route("/signin", signinPage(router));

router.route("*", (req, res, next) => {
    res.redirect("/index/users");
});

export default router;