import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import lazyLoad from '@/components/base/lazy-load/lazy-load';
import { RouteItem } from '@/interfaces/route';
import BaseLayout from '@/layout';

const routes: RouteItem[] = [
	{
		path: '/',
		element: <Navigate to="/home" replace />
	},
	{
		element: <BaseLayout />,
		children: [
			{
				path: '/home',
				element: lazyLoad(lazy(() => import('@/views/home')))
			}
		]
	},
	{
		path: '/login',
		element: lazyLoad(lazy(() => import('@/views/login')))
	},
	{
		path: '/404',
		element: lazyLoad(lazy(() => import('@/views/error-page/404')))
	},
	{
		path: '*',
		element: <Navigate to="/404" replace={true} />
	}
];

export default routes;
