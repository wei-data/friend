<script setup lang="ts">
import { ref } from "vue";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  MailOutlined,
} from "@ant-design/icons-vue";

const selectedKeys = ref<string[]>(["1"]);
const collapsed = ref<boolean>(false);
</script>

<template>
  <a-layout style="height: 100vh; width: 100vw">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div
        class="logo"
        style="height: 50px; width: 80%; background: #888888; margin: 20px auto"
      />
      <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
        <a-menu-item key="1">
          <user-outlined />
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <video-camera-outlined />
          <span>nav 2</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #icon>
            <MailOutlined />
          </template>
          <template #title>报表</template>
          <a-menu-item key="6">
            <router-link to="/Main/Chart">文章使用统计报表</router-link>
          </a-menu-item>
          <a-menu-item key="7">
            <router-link to="/Main/Institution">机构使用统计报表</router-link>
          </a-menu-item>
          <a-menu-item key="8">
            <router-link to="/Main/Business">业务人员使用统计报表</router-link>
          </a-menu-item>
          <a-menu-item key="9">
            <router-link to="/Main/ExportReportList">导出报表列表</router-link>
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header
        style="background: #fff; padding: 0 20px; box-sizing: border-box"
      >
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined
          v-else
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style scoped>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
