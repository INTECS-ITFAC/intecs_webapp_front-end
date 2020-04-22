import axios from "axios";
axios.defaults.headers.post["Content-Type"] = "application/json";

// Create axios instance for api calls
var instance = null;

export const setAuth = () => {
  instance = axios.create({
    baseURL: "",
    timeout: 120000,

    headers: {
      "Content-Type": "application/json",
    },
  });

  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      console.log(error);
      return Promise.reject(error);
    }
  );
};

export const Get = (route, data) => {
  instance || setAuth();
  return instance.get(route, data);
};

export const Post = (route, data) => {
  instance || setAuth();
  return instance.post(route, JSON.stringify(data));
};

export const Put = (route, data) => {
  instance || setAuth();
  return instance.put(route, JSON.stringify(data));
};

export const Delete = (route, data) => {
  instance || setAuth();
  return instance.delete(route, {
    data: data,
  });
};

export const Patch = (route, data) => {
  instance || setAuth();
  return instance.patch(route, JSON.stringify(data));
};
