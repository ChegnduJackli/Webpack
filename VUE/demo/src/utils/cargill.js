import request from "../utils/request";
export function syncSettlementData(data){
    return request({
        url: `/v1/apexAPI/syncSettlementData`,
        method: "post",
        data,
      });
}