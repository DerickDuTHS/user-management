<template>
    <a-table :data-source="data">
      
        <a-table-column key="id" title="ID" data-index="id" />
        
      <a-table-column key="name" title="Name" data-index="name" />
      <a-table-column key="email" title="Email" data-index="email" />
      
      <a-table-column key="action" title="Action">
        <template #default="{ record }">
          <span>
            <a-popconfirm title="Are you sure delete this user?" ok-text="Yes" cancel-text="No">
      <a-button type="link" size="small">删除</a-button>
    </a-popconfirm>
            <a-divider type="vertical" />
            <a-button type="link" size="small">查看</a-button>
            <a-divider type="vertical" />
            <a-button type="link" size="small">编辑</a-button>
          </span>
        </template>
      </a-table-column>
    </a-table>
  </template>
<script lang="ts" setup>
const columns = [
    { title: 'Id', dataIndex: 'id' },
    { title: 'Name', dataIndex: 'name' },
    { title: 'Email', dataIndex: 'email' },
    {title: 'Action', dataIndex: 'action' }
];
const data = [
    {
        key: '1',
        id: '1',
        name: 'John Brown',
        email: 'jb@myhexin.com',

    },
    {
        key: '2',
        id: '2',
        name: 'Jim Green',
        email: 'jg@myhexin.com',

    },
    {
        key: '3',
        id: '3',
        name: 'Joe Black',
        email: 'jblk@myhexin.com',

    },
];
</script>
<style scoped>
[data-doc-theme='light'] .ant-table-striped :deep(.table-striped) td {
    background-color: #fafafa;
}

[data-doc-theme='dark'] .ant-table-striped :deep(.table-striped) td {
    background-color: rgb(29, 29, 29);
}
</style>
  