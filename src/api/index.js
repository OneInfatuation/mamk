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
    // 获取首页列表数据
    appindex(){
        return requset(urlType.type.GET,urlType.url.AppIndex)
    },
    // 获取课程详细信息
    coursedetail(params){
        return requset(urlType.type.GET,urlType.url.courseDetail,params)
    }
}
export default ClientAPI;