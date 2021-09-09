import request from "../utils/request";
//java spring boot 后端test
export function getUserList () {
    return request({
        url: `/user/getUserList`,
        method: "get",
    });
}

export function mybatisPlusTest () {
    return request({
        url: `/user/testPlus`,
        method: "get",
    });
}

export function sendSapOrder (data) {
    return request({
        url: `/motor/outputMotor/sendSapOrder`,
        method: "post",
        data
    });
}

export function getCallBackInvoice () {
    return request({
        url: `/motor/outputMotor/getCallBackInvoice`,
        method: "get",

    });
}


export function getHLYInvoice (data) {
    return request({
        url: `/scanner/getHLYInvoice`,
        method: "post",
        data

    });
}
