import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#f7fbf5',
          100: '#eef7ed',
          600: '#3a8050',
          700: '#2f6b3d',
          800: '#24512e',
          900: '#183a20',
          950: '#102514',
        },
        amber: {
          DEFAULT: '#c7772d',
          light: '#f5e5d4',
        },
        cream: '#f7f4ed',
        ink: '#172017',
        muted: '#617061',
        border: '#e5ece3',
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
      },
      boxShadow: {
        card: '0 15px 40px rgba(16,37,20,0.06)',
        'card-hover': '0 20px 50px rgba(16,37,20,0.12)',
        amber: '0 4px 12px rgba(199,119,45,0.22)',
        'amber-hover': '0 6px 18px rgba(199,119,45,0.30)',
      },
    },
  },
  plugins: [],
}

export default config
