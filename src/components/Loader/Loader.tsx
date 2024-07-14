import { FC, CSSProperties } from 'react';
import { useTheme, DefaultTheme } from 'styled-components';
import { LoaderWrapper, StyledLoaderIcon } from './Loader.styles';

export interface ILoaderProps {
	size?: 'small' | 'medium' | 'large';
	withBackdrop?: boolean;
	style?: CSSProperties;
}

const getLoaderIconSize = (theme: DefaultTheme, size: ILoaderProps['size']) => {
	if (size === 'small') {
		return theme.spacing.m;
	}
	if (size === 'medium') {
		return theme.spacing.xl;
	}
	if (size === 'large') {
		return theme.spacing.xxxl;
	}
};

const Loader: FC<ILoaderProps> = ({ size = 'small', withBackdrop = false, style }) => {
	const theme = useTheme();
	const loaderIconSize = getLoaderIconSize(theme, size);

	return (
		<LoaderWrapper withBackdrop={withBackdrop} style={style} data-testid='loader'>
			<StyledLoaderIcon icon='loader-ico' width={loaderIconSize} height={loaderIconSize} />
		</LoaderWrapper>
	);
};

export default Loader;
