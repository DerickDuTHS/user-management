<script setup lang="ts">
// TODO 获取菜单列表，根据获取到的列表渲染左侧菜单(ul部分，可以使用ant-design-vue的Menu组件)
// TODO 调整css样式，实现三栏布局，使得header在上， 下面部分撑满， 下面的左侧菜单固定在左侧，右侧内容自适应
// import { getMenus } from "./api";
</script>

<template>
    <div id="app">
        <a-layout>
            <a-layout-header class="header">
                <div class="logo" />
                <a-menu theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }">
                    <a-menu-item key="1">
                        <div><router-link to="/">Home</router-link></div>
                    </a-menu-item>

                    <a-menu-item key="2">
                        <div><router-link to="/user">User</router-link></div>
                    </a-menu-item>

                </a-menu>

            </a-layout-header>
            <a-layout>
                <a-layout-sider width="200" style="background: #fff">
                    <a-menu mode="inline" :style="{ height: '100%', borderRight: 0 }">

                        <a-menu-item key="sub1">

                            <span>

                                申请记录管理
                            </span>

                        </a-menu-item>
                        <a-menu-item key="sub2">

                            <span>

                                用户管理
                            </span>

                        </a-menu-item>

                        <a-sub-menu key="sub3">
                            <template #title>
                                <span>
                                    操作流管理
                                </span>
                            </template>
                            <a-menu-item key="5">字典管理</a-menu-item>
                            <a-menu-item key="6">接口管理</a-menu-item>
                            <a-menu-item key="7">操作员</a-menu-item>

                        </a-sub-menu>
                        <a-menu-item key="sub4">

                            <span>
                                审批流管理
                            </span>

                        </a-menu-item>
                    </a-menu>
                </a-layout-sider>
                <a-layout style="padding: 0 24px 24px">
                    <router-view></router-view>
                </a-layout>
            </a-layout>
        </a-layout>
    </div>
</template>

<style scoped lang="less">
#app {
    width: 100%;
}
</style>
