import { http } from "../utils/http";

export const auth = async() => {
    // return $.ajax({
    //     url: "/api/users/isAuth",
    //     dataType: "json",
    //     headers: {
    //         "X-Access-Token": localStorage.getItem("lg-token") || null,
    //     },
    //     success(res) {
    //         return res;
    //     },
    // });
    try {
        let { res } = await http({
            url: "/api/users/isAuth",
        });
        return res;
    } catch (err) {
        console.log(err);
    }
};