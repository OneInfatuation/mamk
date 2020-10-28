const urlType = {
    // 配置API路径
    url: {
        // 例如：
        // LOGIN:""
        // 轮播图
        Banner: "/api/app/banner",
        //    获取首页数据
        AppIndex: "/api/app/recommend/appIndex",
        //    获取课程详情数据
        courseDetail: '/api/app/courseInfo/',
        // 登录接口
        LOGIN:"/api/app/login",
    },
    type: {
        GET: "get",
        POST: "post"
    }
}
export default urlType;