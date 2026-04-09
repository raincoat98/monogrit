import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#1a56db',
          dark: '#1341b0',
          light: '#e8f0fe',
          mid: '#3b82f6',
          sky: '#dbeafe',
        },
        kakao: '#fee500',
      },
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        noto: ['"Noto Sans KR"', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0f2b6b 0%, #1a56db 55%, #3b82f6 100%)',
        'camp-gradient': 'linear-gradient(135deg, #0f2b6b 0%, #1a56db 100%)',
      },
      boxShadow: {
        'brand-sm': '0 4px 16px rgba(26,86,219,0.3)',
        'brand-md': '0 6px 24px rgba(26,86,219,0.4)',
        'brand-card': '0 12px 40px rgba(26,86,219,0.12)',
      },
    },
  },
  plugins: [],
}

export default config
