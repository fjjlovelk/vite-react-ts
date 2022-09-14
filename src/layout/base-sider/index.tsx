import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useRootState, useRootDispatch } from '@/hooks/useRedux';
import { toggleSideCollapse } from '@/redux/features/appSlice';

const { Sider } = Layout;

export default function BaseSider() {
	const navigate = useNavigate();
	const dispatch = useRootDispatch();
	const { sideCollapse, sideShow } = useRootState(state => state.app);

	const items = [
		{
			label: '1-1',
			key: '1-1',
			children: [
				{ label: 'dashboard', key: '/dashboard' },
				{ label: '1-1-1', key: '1-1-2' }
			]
		},
		{ label: '1-2', key: '1-2', children: [{ label: '1-2-1', key: '1-2-1' }] }
	];

	return (
		<Sider
			width={220}
			theme="dark"
			collapsed={sideCollapse}
			collapsible
			collapsedWidth={sideShow ? 80 : 0}
			onCollapse={() => dispatch(toggleSideCollapse(!sideCollapse))}
			trigger={null}
		>
			<Menu theme="dark" mode="inline" items={items} onClick={({ key }) => navigate(key)} />
		</Sider>
	);
}
