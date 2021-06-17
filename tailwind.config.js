module.exports = {
  // Uncomment the line below to enable the experimental Just-in-Time ("JIT") mode.
  // https://tailwindcss.com/docs/just-in-time-mode
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Nunito Sans"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        // Configure your color palette here
        'current-green': '#6FAE75',
        'current-blue': '#4305EB',
        'current-bg': '#FBFBFB',
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Filenames to scan for classes
    content: [
      './src/**/*.html',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.ts',
      './src/**/*.tsx',
      './public/index.html',
    ],
    // Options passed to PurgeCSS
    options: {
      // Whitelist specific selectors by name
      // safelist: [],
    },
  },
}
