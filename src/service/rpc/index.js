import axios from "axios";
import router from "@/router"
import config from "./config";
import { showFailToast } from "vant";
import { useTokenStore } from '@/stores/token.js'

const tokenStore = useTokenStore();
const instance = axios.create({
  baseURL: config.BASE_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
})

//请求拦截
instance.interceptors.request.use(
  (data) => {
    console.log("请求拦截", data)
    if (tokenStore.token) {
      data.headers.token = tokenStore.token
    }
    return data
  },
  (err) => {
    Promise.reject(err)
  }
);

//响应拦截
instance.interceptors.response.use(
  (response) => {
    console.log("response", response)
    // 接口正常响应
    if (response.data?.resultCode == 200) {
      return Promise.resolve(response);
    } else {
      showFailToast(response.data?.message);
      return Promise.reject(response)
    }
  },
  (error) => {
    console.log("error", error)
    showFailToast(error.message);
    return Promise.reject(error)
  }
);

//get
export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    instance.get(url, { params: params }).then((response) => {
      resolve(response.data);
    }).catch((err) => {
      reject(err)
    })
  })
}

//post
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    instance.post(url, data).then((response) => {
      resolve(response.data);
    }).catch((err) => {
      reject(err)
    })
  })
}