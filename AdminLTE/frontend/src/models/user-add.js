import { http } from "../utils/http";

export const usersAdd = async(data) => {
    try {
        let { res } = await http({
            url: "/api/users/",
            type: "post",
            data,
        });
        return res;
    } catch (err) {
        console.log(err);
    }
};

// export const usersAdd = (data) => {
//     return $.ajax({
//         url: "/api/users/",
//         type: "post",
//         headers: {
//             "X-Access-Token": localStorage.getItem("lg-token") || null,
//         },
//         data,
//         success: function(res) {
//             return res;
//         },
//     });
// };