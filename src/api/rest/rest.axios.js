import axios from 'axios';

// TODO Loading...

axios.interceptors.request.use(
  function (config) {
    console.log(config);
    // 在发送请求之前做些什么
    if (config.method !== 'post') {
      // if (window.$cookies.get('token')) {
      config.headers.Authorization =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IidhZG1pbiciLCJwYXNzd29yZCI6IichUUFaMndzeDNlZGMnIiwiaWF0IjoxNTk5NDcxMTgyLCJleHAiOjE1OTk1NTc1ODJ9.MXGKQ6abWovcPfR8kT5gk0YntvwJbhdJqRgyQlebumc';
      // }
    }
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    console.log(error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (resp) {
    return resp;
  },
  function (error) {
    return Promise.reject(error.response);
  }
);

export default axios;
