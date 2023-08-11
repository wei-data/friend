<template>
  <div class="PageLibrary">
    <a-tabs v-model:activeKey="activeKey" tab-position="left">
      <a-tab-pane :key="1">
        <template #tab>
          <span>
            <dingtalk-outlined />
            银保业务局版文库页
          </span>
        </template>
        <PageInfoTable :id="activeKey" pageName="银保业务局版文库页" />
        <PageRadios />
      </a-tab-pane>
      <a-tab-pane :key="2">
        <template #tab>
          <span>
            <dingtalk-outlined />
            银保业务局版图库页
          </span>
        </template>
        <PageInfoTable :id="activeKey" pageName="银保业务局版图库页" />
      </a-tab-pane>
      <a-tab-pane :key="3">
        <template #tab>
          <span>
            <dingtalk-outlined />
            银保业务局版首页
          </span>
        </template>
        <PageInfoTable :id="activeKey" pageName="银保业务局版首页" />
      </a-tab-pane>
      <a-tab-pane :key="4">
        <template #tab>
          <span>
            <dingtalk-outlined />
            银保银行版文库页
          </span>
        </template>
        <PageInfoTable :id="activeKey" pageName="银保银行版文库页" />
      </a-tab-pane>
      <a-tab-pane :key="5">
        <template #tab>
          <span>
            <dingtalk-outlined />
            银保银行版图库页
          </span>
        </template>
        <PageInfoTable :id="activeKey" pageName="银保银行版图库页" />
      </a-tab-pane>
      <a-tab-pane :key="6">
        <template #tab>
          <span>
            <dingtalk-outlined />
            银保银行版首页
          </span>
        </template>
        <PageInfoTable :id="activeKey" pageName="银保银行版首页" />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script lang="ts" setup>
// @ts-ignore
import PageInfoTable from './PageViewTable.vue'
import PageRadios from './PageRadios.vue'
import { DingtalkOutlined } from '@ant-design/icons-vue'
import { ref } from 'vue'

const activeKey = ref(1)
</script>

<style lang='less' scoped ></style>
