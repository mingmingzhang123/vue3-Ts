<template>
    <el-container>
        <el-header class="header">
            <app-header></app-header>
        </el-header>
        <el-container>
            <el-aside width="200px" class="aside">
                <AppAside></AppAside>
            </el-aside>
            <el-main class="main">
                <app-main></app-main>
            </el-main>
        </el-container>
    </el-container>
</template>
<script setup lang="ts">
import AppHeader from "./AppHeader/index.vue"
import AppAside from "./AppAside/index.vue"
import AppMain from "./AppMain/index.vue"
</script>



<style lang="scss" scoped>
.el-container {
    height: 100%;
}

.aside {
    background-color: #304156;
}

.header {
    background-color: chocolate;
}

.main {
    background-color: darkcyan;
}
</style>
  