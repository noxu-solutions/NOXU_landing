import React, { CSSProperties, FC, PropsWithChildren, ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop } from '../Backdrop/Backdrop.styles';
import Icon from '../Icon/Icon';
import { CloseButton, PopupContent, PopupFooter, PopupHeader, PopupWrapper } from './Popup.styles';

export interface PopupProps extends Pick<CSSProperties, 'width' | 'maxWidth' | 'height'> {
	HeaderContent?: ReactNode;
	FooterContent?: ReactNode;
	onClose?: () => void;
}

const Popup: FC<PopupProps & PropsWithChildren> = ({ width, maxWidth, height, children, HeaderContent, FooterContent, onClose }) => {
	useEffect(() => {
		const handler = (e: any) => {
			if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) {
				onClose?.();
			}
		};

		document.addEventListener('keydown', handler);

		return () => {
			document.removeEventListener('keydown', handler);
		};
	}, [onClose]);

	const popupOnClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
		event.stopPropagation();
	};

	const onCloseHandler = () => {
		onClose?.();
	};

	return createPortal(
		<>
			<Backdrop onClick={onCloseHandler}>
				<PopupWrapper width={width} maxWidth={maxWidth} height={height} onClick={popupOnClickHandler}>
					<PopupHeader>
						{HeaderContent}
						<CloseButton onClick={onCloseHandler}>
							<Icon icon='cross-ico' />
						</CloseButton>
					</PopupHeader>

					<PopupContent>{children}</PopupContent>
					{!!FooterContent && <PopupFooter>{FooterContent}</PopupFooter>}
				</PopupWrapper>
			</Backdrop>
		</>,
		document.body,
	);
};

export default Popup;
