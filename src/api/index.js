import requests from "./request";
//搜索页面的接口
export const reqSearchList = (keyword) => requests({
    url: `/search/${keyword}`,
    method: 'get'
})