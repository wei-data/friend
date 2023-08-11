<template>
  <div class="CarouselMap">
    <div class="title" style="display: flex;justify-content: space-between;">
      <h3>轮播图</h3>
      <a-button type="primary" :icon="h(PlusOutlined)" @click="showModal">新建</a-button>
    </div>
    <a-table :columns="columns" :data-source="dataSource" bordered pagination="bottomLeft">
      <!-- <template #bodyCell="{ column, text, record }">
      </template> -->
    </a-table>
    <a-modal v-model:open="open" title="添加" :footer="null">
      <a-form ref="formRef" :model="formIine" :rules="rules">
        <a-form-item ref="name" label="组件名称" name="name">
          <a-input v-model:value="formIine.name" />
        </a-form-item>
        <a-form-item label="组件类型" name="types">
          <a-select v-model:value="formIine.types" placeholder="please select your zone">
            <a-select-option value="禁用">禁用</a-select-option>
            <a-select-option value="启用">启用</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="组件介绍" name="operation">
          <a-input v-model:value="formIine.operation" />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-button type="primary" @click="onSubmit">确定</a-button>
          <a-button style="margin-left: 10px" @click="resetForm">重置</a-button>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script setup lang='ts'>
import { h } from 'vue';
import { PlusOutlined } from '@ant-design/icons-vue';
// @ts-ignore
import { cloneDeep } from 'lodash-es';
import { reactive, ref } from 'vue';
import type { Rule } from 'ant-design-vue/es/form';

const formRef = ref();

const open = ref<boolean>(false);
const formIine = reactive({
  name: '',
  types: '',
  operation: ''
})
const rules: Record<string, Rule[]> = {
  name: [
    { required: true, message: '请输入', trigger: 'change' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
  ],
  types: [
    { required: true, message: '请选择', trigger: 'change' },
  ],
  operation: [
    { required: true, message: '请输入', trigger: 'change' },
    { min: 10, max: 15, message: 'Length should be 10 to 15', trigger: 'blur' }
  ]
}
const total = ref(0)
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

const showModal = () => {
  open.value = true;
};

const onSubmit = () => {
  formRef.value
    .validate()
    .then(() => {
      dataSource.value.push({
        key: ++total.value,
        name: formIine.name,
        ComId: total.value,
        types: formIine.types,
        operation: formIine.operation
      })
      open.value = false
    })
    .catch((error: any) => {
      console.log('error', error);
    })
};
const resetForm = () => {
  formRef.value.resetFields();
  open.value = false;
};
</script>

<style lang='scss' scoped >
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
