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
    },
    // 获取登录接口的token
    loginGetToken(params){
        return requset(urlType.type.POST,urlType.url.LOGIN,params);
    },
    // 特色课分类
    // courseClassify(){
    //     return requset(urlType.type.GET,urlType.url.courseClassify)
    // }
    // },
    // 特色课数据获取
    courseBasis(){
        return requset(urlType.type.GET,urlType.url.courseBasis)
    },
    // 课程详情数据获取
    courseInfo(params){
        return requset(urlType.type.GET,urlType.url.courseInfo,params)
    },  
    // 课程内容获取（无效）
    // contentCollect(){
    //     return requset(urlType.type.GET,urlType.url.contentCollect)
    // },

}
export default ClientAPI;