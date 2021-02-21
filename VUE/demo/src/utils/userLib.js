import request from "../utils/request";
//java spring boot 后端test
export function getUserList () {
    return request({
        url: `/user/getUserList`,
        method: "get",
    });
}