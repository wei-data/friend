<template>
  <div class="column">
    <div class="title" style="display: flex;justify-content: space-between;">
      <h3>栏目</h3>
      <div class="milden">

      </div>
    </div>
    <a-button type="primary" :icon="h(PlusOutlined)">新建</a-button>
  </div>
</template>

<script setup lang='ts'>
import { h } from 'vue';
import { PlusOutlined } from '@ant-design/icons-vue';

</script>

<style lang='less' scoped >
.title {
  margin: 20px 0 10px;

  h3 {
    font-weight: 700;
  }
}
</style>
