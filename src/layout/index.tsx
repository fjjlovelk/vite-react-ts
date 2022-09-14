import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import { useRootState, useRootDispatch } from '@/hooks/useRedux';
import { toggleSideCollapse } from '@/redux/features/appSlice';
import BaseHeader from './base-header';
import style from './index.module.less';

const { Content, Sider } = Layout;

export default function BaseLayout() {
	const dispatch = useRootDispatch();
	const { sideCollapse, sideShow } = useRootState(state => state.app);

	return (
		<Layout className={style.layout}>
			<Sider
				width={220}
				theme="dark"
				collapsed={sideCollapse}
				collapsible
				collapsedWidth={sideShow ? 80 : 0}
				onCollapse={() => dispatch(toggleSideCollapse(!sideCollapse))}
				trigger={null}
			>
				Sider
			</Sider>
			<Layout>
				<BaseHeader />
				<Content>
					<Outlet />
				</Content>
			</Layout>
		</Layout>
	);
}
