const config = {
  plugins: {
    "@tailwindcss/postcss": {
      theme: {
        extend: {
          colors: {
            background: "var(--background)",
            foreground: "var(--foreground)",
            primary: '#8ACE00'
          },
          width: {
            navBarMobile: '5rem'
          },
          padding: {
            navBarMobile: '5rem'
          }
        },
      },
    },
  },
};
export default config;
