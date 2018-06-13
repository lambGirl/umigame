import request from '../utils/request';

export function query(data) {
  return request('/api?server=tz_getNotiHome',data);
}
