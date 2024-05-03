import axios from "axios";

const AxiosPlugin = {
  install: (app, options) => {
    const axiosInstance = axios.create({
      baseURL: options.baseUrl,
    });

    app.config.globalProperties.$axios = axiosInstance;
  },
};

export default AxiosPlugin;
