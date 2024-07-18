import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas';
import { RiveAnimationContainer } from './RiveAnimation.styles';

export interface IconProps {
	src: string;
}

const RiveAnimation: React.FC<IconProps> = ({ src }) => {
	const params = {
		src,
		autoplay: true,
		layout: new Layout({
			fit: Fit.FitHeight,
			alignment: Alignment.TopCenter,
		}),
	};

	const { RiveComponent } = useRive(params);

	return (
		<RiveAnimationContainer>
			<RiveComponent style={{ width: '100%', alignSelf: 'stretch', height: '100%' }} />
		</RiveAnimationContainer>
	);
};

export default RiveAnimation;
