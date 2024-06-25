import { useEffect, useRef } from 'react';

export type IProps = Record<string, any>;

const useWhyDidYouUpdate = (componentName: string, props: IProps) => {
	// props 变更时，函数会再执行一次，此时对比前后 props 变化。
	// 需要存储之前的 props 值
	const prevProps = useRef<IProps>({});

	useEffect(() => {
		if (prevProps.current) {
			const allKeys = Object.keys({ ...props, ...prevProps.current });
			const changedProps: IProps = {};

			allKeys.forEach((key) => {
				if (prevProps.current[key] !== props[key]) {
					changedProps[key] = {
						from: prevProps.current[key],
						to: props[key],
					};
				}
			});

			if (Object.keys(changedProps).length) {
				console.log('[why-did-you-update]', componentName, changedProps);
			}
		}

		prevProps.current = props;
	});
};

export default useWhyDidYouUpdate;
