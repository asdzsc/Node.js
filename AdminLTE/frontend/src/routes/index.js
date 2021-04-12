import SMERouter from "sme-router";

const router = new SMERouter("root");
import { indexPage, signinPage } from "../controllers/index";

router.route("/", indexPage(router));
router.route("/index", indexPage(router));
router.route("/singin", signinPage(router));

router.use((req) => {
    // 第一次打开的页面
    $.ajax({
        url: "/api/users/isAuth",
        dataType: "json",
        success(res) {
            if (res.res == 200) {
                router.go("/index");
            } else {
                router.go("/singin");
            }
        },
    });
});

export default router;