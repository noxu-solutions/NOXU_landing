'use client';
import { FC, AnchorHTMLAttributes, CSSProperties } from 'react';
import { DefaultThemeColorKey, useTheme } from 'styled-components';
import { StyledLink } from './Link.styles';
import Icon, { IconProps } from '../Icon/Icon';
import { SpacingCssProps } from '../Containers';

export interface LinkProps
	extends Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'target' | 'rel' | 'type' | 'download'>,
		SpacingCssProps,
		Pick<CSSProperties, 'display'> {
	color?: DefaultThemeColorKey;
	withIcon?: boolean;
	size?: 'small' | 'standard';
	children?: any;
}

const Link: FC<LinkProps> = ({ children, size = 'standard', withIcon, href, target, rel, type, download, color, ...spacingCssProps }) => {
	const theme = useTheme();

	return (
		<StyledLink {...spacingCssProps} size={size} href={href} target={target} rel={rel} type={type} download={download} color={color}>
			{children}

			{!!withIcon && <Icon icon='arrow' height='16px' width='16px' fill={theme.color.black_secondary} />}
		</StyledLink>
	);
};

export default Link;
