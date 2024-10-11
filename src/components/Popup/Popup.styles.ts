import { Col, Row } from 'components/Containers';
import styled from 'styled-components';

export const PopupWrapper = styled(Col)`
	flex: 1;
	align-self: stretch;
	overflow-y: auto;
	z-index: 30;

	@media (min-width: ${({ theme }) => theme.breakpoint.largeMin}px) {
		flex: unset;
		align-self: unset;
		border-radius: ${({ theme }) => theme.borderRadius.m};
		width: ${({ width }) => width};
		max-width: ${({ maxWidth }) => maxWidth};
		height: ${({ height }) => height};
	}
`;

export const PopupHeader = styled(Row)`
	padding: ${({ theme }) => `${theme.spacing.m} ${theme.spacing.m}`};
	background-color: ${({ theme }) => theme.color.white};

	@media (min-width: ${({ theme }) => theme.breakpoint.largeMin}px) {
		padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.xxl}`};
		border-top-left-radius: ${({ theme }) => theme.borderRadius.m};
		border-top-right-radius: ${({ theme }) => theme.borderRadius.m};
	}
`;

export const PopupContent = styled(Col)`
	flex: 1;
	align-self: stretch;
	position: relative;
	padding: ${({ theme }) => `${theme.spacing.m} ${theme.spacing.m}`};
	background-color: ${({ theme }) => theme.color.white};
	overflow-y: auto;

	@media (min-width: ${({ theme }) => theme.breakpoint.largeMin}px) {
		padding: ${({ theme }) => `${theme.spacing.s} ${theme.spacing.xxl} ${theme.spacing.xxl}`};
	}
`;

export const PopupFooter = styled(Row)`
	padding: ${({ theme }) => `${theme.spacing.m} ${theme.spacing.m}`};
	background-color: ${({ theme }) => theme.color.white};
	border-top: ${({ theme }) => `1px solid ${theme.color.greyLight_2}`};
	justify-content: flex-start;

	@media (min-width: ${({ theme }) => theme.breakpoint.largeMin}px) {
		padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.xxl}`};
		border-bottom-left-radius: ${({ theme }) => theme.borderRadius.m};
		border-bottom-right-radius: ${({ theme }) => theme.borderRadius.m};
	}
`;

export const CloseButton = styled.button`
	margin-left: auto;
`;
