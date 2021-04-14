import { http } from "../utils/http";

export const signIn = async(data) => {
    try {
        let { jqXHR, res } = await http({
            url: "/api/users/signin",
            type: "post",
            data,
        });
        return {
            jqXHR,
            res,
        };
    } catch (err) {
        console.log(err);
    }
};

// export const signIn = (data) => {
//     return new Promise((resolve) => {
//         $.ajax({
//             url: "/api/users/signin",
//             type: "post",
//             dataType: "json",
//             data,
//             success(res, textStatus, jqXHR) {
//                 resolve({
//                     res,
//                     jqXHR,
//                 });
//             },
//         });
//     });
// };