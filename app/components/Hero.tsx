'use client';

import styled from 'styled-components';
import { Col, containerCss, mediaContainerCss, Row } from './Containers';

export const Hero = styled(Col)`
	background-color: ${({ theme }) => theme.color.white};
	border: 1px solid ${({ theme }) => theme.color.grey_light_2};

	padding: 40px 16px 56px 16px;
	gap: 32px;
	border-radius: 0px 0px 40px 40px;

	@media (min-width: ${({ theme }) => theme.breakpoint.extraLargeMin}px) {
		padding: 48px 80px 64px 80px;
		gap: 48px;
		border-radius: 0px 0px 64px 64px;
	}
`;

export const HeroContainer = styled(Col)`
	${containerCss}
`;

export const HeroTexts = styled(Col)`
	gap: 62px;

	@media (min-width: ${({ theme }) => theme.breakpoint.mediumLargeMin}px) {
		justify-content: space-between;
		align-items: center;
		flex-direction: row;
	}
`;

export const HeroInfo = styled(Col)`
	gap: 16px;
`;

export const HeroBigImg = styled.img`
	width: 100%;
`;

export const HeroAwards = styled(Row)`
	gap: 24px;
	flex-wrap: wrap;
`;

export const HeroAward = styled(Col)`
	background-color: ${({ theme }) => theme.color.grey_light};
	padding: 32px 40px;
	gap: 12px;
	border-radius: 24px;
	flex: 1;
	align-self: stretch;
	align-items: center;
	text-align: center;
	transition: ${({ theme }) => theme.transition};
	border: 2px solid ${({ theme }) => theme.color.transparent};

	&:hover {
		border: 2px solid ${({ theme }) => theme.color.grey_light_2};
	}

	${mediaContainerCss}
`;

export const HeroImg = styled.img`
	height: 50px;
`;
