import { RouteItem } from '@/interfaces/route';

/**
 * 递归查询当前路径对应的路由
 * @param path 当前路由
 * @param routes 路由列表
 * @returns 路由对象
 */
export const searchRoute = (path: string, routes: RouteItem[] = []): RouteItem => {
	let result: RouteItem = {};
	for (const item of routes) {
		if (item.path === path) {
			return item;
		}
		if (item.children && item.children.length) {
			const res = searchRoute(path, item.children);
			if (Object.keys(res)) {
				result = res;
			}
		}
	}
	return result;
};
