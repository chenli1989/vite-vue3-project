import Axios from 'axios';
import { ElMessage } from 'element-plus';

const axios = Axios.create({
  baseURL: '/api',
  timeout: 20000, // 请求超时 20s
});

// 前置拦截器（发起请求之前的拦截）
axios.interceptors.request.use(
  (request) => {
    /**
     * 对请求拦截配置
     */
    return request;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 后置拦截器（发起请求之后的拦截）
axios.interceptors.response.use(
  (response) => {
    /**
     * 对response 和 error 做处理
     */
    return response;
  },
  (error) => {
    if (error.response && error.response.data) {
      const code = error.response.status;
      const msg = error.response.data.message;
      ElMessage.error(`Code: ${code}, Message: ${msg}`);
    } else {
      ElMessage.error(`${error}`);
    }
    return Promise.reject(error);
  },
);

export default axios;
