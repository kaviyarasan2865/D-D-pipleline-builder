/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          50: '#f8fafc',
          200: '#e2e8f0',
        },
        gray: {
          300: '#d1d5db',
          500: '#6b7280',
          800: '#1f2937',
        },
        blue: {
          500: '#3b82f6',
          600: '#2563eb',
        },
        green: {
          500: '#10b981',
        },
        red: {
          500: '#ef4444',
        },
        purple: {
          500: '#8b5cf6',
          600: '#7c3aed',
        },
        orange: {
          500: '#f59e0b',
          600: '#d97706',
        },
        cyan: {
          500: '#06b6d4',
        },
        lime: {
          500: '#84cc16',
        },
        amber: {
          500: '#f97316',
        },
        violet: {
          500: '#a855f7',
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
