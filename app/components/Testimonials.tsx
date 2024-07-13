'use client';

import styled from 'styled-components';
import { Col, containerCss, mediaContainerCss_2, Row } from './Containers';

export const Testimonials = styled(Col)`
	padding: 40px 16px 56px 16px;

	@media (min-width: ${({ theme }) => theme.breakpoint.extraLargeMin}px) {
		padding: 64px 80px 104px 80px;
	}
`;

export const TestimonialsContainer = styled(Col)`
	${containerCss}
`;

export const TestimonialItems = styled.div`
	margin-top: 32px;
`;

export const Testimonial = styled(Col)`
	background-color: ${({ theme }) => theme.color.white};
	padding: 40px;
	gap: 12px;
	border-radius: 40px;
	flex: 1;
	align-self: stretch;

	border: 1px solid ${({ theme }) => theme.color.grey_light_2};

	${mediaContainerCss_2}
`;

export const TestimonialTexts = styled(Row)`
	gap: 16px;
	margin-top: 36px;
	justify-content: flex-start;
`;

export const TestimonialImg = styled.img`
	height: 40px;
	width: 40px;
	margin-bottom: 12px;
`;

export const TestimonialPersonImg = styled.img`
	height: 96px;
	width: 96px;
	border-radius: 24px;
`;
