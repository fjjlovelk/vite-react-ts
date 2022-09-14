import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import BaseSider from './base-sider';
import BaseHeader from './base-header';
import style from './index.module.less';

const { Content } = Layout;

export default function BaseLayout() {
	return (
		<Layout className={style.layout}>
			<BaseSider />
			<Layout>
				<BaseHeader />
				<Content>
					<Outlet />
				</Content>
			</Layout>
		</Layout>
	);
}
