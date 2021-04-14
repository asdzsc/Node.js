import { http } from "../utils/http";

export const usersRemove = async(id) => {
    try {
        let { res } = await http({
            url: "/api/users/",
            type: "delete",
            data: { id },
        });
        return res;
    } catch (err) {
        console.log(err);
    }
};

// export const usersRemove = (id) => {
//     return $.ajax({
//         url: "/api/users/",
//         type: "delete",
//         data: {
//             id,
//         },
//         headers: {
//             "X-Access-Token": localStorage.getItem("lg-token") || null,
//         },
//         success: function(res) {
//             return res;
//         },
//     });
// };