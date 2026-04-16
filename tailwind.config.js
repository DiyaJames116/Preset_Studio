/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#08080b',
        dusk: '#161622',
        berry: '#ec4899',
        ember: '#fb923c',
        mist: '#cbd5e1',
      },
      boxShadow: {
        glow: '0 20px 50px rgba(236, 72, 153, 0.18)',
        panel: '0 20px 60px rgba(0, 0, 0, 0.45)',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui'],
        body: ['"Manrope"', 'ui-sans-serif', 'system-ui'],
      },
      backgroundImage: {
        haze:
          'radial-gradient(circle at top left, rgba(251, 146, 60, 0.22), transparent 30%), radial-gradient(circle at top right, rgba(236, 72, 153, 0.2), transparent 34%), linear-gradient(135deg, rgba(13, 13, 20, 0.98), rgba(22, 22, 34, 0.96))',
      },
    },
  },
  plugins: [],
};
