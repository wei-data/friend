<script setup lang="ts">
import { ref } from 'vue';
import type { Dayjs } from 'dayjs';
type RangeValue = [Dayjs, Dayjs];
const value2 = ref<RangeValue>();

// 选择器
const value1 = ref('总公司');
const focus = () => {
  console.log('focus');
};
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const valueRamiMedia = ref('无数据');
const focusRamiMedia = () => {
  console.log('focus');
};
const handleChangeRamiMedia = (value: string) => {
  console.log(`selected ${value}`);
};

const valueCorporation = ref('企业号');
const focusCorporation = () => {
  console.log('focus');
};
const handleChangeCorporation = (value: string) => {
  console.log(`selected ${value}`);
};


// 表格
const columns = [
  {
    title: '序号',
    dataIndex: 'SerialNumber',
    key: 'SerialNumber',
  },
  {
    title: '文章标题',
    dataIndex: 'ArticleTitle',
    key: 'ArticleTitle',
    width: 600,
  },
  {
    title: '文章导入日期',
    dataIndex: 'ImportDate',
    key: 'ImportDate',
    ellipsis: true,
  },
  {
    title: '转发量',
    dataIndex: 'ForwardingVolume',
    key: 'ForwardingVolume',
    ellipsis: true,
  },
  {
    title: '阅读量',
    dataIndex: 'ReadingQuantity',
    key: 'ReadingQuantity',
    ellipsis: true,
  },
];

const data = [
  {
    SerialNumber: 1,
    ArticleTitle: 'John Brown',
    ImportDate: 32,
    ForwardingVolume: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
    ReadingQuantity:'New York No. 1 Lake Park, New York No. 1 Lake Park'
  },
  {
    SerialNumber: 2,
    ArticleTitle: 'John Brown',
    ImportDate: 32,
    ForwardingVolume: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
    ReadingQuantity:'New York No. 1 Lake Park, New York No. 1 Lake Park'
  },
  {
    SerialNumber: 3,
    ArticleTitle: 'John Brown',
    ImportDate: 32,
    ForwardingVolume: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
    ReadingQuantity:'New York No. 1 Lake Park, New York No. 1 Lake Park'
  }
];

// 分页器
const current1 = ref<number>(1);
const onChange = (pageNumber: number) => {
  console.log('Page: ', pageNumber);
};
</script>

<template>
  <div class="institution">
    <span>时间选择</span>
    <a-range-picker style="margin: 0 10px" v-model:value="value2" show-time />
    <span>分公司</span>
    <a-select
        ref="select"
        v-model:value="value1"
        style="width: 120px;margin: 0 10px"
        @focus="focus"
        @change="handleChange"
    >
      <a-select-option value="总公司">总公司</a-select-option>
      <a-select-option value="上海分公司">上海分公司</a-select-option>
      <a-select-option value="北京分公司">北京分公司</a-select-option>
      <a-select-option value="河北分公司">河北分公司</a-select-option>
    </a-select>
    <span>中支</span>
    <a-select
        ref="select"
        v-model:value="valueRamiMedia"
        style="width: 120px;margin: 0 10px"
        @focus="focusRamiMedia"
        @change="handleChangeRamiMedia"
    >
      <a-select-option value="无数据">无数据</a-select-option>
    </a-select>
    <span>所属系统</span>
    <a-select
        ref="select"
        v-model:value="valueCorporation"
        style="width: 120px;margin: 0 10px"
        @focus="focusCorporation"
        @change="handleChangeCorporation"
    >
      <a-select-option value="企业号">企业号</a-select-option>
      <a-select-option value="镖保罗盘">镖保罗盘</a-select-option>
    </a-select>
    <div class="btn">
      <a-button style="margin: 0 10px" type="primary">查询</a-button>
      <a-button>导出</a-button>
    </div>
  </div>
  <a-table style="margin-top: 10px;" :columns="columns" :data-source="data" :pagination="false">
    <template #bodyCell="{ column, text }">
      <template v-if="column.dataIndex === 'name'">
        <a>{{ text }}</a>
      </template>
    </template>
  </a-table>
  <a-pagination style="margin-top: 20px" v-model:current="current1" show-quick-jumper :total="data.length" @change="onChange" />
</template>

<style lang="scss" scoped>
.institution{
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>