import {requset} from "./core";
import urlType from "./config";//引入请求参数

const ClientAPI = {
    // 封装请求函数（方法）
    // 例如：登录接口
    // Login(params){
    //    return requset(urlType.type.GET,urlType.url.LOGIN,params) 
    // }
    // 轮播图
    banner(){
        return requset(urlType.type.GET,urlType.url.Banner)
    },
    appindex(){
        return requset(urlType.type.GET,urlType.url.AppIndex)
    },
    // 特色课分类
    // courseClassify(){
    //     return requset(urlType.type.GET,urlType.url.courseClassify)
    // },
    // 特色课数据获取
    courseBasis(){
        return requset(urlType.type.GET,urlType.url.courseBasis)
    }
}
export default ClientAPI;