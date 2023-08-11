<template>
  <div class="column">
    <div class="title" style="display: flex; justify-content: space-between">
      <h3>栏目</h3>
      <div class="milden">
        <span>上级栏目</span>
        <a-select
          ref="select"
          v-model:value="value1"
          style="width: 120px; margin: 0 10px"
          @focus="focus"
          @change="handleChange"
        >
          <a-select-option value="全部">全部</a-select-option>
          <a-select-option value="全部2">全部2</a-select-option>
          <a-select-option value="全部3">全部3</a-select-option>
          <a-select-option value="所有">所有</a-select-option>
        </a-select>
        <a-button type="primary" @click="inquire">查询</a-button>
        <a-button style="margin: 0 10px" @click="value1 = ''">重置</a-button>
      </div>
      <a-input-search v-model:value="value" placeholder="input password" />
    </div>
    <a-button type="primary" :icon="h(PlusOutlined)" @click="newOption"
      >新建</a-button
    >
    <a-table :columns="columns" :data-source="data" style="margin-top: 10px">
      <template #bodyCell="{ column, text, record, index }">
        <template v-if="column.dataIndex === 'name'">
          <a>{{ text }}</a>
        </template>
        <template v-else-if="column.dataIndex === 'operation'">
          <a-button type="link" size="small">编辑</a-button>
          <span>|</span>
          <a-popconfirm
            v-if="data.length"
            title="Sure to delete?"
            @confirm="onDelete(record.key)"
          >
            <a-button type="link" size="small">删除</a-button>
          </a-popconfirm>
        </template>
        <template v-else-if="column.dataIndex === 'sortBtn'">
          <a-button type="link" size="small" @click="upTen(index, record)">
            <arrow-up-outlined />
          </a-button>
          <a-button type="link" size="small" @click="DownTen(index, record)">
            <arrow-down-outlined />
          </a-button>
        </template>
      </template>
    </a-table>
    <!-- 新建对话框 -->
    <a-modal v-model:open="open" title="Basic Modal" @ok="handleOk">
      <a-form
        ref="formRef"
        :model="formState"
        :rules="rules"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-form-item ref="name" label="栏目名称" name="name">
          <a-input v-model:value="formState.name" />
        </a-form-item>
        <a-form-item ref="id" label="栏目id" name="id">
          <a-input v-model:value="formState.id" />
        </a-form-item>
        <a-form-item ref="sort" label="排序" name="sort">
          <a-input v-model:value="formState.sort" />
        </a-form-item>
        <a-form-item label="可见状态" name="region">
          <a-select v-model:value="formState.region" placeholder="请选择">
            <a-select-option value="可见">可见</a-select-option>
            <a-select-option value="不可见">不可见</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="上级栏目" name="Upper">
          <a-select v-model:value="formState.Upper" placeholder="请选择">
            <a-select-option value="全部">全部</a-select-option>
            <a-select-option value="全部2">全部2</a-select-option>
            <a-select-option value="全部3">全部3</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item ref="relevance" label="关联内容" name="relevance">
          <a-input v-model:value="formState.relevance" />
        </a-form-item>
        <a-form-item ref="regenerator" label="更新人" name="regenerator">
          <a-input v-model:value="formState.regenerator" />
        </a-form-item>
        <a-form-item ref="date1" label="创建时间" name="date1">
          <a-date-picker
            v-model:value="formState.date1"
            show-time
            type="date"
            placeholder="请选择创建时间"
            style="width: 100%"
          />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-button type="primary" @click="onSubmit">Create</a-button>
          <a-button style="margin-left: 10px" @click="resetForm"
            >Reset</a-button
          >
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import { h, ref } from "vue";
import {
  PlusOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons-vue";
const value1 = ref("");
// 搜索框
const value = ref<string>("");
const focus = () => {
  console.log("focus");
};

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

// table表格
const columns = [
  {
    title: "栏目名称",
    dataIndex: "ColumnName",
    key: "ColumnName",
  },
  {
    title: "图标",
    dataIndex: "icon",
    key: "icon",
    width: 80,
  },
  {
    title: "栏目id",
    dataIndex: "ColumnId",
    key: "ColumnId",
    ellipsis: true,
  },
  {
    title: "栏目标签",
    dataIndex: "ColumnTag",
    key: "ColumnTag",
    ellipsis: true,
  },
  {
    title: "排序",
    dataIndex: "sort",
    key: "sort",
    ellipsis: true,
  },
  {
    title: "可见状态",
    dataIndex: "VisibleState",
    key: "VisibleState",
    ellipsis: true,
  },
  {
    title: "上级栏目",
    dataIndex: "UpperColumn",
    key: "UpperColumn",
    ellipsis: true,
  },
  {
    title: "关联内容方式",
    dataIndex: "AssociatedContent",
    key: "AssociatedContent",
    ellipsis: true,
  },
  {
    title: "更新人",
    dataIndex: "regenerator",
    key: "regenerator",
    ellipsis: true,
  },
  {
    title: "更新时间",
    dataIndex: "UpdateTime",
    key: "UpdateTime",
    ellipsis: true,
  },
  {
    title: "操作",
    dataIndex: "operation",
    width: 130,
  },
  {
    title: "排序",
    dataIndex: "sortBtn",
  },
];

let data: any = ref([
  {
    key: "1",
    ColumnName: "全部",
    icon: "",
    ColumnId: "1",
    ColumnTag: "",
    sort: "1",
    VisibleState: "可见",
    UpperColumn: "全部",
    AssociatedContent: "栏目直接关联内容",
    regenerator: "银保业务员版",
    UpdateTime: "2023-06-07 00:34:11",
  },
  {
    key: "2",
    ColumnName: "全部2",
    icon: "",
    ColumnId: "2",
    ColumnTag: "",
    sort: "2",
    VisibleState: "可见",
    UpperColumn: "全部2",
    AssociatedContent: "栏目直接关联内容",
    regenerator: "银保业务员版",
    UpdateTime: "2023-06-07 00:34:11",
  },
  {
    key: "3",
    ColumnName: "全部3",
    icon: "",
    ColumnId: "3",
    ColumnTag: "",
    sort: "3",
    VisibleState: "可见",
    UpperColumn: "全部3",
    AssociatedContent: "栏目直接关联内容",
    regenerator: "银保业务员版",
    UpdateTime: "2023-06-07 00:34:11",
  },
]);
sessionStorage.searchData = JSON.stringify(data.value);

const onDelete = (key: string) => {
  console.log(key);
  data.value = data.value.filter((item: any) => item.key !== key);
  console.log(data);
};
const inquire = () => {
  if (value1.value === "所有")
    return (data.value = JSON.parse(sessionStorage.searchData));
  data.value = JSON.parse(sessionStorage.searchData).filter(
    (item: any) => item.UpperColumn === value1.value
  );
};

const upTen = (index: any, record: any) => {
  console.log(index);
  data.value.unshift(record);
  data.value.splice(index + 1, 1);
};
const DownTen = (index: any, record: any) => {
  console.log(index);
  data.value.push(record);
  data.value.splice(index, 1);
};
const newOption = () => {
  open.value = true;
};

// 对话框
const open = ref<boolean>(false);

const handleOk = (e: MouseEvent) => {
  console.log(e);
  open.value = false;
};
import { Dayjs } from "dayjs";
import { reactive, toRaw } from "vue";
import type { UnwrapRef } from "vue";
import type { Rule } from "ant-design-vue/es/form";

interface FormState {
  name: string;
  id: string | undefined;
  sort: string | undefined;
  region: string | undefined;
  Upper: string | undefined;
  relevance: string | undefined;
  regenerator: string | undefined;
  date1: Dayjs | undefined;
}
const formRef = ref();
const labelCol = { span: 5 };
const wrapperCol = { span: 13 };
const formState: UnwrapRef<FormState> = reactive({
  name: "",
  id: "",
  sort: "",
  region: "",
  Upper: "",
  relevance: "",
  regenerator: "",
  date1: undefined,
});
const rules: Record<string, Rule[]> = {
  name: [
    {
      required: true,
      message: "Please input Activity name",
      trigger: "change",
    },
    { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" },
  ],
  id: [
    {
      required: true,
      message: "Please input Activity id",
      trigger: "change",
    },
    { min: 1, max: 1, message: "At least one", trigger: "blur" },
  ],
  sort: [
    {
      required: true,
      message: "Please input Activity id",
      trigger: "change",
    },
    { min: 1, max: 1, message: "At least one", trigger: "blur" },
  ],
  region: [
    {
      required: true,
      message: "Please select Activity zone",
      trigger: "change",
    },
  ],
  Upper: [
    {
      required: true,
      message: "Please select Activity Upper",
      trigger: "change",
    },
  ],
  relevance: [
    {
      required: true,
      message: "Please input Activity relevance",
      trigger: "change",
    },
  ],
  regenerator: [
    {
      required: true,
      message: "Please input Activity regenerator",
      trigger: "change",
    },
  ],
  date1: [
    {
      required: true,
      message: "Please pick a date",
      trigger: "change",
      type: "object",
    },
  ],
};
// 提交
const onSubmit = () => {
  formRef.value
    .validate()
    .then(() => {
      console.log("values", formState, toRaw(formState));
      const i = {
        key: data.value.length + 1,
        ColumnName: formState.name,
        icon: "",
        ColumnId: formState.id,
        ColumnTag: "",
        sort: formState.sort,
        VisibleState: formState.region,
        UpperColumn: formState.Upper,
        AssociatedContent: formState.relevance,
        regenerator: formState.regenerator,
        UpdateTime: formState.date1,
      };
      data.value.push(i);
      sessionStorage.searchData = JSON.stringify(data.value);
    })
    .catch((error: any) => {
      console.log("error", error);
    });
};
// 重置
const resetForm = () => {
  formRef.value.resetFields();
};
</script>

<style lang="less" scoped>
.ant-input-group-wrapper {
  width: 400px !important;
}
.title {
  margin: 20px 0 10px;

  h3 {
    font-weight: 700;
  }
}
</style>
