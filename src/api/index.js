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
        return requset(urlType.type.GET, urlType.url.courseBasis);
    },
    // 课程详情数据获取
    guanzhus(params) {
        return requset(urlType.type.GET, urlType.url.Guanzhu, { params })
    },
    // 课程详情(首页)
    courseInfo(params){
        // console.log(urlType.url.courseInfo+Number(params));
        return requset(urlType.type.GET,urlType.url.courseInfo+params);
    },  
    // 验证码
    VerificationCode(params){
        return requset(urlType.type.POST,urlType.url.Verification,params)
    },
    // 设置密码
    SetInitPassword(params){
        return requset(urlType.type.POST,urlType.url.SetPassword,params)
    },
    // 讲师详情
    Teacher(params){
        return requset(urlType.type.GET,urlType.url.TEACHERS+params);
    },
    // 详情页面评价
    PINGJIA(params){
        return requset(urlType.type.POST,urlType.url.PINJIA,params)
    },
    // 课程收藏
    kechengShow(params){
        return requset(urlType.type.POST,urlType.url.keChengShouCang,params)
    },
    // 课程取消收藏
    keChengHide(params){
        // console.log(urlType.url.KeChengHiden+params+"/1");
        return requset(urlType.type.PUT,urlType.url.KeChengHiden+params+"/1")
    },
    TeacherShowHiden(params){
        return requset(urlType.type.GET,urlType.url.TeacherShowOrHiden+params)
    }
}
export default ClientAPI;