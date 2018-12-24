import request from '../utils/request';
// 登录
export function login(param) {
  return request('/api/user/login', {body: JSON.stringify(param)}); 
}
// 退出登录
export function logout() {
  return request('/api/logout');
}
// 获取权限
export function getAuthority() {
  return request('/ipos-chains/aclStore/queryAuthority');
}
