import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	daisyui: {
		themes: [
			'light',
			'dark',
			'cyberpunk',
			'aqua',
			'lofi',
			'coffee',
			'valentine',
		]
	},

	plugins: [
		require("tailwindcss-animate"),
		require('daisyui')
	],
};
export default config;
