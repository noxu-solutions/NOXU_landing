'use client';
import { SpacingCssProps } from '../Containers';
import { StyledIcon } from './Icon.styles';

export interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'ref'>, SpacingCssProps {
	icon: string;
}

const Icon: React.FC<IconProps> = ({ icon, width = '24px', height = '24px', ...props }) => (
	<StyledIcon width={width} height={height} {...props}>
		<use xlinkHref={`#${icon}`} />
	</StyledIcon>
);

export default Icon;
