import SMERouter from "sme-router";

const router = new SMERouter("root");
import { indexPage, siginPage } from "../controllers/index";

router.route("/", indexPage(router));
router.route("/index", indexPage(router));
router.route("/sigin", siginPage(router));

export default router;