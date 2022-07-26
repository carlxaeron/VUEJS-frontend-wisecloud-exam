const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './public/**/*.html',
    './src/**/*.vue',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      gray: {
        100: '#f7fafc',
        // ...
        900: '#1a202c',
      },
      main: {
        100: '#a274a8',
        default: '#712a7a',
        700: '#5a2161',
      },
    },
    spacing: {
      // https://sportality.atlassian.net/wiki/spaces/PDEV/pages/1160773647/Spacing+and+Grid -> recommended spacing spec
      // 0.5, 1, 2, 4, 8, 12, 16 are the recommended spacing for our application
      px: '1px',
      0: '0px',
      0.5: '0.125rem', // recommended
      1: '0.25rem', // recommended
      1.5: '0.375rem',
      2: '0.5rem', // recommended
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem', // recommended
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem', // recommended
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem', // recommended
      14: '3.5rem',
      16: '4rem', // recommended
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '20px',
      xl: '25px',
      '2xl': '30px',
    },
  },
  variants: {},
  plugins: [],
};
