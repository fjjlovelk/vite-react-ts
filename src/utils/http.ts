import axios, { AxiosError } from 'axios';
import { store } from '@/redux';
// import NProgress from 'nprogress';
// import 'nprogress/nprogress.css';

const http = axios.create({
	baseURL: './',
	timeout: 10000
});

// 请求拦截器
http.interceptors.request.use(
	config => {
		const token = store.getState().user.token;
		console.log(token);
		return config;
	},
	(error: AxiosError) => Promise.reject(error)
);

// 响应拦截器
http.interceptors.response.use(
	response => response.data,
	(error: AxiosError) => Promise.reject(error)
);

export default http;
