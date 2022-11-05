import Axios from "axios";

const axios = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

axios.defaults.withCredentials = true; // cors 설정

axios.interceptors.request.use(
  (request) => {
    request.headers["x-access-token"] = window.localStorage.getItem("moguToken");

    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response, config } = error;
  }
);

export default axios;
