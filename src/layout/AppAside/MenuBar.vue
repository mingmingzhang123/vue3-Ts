<template>
        <el-menu 
        :default-active="$route.path"
        active-text-color="#ffd04b"
        background-color="#304156"
        router
        text-color="#fff"
        >
        <MenuItem :menuList="menuList"></MenuItem>
        </el-menu>

</template>
<script setup lang="ts">
import {reactive} from "vue"
    import MenuItem from "./MenuItem.vue"
    // 定义菜单数据
const menuList = reactive([
  {
    path: '/dashboard',
    component: "Layout",
    meta: {
      title: "首页",
      icon: "el-icon-s-home",
      roles: ["sys:manage"]
    },
    children: []
  },
  {
    path: "/system",
    component: "Layout",
    alwaysShow: true,
    name: "system",
    meta: {title: "系统管理", icon: "el-icon-menu", roles: ["sys:manage"], parentId: 0,},
    children: [{
      path: "/system/department",
      component: "/system/department/department",
      alwaysShow: false,
      name: "department",
      meta: {title: "机构管理", icon: "el-icon-document", roles: ["sys:dept"], parentId: 17,},
    }, {
      path: "/system/userList",
      component: "/system/User/UserList",
      alwaysShow: false,
      name: "userList",
      meta: {title: "用户管理", icon: "el-icon-s-custom", roles: ["sys:user"], parentId: 17,},
    }, {
      path: "/system/roleList",
      component: "/system/Role/RoleList",
      alwaysShow: false,
      name: "roleList",
      meta: {title: "角色管理", icon: "el-icon-s-tools", roles: ["sys:role"], parentId: 17,},
    }, {
      path: "/system/menuList",
      component: "/system/Menu/MenuList",
      alwaysShow: false,
      name: "menuList",
      meta: {title: "权限管理", icon: "el-icon-document", roles: ["sys:menu"], parentId: 17,},
    },],
  }, {
    path: "/goods",
    component: "Layout",
    alwaysShow: true,
    name: "goods",
    meta: {title: "商品管理", icon: "el-icon-document", roles: ["sys:goods"], parentId: 0,},
    children: [{
      path: "/goodCategory",
      component: "/goods/goodsCategory/goodsCategoryList",
      alwaysShow: false,
      name: "goodCategory",
      meta: {
        title: "商品分类",
        icon: "el-icon-document", roles: ["sys:goodsCategory"], parentId: 34,
      },
    },],
  }, {
    path: "/systenConfig",
    component: "Layout",
    alwaysShow: true,
    name: "systenConfig",
    meta: {title: "系统工具", icon: "el-icon-document", roles: ["sys:systenConfig"], parentId: 0,},
    children: [{
      path: "/document",
      component: "/system/config/systemDocument",
      alwaysShow: false,
      name: "http://42.193.158.170:8089/swagger-ui/index.html",
      meta: {title: "接口文档", icon: "el-icon-document", roles: ["sys:document"], parentId: 42,},
    },],
  },
])
</script>