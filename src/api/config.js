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
        contentCollect: "/api/app/myStudy/2",
        // 登录接口
        LOGIN: "/api/app/login",
        // 课程详情数据获取
        courseInfo: "/api/app/courseInfo/basis_id=",
        // 已关注老师接口
        Guanzhu: "/api/app/collect",
        // 点击获取验证码
        Verification: "/api/app/smsCode",
        // 设置密码
        SetPassword: "/api/app/password",
        // 讲师详情
        TEACHERS:"/api/app/teacher/",
        // 详情页评价接口
        PINJIA:"/api/app/teacher/comment",
        // 课程收藏
        keChengShouCang:"/api/app/collect",
        //课程取消收藏
        KeChengHiden:"/api/app/collect/cancel/",
        //老师关注与取消关注    
        TeacherShowOrHiden:"/api/app/teacher/collect/",

        // 个人信息获取
        PersonMessage:"/api/app/userInfo",
        // 个人信息修改
        UserChange:"/api/app/user",
        // 获取年级和学科数据
        Attribute:"/app/module/attribute",

        // 我的页面里面的取消关注
        TeacherHide:"/api/app/collect/cancel/",
        // 课程搜索
        ClassSearch:"/api/app/courseBasis"
    },
    type: {
        GET: "get",
        POST: "post",
        PUT:"put"
    }
}
export default urlType;