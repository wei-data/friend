<template>
  <div class="CarouselMap">
    <div class="title" style="display: flex;justify-content: space-between;">
      <h3>轮播图</h3>
      <a-button type="primary" :icon="h(PlusOutlined)" @click="NewItem">新建</a-button>
    </div>
    <a-table :columns="columns" :data-source="dataSource" bordered pagination="bottomLeft">
      <!-- <template #bodyCell="{ column, text, record }">
      </template> -->
    </a-table>
  </div>
</template>

<script setup lang='ts'>
import { h } from 'vue';
import { PlusOutlined } from '@ant-design/icons-vue';
// @ts-ignore
import { cloneDeep } from 'lodash-es';
import { reactive, ref } from 'vue';
import type { UnwrapRef } from 'vue';

const columns = [
  {
    title: '组件名称',
    dataIndex: 'name',
    width: '25%',
  },
  {
    title: '组件id',
    dataIndex: 'ComId',
    width: '15%',
  },
  {
    title: '组件类型',
    dataIndex: 'types',
    width: '40%',
  },
  {
    title: '组件介绍',
    dataIndex: 'operation',
  },
];

const dataSource: any = ref([])
const NewItem = () => {
  dataSource.value.push({
    key: '1',
    name: 'af',
    ComId: 'asdf',
    types: '额哇',
  })
}
</script>

<style lang='less' scoped >
.title {
  margin: 20px 0 10px;

  h3 {
    font-weight: 700;
  }
}

.editable-row-operations a {
  margin-right: 8px;
}
</style>
