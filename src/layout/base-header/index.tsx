import React from 'react';
import { Layout } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useRootState, useRootDispatch } from '@/hooks/useRedux';
import { toggleSideCollapse } from '@/redux/features/appSlice';

const { Header } = Layout;

export default function BaseHeader() {
	const dispatch = useRootDispatch();
	const { sideCollapse, sideShow } = useRootState(state => state.app);

	return (
		<Header>
			{sideShow &&
				React.createElement(sideCollapse ? MenuUnfoldOutlined : MenuFoldOutlined, {
					className: 'trigger',
					onClick: () => dispatch(toggleSideCollapse(!sideCollapse))
				})}
		</Header>
	);
}
