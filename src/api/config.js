const urlType = {
    // 配置API路径
    url: {
        // 例如：
        // 轮播图
        Banner: "/api/app/banner",
        //    获取首页数据
        AppIndex: "/api/app/recommend/appIndex",
        // 特色课分类
        //    courseClassify:"/api/app/courseClassify",
        // 特色课数据获取
        courseBasis: "/api/app/courseBasis?page=1&limit=10&",
        //特色课内容获取
<<<<<<< HEAD
        contentCollect: "/api/app/myStudy/2",
        // 登录接口
        LOGIN: "/api/app/login",
        // contentCollect:"/api/app/myStudy/2" 
        // 课程详情数据获取
        courseInfo: "/api/app/courseInfo",
        // 关注老师数据接收
        Guanzhu: "/api/app/collect",
        // 获取修改密码的验证码
        getSms: "/api/app/smsCode",
        // 确认修改密码
        okPsd:"/api/app/password",
=======
    contentCollect:"/api/app/myStudy/2",
    // 登录接口
    LOGIN:"/api/app/login",    
    // contentCollect:"/api/app/myStudy/2" 
    // 课程详情数据获取
    courseInfo:"/api/app/courseInfo",
    // 关注老师数据接收
    Guanzhu:"/api/app/collect",
    // 点击获取验证码
    Verification:"/api/app/smsCode",
    // 设置密码
    SetPassword:"/api/app/password"
>>>>>>> d2479ac9c6926002de114b63efb84e688d03ac9e
    },
    type: {
        GET: "get",
        POST: "post"
    }
}
export default urlType;