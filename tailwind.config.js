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
          DEFAULT: '#ea580c',
          hover: '#c2410c',
        },
      },
    },
  },
  plugins: [],
};
