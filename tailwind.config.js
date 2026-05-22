module.exports = {
  content: ['./src/**/*.{njk,html,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        accent: {
          DEFAULT: '#7c3aed',
          hover: '#6d28d9',
        },
      },
    },
  },
  plugins: [],
};
