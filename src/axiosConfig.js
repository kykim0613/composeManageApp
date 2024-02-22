import axios from "axios";

axios.interceptors.request.use(config => {
    config.withCredentials = true;
    return config
  })