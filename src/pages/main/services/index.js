import request from '../../../utils/request'
function getQuestDataRequst(payload){
        return request("/api?server=tz_visit",{
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(payload)
        })
}
function getWeixin(payload){
    //console.log("payload", payload);
    return request("/api/wxjs",{
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(payload)
    })
}

export {
    getQuestDataRequst,
    getWeixin
}
