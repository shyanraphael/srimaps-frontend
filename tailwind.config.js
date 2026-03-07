
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Sora', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#EBF3FA',
          100: '#D7E7F5',
          200: '#AECFEB',
          300: '#8FABD4',
          400: '#6A8FBE',
          500: '#4A70A9',
          600: '#415E94',
          700: '#384C7F',
          800: '#2F3A6A',
          900: '#262855',
        },
        secondary: {
          50: '#FAF9F8',
          100: '#F5F3F1',
          200: '#88cbd4',
          300: '#E9E7DB',
          400: '#E3E0D6',
          500: '#88cbd4',
          600: '#D9D6C9',
          700: '#C3C0AD',
          800: '#ADAA91',
          900: '#979475',
        },
        dark: {
          50: '#e6e5e8',
          100: '#cccbd1',
          200: '#9997a3',
          300: '#666375',
          400: '#332f47',
          500: '#0f0b1f',
          600: '#0c091b',
          700: '#090717',
          800: '#060513',
          900: '#03030f',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #4A70A9 0%, #88cbd4 50%, #8FABD4 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #8FABD4 0%, #88cbd4 50%, #4A70A9 100%)',
      },
      boxShadow: {
        'glow-primary': '0 0 20px rgba(74, 112, 169, 0.5)',
        'glow-secondary': '0 0 20px rgba(143, 171, 212, 0.5)',
        'glow-lg': '0 0 40px rgba(74, 112, 169, 0.6), 0 0 60px rgba(143, 171, 212, 0.4)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
