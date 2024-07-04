'use client';

import styled from 'styled-components';
import { Col, containerCss, mediaContainerCss, Row } from './Containers';

export const Expertise = styled(Col)`
	padding: 40px 16px 56px 16px;
	border-radius: 40px;
	border: 1px solid ${({ theme }) => theme.color.grey_light_2};
	background-color: ${({ theme }) => theme.color.white};

	@media (min-width: ${({ theme }) => theme.breakpoint.extraLargeMin}px) {
		padding: 64px 80px 64px 80px;
		border-radius: 64px;
	}
`;

export const ExpertiseContainer = styled(Col)`
	${containerCss}
`;

export const ExpertiseExperts = styled(Row)`
	gap: 24px;
	margin-top: 32px;

	flex-wrap: wrap;
`;

export const ExpertiseExpert = styled(Col)`
	background-color: ${({ theme }) => theme.color.black_secondary};
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;

	padding: 16px;
	border-radius: 32px;
	flex: 1;
	align-self: stretch;

	height: 440px;

	${mediaContainerCss}
`;

export const ExpertiseExpertText = styled(Col)`
	margin-top: auto;
	padding: 16px;
	gap: 6px;
	border-radius: 24px;
	border: 1px solid ${({ theme }) => theme.color.white + '50'};
	background-color: ${({ theme }) => theme.color.white + '30'};
`;

export const ExpertiseExpertImg = styled.img`
	width: 100%;
`;

export const ExpertiseAwards = styled(Row)`
	gap: 24px;
	margin-top: 64px;

	flex-wrap: wrap;
`;

export const ExpertiseAward = styled(Col)`
	border: 1px solid ${({ theme }) => theme.color.light_red};
	background-color: ${({ theme }) => theme.color.light_red_2};
	padding: 24px 32px 24px 40px;
	gap: 12px;
	border-radius: 24px;
	flex: 1;
	align-self: stretch;

	${mediaContainerCss}
`;
