import styled from 'styled-components';
import Icon from '../Icon/Icon';
import { ILoaderProps } from './Loader';
import { Row } from '../Containers';

export const LoaderWrapper = styled(Row)<{
	withBackdrop: ILoaderProps['withBackdrop'];
}>`
	justify-content: center;
	width: 100%;
	height: 100%;
	background-color: ${({ theme, withBackdrop }) => (withBackdrop ? theme.color.backdropLight : theme.color.transparent)};
`;

export const StyledLoaderIcon = styled(Icon)`
	animation: loading 1.2s linear infinite;
	@keyframes loading {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;
