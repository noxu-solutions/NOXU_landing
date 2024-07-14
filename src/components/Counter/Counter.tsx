import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { ExpertiseAward } from 'components/Expertise';
import { Paragraph, Title } from 'components/Typography';

interface CounterProps {
	endNumber: number;
	duration: number;
	text: string;
	title: string;
}

const Counter: React.FC<CounterProps> = ({ endNumber, duration, text, title }) => {
	const [count, setCount] = useState(0);
	const { ref, inView } = useInView({
		triggerOnce: true, // Запускать только один раз при входе в область видимости
		threshold: 0.1, // Запускать, когда хотя бы 10% компонента видимо
	});

	const intervalRef = useRef<number | undefined>(undefined);

	useEffect(() => {
		if (inView) {
			const startTime = Date.now();
			const endTime = startTime + duration;
			intervalRef.current = window.setInterval(() => {
				const currentTime = Date.now();
				const progress = Math.min((currentTime - startTime) / duration, 1);
				const currentCount = Math.floor(progress * endNumber);
				setCount(currentCount);
				if (progress === 1) {
					clearInterval(intervalRef.current);
				}
			}, 1000 / 60); // Обновление 60 раз в секунду
		}

		return () => {
			clearInterval(intervalRef.current);
		};
	}, [inView, duration, endNumber]);

	return (
		<ExpertiseAward ref={ref}>
			<Title variant='h0'>
				<span>
					{count}
					{title}
				</span>
			</Title>
			<Paragraph variant='bold'>{text}</Paragraph>
		</ExpertiseAward>
	);
};

export default Counter;
