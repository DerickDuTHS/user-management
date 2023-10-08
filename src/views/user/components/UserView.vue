<template>
    <a-layout>
        <a-layout-header class="header">
            <div class="logo" />
            <a-menu v-model:selectedKeys="selectedKeys1" theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }">
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
                <a-menu v-model:selectedKeys="selectedKeys2" v-model:openKeys="openKeys" mode="inline"
                    :style="{ height: '100%', borderRight: 0 }">

                    <a-menu-item key="sub1">

                        <span>
                            <user-outlined />
                            申请记录管理
                        </span>

                    </a-menu-item>
                    <a-menu-item key="sub2">

                        <span>
                            <user-outlined />
                            用户管理
                        </span>

                    </a-menu-item>

                    <a-sub-menu key="sub3">
                        <template #title>
                            <span>
                                <laptop-outlined />
                                操作流管理
                            </span>
                        </template>
                        <a-menu-item key="5">字典管理</a-menu-item>
                        <a-menu-item key="6">接口管理</a-menu-item>
                        <a-menu-item key="7">操作员</a-menu-item>

                    </a-sub-menu>
                    <a-menu-item key="sub4">

                        <span>
                            <notification-outlined />
                            审批流管理
                        </span>

                    </a-menu-item>
                </a-menu>
            </a-layout-sider>
            <a-layout style="padding: 0 24px 24px">
                <a-space wrap>
                <a-input-search :style="{ width: '500px' }" v-model:value="value" placeholder="input search text" enter-button="Search" size="large" style="padding-top: 8px; padding-bottom: 8px;"
                    @search="onSearch" />
                    <a-button size="large">创建用户</a-button>
                </a-space>
                <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
                    <usertable/>
                </a-layout-content>
            </a-layout>
        </a-layout>
    </a-layout>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue';
import usertable from './UserTable1.vue';
const value = ref<string>('');

const onSearch = (searchValue: string) => {
    console.log('use value', searchValue);
    console.log('or use this.value', value.value);
};

// export default {
//     name: 'AppTest',
//     components: {
//         usertable
//     }
// }
</script>