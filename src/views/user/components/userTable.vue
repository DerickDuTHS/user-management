<template>
    <a-table :columns="columns" :data-source="data" @resizeColumn="handleResizeColumn">
      
  
      <template #bodyCell="{ column, record }">
         <template v-if="column.key === 'id'">
          <a>
            {{ record.id }}
          </a>
        </template>
        <template v-if="column.key === 'name'">
          <a>
            {{ record.name }}
          </a>
        </template>

        <template v-if="column.key === 'email'">
          <a>
            {{ record.email }}
          </a>
        </template>
        
        <template v-else-if="column.key === 'action'">
          <span>
            <a>Invite 一 {{ record.name }}</a>
            <a-divider type="vertical" />
            <a>Delete</a>
            <a-divider type="vertical" />
            <a class="ant-dropdown-link">
              More actions
              <!-- <down-outlined /> -->
            </a>
          </span>
        </template>
      </template>
    </a-table>
  </template>
  <script lang="ts" setup>
  import { ref } from 'vue';
//   import { SmileOutlined, DownOutlined } from '@ant-design/icons-vue';
  import type { TableColumnsType } from 'ant-design-vue';
  
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
  
  const columns = ref<TableColumnsType>([
    {
      dataIndex: 'id',
      key: 'id',
      resizable: true,
      width: 100,
    },
    {
      dataIndex: 'name',
      key: 'name',
      resizable: true,
      width: 200,
    },
    {
      title: 'email',
      dataIndex: 'email',
      key: 'email',
      resizable: true,
      width: 400,
      minWidth: 200,
      maxWidth: 400,
    },
    {
      title: 'Action',
      key: 'action',
    },
  ]);
  function handleResizeColumn(w, col) {
    col.width = w;
  }
  </script>
  
  