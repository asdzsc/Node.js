import { http } from "../utils/http";

export const usersList = async() => {
    try {
        let { res } = await http({
            url: "/api/users/",
        });
        return res;
    } catch (err) {
        console.log(err);
    }
};

// export const usersList = () => {
//     return $.ajax({
//         url: "/api/users/",
//         headers: {
//             "X-Access-Token": localStorage.getItem("lg-token") || null,
//         },
//         // async: false, //把异步改成同步
//         success: function(res) {
//             return res;
//         },
//     });
// };