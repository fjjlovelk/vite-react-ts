import { Navigate, useLocation } from 'react-router-dom';
import { searchRoute } from '@/utils/router';
import { AxiosCanceler } from '@/utils/http-cancel';
import { store } from '@/redux';
import { rootRouter } from '.';

const axiosCanceler = new AxiosCanceler();

const AuthRouter = (props: { children: JSX.Element }) => {
	const { pathname } = useLocation();
	const route = searchRoute(pathname, rootRouter);
	// 进入路由前，先清除所有请求
	axiosCanceler.removeAllPending();

	// 判断路由是否需要权限，如不需要，直接放行
	if (!route?.meta?.requireAuth) {
		return props.children;
	}

	// 判断是否有token
	const token = store.getState().user.token;
	if (!token) {
		return <Navigate to="/login" replace />;
	}

	return props.children;
};

export default AuthRouter;
