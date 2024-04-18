import { get, post } from "../rpc";

//用户注册
export function userRegister(params){
  return post("/user/register", params)
}

//用户登录
export function userLogin(params){
  return post("/user/login", params)
}

//查询用户信息
export function getUserInfo(params){
  return get("/user/info", params)
}

//查询粉丝、关注、动态数量
export function getUserSocialInformationCount(params){
  return get("/user/socialInformationCount", params)
}

export default {
  userRegister,
  userLogin,
  getUserInfo,
  getUserSocialInformationCount,
}