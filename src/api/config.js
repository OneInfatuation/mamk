const urlType = {
    // 配置API路径
    url: {
        // 例如：
        // LOGIN:""
        // 轮播图
       Banner:"/api/app/banner",
    //    获取首页数据
       AppIndex:"/api/app/recommend/appIndex",
    // 特色课分类
    //    courseClassify:"/api/app/courseClassify",
    // 特色课数据获取
    courseBasis:"/api/app/courseBasis?page=1&limit=10&",
        //特色课内容获取
    contentCollect:"/api/app/myStudy/2",
    // 登录接口
    LOGIN:"/api/app/login",    
    // contentCollect:"/api/app/myStudy/2" 
    // 课程详情数据获取
    courseInfo:"/api/app/courseInfo",
    // 关注老师数据接收
    Guanzhu:"/api/app/collect"

    },
    type: {
        GET: "get",
        POST: "post"
    }
}
export default urlType;