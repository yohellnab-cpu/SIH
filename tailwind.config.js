/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        primary: {
          DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
          foreground: 'hsl(var(--primary-foreground) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
          foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
          foreground: 'hsl(var(--accent-foreground) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
          foreground: 'hsl(var(--muted-foreground) / <alpha-value>)',
        },
        card: {
          DEFAULT: 'hsl(var(--card) / <alpha-value>)',
          foreground: 'hsl(var(--card-foreground) / <alpha-value>)',
        },
        border: 'hsl(var(--border) / <alpha-value>)',
        input: 'hsl(var(--input) / <alpha-value>)',
        ring: 'hsl(var(--ring) / <alpha-value>)',
        success: {
          DEFAULT: '#10b981',
          bg: '#ecfdf5',
        },
        warning: {
          DEFAULT: '#d97706',
          bg: '#fef3c7',
        },
        danger: {
          DEFAULT: '#dc2626',
          bg: '#fee2e2',
        },
        info: {
          DEFAULT: '#0ea5e9',
          bg: '#e0f2fe',
        },
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
        lg: 'calc(var(--radius) + 2px)',
        xl: 'calc(var(--radius) + 4px)',
        '2xl': 'calc(var(--radius) + 8px)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        nav: '0 1px 2px rgba(0,0,0,0.02)',
        card: '0 1px 2px rgba(0,0,0,0.03)',
        'card-hover': '0 2px 8px rgba(0,0,0,0.04)',
        modal: '0 4px 12px rgba(0,0,0,0.05)',
      },
      maxWidth: {
        'screen-2xl': '1536px',
      },
      screens: {
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
