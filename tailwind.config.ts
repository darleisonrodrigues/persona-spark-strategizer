
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
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'gradient-primary': 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
				'gradient-secondary': 'linear-gradient(135deg, #374151 0%, #1f2937 100%)',
				'gradient-hero': 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 25%, #2d2d2d 50%, #374151 75%, #4b5563 100%)',
				'gradient-card': 'linear-gradient(145deg, rgba(31, 41, 55, 0.1) 0%, rgba(55, 65, 81, 0.1) 100%)',
				'gradient-elegant': 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
				'gradient-dark': 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
				'gradient-light': 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
				'gradient-modern': 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 25%, #2d2d2d 50%, #374151 75%, #4b5563 100%)',
				'gradient-glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)',
				'gradient-mesh': 'radial-gradient(circle at 20% 80%, #1a1a1a 0%, transparent 50%), radial-gradient(circle at 80% 20%, #2d2d2d 0%, transparent 50%), radial-gradient(circle at 40% 40%, #374151 0%, transparent 50%)',
				'gradient-aurora': 'linear-gradient(45deg, #0f0f0f, #1a1a1a, #2d2d2d, #374151, #4b5563)',
				'gradient-luxury': 'linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #475569 75%, #64748b 100%)',
				'gradient-sophisticated': 'linear-gradient(135deg, #000000 0%, #1a1a1a 25%, #2c2c2c 50%, #3d3d3d 75%, #4a4a4a 100%)',
				'gradient-noir': 'linear-gradient(135deg, #0a0a0a 0%, #1c1c1c 25%, #2e2e2e 50%, #404040 75%, #525252 100%)',
				'gradient-charcoal': 'linear-gradient(135deg, #111827 0%, #1f2937 25%, #374151 50%, #4b5563 75%, #6b7280 100%)'
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
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'gradient-shift': {
					'0%, 100%': {
						'background-position': '0% 50%'
					},
					'50%': {
						'background-position': '100% 50%'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'scale-in': 'scale-in 0.2s ease-out',
				'gradient-shift': 'gradient-shift 3s ease infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
