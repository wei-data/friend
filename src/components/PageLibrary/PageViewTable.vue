<template>
  <div class="table">
    <!-- <a-button class="editable-add-btn" style="margin-bottom: 8px" @click="handleAdd">Add</a-button> -->
    <a-table bordered :data-source="dataSource" :columns="columns" :pagination="false">
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'operation'">
          <a-popconfirm v-if="dataSource.length" :title="'确定删除' + dataSource[0].name + '吗?'"
            @confirm="onDelete(record.key)">
            <a>删除</a>
          </a-popconfirm>
        </template>
      </template>
    </a-table>
  </div>
</template>

<script lang="ts" setup>
//@ts-ignore 引入defineProps
import { defineProps } from 'vue';
import { ref } from 'vue';
import type { Ref } from 'vue';
// @ts-ignore
import { cloneDeep } from 'lodash-es';

// 解构数据
const { id, pageName } = defineProps({
  id: {
    type: Number, // 接收的参数类型
    default: 1, //默认值
  },
  pageName: {
    type: String, // 接收的参数类型
    default: '', //默认值
  }
})


interface DataItem {
  key: string;
  name: string;
  ViewId: number;
  ComId: number;
}

const columns = [
  {
    title: '页面名称',
    dataIndex: 'name',
    width: '30%',
  },
  {
    title: '页面id',
    dataIndex: 'ViewId',
  },
  {
    title: '页面模板id',
    dataIndex: 'ComId',
  },
  {
    title: '操作',
    dataIndex: 'operation',
  },
]

const dataSource: Ref<DataItem[]> = ref([
  {
    key: '0',
    name: pageName,
    ViewId: id,
    ComId: 2,
  }
])

const onDelete = (key: string) => {
  dataSource.value = dataSource.value.filter(item => item.key !== key);
};
</script>

<style lang="less" scoped>
.editable-cell {
  position: relative;

  .editable-cell-input-wrapper,
  .editable-cell-text-wrapper {
    padding-right: 24px;
  }

  .editable-cell-text-wrapper {
    padding: 5px 24px 5px 5px;
  }

  .editable-cell-icon,
  .editable-cell-icon-check {
    position: absolute;
    right: 0;
    width: 20px;
    cursor: pointer;
  }

  .editable-cell-icon {
    margin-top: 4px;
    display: none;
  }

  .editable-cell-icon-check {
    line-height: 28px;
  }

  .editable-cell-icon:hover,
  .editable-cell-icon-check:hover {
    color: #108ee9;
  }

  .editable-add-btn {
    margin-bottom: 8px;
  }
}

.editable-cell:hover .editable-cell-icon {
  display: inline-block;
}
</style>
