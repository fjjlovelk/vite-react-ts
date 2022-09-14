import { ReactNode, Suspense, LazyExoticComponent, FunctionComponent, ComponentClass } from 'react';
import { Spin } from 'antd';

const lazyLoad = (Comp: LazyExoticComponent<FunctionComponent | ComponentClass>): ReactNode => {
	return (
		<Suspense
			fallback={
				<Spin
					size="large"
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						height: '100%'
					}}
				></Spin>
			}
		>
			<Comp />
		</Suspense>
	);
};

export default lazyLoad;
