const urlType = {
    // 配置API路径
    url: {
        // 例如：
        // 轮播图
        Banner: "/api/app/banner",
        //    获取首页数据
        AppIndex: "/api/app/recommend/appIndex",
        // 特色课分类
           courseClassify:"/api/app/courseClassify",
        // 特色课数据获取
        courseBasis: "/api/app/courseBasis",
        //特色课内容获取
        contentCollect: "/api/app/myStudy/",
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
        // 立即报名
        baoming:"/api/app/order/downOrder",
        // 确认订单
        querenorder:"/api/app/order/shopInfo",
        // 获取学习的记录
        xuexijilu:"/api/app/myStudy/course/",
        //老师关注与取消关注    
        TeacherShowOrHiden:"/api/app/teacher/collect/",
        // 我的学习评论
        mycomment:"/api/app/myStudy/comment",
        // 个人信息获取（我的学习）
        PersonMessage:"/api/app/userInfo",
        // 个人信息修改
        UserChange:"/api/app/user",
        // 获取年级和学科数据
        Attribute:"/app/module/attribute/1",
        // 获取所在城市
        sonArea:"/api/app/sonArea/",
        // 我的页面里面的取消关注
        TeacherHide:"/api/app/collect/cancel/",
        // 报名
        BAOMING:"/api/app/order/downOrder",
        // 学习
        XUEXI:"/api/app/myStudy/course/",
        // 评论
          PINGLUN:"/api/app/myStudy/comment",
        //   我的学习
        WDXX:"/api/app/myStudy/",
        // 头像
        // GRXX:"/api/app/user",
        TOXIANG:"/api/app/public/img",
        // 课程搜索
        ClassSearch:"/api/app/courseBasis",
        // 学习视频
        studyVideo:"/api/app/getPlayToken/video_id=",
        // 课程评论
        kechengPinLun:"/api/app/courseComment",
        // 消息通知
        msg:"/api/app/message/classifyMessage",
        // 收到消息通知
        getMsg:"/api/app/message/getMessage",
        GERENXIAOXI:"/api/app/feedback",
        // 一对一辅导
        otoCourse:"/api/app/otoCourse",
        // 课程订单
        KECHENGDINDAN:"/api/app/myOrder",
        // 课程详情
        KECHENGXIANGQING:"/api/app/myOrder/detail",

        // 学科+年级
        classify:"/api/app/module/attribute/1",
        // 上传图片
        shangchuanImg:"/api/app/public/img",
        GERENXIAOXI:"/api/app/feedback",//意见反馈
        
        GERENXIAOXI:"/api/app/feedback",
        // 一对一辅导
        otoCourse:"/api/app/otoCourse"
    },
    type: {
        GET: "get",
        POST: "post",
        PUT:"put",
        DELETE:"delete"
    }
}
export default urlType;