// 引入vue-router对象
import { createRouter, createWebHistory } from 'vue-router';
// import Layout from '@/layout';
/**
  * 定义路由数组
  */
const routes = [
  // { // 404路由
  //   name: '404',
  //   path: '404',
  //   component: () => import('/@/views/error/404.vue'),
  // },
  // { // 401路由
  //   name: '401',
  //   path: '401',
  //   component: () => import('@/views/error/401.vue'),
  //   hidden: true,
  // },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('@/views/ListDetail.vue'),
  },
];

/**
  * 创建路由
  */
const router = createRouter({
  // hash模式：createWebHashHistory，
  // history模式：createWebHistory
  history: createWebHistory('/'),
  // history:createWebHashHistory(),
  routes,
});

/**
  * 路由守卫
  */
router.beforeEach((guard) => {
  // beforeEach.checkAuth(guard, router);
});

/**
  * 路由错误回调
  */
router.onError((handler) => {
  console.log('error:', handler);
});

/**
  * 输出对象
  */
export default router;
