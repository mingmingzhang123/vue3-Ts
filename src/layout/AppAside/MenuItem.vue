<template>
    <template v-for="(item,index) in menuList">
        <el-sub-menu v-if="item.children&&item.children.length>0" :index="item.path">
            <template #title>
                <el-icon>
                    <location />
                </el-icon>
                <span>{{item.meta.title}}</span>
            </template>
            <menuItem :menuList="item.children">
            </menuItem>
        </el-sub-menu>
        <el-menu-item v-else :index="item.path">
            <el-icon>
                <setting />
            </el-icon>
            <span>{{item.meta.title}}</span>
        </el-menu-item>
    </template>
</template>
<script setup lang="ts">
import { defineProps } from "vue"
import { Location, Setting } from '@element-plus/icons-vue'

defineProps(['menuList'])
</script>