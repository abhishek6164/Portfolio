/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				bgColor: '#112240',
				primaryColor: '#64FFDA',
				textColor: '#8892B0',
				customGreen: '#36ffcf',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			animation: {
				"background-position-spin":
					"background-position-spin 3000ms infinite alternate",
			},
			keyframes: {
				"background-position-spin": {
					"0%": { backgroundPosition: "top center" },
					"100%": { backgroundPosition: "bottom center" },
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		},
		screens: {

			// Minimun width walo ke liye 
			'xsm': '350px',
			'xs': '475px',
			'sm': '640px',
			'md': '768px',
			'bs': '900px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px',

			// Maximun width walo ke liye 

			'2xl-mx': {
				max: '1535px'
			},
			'xl-mx': {
				max: '1279px'
			},
			'lg-mx': {
				max: '1023px'
			},
			'bs-mx': {
				max: '899px'
				},
			'md-mx': {
				max: '767px'
			},
			'sm-mx': {
				max: '639px'
			},
			'xs-mx': {
				max: '475px'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
}
