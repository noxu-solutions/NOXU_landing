import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		name: string;
		breakpoint: {
			extraSmallMax: number;
			extraSmallMin: number;

			smallMax: number;
			smallMin: number;

			mediumMax: number;
			mediumMin: number;

			largeMax: number;
			largeMin: number;

			mediumLargeMax: number;
			mediumLargeMin: number;

			extraLargeMax: number;
			extraLargeMin: number;
		};

		color: {
			black: string;
			black_secondary: string;
			red: string;
			grey: string;
			grey_light: string;
			grey_light_2: string;
			grey_light_3: string;
			light_red: string;
			light_red_2: string;
			light_green: string;
			light_green_2: string;
			light_blue: string;
			light_blue_2: string;
			light_purple: string;
			light_purple_2: string;
			green: string;
			blue: string;
			purple: string;

			white: string;
			transparent: string;
			[key: string]: string;
		};

		transition: string;
		shadow: string;

		fontSize: {
			xs: string;
			s: string;
			m: string;
			l: string;
			xl: string;
			xxl: string;
			xxxl: string;
			xxxxl: string;
		};

		spacing: {
			xxs: string;
			xs: string;
			s: string;
			m: string;
			l: string;
			xl: string;
			xxl: string;
			xxxl: string;
		};

		borderRadius: {
			s: string;
			m: string;
			l: string;
			xl: string;
			round: string;
		};
	}

	export type DefaultThemeColorKey = Extract<keyof DefaultTheme['color'], string>;
}
