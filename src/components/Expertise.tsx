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

export const ExpertiseExperts = styled.div`
	margin-top: 32px;
`;

export const ExpertiseExpert = styled(Col)`
	background-color: ${({ theme }) => theme.color.white};
	border: 1px solid ${({ theme }) => theme.color.grey_light_2};

	border-radius: 32px;
	flex: 1;
	align-self: stretch;

	${mediaContainerCss};
`;

export const ExpertiseExpertText = styled(Col)`
	padding: 24px;
	gap: 6px;
	border: 1px solid ${({ theme }) => theme.color.white + '50'};
`;

export const ExpertiseExpertImg = styled.img`
	width: 100%;
	border-radius: 32px 32px 24px 24px;
`;

export const ExpertiseAwards = styled(Row)`
	row-gap: 24px;
	margin-top: 64px;

	flex-wrap: wrap;

	@media (min-width: ${({ theme }) => theme.breakpoint.largeMin}px) {
		gap: 24px;
	}
`;

export const ExpertiseAward = styled(Col)`
	border: 1px solid ${({ theme }) => theme.color.light_red};
	background-color: ${({ theme }) => theme.color.light_red_2};
	padding: 16px;
	gap: 12px;
	border-radius: 24px;
	flex: 1;
	align-self: stretch;

	min-width: 48%;
	max-width: 48%;

	@media (min-width: ${({ theme }) => theme.breakpoint.mediumMin}px) {
		padding: 24px 32px 24px 40px;
	}

	@media (min-width: ${({ theme }) => theme.breakpoint.largeMin}px) {
		max-width: auto;
		min-width: auto;
	}
`;
