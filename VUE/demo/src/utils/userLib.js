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


export function queryVatInvoiceList (data) {
    return request({
        url: `/motor/outputMotor/queryVatInvoiceList`,
        method: "post",
        data
    });
}

export function queryBWOrder (data) {
    return request({
        url: `/motor/doorInvoice/queryBWOrder`,
        method: "post",
        data
    });
}

export function reverseInvoice (data) {
    return request({
        url: `/motor/doorInvoice/reverseInvoice`,
        method: "post",
        data
    });
}


export function issueDoorInvoice (data) {
    return request({
        url: `/motor/doorInvoice/issueDoorInvoice`,
        method: "post",
        data
    });
}




export function sendVatOrder (data) {
    return request({
        url: `/motor/outputMotor/sendVatOrder`,
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
        url: `/external/getHLYInvoice`,
        method: "post",
        data

    });
}
