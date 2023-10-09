<template>
    <span>
      <a-button type="link" size="small" @click="showModal">查看</a-button>
      <a-modal v-model:open="open" title="Basic Modal" @ok="handleOk">
        <Edit></Edit>
      </a-modal>
    </span>
  </template>
  <script lang="ts" setup>
  import { ref } from 'vue';
  import Edit from './Edit.vue'
  const open = ref<boolean>(false);
  
  const showModal = () => {
    open.value = true;
  };
  
  const handleOk = (e: MouseEvent) => {
    console.log(e);
    open.value = false;
  };
  </script>
  
  