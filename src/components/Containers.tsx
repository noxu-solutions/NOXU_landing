import { CSSProperties } from 'react';
import styled, { css } from 'styled-components';

export const containerCss = css`
	width: 100%;
	max-width: 1280px;
	margin: 0 auto;
`;

export const mediaContainerCss = css`
	min-width: 100%;

	@media (min-width: ${({ theme }) => theme.breakpoint.largeMin}px) {
		min-width: 48%;
	}
	@media (min-width: ${({ theme }) => theme.breakpoint.mediumLargeMin}px) {
		min-width: auto;
	}
`;

export const mediaContainerCss_2 = css`
	min-width: 100%;

	@media (min-width: ${({ theme }) => theme.breakpoint.largeMin}px) {
		min-width: 48%;
	}
`;

export const mediaContainerCss_3 = css`
	min-width: 100%;

	@media (min-width: ${({ theme }) => theme.breakpoint.largeMin}px) {
		min-width: auto;
	}
`;

export interface SpacingCssProps {
	mb?: boolean;
	mt?: boolean;
	mr?: boolean;
	ml?: boolean;
	ma?: boolean;
	mbValue?: CSSProperties['marginBottom'];
	mtValue?: CSSProperties['marginTop'];
	mrValue?: CSSProperties['marginRight'];
	mlValue?: CSSProperties['marginLeft'];
}

export const spacingCss = css<SpacingCssProps>`
	margin-bottom: ${({ mb, ma, mbValue }) => (ma || mb) && mbValue};
	margin-top: ${({ mt, ma, mtValue }) => (ma || mt) && mtValue};
	margin-left: ${({ ml, ma, mlValue }) => (ma || ml) && mlValue};
	margin-right: ${({ mr, ma, mrValue }) => (ma || mr) && mrValue};
`;

export type FlexProps = Omit<CSSProperties, 'translate'> & SpacingCssProps;

export const Flex = styled.div<FlexProps>`
	display: flex;
	flex: ${({ flex }) => flex};
	flex-basis: ${({ flexBasis }) => flexBasis};
	justify-content: ${({ justifyContent }) => justifyContent};
	align-items: ${({ alignItems }) => alignItems};
	align-content: ${({ alignContent }) => alignContent};
	align-self: ${({ alignSelf }) => alignSelf};
	flex-direction: ${({ flexDirection }) => flexDirection};
	flex-flow: ${({ flexFlow }) => flexFlow};
	flex-grow: ${({ flexGrow }) => flexGrow};
	flex-shrink: ${({ flexShrink }) => flexShrink};
	flex-wrap: ${({ flexWrap }) => flexWrap};
	order: ${({ order }) => order};
	gap: ${({ gap }) => gap};
	column-gap: ${({ columnGap }) => columnGap};
	row-gap: ${({ rowGap }) => rowGap};

	${spacingCss}
`;

export const Row = styled(Flex).attrs<FlexProps>(({ theme, mbValue, mlValue, mtValue, mrValue, justifyContent = 'space-between', alignItems = 'center' }) => ({
	mbValue: mbValue || theme.spacing.m,
	mtValue: mtValue || theme.spacing.m,
	mrValue: mrValue || theme.spacing.m,
	mlValue: mlValue || theme.spacing.m,
	justifyContent,
	alignItems,
}))``;

export const Col = styled(Flex).attrs<SpacingCssProps & Pick<CSSProperties, 'overflow'>>(({ theme, mbValue, mlValue, mtValue, mrValue }) => ({
	mbValue: mbValue || theme.spacing.m,
	mtValue: mtValue || theme.spacing.m,
	mrValue: mrValue || theme.spacing.m,
	mlValue: mlValue || theme.spacing.m,
}))`
	flex-direction: column;
	overflow: ${({ overflow }) => overflow};
`;
