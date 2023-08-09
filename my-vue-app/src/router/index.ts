import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    // 历史储存，可以进行浏览器前进后退功能createWebHistory（）
    history: createWebHistory(),
    routes:[
        {
            path: '',
            redirect: '/LogIn' // 将根路径重定向到 '/home'
        },
        {
            path: '/LogIn',
            name: '登录页',
            component: () =>import('../views/LogIn.vue')
        },{
            path: '/Main',
            component: () => import('../views/Main.vue'),

        }]
})
// @ts-ignore
router.beforeEach((to: object, from: object, next: object) => {
    // 这里是你的权限控制逻辑
    // 检查登录状态、用户权限等
    // 如果符合条件，调用 next() 进行路由切换
    // 如果不符合条件，可以调用 next(false) 阻止路由切换
    let token = localStorage.getItem('token')
    // @ts-ignore
    if (!token && to.path !== '/login') {
        console.log("/login")
        // @ts-ignore
        next('/login')
    } else {
        console.log("/login")
        // @ts-ignore
        next()
    }
});
export default router;
