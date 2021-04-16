import { http } from "../utils/http";

export const positonsList = async() => {
    try {
        let { res } = await http({
            url: "/api/positions/list",
        });
        return res;
    } catch (err) {
        console.log(err);
    }
};