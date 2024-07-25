import styled from 'styled-components';
import { containerCss, Row, Col } from './Containers';

export const Footer = styled(Row)`
	background-color: ${({ theme }) => theme.color.black_secondary};
	padding: 40px 16px 16px 16px;

	@media (min-width: ${({ theme }) => theme.breakpoint.extraLargeMin}px) {
		padding: 44px 80px 44px 80px;
	}
`;

export const FooterContainer = styled(Row)`
	${containerCss}
`;

export const FooterNav = styled(Col)`
	flex: 1;
	gap: 48px;
`;

export const FooterSocialLinksWrapper = styled(Col)`
	gap: 24px;

	@media (min-width: ${({ theme }) => theme.breakpoint.mediumMin}px) {
		justify-content: space-between;
		align-items: center;
		flex-direction: row;
	}
`;

export const FooterLinksWrapper = styled(Col)`
	gap: 24px;
	flex-direction: column-reverse;

	@media (min-width: ${({ theme }) => theme.breakpoint.largeMin}px) {
		justify-content: space-between;
		align-items: center;
		flex-direction: row;
	}
`;

export const FooterLinks = styled(Col)`
	align-items: flex-start;
	gap: 24px;

	@media (min-width: ${({ theme }) => theme.breakpoint.mediumMin}px) {
		flex-direction: row;
		justify-content: flex-start;
	}

	@media (min-width: ${({ theme }) => theme.breakpoint.largeMin}px) {
		justify-content: flex-end;
	}
`;

export const FooterSocialLinks = styled(Row)`
	gap: 24px;
	justify-content: flex-start;

	@media (min-width: ${({ theme }) => theme.breakpoint.mediumMin}px) {
		justify-content: flex-end;
	}

	@media (min-width: ${({ theme }) => theme.breakpoint.largeMin}px) {
		flex-wrap: nowrap;
		max-width: 100%;
	}
`;

export const FooterLogo = styled.img`
	width: 216px;
	height: 66px;
`;
