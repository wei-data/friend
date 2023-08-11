<template>
  <div class="PageRadios">
    <h3 class="title">页面组件列表</h3>
    <a-radio-group v-model:value="radio" style="width:100%">
      <a-table :columns="columns" :data-source="tableData1" :pagination="false">
        <template #bodyCell="{ column, text }">
          <template v-if="column.key === 'name'">
            <a-radio :value="text">{{ text }}</a-radio>
          </template>
        </template>
      </a-table>
    </a-radio-group>
    <component :is="activePage" style="margin: 20px 0;"></component>
  </div>
</template>

<script setup lang='ts'>
import Column from './Column.vue';
import Content from './Content.vue';
import CarouselMap from './CarouselMap.vue';
import { ref, watch } from 'vue'
import type { TableColumnsType } from 'ant-design-vue';
const radio = ref('栏目')
const activePage = ref(Column)

const columns: TableColumnsType = [
  { title: '组件名称', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
  { title: '组件id', width: 100, dataIndex: 'comId', key: 'comId', fixed: 'left' },
  { title: '组件类型', width: 100, dataIndex: 'types', key: 'types', fixed: 'left' },
  { title: '组件介绍', width: 100, dataIndex: 'introduce', key: 'introduce', fixed: 'left' }]

const tableData1 = ref([
  {
    name: "栏目",
    comId: 1,
    types: 1,
    introduce: "页面栏目简介"
  }, {
    name: "内容",
    comId: 2,
    types: 1,
    introduce: "页面内容组件"
  }, {
    name: "轮播图",
    comId: 3,
    types: 1,
    introduce: "轮播图组件"
  }
])

watch(radio, (newVal: any) => {
  if (newVal === "栏目") {
    activePage.value = Column
  } else if (newVal === "内容") {
    activePage.value = Content
  } else if (newVal === "轮播图") {
    activePage.value = CarouselMap
  }
})
</script>

<style lang='less' scoped >
.title {
  margin: 20px 0 10px;
  font-weight: 700;
}
</style>
