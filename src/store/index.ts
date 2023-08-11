import { defineStore } from 'pinia'
// @ts-ignore
import {ElLoading,ElMessage} from "element-plus";
import {getCurrentInstance} from "vue";
// @ts-ignore

export default defineStore('storeIdB', {
    // 其他配置...
    state: ()=>{
        return{
            uname: 'admin',
            password: '123456'
        }
    },
    // pinia中的getters与vuex中的一摸一样
    getters: {
    },
    // 同步异步统一到actions中了
    actions: {},
});

export class useStore {
}
