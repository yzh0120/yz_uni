import { post }  from '../request.js'

export function login(data,other) {
  return post('/login/userLogin', data,other)
}

export function twoHundred(data, other) {
  return post('/request/twoHundred', data, other)
}

export function notTwoHundred(data, other) {
  return post('/request/notTwoHundred', data, other)
}

//获取用户信息接口
export function get_user(data, other) {
    return post('/login/getUser', data, other)
}

