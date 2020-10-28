const urlType = {
    // 配置API路径
    url:{
        // 例如：
        // LOGIN:""
        // 轮播图
       Banner:"/api/app/banner",
    //    获取首页数据
       AppIndex:"/api/app/recommend/appIndex",
    // 特色课分类
    //    courseClassify:"/api/app/courseClassify",
    // 特色课数据获取
    courseBasis:"/api/app/courseBasis?page=1&limit=10&"
    },
    type:{
        GET:"get",
        POST:"post"
    }
}
export default urlType;