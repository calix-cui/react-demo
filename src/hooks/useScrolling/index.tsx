import { RefObject, useCallback, useEffect, useRef, useState } from 'react';

const useScrolling = (ref: RefObject<HTMLElement>): boolean => {
	const [scrolling, setScrolling] = useState<boolean>(false);

	useEffect(() => {
		if (ref.current) {
			let scrollingTimer: any;

			const handleScrollEnd = () => {
				setScrolling(false);
			};

			const handleScroll = () => {
				setScrolling(true);
				clearTimeout(scrollingTimer);
				scrollingTimer = setTimeout(() => {
					handleScrollEnd();
				}, 150);
			};

			ref.current?.addEventListener('scroll', handleScroll);

			return () => {
				if (ref.current) {
					ref.current?.removeEventListener('scroll', handleScroll);
				}
			};
		}
		return () => {};
	}, [ref]);

	return scrolling;
};

export default useScrolling;
