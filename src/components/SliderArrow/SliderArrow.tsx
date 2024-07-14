import { FC } from 'react';
import { SliderArrowIcon, SliderArrowWrapper } from './SliderArrow.styles';

export interface ISliderArrowProps {
	variant?: 'prev' | 'next';
	onClick?: () => void;
}

const SliderArrow: FC<ISliderArrowProps> = ({ variant, onClick }) => {
	return (
		<SliderArrowWrapper variant={variant} onClick={onClick}>
			<SliderArrowIcon variant={variant} style={{ transform: variant === 'next' ? 'rotate(0deg)' : 'rotate(180deg)' }}>
				<use xlinkHref={`#arrow`} />
			</SliderArrowIcon>
		</SliderArrowWrapper>
	);
};

export default SliderArrow;
