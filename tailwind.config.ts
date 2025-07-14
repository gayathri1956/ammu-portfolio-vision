
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
				'display': ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
				'mono': ['JetBrains Mono', 'Consolas', 'Monaco', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				'electric': {
					'50': 'hsl(186, 100%, 97%)',
					'100': 'hsl(185, 96%, 90%)',
					'200': 'hsl(186, 94%, 80%)',
					'300': 'hsl(187, 92%, 69%)',
					'400': 'hsl(188, 86%, 53%)',
					'500': 'hsl(189, 94%, 43%)',
					'600': 'hsl(192, 91%, 36%)',
					'700': 'hsl(193, 82%, 31%)',
					'800': 'hsl(194, 70%, 27%)',
					'900': 'hsl(196, 64%, 24%)',
					'950': 'hsl(197, 79%, 15%)'
				},
				'platinum': {
					'50': 'hsl(210, 20%, 98%)',
					'100': 'hsl(220, 14%, 96%)',
					'200': 'hsl(220, 13%, 91%)',
					'300': 'hsl(216, 12%, 84%)',
					'400': 'hsl(218, 11%, 65%)',
					'500': 'hsl(220, 9%, 46%)',
					'600': 'hsl(215, 14%, 34%)',
					'700': 'hsl(217, 19%, 27%)',
					'800': 'hsl(215, 28%, 17%)',
					'900': 'hsl(221, 39%, 11%)',
					'950': 'hsl(224, 71%, 4%)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontSize: {
				'xs': ['0.75rem', { lineHeight: '1rem' }],
				'sm': ['0.875rem', { lineHeight: '1.25rem' }],
				'base': ['1rem', { lineHeight: '1.5rem', letterSpacing: '0.01em' }],
				'lg': ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '0.01em' }],
				'xl': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '0.01em' }],
				'2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '0.02em' }],
				'3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '0.02em' }],
				'4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '0.02em' }],
				'5xl': ['3rem', { lineHeight: '1', letterSpacing: '0.02em' }],
				'6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '0.02em' }],
				'7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '0.02em' }],
				'8xl': ['6rem', { lineHeight: '1', letterSpacing: '0.02em' }],
				'9xl': ['8rem', { lineHeight: '1', letterSpacing: '0.02em' }]
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'fade-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'slide-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-50px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'bounce-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.3)'
					},
					'50%': {
						opacity: '1',
						transform: 'scale(1.05)'
					},
					'70%': {
						transform: 'scale(0.9)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'gradient-x': {
					'0%, 100%': {
						'background-size': '200% 200%',
						'background-position': 'left center'
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': 'right center'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.8s ease-out',
				'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
				'fade-in-left': 'fade-in-left 0.8s ease-out forwards',
				'fade-in-right': 'fade-in-right 0.8s ease-out forwards',
				'slide-in-left': 'slide-in-left 0.6s ease-out forwards',
				'bounce-in': 'bounce-in 0.8s ease-out forwards',
				'gradient-x': 'gradient-x 3s ease infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
