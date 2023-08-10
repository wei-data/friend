<script setup lang="ts">
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { ValidateErrorEntity } from 'ant-design-vue/es/form/interface';
import {reactive, UnwrapRef} from 'vue';
import { useRouter} from 'vue-router'
import UseState from '../store'
interface FormState {
  user: string;
  password: string;
}

const store = UseState();
const Router = useRouter()
const formState: UnwrapRef<FormState> = reactive({
  user: '',
  password: '',
});
const handleFinish = (values: FormState) => {
  console.log(values, formState);
  if(formState.user === store.uname&& formState.password===store.password){
    localStorage.setItem('token',formState.user)
    Router.push({
      path: '/Main'
    })
  }
};
const handleFinishFailed = (errors: ValidateErrorEntity<FormState>) => {
  console.log(errors);
};
</script>

<template>
  <a-form
      :model="formState"
      @finish="handleFinish"
      @finishFailed="handleFinishFailed"
  >
    <a-form-item>
      <a-input v-model:value="formState.user" placeholder="Username">
        <template #prefix><UserOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input v-model:value="formState.password" type="password" placeholder="Password">
        <template #prefix><LockOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-button
          type="primary"
          html-type="submit"
          :disabled="formState.user === '' || formState.password === ''"
      >
        Log in
      </a-button>
    </a-form-item>
  </a-form>
</template>

<style scoped>

</style>
