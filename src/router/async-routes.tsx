import { lazy } from 'react';
import lazyLoad from '@/components/base/lazy-load/lazy-load';
import { RouteItem } from '@/interfaces/route';
import BaseLayout from '@/layout';

const routes: RouteItem[] = [
	{
		element: <BaseLayout />,
		children: [
			{
				path: '/dashboard',
				element: lazyLoad(lazy(() => import('@/views/dashboard'))),
				meta: {
					requireAuth: true
				}
			}
		]
	}
];

export default routes;
