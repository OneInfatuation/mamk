import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// home文件夹：首页
// curriculum文件夹：课程
// appointmentRecord 文件夹：约课记录
// practice文件夹：练习

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('../views/Main.vue'),
    children: [
      {
        path: "/",
        name: "Home",
        component: () => import('../views/home/Home.vue'),     // 首页
      },
      {
        path: "/curriculum",
        name: "Curriculum",
        component: () => import('../views/curriculum/Curriculum.vue')  // 课程
      },
      {
        path: "/appointmentRecord",
        name: "AppointmentRecord",
        component: () => import('../views/appointmentRecord/AppointmentRecord.vue') // 约课记录
      },
      {
        path: "/practice",
        name: "Practice",
        component: () => import('../views/practice/Practice.vue')  // 练习
      },
      {
        path: "/mine",
        name: "Mine",
        component: () => import('../views/mine/Mine.vue') // 底部组件
      }
    ]
  },
  {path:'/study-calendar',name:"StudyCalendar",component:()=>import ('../views/home/StudyCalendar.vue')}
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
