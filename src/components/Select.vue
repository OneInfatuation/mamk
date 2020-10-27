<template>
  <div>
    <div class="curriculum_nav">
      <van-dropdown-menu>
        <!-- 分类 -->
        <van-dropdown-item title="分类">
          <van-cell>
            <template>
              <div>
                <!-- 年级分类 -->
                <div class="selectBox">
                  <p>年级</p>
                  <div>
                    <van-tag class="tag" type="primary" size="large" color="#eee" text-color="black" 
                      >初一</van-tag
                    >
                    <van-tag class="tag" type="primary" size="large" color="#eee" text-color="black" 
                      >初二</van-tag
                    >
                    <van-tag class="tag" type="primary" size="large" color="#eee" text-color="black" 
                      >初三</van-tag
                    >
                    <van-tag class="tag" type="primary" size="large" color="#eee" text-color="black" 
                      >高一</van-tag
                    >
                    <van-tag class="tag" type="primary" size="large" color="#eee" text-color="black" 
                      >高二</van-tag
                    >
                  </div>
                </div>
                <!-- 学科分类 -->
                <div  class="selectBox">
                  <p>学科</p>
                  <div>
                    <van-tag class="tag" type="primary" size="large" color="#eee" text-color="black" 
                      >语文</van-tag
                    >
                    <van-tag class="tag" type="primary" size="large" color="#eee" text-color="black" 
                      >数学</van-tag
                    >
                    <van-tag class="tag" type="primary" size="large" color="#eee" text-color="black" 
                      >英语</van-tag
                    >
                    <van-tag class="tag" type="primary" size="large" color="#eee" text-color="black" 
                      >物理</van-tag
                    >
                    <van-tag class="tag" type="primary" size="large" color="#eee" text-color="black" 
                      >化学</van-tag
                    >
                  </div>
                </div>
                <!-- 按钮 -->
                <div>
                    <van-button type="primary" class="selectBox_button" >重置</van-button>
                    <van-button type="primary" class="selectBox_button">选择</van-button>
                </div>
              </div>
            </template>
          </van-cell>
        </van-dropdown-item>
        <!-- 排序 -->
        <van-dropdown-item v-model="value" :options="option"/>
        <!-- 筛选 -->
        <van-dropdown-item title="筛选" ref="item">
          <van-cell center>
            <template #right-icon>
              <div class="selectTag">
                <div class="tag" type="primary" size="large"
                  v-for="(item,index) in selectList" :key="index"
                  
                >{{item}}</div>
              </div>
            </template>
          </van-cell>
        </van-dropdown-item>
      </van-dropdown-menu>
    </div>

    <div class="curriculum_list">
      <div v-for="(item,index) in list" :key="index" class="curriculum_list_content" @click="gotoDetials(item)">
        <h3>{{item.title}}</h3>
        <p><img src="../assets/curriculum/time.png"> {{item.date}} </p>
        <div class="curriculum_list_content_name">
          <p style="display:inline-block;width:2rem;height:2rem;margin-top:1rem"><img :src="item.pic" width="100%"></p>
          <p>{{item.name}}</p>
        </div>
        <hr>
        <p>{{item.number}}人已报名 <span class="free">免费</span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
      option: [
        { text: "综合排序", value: 0 },
        { text: "最新", value: 1 },
        { text: "最热", value: 2 },
        { text: "价格从低到高", value: 3 },
        { text: "价格从高到低", value: 4 },
      ],
      list:[{title:"李老师16号到22号地理大课堂开课了",date:"03月26日 18:30 ~ 03月22日 15:00",details:"共8课时",name:"李青",number:134,pic:"http://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg"},
          {title:"李老师16号到22号地理大课堂开课了",date:"03月26日 18:30 ~ 03月22日 15:00",details:"共8课时",name:"李青",number:134,pic:"http://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg"},
          {title:"李老师16号到22号地理大课堂开课了",date:"03月26日 18:30 ~ 03月22日 15:00",details:"共8课时",name:"李青",number:134,pic:"http://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg"},
          {title:"李老师16号到22号地理大课堂开课了",date:"03月26日 18:30 ~ 03月22日 15:00",details:"共8课时",name:"李青",number:134,pic:"http://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg"}
      ],
      selectList:[
        "全部","大班课","小班课","公开课","点播课","面授课","音频课",
        "系统课","图文课","会员课"
      ]

    };
  },
  methods: {
    onConfirm() {
      this.$refs.item.toggle();
    },
    gotoDetials(item){
      this.$router.push({
        path:"/details",
        query:{
          title:item.title,
          date:item.date,
          name:item.name,
          details:item.details,
          number:item.number,
          pic:item.pic
        }
      })
    }
  },
};
</script>

<style>
.curriculum_nav {
  width: 100%;
  margin-top: 3rem;
  position: fixed;
  top: 0px;
  left: 0px;
  font-size: 1.5rem;
}
.curriculum_list {
  width: 100%;
  height: 100%;
  background: #eee;
    border: 1px solid transparent;
    margin-top: 7rem;
}
.curriculum_list_content{
  width: 90%;
  height: 12rem;
  margin: 10px auto;
  margin-bottom: 3rem;
  background: white;
  border-radius: 10px;
  border: 1px solid transparent;
}
.curriculum_list_content>p,h3,hr{
  width: 90%;
  margin: 3px auto;
}
.curriculum_list_content_name{
  width: 90%;
  margin: 3px 1.5rem;
  display: inline-flex;
  justify-content: flex-start;
  align-items:center ;
}
/* .curriculum_list_content h4{

} */
.free{
  float: right;
  color: green;
  font-size: 20px;
}
.selectTag {
  width: 100%;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}
.selectTag .tag {
  width: 4rem;
  height: 2rem;
  margin: 10px 20px;
  text-align:center;
  background: #F5F5F5;
}
.selectBox{
  width: 90%;
  height: 8rem;
  border-bottom: 1px solid lightgrey;
  margin: 10px auto;
}
.selectBox .tag{
  width: 30px;
  height: 20px;
  margin: 5px 20px;
}
.selectBox_button{
  width: 40%;
  margin: 10px;
}
</style>