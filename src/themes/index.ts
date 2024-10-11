import { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
	name: 'defaultTheme',
	breakpoint: {
		extraSmallMax: 374,
		extraSmallMin: 375,

		smallMax: 575,
		smallMin: 576,

		mediumMax: 767,
		mediumMin: 768,

		largeMax: 1024,
		largeMin: 1025,

		mediumLargeMax: 1279,
		mediumLargeMin: 1280,

		extraLargeMax: 1319,
		extraLargeMin: 1320,
	},

	color: {
		black: '#17171C',
		black_secondary: '#111119',
		red: '#F62727',
		grey: '#17171C',
		grey_light: '#F5F6F9',
		grey_light_2: '#E7E6F4',
		grey_light_3: '#667085',
		light_red: '#FFD5CF',
		light_red_2: '#FFF2F0',
		green: '#008364',
		light_green: '#B9EEE2',
		light_green_2: '#E4F8F3',
		blue: '#3FBDEF',
		light_blue: '#BED1FF',
		light_blue_2: '#EAF0FF',
		purple: '#684FB4',
		light_purple: '#E6D3FF',
		light_purple_2: '#F7F0FF',

		white: '#FFFFFF',
		transparent: 'rgba(0,0,0,0)',
		backdrop: 'rgba(0,0,0,0.4)',
	},

	transition: '0.3s',
	shadow: '0 0 9px rgba(0, 0, 0, 0.1)',

	fontSize: {
		xs: '12px',
		s: '14px',
		m: '16px',
		l: '18px',
		xl: '20px',
		xxl: '24px',
		xxxl: '28px',
		xxxxl: '36px',
	},

	spacing: {
		xxs: '4px',
		xs: '8px',
		s: '12px',
		m: '16px',
		l: '20px',
		xl: '24px',
		xxl: '32px',
		xxxl: '48px',
	},

	borderRadius: {
		s: '3px',
		m: '6px',
		l: '20px',
		xl: '56px',
		round: '50%',
	},
};
