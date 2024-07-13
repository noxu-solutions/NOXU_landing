import { css, createGlobalStyle } from 'styled-components';
import { font } from './fonts';

const CSS_RESET = css`
	//smooth those fonts
	body,
	input,
	button,
	select,
	textarea {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		-webkit-text-size-adjust: 100%;
		-moz-text-size-adjust: 100%;
		-ms-text-size-adjust: 100%;
		text-size-adjust: 100%;
	}

	// HTML5 display-role reset for older browsers
	article,
	aside,
	details,
	figcaption,
	figure,
	footer,
	header,
	hgroup,
	menu,
	nav,
	section {
		display: block;
	}

	ol,
	ul {
		list-style: none;
	}

	blockquote,
	q {
		quotes: none;
	}

	blockquote:before,
	blockquote:after,
	q:before,
	q:after {
		content: '';
		content: none;
	}

	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	body,
	html {
		margin: 0;
		padding: 0;
		scroll-behavior: smooth;
	}

	p {
		margin: 0;
	}

	b,
	strong {
		font-weight: bold;
	}

	input,
	select,
	textarea,
	button {
		border-radius: 0;
	}

	select::-ms-expand {
		display: none;
	}

	textarea {
		resize: none;
	}

	*,
	*:before,
	*:after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		color: inherit;
		vertical-align: baseline;
		outline: none;
	}

	img,
	picture {
		display: block;
		height: auto;
	}

	button,
	input,
	textarea {
		background: transparent;
		border: 0;
		outline: 0;
		font: inherit;
		color: inherit;

		@media (min-width: 1025px) {
			cursor: pointer;
		}
	}

	button {
		text-align: unset;
	}

	a {
		@media (max-width: 1024px) {
			cursor: default;
		}

		text-decoration: none;
		color: inherit;
		outline: none;

		&:focus,
		&:active {
			color: #f62727 !important;
			border-color: #f62727 !important;
			transition: 0.3s;

			svg {
				fill: #f62727 !important;
			}
		}
	}

	iframe {
		display: block;
		max-width: 100%;
	}

	html,
	body,
	#app {
		height: 100%;
	}

	body {
		color: #121213;
		background: #f5f6f9;
		${font.style}
	}

	//-----------------------------------------------------------
	// HELPERS
	//-----------------------------------------------------------

	.hidden {
		display: none;
	}

	.loader {
		animation: loading 1.2s linear infinite;
	}

	#layout-preloader {
		position: fixed;
		width: 100%;
		height: 100%;
		background: #fff;
		z-index: 9999;
		transition: opacity 0.5s;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	#layout-preloader {
		.loaded & {
			opacity: 0;
		}
	}

	::-webkit-scrollbar {
		width: 8px;
		height: 8px;
		background-color: #f5f6f9;
	}
	::-webkit-scrollbar-thumb {
		background-color: #f62727;
		border-radius: 5px;
	}

	@keyframes loading {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	// INPUTS
	input[type='number']::-webkit-inner-spin-button,
	input[type='number']::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
`;

export const GlobalStyle = createGlobalStyle`${CSS_RESET};`;
