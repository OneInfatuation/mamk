import {
    requset
} from "./core";
import urlType from "./config"; //引入请求参数

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
    courseBasis(params) {
        return requset(urlType.type.GET, urlType.url.courseBasis, {
            params
        });
    },
    // 课程下拉数据
    selectKc() {
        return requset(urlType.type.GET, urlType.url.courseClassify);
    },
    // 我的页面的已关注数据
    guanzhus(params) {
        return requset(urlType.type.GET, urlType.url.Guanzhu, {
            params
        })
    },
    // 课程详情(首页)
    courseInfo(params) {
        // console.log(urlType.url.courseInfo+Number(params));
        return requset(urlType.type.GET, urlType.url.courseInfo + params);
    },
    // 验证码
    VerificationCode(params) {
        return requset(urlType.type.POST, urlType.url.Verification, params)
    },
    // 设置密码
    SetInitPassword(params) {
        return requset(urlType.type.POST, urlType.url.SetPassword, params)
    },
    // 讲师详情
    Teacher(params) {
        return requset(urlType.type.GET, urlType.url.TEACHERS + params);
    },
    // 详情页面评价
    PINGJIA(params) {
        return requset(urlType.type.POST, urlType.url.PINJIA, params)
    },
    // 课程收藏
    kechengShow(params) {
        return requset(urlType.type.POST, urlType.url.keChengShouCang, params)
    },
    // 课程取消收藏
    keChengHide(params) {
        // console.log(urlType.url.KeChengHiden+params+"/1");
        return requset(urlType.type.PUT, urlType.url.KeChengHiden + params + "/1")
    },
    //老师关注与取消关注
    TeacherShowHiden(params) {
        return requset(urlType.type.GET, urlType.url.TeacherShowOrHiden + params)
    },
    // 立即报名
    LIJIBAOMING(params) {
        console.log(urlType.type.POST, urlType.url.baoming, params);
        return requset(urlType.type.POST, urlType.url.baoming, params)
    },
    // 我的学习记录
    myStudentComment(params) {
        return requset(urlType.type.POST, urlType.url.mycomment, params);
    },
    // 个人信息获取
    PersonMessage(params) {
        return requset(urlType.type.GET, urlType.url.PersonMessage, params)
    },
    // 个人信息修改
    UserChange(params) {
        return requset(urlType.type.PUT, urlType.url.UserChange, params)
    },
    // 学科与年级数据获取
    Attribute() {
        return requset(urlType.type.GET, urlType.url.Attribute)
    },
    sonArea(params) {//获取省市区
        return requset(urlType.type.GET, urlType.url.sonArea+params)
    },
    // 我的页面里面的取消关注
    TeacherGZHide(params) {
        return requset(urlType.type.PUT, urlType.url.TeacherHide + params + "/2")
    },
    // 立即报名
    baoming(params) {
        return requset(urlType.type.POST, urlType.url.BAOMING, params)
    },
    // 评论
    pinglun(params) {
        return requset(urlType.type.POST, urlType.url.PINGLUN, params)
    },
    xuexi(params) {
        return requset(urlType.type.GET, urlType.url.XUEXI, params)
    },
    wdxx() {
        return requset(urlType.type.GET, urlType.url.WDXX)
    },
    // grxx(params){
    //     return requset(urlType.type.PUT,urlType.url.GRXX,params)
    // }

    // 课程搜索
    ClassSearch(params) {
        return requset(urlType.type.GET, urlType.url.ClassSearch, {
            params
        })
    },
    // 学习记录
    myStudy(params) {
        return requset(urlType.type.GET, urlType.url.xuexijilu + params);
    },
    QueRenDdan(params) { //确认订单
        return requset(urlType.type.POST, urlType.url.querenorder, params);
    },
    // 学习视频
    myStydyVideo(params, id) { //
        // console.log(urlType.url.studyVideo+params+"/course_id="+id);
        return requset(urlType.type.POST, urlType.url.studyVideo + params + "course_id=" + id);
    },
    myStyduQk(params) { //我的学习
        return requset(urlType.type.GET, urlType.url.contentCollect + params);
    },
    KCpingLun(params) { //课程评论
        return requset(urlType.type.POST, urlType.url.kechengPinLun, params);
    },
    GetMessage() { //消息通知
        return requset(urlType.type.POST, urlType.url.msg);
    },
    getMessageSend(params) { //消息分类通知
        return requset(urlType.type.POST, urlType.url.getMsg, params);
    },
    NianClass() { //年级+学科
        return requset(urlType.type.GET, urlType.url.classify);
    },
    // 上传图片
    changeImage(params) {
        return requset(urlType.type.POST, urlType.url.shangchuanImg, params);
    },
    geRenpinglun(params) {//意见反馈
        return requset(urlType.type.POST, urlType.url.GERENXIAOXI, params)
    },
    otoCourse(params) { // 一对一辅导
        return requset(urlType.type.GET, urlType.url.otoCourse, {
            params
        });
    },

}
export default ClientAPI;