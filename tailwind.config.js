import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: ['class'],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: ['dark'],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},

		extend: {
			backgroundImage: {
				nodes: "url('./lib/assets/images/10.webp')",
				'radial-primary': 'radial-gradient(79.21% 70.57% at 50% 50.1%, #2D5C8B 0%, #021329 100%)'
			},
			boxShadow: {
				'b-2xl': '0 40px 40px -40px',
				't-section': '0 24px 38px',
				'md-2': '0 4px 10px -1px rgb(0 0 0 / 0.3)'
			},
			spacing: {
				limit: '1250px'
			},
			colors: {
				border: 'hsl(var(--border) / <alpha-value>)',
				input: 'hsl(var(--input) / <alpha-value>)',
				ring: 'hsl(var(--ring) / <alpha-value>)',
				background: 'hsl(var(--background) / <alpha-value>)',
				foreground: 'hsl(var(--foreground) / <alpha-value>)',
				primary: {
					DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
					foreground: 'hsl(var(--primary-foreground) / <alpha-value>)'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
					foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
					foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
					foreground: 'hsl(var(--muted-foreground) / <alpha-value>)'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
					foreground: 'hsl(var(--accent-foreground) / <alpha-value>)'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
					foreground: 'hsl(var(--popover-foreground) / <alpha-value>)'
				},
				card: {
					DEFAULT: 'hsl(var(--card) / <alpha-value>)',
					foreground: 'hsl(var(--card-foreground) / <alpha-value>)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				marcellus: 'marcellus, sans-serif',
				metropolis: 'metropolis, sans-serif',
				'metropolis-medium': 'metropolis-medium, sans-serif',
				'metropolis-semibold': 'metropolis-semibold, sans-serif',
				'metropolis-bold': 'metropolis-bold, sans-serif',
				'metropolis-black': 'metropolis-black, sans-serif',
				sans: [...fontFamily.sans]
			}
		}
	}
};

export default config;
