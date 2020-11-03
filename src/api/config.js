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
        // 关注老师数据接收
        Guanzhu: "/api/app/collect",
        // 点击获取验证码
        Verification: "/api/app/smsCode",
        // 设置密码
        SetPassword: "/api/app/password",
        // 讲师详情
        TEACHERS:"/api/app/teacher/",
        // 详情页评价接口
        PINJIA:"/api/app/teacher/comment",
        // 取消课程收藏
        CollectCancel:"/api/app/collect/cancel/",
        // 课程收藏
        ClassCollect:"/api/app/collect",
    },
    type: {
        GET: "get",
        POST: "post"
    }
}
export default urlType;