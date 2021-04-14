import router from "../../routes";
import { auth } from "../../models/auth";

export default (router) => {
    return async(req, res, next) => {
        let result = await auth();
        console.log();
        if (result.res == 200) {
            $("#content").html("position");
        } else {
            router.go("/signin");
        }
        // next();
    };
};