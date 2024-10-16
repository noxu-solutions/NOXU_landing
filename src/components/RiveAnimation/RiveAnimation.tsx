import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas';
import { RiveAnimationContainer } from './RiveAnimation.styles';
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { DefaultThemeColorKey } from 'styled-components';

export interface IconProps {
	src: string;
	color?: DefaultThemeColorKey
}

const RiveAnimation: React.FC<IconProps> = ({ src, color }) => {
	const params = {
		src,
		autoplay: true,
		layout: new Layout({
			fit: Fit.FitHeight,
			alignment: Alignment.TopCenter,
		}),
	};

	const { RiveComponent } = useRive(params);

	const { ref, inView } = useInView({
		triggerOnce: true, // Запускать только один раз при входе в область видимости
		threshold: 0.1, // Запускать, когда хотя бы 1% компонента видимо
	});

	return (
		<RiveAnimationContainer bgColor={color} ref={ref}>{inView && <RiveComponent style={{ width: '100%', alignSelf: 'stretch', height: '100%' }} />}</RiveAnimationContainer>
	);
};

export default RiveAnimation;
