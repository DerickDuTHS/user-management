<template>
  <a-table :data-source="store.data" :pagination="store.pagi" @change="store.pageChange" rowKey="id" >

    <a-table-column key="id" title="ID" data-index="id" />

    <a-table-column key="name" title="Name" data-index="name" />
    <a-table-column key="email" title="Email" data-index="email" />

    <a-table-column key="action" title="Action">
      <!-- <template #default="{ record }"> -->
        <template slot-scope="text, record">
          <span>
            <a-popconfirm title="Are you sure delete this user?" ok-text="Yes" cancel-text="No"  @confirm="() => store.delUser(record.id)">
              <a-button type="link" size="small">删除</a-button>
            </a-popconfirm>
            <a-divider type="vertical" />
            <a-button type="link" size="small" @click="store.showCheckModal(record.id)">查看</a-button>
            <a-divider type="vertical" />
            <a-button type="link" size="small"  @click="store.showEditModal(record.id)">编辑</a-button>
            
          </span>
      </template>
    </a-table-column>
  </a-table>
</template>
<script lang="ts" setup>
import {useUserStore} from "../store";
import { onMounted } from 'vue';


const store = useUserStore();

const columns = [
  { title: 'Id', dataIndex: 'id' },
  { title: 'Name', dataIndex: 'name' },
  { title: 'Email', dataIndex: 'email' },
  { title: 'Action', dataIndex: 'action' }
];

onMounted(() => {
  store.getData({pageSize: 10});
})


</script>

<style lang="less" scoped>

[data-doc-theme='light'] .ant-table-striped :deep(.table-striped) td {
  background-color: #fafafa;
}

[data-doc-theme='dark'] .ant-table-striped :deep(.table-striped) td {
  background-color: rgb(29, 29, 29);
}
</style>
  