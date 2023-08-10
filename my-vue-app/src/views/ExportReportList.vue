<script setup lang="ts">
import {ref} from "vue";

const columns = [
  {
    title: '序号',
    dataIndex: 'SerialNumber',
    key: 'SerialNumber',
  },
  {
    title: '开始时间',
    dataIndex: 'StartTime',
    key: 'StartTime',
  },
  {
    title: '结束时间',
    dataIndex: 'EndTime',
    key: 'EndTime',
    ellipsis: true,
  },
  {
    title: '分公司',
    dataIndex: 'SubsidiaryCompany',
    key: 'SubsidiaryCompany',
    ellipsis: true,
  },
  {
    title: '支公司/本部',
    dataIndex: 'headquarters',
    key: 'headquarters',
    ellipsis: true,
  },
  {
    title: '操作人',
    dataIndex: 'operator',
    key: 'operator',
    ellipsis: true,
  },
  {
    title: '报表名称',
    dataIndex: 'ReportName',
    key: 'ReportName',
    ellipsis: true,
  },
  {
    title: '生成时间',
    dataIndex: 'GenerationTime',
    key: 'GenerationTime',
    ellipsis: true,
  },
  {
    title: '操作',
    key: 'operation',
    width: 100,
  },
];

const data = [
  {
    SerialNumber: 1,
    StartTime: '2023-05-12',
    EndTime: '2023-12-10',
    SubsidiaryCompany: '',
    headquarters:'',
    operator:'银行业务员版',
    ReportName:'文章使用统计报表',
    GenerationTime:'2023-05-11 16:55:30',
  }, {
    SerialNumber: 2,
    StartTime: '2023-05-12',
    EndTime: '2023-12-10',
    SubsidiaryCompany: '',
    headquarters:'',
    operator:'银行业务员版',
    ReportName:'文章使用统计报表',
    GenerationTime:'2023-05-11 16:55:30',
  }, {
    SerialNumber: 3,
    StartTime: '2023-05-12',
    EndTime: '2023-12-10',
    SubsidiaryCompany: '',
    headquarters:'',
    operator:'银行业务员版',
    ReportName:'文章使用统计报表',
    GenerationTime:'2023-05-11 16:55:30',
  }, {
    SerialNumber: 4,
    StartTime: '2023-05-12',
    EndTime: '2023-12-10',
    SubsidiaryCompany: '',
    headquarters:'',
    operator:'银行业务员版',
    ReportName:'文章使用统计报表',
    GenerationTime:'2023-05-11 16:55:30',
  }, {
    SerialNumber: 5,
    StartTime: '2023-05-12',
    EndTime: '2023-12-10',
    SubsidiaryCompany: '',
    headquarters:'',
    operator:'银行业务员版',
    ReportName:'文章使用统计报表',
    GenerationTime:'2023-05-11 16:55:30',
  }, {
    SerialNumber: 6,
    StartTime: '2023-05-12',
    EndTime: '2023-12-10',
    SubsidiaryCompany: '',
    headquarters:'',
    operator:'银行业务员版',
    ReportName:'文章使用统计报表',
    GenerationTime:'2023-05-11 16:55:30',
  },
];

// 分页器
const current1 = ref<number>(1);
const onChange = (pageNumber: number) => {
  console.log('Page: ', pageNumber);
};
</script>

<template>
  <a-table :columns="columns" :data-source="data" :pagination="false">
    <template #bodyCell="{ column }">
      <template v-if="column.key === 'operation'">
        <a-button type="link" block>下载</a-button>
      </template>
    </template>
  </a-table>
  <a-pagination style="margin-top: 20px" v-model:current="current1" show-quick-jumper :total="data.length" @change="onChange" />
</template>

<style lang="scss" scoped>

</style>