import styled, { css } from 'styled-components';
import { Col, Row } from '../components/Containers';

export const StaleCarouselWrapper = styled.div(
	() => css`
		margin: 0 -12px;

		.slick-list,
		.slick-slider,
		.slick-track {
			position: relative;
			display: block;
			width: 100%;
		}

		.slick-loading .slick-slide,
		.slick-loading .slick-track {
			visibility: hidden;
		}

		.slick-slider {
			box-sizing: border-box;
			-webkit-user-select: none;
			-moz-user-select: none;
			-ms-user-select: none;
			user-select: none;
			-webkit-touch-callout: none;
			-khtml-user-select: none;
			-ms-touch-action: pan-y;
			touch-action: pan-y;
			-webkit-tap-highlight-color: transparent;
		}

		.slick-list {
			overflow: hidden;
			margin: 0;
			padding: 0;
		}

		.slick-list:focus {
			outline: 0;
		}

		.slick-list.dragging {
			cursor: pointer;
			cursor: hand;
		}

		.slick-slider .slick-list,
		.slick-slider .slick-track {
			transform: translate3d(0, 0, 0);
		}

		.slick-track {
			top: 0;
			left: 0;
		}

		.slick-track:after,
		.slick-track:before {
			display: table;
			content: '';
		}

		.slick-track:after {
			clear: both;
		}

		.slick-slide {
			height: 100%;
			min-height: 1px;

			div {
				outline: none;
			}
		}

		.slick {
			outline: none;

			&-slide {
				padding: 0 12px;
			}

			&-dots {
				display: flex !important;
				justify-content: center;
				bottom: -50px;

				li {
					margin: 6px;

					button {
						width: 20px;
						height: 20px;
						font-size: 0;
						line-height: 0;
						display: flex;
						align-items: center;
						justify-content: center;
						padding: 0;
						color: transparent;
						border: 0;
						outline: none;
						background: transparent;
						position: relative;

						&:before {
							content: '';
							width: 15px;
							height: 15px;
							text-align: center;
							box-shadow: inset 0 0 0 1px #8c9199;
							border-radius: 100%;
							transition: 0.4s;
							border: 2px solid transparent;
						}

						&:focus {
							&:before {
								box-shadow: inset 0 0 0 1px #f62727;
								border-color: #f62727;
							}
						}
					}

					&.slick-active {
						button:before {
							box-shadow: inset 0 0 0 20px #f62727;
							transition: 0.4s;
						}
					}
				}
			}
		}
	`,
);

export const ArrowsContainer = styled(Row)`
	display: none;

	@media (min-width: ${({ theme }) => theme.breakpoint.mediumMin}px) {
		display: flex;
	}
`;
