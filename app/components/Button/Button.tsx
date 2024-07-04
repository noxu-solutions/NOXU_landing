'use client';
import { FC, AllHTMLAttributes } from 'react';
import { SpacingCssProps } from '../Containers';
import { StyledButton } from './Button.styles';
import Icon from '../Icon/Icon';
import { DefaultThemeColorKey, useTheme } from 'styled-components';

export interface ButtonProps extends Pick<AllHTMLAttributes<HTMLButtonElement>, 'onClick' | 'disabled' | 'form'>, SpacingCssProps {
	size?: 'standard' | 'small';
	withIcon?: boolean;
	children?: any;
	color?: DefaultThemeColorKey;
	as?: React.ElementType;
}

const Button: FC<ButtonProps> = ({ disabled, children, onClick, size = 'standard', withIcon, color, ...spacingCssProps }) => {
	const theme = useTheme();
	return (
		<StyledButton color={color} size={size} disabled={disabled} onClick={onClick} {...spacingCssProps}>
			{children}

			{!!withIcon && (
				<Icon icon='arrow' height={size === 'standard' ? '20px' : '16px'} width={size === 'standard' ? '20px' : '16px'} fill={theme.color.white} />
			)}
		</StyledButton>
	);
};

export default Button;
