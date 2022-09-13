import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import { RouteItem } from '@/interfaces/route';
import lazyLoad from '@/components/base/lazy-load/lazy-load';

export const rootRouter: RouteItem[] = [
	{
		path: '/',
		element: lazyLoad(lazy(() => import('@/views/home')))
	},
	{
		path: '/login',
		element: lazyLoad(lazy(() => import('@/views/login')))
	},
	{
		path: '*',
		element: lazyLoad(lazy(() => import('@/views/error-page/404')))
	}
];

const Router = () => {
	const routes = useRoutes(rootRouter);
	return routes;
};

export default Router;
