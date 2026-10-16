/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FCFBF8',
          100: '#FAF9F5',
          200: '#F4F2EA',
          300: '#ECE8DD',
          400: '#DDD8C7',
        },
        forest: {
          50: '#F0F7F2',
          100: '#DEEFE2',
          200: '#BFDFC7',
          300: '#94C7A2',
          500: '#387A42',
          600: '#285933',
          700: '#1F4728',
          800: '#1B4332',
          900: '#142F24',
        },
        ink: {
          900: '#161917',
          800: '#232724',
          700: '#373D39',
          500: '#646B65',
          400: '#8A918B',
          200: '#D5D8D4',
          100: '#E8EAE7',
        },
        lilac: {
          50: '#FAF7FF',
          100: '#F3ECFF',
          200: '#E7D9FE',
          300: '#CEB2FC',
          500: '#8B5CF6',
        }
      },
      fontFamily: {
        serif: ['"Newsreader"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        handwriting: ['"Caveat"', 'cursive'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'wave-bar': 'wave 1.2s ease-in-out infinite alternate',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'float-rev 7s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        wave: {
          '0%': { height: '18%' },
          '100%': { height: '100%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(1deg)' },
        },
        'float-rev': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(12px) rotate(-1.5deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        }
      }
    },
  },
  plugins: [],
}
