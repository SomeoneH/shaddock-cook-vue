import { post } from "../rpc";

//用户注册
export function userRegister(params){
  return post("/user/register", params)
}

//用户登录
export function userLogin(params){
  return post("/user/login", params)
}