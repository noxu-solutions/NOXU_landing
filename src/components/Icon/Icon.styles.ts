import styled from 'styled-components';
import { SpacingCssProps, spacingCss } from '../Containers';

export const StyledIcon = styled.svg.attrs<SpacingCssProps>(({ theme, mbValue, mlValue, mtValue, mrValue }) => ({
	mbValue: mbValue || theme.spacing.s,
	mtValue: mtValue || theme.spacing.s,
	mrValue: mrValue || theme.spacing.s,
	mlValue: mlValue || theme.spacing.s,
}))`
	min-width: ${({ width }) => width};

	${spacingCss}
`;
