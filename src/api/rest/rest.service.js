import axios from './rest.axios';
export class HttpRequest {
  Post(url, body, params, headers) {
    return this.request({
      method: 'POST',
      url: url,
      data: body,
      params: params,
      headers: headers
    });
  }

  Get(url, params) {
    return this.request({
      method: 'GET',
      url: url,
      params: params
    });
  }

  Put(
    url,
    // body,
    params
  ) {
    return this.request({
      method: 'PUT',
      url: url,
      // data: body,
      params: params
    });
  }

  Delete(url, params = null) {
    return this.request({
      method: 'DELETE',
      url: url,
      params: params
    });
  }
  request(config, options) {
    config.headers = Object.assign(this.getHeaders(), config.headers);
    config = Object.assign(config, options);
    config.paramsSerializer = (params) => {
      let paramItem = [];
      for (let key in params || {}) {
        if (params[key] instanceof Array) {
          for (let one of params[key]) {
            paramItem.push(`${encodeURIComponent(key.toString())}=${encodeURIComponent(one.toString())}`);
          }
        } else if (params[key] !== null && params[key] !== undefined) {
          paramItem.push(`${encodeURIComponent(key.toString())}=${encodeURIComponent(params[key].toString())}`);
        }
      }
      return paramItem.join('&');
    };

    return axios.request(config).then((rsp) => {
      return rsp.data;
    });
  }

  getHeaders() {
    return {
      'Content-Type': 'application/json;charset=UTF-8'
    };
  }
}
