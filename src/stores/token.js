import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTokenStore = defineStore('token', () => {
  const token = ref('')

  //修改token的值
  const setToken = (newToken) => {
    token.value = newToken
  }

  //移除token的值
  const removeToken = () => {
    token.value = ''
  }

  return {
    token, setToken, removeToken
  }
}, {
  persist: true//持久化存储
});