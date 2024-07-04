'use client';

import styled from 'styled-components';
import { Col, containerCss, mediaContainerCss_3, Row } from './Containers';

export const Locations = styled(Col)`
	padding: 48px 16px;
	border-radius: 40px 40px 0 0;
	border-top: 1px solid ${({ theme }) => theme.color.grey_light_2};
	background-color: ${({ theme }) => theme.color.white};

	@media (min-width: ${({ theme }) => theme.breakpoint.extraLargeMin}px) {
		border: 1px solid ${({ theme }) => theme.color.grey_light_2};
		padding: 64px 80px 64px 80px;
		border-radius: 64px;
	}
`;

export const LocationContainer = styled(Col)`
	align-items: center;
	${containerCss}
`;

export const LocationItems = styled(Col)`
	gap: 24px;
	margin-top: 32px;
	width: 100%;

	@media (min-width: ${({ theme }) => theme.breakpoint.mediumLargeMin}px) {
		justify-content: space-between;
		align-items: center;
		flex-direction: row;
	}
`;

export const Location = styled(Col)`
	background-color: ${({ theme }) => theme.color.white};
	border: 1px solid ${({ theme }) => theme.color.grey_light_2};
	padding: 40px;
	border-radius: 32px;
	flex: 1;
	align-self: stretch;

	${mediaContainerCss_3}
`;

export const LocationImg = styled.img`
	width: 100%;
	margin-bottom: 24px;
`;

export const LocationFlagImg = styled.img`
	width: 32px;
	margin-bottom: 12px;
`;
