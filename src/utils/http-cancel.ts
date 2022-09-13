import { AxiosRequestConfig } from 'axios';
import qs from 'qs';

// 声明一个 Map 用于存储每个请求的 标识 和 取消函数
let pendingMap = new Map<string, AbortController>();

// 将请求序列化成一个字符串
export const getPendingUrl = (config: AxiosRequestConfig) =>
	[
		config.url,
		config.method,
		qs.stringify(config.data),
		qs.stringify(config.params)
	].join('&');

// 创建取消请求类
export class AxiosCanceler {
	// 添加请求
	addPending(config: AxiosRequestConfig) {
		this.removePending(config);
		const url = getPendingUrl(config);
		const controller = new AbortController();
		config.signal = controller.signal;
		if (!pendingMap.has(url)) {
			pendingMap.set(url, controller);
		}
	}

	// 移除请求
	removePending(config: AxiosRequestConfig) {
		const url = getPendingUrl(config);
		if (pendingMap.has(url)) {
			const controller = pendingMap.get(url);
			controller && controller.abort();
			pendingMap.delete(url);
		}
	}

	// 清空所有pending
	removeAllPending() {
		pendingMap.forEach(controller => controller && controller.abort());
	}

	// 重置
	reset(): void {
		pendingMap = new Map<string, AbortController>();
	}
}
