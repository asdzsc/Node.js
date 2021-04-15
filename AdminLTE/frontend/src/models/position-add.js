import { http } from "../utils/http";

export const positionsAdd = async(data) => {
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