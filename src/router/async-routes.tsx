import { lazy } from 'react';
import lazyLoad from '@/components/base/lazy-load/lazy-load';
import { RouteItem } from '@/interfaces/route';

const routes: RouteItem[] = [
	{
		path: '/dashboard',
		element: lazyLoad(lazy(() => import('@/views/dashboard'))),
		meta: {
			requireAuth: true
		}
	}
];

export default routes;
