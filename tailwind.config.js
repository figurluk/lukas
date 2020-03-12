/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        serif: ['Source Code Pro', 'serif'],
        mono: ['monospace'],
        icon: ['"Font Awesome 5 Free"']
      },

      fontSize: {
        p6: '0.5rem', // 11px
        p5: '0.75rem', // 12px
        p4: '0.8125rem', // 13px
        p3: '0.875rem', // 14px
        p2: '0.9375rem', // 15px
        p1: '1.3125rem', // 21px
        menu: '1rem', // 16px
        h7: '1.125rem', // 18px
        h6: '1.25rem', // 20px
        h5: '1.375rem', // 22px
        h4: '1.5rem', // 24px
        h3: '2rem', // 32px
        h2: '3rem', // 48px
        h1: '3.5rem' // 56px
      },

      inset: {
        5: '1.25rem',
        10: '2.5rem'
      }
    }
  },
  variants: {},
  plugins: []
}
