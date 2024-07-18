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
	style?: CSSProperties;
	variant?: 'link' | 'button';
}

const Link: FC<LinkProps> = ({
	children,
	size = 'standard',
	withIcon,
	href,
	target,
	rel,
	type,
	download,
	color,
	style,
	variant = 'link',
	...spacingCssProps
}) => {
	const theme = useTheme();

	return (
		<StyledLink
			variant={variant}
			style={style}
			{...spacingCssProps}
			size={size}
			href={href}
			target={target}
			rel={rel}
			type={type}
			download={download}
			color={color}>
			{children}

			{!!withIcon && (
				<Icon
					icon='arrow'
					height={size === 'standard' ? '20px' : '16px'}
					width={size === 'standard' ? '20px' : '16px'}
					fill={variant === 'button' ? theme.color.white : theme.color.black_secondary}
				/>
			)}
		</StyledLink>
	);
};

export default Link;
