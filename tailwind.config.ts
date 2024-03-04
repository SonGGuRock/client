import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brown: '#794F34',
        sand: '#E3BC99',
        yellowBeige: '#FBEBCB',
        beige: '#FCF4E4',
        grey: '#818080',
        grey50: '#FAF9F7',
        grey100: '#E7E6E1',
        grey400: '#A2A1A0',
        grey500: '#818080',
        grey600: '#6A6969',
        grey900: '#242320',
        deepGreen: '#6D9167',
        deepYellow: '#F8D394',
        deepOrange: '#EC7357',
      },
      fontColor: {
        primaryBlack: '#242320',
      },
      backgroundImage: {
        'checked-icon': "url('/icon/icon_checked.svg')",
        'goTo-icon': "url('/icon/icon_goTo.svg')",
        'shape-icon': "url('/status/icon_shape.svg')",
        'dry-icon': "url('/status/icon_dry.svg')",
        'carve-icon': "url('/status/icon_carve.svg')",
        'glaze-icon': "url('/status/icon_glaze.svg')",
        'bisqueFire-icon': "url('/status/icon_bisqueFire.svg')",
        'refire-icon': "url('/status/icon_refire.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
