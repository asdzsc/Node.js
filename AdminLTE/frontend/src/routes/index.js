import SMERouter from "sme-router";

const router = new SMERouter("root");
import { indexPage, signinPage } from "../controllers/index";

router.route("/", indexPage(router));
router.route("/index", indexPage(router));
router.route("/sigin", signinPage(router));

export default router;