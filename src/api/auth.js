// 登陆注册
import http from '@/api/index.js'
export function Login (data) {
  return http({
    url: '/user/login/',
    method: 'POST',
    data: data
  })
}
export function Register (data) {
  return http({
    url: '/user/register/',
    method: 'POST',
    data: data
  })
}
export function RegisterCode (data) {
  return http({
    url: '/user/register_code/',
    method: 'POST',
    data: data
  })
}
