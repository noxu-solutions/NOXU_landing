'use client';
import { FC, InputHTMLAttributes, ReactNode, RefObject } from 'react';
import { useTheme } from 'styled-components';

import { CheckboxWrapper, Label, CheckboxInnerWrapper, HiddenCheckbox, StyledCheckbox } from './Checkbox.styles';

interface OwnProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
	label?: string | ReactNode;
}

const Checkbox: FC<OwnProps> = ({ className, checked, label, ...props }) => {
	const theme = useTheme();

	return (
		<CheckboxWrapper
			style={{
				pointerEvents: props.disabled ? 'none' : 'auto',
			}}>
			<CheckboxInnerWrapper className={className}>
				<HiddenCheckbox checked={checked} {...props} />
				<StyledCheckbox checked={!!checked} aria-hidden='true'>
					<svg width='100%' height='100%' style={{ fill: checked ? theme.color.white : 'transparent' }}>
						<use xlinkHref='#checkbox-checkmark' />
					</svg>
				</StyledCheckbox>
			</CheckboxInnerWrapper>

			{label ? <Label>{label}</Label> : null}
		</CheckboxWrapper>
	);
};

export default Checkbox;
