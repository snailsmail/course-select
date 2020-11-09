import axios from "axios";
import { Message } from "element-ui";

// create an axios instance
const service = axios.create({
  baseURL: '', // url = base url + request url
  withCredentials: false, // send cookies when cross-domain requests
  timeout: 10000 // request timeout
});


// response interceptor
service.interceptors.response.use(
    response => {
      if (response.status !== 200) {
        Message.error(response.message || "Error");
      } else {
        return response;
      }
    },
    error => {
      console.log("err" + error); // for debug
      Message.error(error.message || "Error");
      return Promise.reject(error);
    }
);

export default service;
