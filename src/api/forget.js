// 忘记密码
import http from '@/api/index.js'
export function Forget (data) {
  return http({
    url: '/user/forget/',
    method: 'POST',
    data: data
  })
}
export function getCode (data) {
  return http({
    url: '/user/get_code/',
    method: 'POST',
    data: data
  })
}
export function SetCode (data) {
  return http({
    url: '/user/set_code/',
    method: 'POST',
    data: data
  })
}
export function SetForget (data) {
  return http({
    url: '/user/set_forget/',
    method: 'POST',
    data: data
  })
}
