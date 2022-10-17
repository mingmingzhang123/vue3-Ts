import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'



const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'layout',
        component: Layout,
        redirect: '/dashboard',
        children: [
            {
                path: 'dashboard',
                name: 'dashboard',
                component: () => import("@/views/dashboard/index.vue"),
                meta: {
                    title: '首页',
                    icon: 'el-icon-s-home'
                }
            }
        ]
    },
    {
        path: '/system',
        name: 'system',
        component: Layout,
        redirect: '/system/department',
        meta: {
            title: '系统管理',
            icon: 'el-icon-document'
        },
        children: [
            {
                path: 'department',
                name: 'department',
                component: () => import("@/views/system/department/index.vue"),
                meta: {
                    title: '机构管理',
                    icon: 'el-icon-document'
                }
            },
            {
                path: 'userList',
                name: 'userList',
                component: () => import("@/views/system/userList/index.vue"),
                meta: {
                    title: '用户管理',
                    icon: 'el-icon-document'
                }
            },
            {
                path: 'roleList',
                name: 'roleList',
                component: () => import("@/views/system/roleList/index.vue"),
                meta: {
                    title: '角色管理',
                    icon: 'el-icon-document'
                }
            },
            {
                path: 'menuList',
                name: 'menuList',
                component: () => import("@/views/system/menuList/index.vue"),
                meta: {
                    title: '权限管理',
                    icon: 'el-icon-document'
                }
            }
        ]
    }

]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router