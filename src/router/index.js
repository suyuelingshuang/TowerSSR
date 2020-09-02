import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter(params) {
  return new Router({
    mode:'history',
    routes: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '我的任务'
        },
        component: () => import('../components/Home.vue')
      }, {
        path: '/project',
        name: 'project',
        meta: {
          title: '项目'
        },
        component: () => import('../components/Project.vue')
      }, {
        path: '/dynamic',
        name: 'dynamic',
        meta: {
          title: '动态'
        },
        component: () => import('../components/Dynamic.vue')
      }, {
        path: '/notice',
        name: 'notice',
        meta: {
          title: '通知'
        },
        component: () => import('../components/Notice.vue')
      }, {
        path: '/team',
        name: 'team',
        meta: {
          title: '团队'
        },
        component: () => import('../components/Team.vue')
      }, {
        path: '/editProject/:id',
        name: 'editProject',
        meta: {
          title: '项目详情'
        },
        component: () => import('../components/ProjectEdit.vue')
      }, {
        path: '/addProject',
        name: 'addProject',
        meta: {
          title: '新增项目'
        },
        component: () => import('../components/ProjectAdd.vue')
      }, {
        path: '/addTask/:id',
        name: 'addTask',
        meta: {
          title: '新增任务'
        },
        component: () => import('../components/TaskAdd.vue')
      }, {
        path: '/addDiscuss/:id',
        name: 'addDiscuss',
        meta: {
          title: '新增讨论'
        },
        component: () => import('../components/DiscussAdd.vue')
      }, {
        path: '/addMember/',
        name: 'addMember',
        meta: {
          title: '添加成员'
        },
        component: () => import('../components/MemberAdd.vue')
      }, {
        path: '*',
        redirect: '/home'
      }]
  })
}
