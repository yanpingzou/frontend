import Main from '@/views/Main.vue';

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登录'
    },
    component: () => import('@/views/login.vue')
};

export const page404 = {
    path: '/*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: () => import('@/views/error-page/404.vue')
};

export const page403 = {
    path: '/403',
    meta: {
        title: '403-权限不足'
    },
    name: 'error-403',
    component: () => import('@//views/error-page/403.vue')
};

export const page500 = {
    path: '/500',
    meta: {
        title: '500-服务端错误'
    },
    name: 'error-500',
    component: () => import('@/views/error-page/500.vue')
};

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/home',
    component: Main,
    children: [
        { path: 'home', title: '首页', name: 'home_index', component: () => import('@/views/home/home.vue') },
        { path: 'indices/create', title: '新增索引', name: 'create-indices', component: () => import('@/views/indices/edit.vue') },
        { path: 'indices/:id(\\d+)', title: '编辑索引', name: 'edit-indices', component: () => import('@/views/indices/edit.vue') },
        { path: 'indices/:id(\\d+)/analysis', title: '日志性能分析', name: 'analysis-indices', component: () => import('@/views/indices/analysis.vue') },
        { path: 'indices/:id(\\d+)/checked', title: '校验信息', name: 'checked-indices', component: () => import('@/views/indices/checked.vue') },
    ]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
    {
        path: '/',
        name: 'home',
        icon: 'home',
        component: Main,
        children: [
            { path: 'home', title: '首页', name: 'home_index', component: () => import('@/views/home/home.vue') },
        ]
    },
    {
        path: '/indices',
        redirect: '/indices/list',
        icon: 'android-options',
        name: 'component',
        title: '日志概览',
        component: Main,
        children: [
            {
                path: 'list',
                icon: 'android-options',
                name: 'list-indices',
                title: '日志概览',
                component: () => import('@/views/indices/list.vue')
            }
        ]
    },
    {
        path: '/settings',
        icon: 'ios-gear',
        name: 'settings',
        title: '系统管理',
        component: Main,
        children: [
            {
                path: 'system',
                icon: 'settings',
                name: 'setting-system',
                title: '系统设置',
                component: () => import('@/views/page/page.vue')
            },
            {
                path: 'project',
                icon: 'person-stalker',
                name: 'setting-project',
                title: '项目管理',
                component: () => import('@/views/page/page.vue')
            }
        ]
    }
];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    loginRouter,
    otherRouter,
    ...appRouter,
    page500,
    page403,
    page404
];
