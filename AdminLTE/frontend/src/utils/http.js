export const http = ({ url, type = "get", data = {} }) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url,
            dataType: "json",
            type,
            data,
            headers: {
                "X-Access-Token": localStorage.getItem("lg-token") || null,
            },
            success(res, textStatus, jqXHR) {
                resolve({
                    res,
                    textStatus,
                    jqXHR,
                });
            },
            error(err) {
                reject(err.message);
            },
        });
    });
};