import { useEffect } from 'react';
import { Button, Input } from 'antd';
import { useRootDispatch, useRootState } from '@/hooks/useRedux';
import { toggleSideShow } from '@/redux/features/appSlice';

export default function Home() {
	const dispatch = useRootDispatch();
	const { sideShow } = useRootState(state => state.app);
	useEffect(() => {
		console.log(2222);
	}, []);

	return (
		<div style={{ margin: '0' }}>
			home
			<Button type="primary" onClick={() => dispatch(toggleSideShow(!sideShow))}>
				点击{sideShow ? '隐藏' : '显示'}侧边栏
			</Button>
			<Input />
		</div>
	);
}
