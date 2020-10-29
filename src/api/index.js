import { requset } from "./core";
import urlType from "./config";//引入请求参数

const ClientAPI = {
    // 封装请求函数（方法）
    // 例如：登录接口
    // Login(params){
    //    return requset(urlType.type.GET,urlType.url.LOGIN,params) 
    // }
    // 轮播图
    banner() {
        return requset(urlType.type.GET, urlType.url.Banner)
    },
    // 获取首页列表数据
    appindex() {
        return requset(urlType.type.GET, urlType.url.AppIndex)
    },
    // 获取课程详细信息
    coursedetail(params) {
        return requset(urlType.type.GET, urlType.url.courseDetail, params)
    },
    // 获取登录接口的token
    loginGetToken(params) {
        return requset(urlType.type.POST, urlType.url.LOGIN, params);
    },
    // 特色课数据获取
    courseBasis() {
        return requset(urlType.type.GET, urlType.url.courseBasis)
    },
    // 课程详情数据获取
    courseInfo(params) {
        return requset(urlType.type.GET, urlType.url.courseInfo, params)
    },
    guanzhus(params) {
        return requset(urlType.type.GET, urlType.url.Guanzhu, { params })
    },
    // 获取修改密码的验证码
    get_sms(data) {
        return requset(urlType.type.POST, urlType.url.getSms, data)
    },
    // 确认修改密码
    okpsd(data){
        return requset(urlType.type.POST, urlType.url.okPsd,data)
    },
}
export default ClientAPI;