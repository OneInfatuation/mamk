import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// home文件夹：首页
// curriculum文件夹：课程
// appointmentRecord 文件夹：约课记录
// practice文件夹：练习
//mine文件夹：我的
const routes = [{
    path: '/',
    name: 'Main',
    component: () => import('../views/Main.vue'),
    children: [{
        path: "/", //首页
        name: "Home",
        component: () => import('../views/home/Home.vue')
      },
      {
        path: "/curriculum", //课程
        name: "Curriculum",
        component: () => import('../views/curriculum/Curriculum.vue') // 课程
      },
      {
        path: "/appointmentRecord", //约课记录
        name: "AppointmentRecord",
        component: () => import('../views/appointmentRecord/AppointmentRecord.vue'),
        meta: {
          navTitle: "约课记录"
        }
      },
      {
        path: "/practice", //练习
        name: "Practice",
        component: () => import('../views/practice/Practice.vue'),
        meta: {
          navTitle: "练习"
        }
      },
      {
        path: "/mine", //我的
        name: "Mine",
        component: () => import('../views/mine/Mine.vue')
      }
    ]
  },
  {
    path: "/coaching", //一对一辅导页面
    name: "Coaching",
    component: () => import('../views/appointmentRecord/Coaching.vue'),
    meta: {
      navTitle: "一对一辅导"
    }
  },
  {
    path: "/examinationPlace", //考点专练页面
    name: "ExaminationPlace",
    component: () => import('../views/practice/grids/ExaminationPlace.vue'),
    meta: {
      navTitle: "考点专练"
    }
  },
  {
    path: "/setExercises", //套卷练习页面
    name: "SetExercises",
    component: () => import('../views/practice/grids/SetExercises.vue'),
    meta: {
      navTitle: "套卷练习"
    }
  },
  {
    path: "/simulationTest", //仿真模考页面
    name: "SimulationTest",
    component: () => import('../views/practice/grids/SimulationTest.vue'),
    meta: {
      navTitle: "仿真模考"
    }
  },
  {
    path: "/wrongExercises", //错题练习页面
    name: "WrongExercises",
    component: () => import('../views/practice/grids/WrongExercises.vue'),
    meta: {
      navTitle: "错题练习"
    }
  },
  {
    path: "/evaluationRecord", //测评记录页面
    name: "EvaluationRecord",
    component: () => import('../views/practice/grids/EvaluationRecord.vue'),
    meta: {
      navTitle: "测评记录"
    }
  },
  {
    path: "/exerciseCollection", //习题收藏页面
    name: "ExerciseCollection",
    component: () => import('../views/practice/grids/ExerciseCollection.vue'),
    meta: {
      navTitle: "习题收藏"
    }
  },
  {
    path: "/study-calendar", //学习日历
    name: "StudyCalendar",
    component: () => import('../views/home/StudyCalendar.vue'),
    meta: {
      navTitle: "学习日历"
    }
  },
  {
    path: "/emails", //邮件
    name: "Emails",
    component: () => import('../views/Emails.vue')
  },
  {
    path: "/details", //习题收藏页面
    name: "Details",
    component: () => import('../views/curriculum/details.vue')
  },
  {
    path: "/search", //习题收藏页面
    name: "search",
    component: () => import('../views/curriculum/search.vue'),
    meta: {
      navTitle: "习题收藏"
    }
  },

]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;