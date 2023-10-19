<template>
    <div>

        <a-space wrap>
            <a-input-search :style="{ width: '500px' }" v-model:value="store.keyword" placeholder="input search text" enter-button="Search" size="large" style="padding-top: 8px; padding-bottom: 8px;"
            @search="onSearch" />
            <a-button size="large" @click="() => store.showCreateModal()">创建用户</a-button>
        </a-space>
        <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
            <UserTable />
            <ModalForm v-if="store.isModalVisible" />
        </a-layout-content>
    </div>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue';
import UserTable from './components/UserTable1.vue';
import ModalForm from './components/ModalWithForm.vue';
import { useUserStore } from './store';
const store = useUserStore();
const onSearch = () => {
    store.getData();
};

</script>