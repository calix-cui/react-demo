import dayjs from 'dayjs';
import { useEffect, useMemo, useRef, useState } from 'react';

export type TDate = dayjs.ConfigType;

export interface Options {
	leftTime?: number;
	targetDate?: TDate;
	interval?: number;
	onEnd?: () => void;
}

export interface FormattedRes {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
	milliseconds: number;
}

// 计算当前时间到 target 的剩余时间
const calcLeft = (target: TDate): number => {
	if (!target) {
		return 0;
	}

	const left = dayjs(target).valueOf() - Date.now();

	return left < 0 ? 0 : left;
};

// 将 Ms 时间转换成 年日月时分秒
const parseMs = (msTime: number): FormattedRes => {
	return {
		days: Math.floor(msTime / 86400000),
		hours: Math.floor(msTime / 3600000) % 24,
		minutes: Math.floor(msTime / 60000) % 60,
		seconds: Math.floor(msTime / 1000) % 60,
		milliseconds: Math.floor(msTime) % 1000,
	};
};

const useCountDown = (options: Options) => {
	const { leftTime, targetDate, interval = 1000, onEnd } = options || {};

	const memoLeftTime = useMemo<TDate>(() => {
		return leftTime && leftTime > 0 ? Date.now() + leftTime : undefined;
	}, [leftTime]);

	const target = 'leftTime' in options ? memoLeftTime : targetDate;

	const [timeLeft, setTimeLeft] = useState(() => calcLeft(target));

	const onEndRef = useRef(onEnd);
	onEndRef.current = onEnd;

	useEffect(() => {
		// 根据 target 和 interval，建立不断计算剩余时间的定时器
		if (!target) {
			setTimeLeft(0);
			return;
		}

		setTimeLeft(calcLeft(target));

		const timer = setInterval(() => {
			const targetLeft = calcLeft(target);
			setTimeLeft(targetLeft);
			if (targetLeft === 0) {
				clearInterval(timer);
				onEndRef.current?.();
			}
		}, interval);

		return () => clearInterval(timer);
	}, [target, interval]);

	const formattedRes = useMemo(() => parseMs(timeLeft), [timeLeft]);

	return [timeLeft, formattedRes] as const;
};

export default useCountDown;
