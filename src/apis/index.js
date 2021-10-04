import axios from 'axios';

const request = axios.create({
  // 这边关掉mock
  baseURL: 'http://localhost:3000/', // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000, // request timeout
});

// default
request.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8';
request.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

request.interceptors.response.use(
  (response) => {
    const res = response.data;
    // if the custom code is not 200, it is judged as an error.
    if (res.code !== 200) {
      return Promise.reject(new Error(res.message || 'Error'));
    }
    return res;
  },
  (error) => {
    console.log(`err${error}`); // for debug
    return Promise.reject(error);
  },
);

// 获取轮播图
/*
`type`:资源类型,对应以下类型,默认为 0 即PC
0: pc
1: android
2: iphone
3: ipad
*/
export function getBanners(type = 0) {
  return request({
    url: `/banner?type=${type}`,
    method: 'get',
  });
}

// 获取推荐歌单
/**
 *
 * @param {number} limit 取出数量 , 默认为 30 (不支持 offset)
 * @returns
 */
export function getPlayList(limit = 6) {
  return request({
    url: `/personalized?limit=${limit}`,
    method: 'get',
  });
}

// 获取歌单详情
/**
 *
 * @param {number} id 歌单id
 * @returns
 */
export function getPlayListDetail(id) {
  return request({
    url: `/playlist/detail?id=${id}`,
    method: 'get',
  });
}

/**
 * @description 获取歌词
 * @param {number} id 歌单id
 * @returns
*/
export function getLyric(id) {
  return request({
    url: `/lyric?id=${id}`,
    method: 'get',
  });
}
