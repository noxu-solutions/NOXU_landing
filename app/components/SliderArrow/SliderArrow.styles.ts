import styled from 'styled-components';
import { Row } from '../Containers';
import { ISliderArrowProps } from './SliderArrow';

export const SliderArrowWrapper = styled(Row)<ISliderArrowProps>`
	justify-content: center;
	width: 64px;
	height: 64px;
	border-radius: 100%;
	border: 1px solid ${({ theme }) => theme.color.grey_light_2};
	background-color: ${({ theme }) => theme.color.white};
	margin: ${({ variant }) => (variant === 'next' ? '16px' : '0')};
	transition: ${({ theme }) => theme.transition};
	cursor: pointer;

	&:hover {
		background-color: ${({ theme }) => theme.color.black_secondary};

		svg {
			fill: ${({ theme }) => theme.color.white};
		}
	}
`;

export const SliderArrowIcon = styled.svg<ISliderArrowProps>`
	width: 28px;
	height: 28px;
	margin-left: ${({ variant }) => (variant === 'next' ? '0' : '10px')};
	margin-right: ${({ variant }) => (variant === 'next' ? '10px' : '0')};
`;
