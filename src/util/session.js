import axios from "axios";
import qs from "qs";
//默认配置
const INSTANCE = axios.create({
    baseURL: "http://localhost:7777", timeout: "15000", allowCredentials: true
});

// 添加请求拦截器
INSTANCE.interceptors.request.use(function (config) {
    //让每个请求都带上cookies 中的 token
    // config.headers["token"] = Cookies.get("token");
    //如果有数据，并且还是post请求，需要将数据转换成表单数据
    if (config.data instanceof File && config.method === "put") {
        config.headers["Content-Type"] = "multipart/form-data";
    } else if (config.data && config.method === "post") {
        console.log('this is post data request')
        config.data = qs.stringify(config.data);
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
INSTANCE.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    let {data} = response;
    if (data.code === 0) {
        return data.data;
    } else {
        return {}; // 返回一个空对象
    }
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    console.log(error.message)
    return {}; // 返回一个空对象
});

export default INSTANCE;