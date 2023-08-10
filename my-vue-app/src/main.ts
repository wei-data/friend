import {createApp} from 'vue'
// 创建全局的状态管理库
import {createPinia} from 'pinia'
import Antd from 'ant-design-vue';
import VueRouter from './router';
import 'ant-design-vue/dist/reset.css';
import './style.css'
// 引入app入口文件
import App from './App.vue'
// 创建vue实列对象
const app = createApp(App)

// ts-node 接名字
// 使用需求库elementUiPlus、vueRouter、pinia
app.use(createPinia()).use(Antd).use(VueRouter).mount('#app')
