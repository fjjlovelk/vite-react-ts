import { useRoutes } from 'react-router-dom';
import { RouteItem } from '@/interfaces/route';
import constantRoutes from './constant-routes';
import asyncRoutes from './async-routes';

export const rootRouter: RouteItem[] = [...constantRoutes, ...asyncRoutes];

const Router = () => {
	const routes = useRoutes(rootRouter);
	return routes;
};

export default Router;
