import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      zIndex: {
        '100': '100',
      },
      colors: {
        white: '#ffffff',
        brown: '#794F34',
        sand: '#D8AB83',
        red: '#E9431D',
        yellowBeige: '#FBEBCB',
        lightBeige: '#FCF4E4',
        beige: '#F4EDE8',
        grey: '#818080',
        grey50: '#FBFAF8',
        grey100: '#F2F1ED',
        grey200: '#D6D5D4',
        grey300: '#B9B8B7',
        grey400: '#A2A1A0',
        grey500: '#818080',
        grey600: '#6A6969',
        grey700: '#565655',
        grey800: '#3A3A39',
        grey900: '#242320',
        deepGreen: '#6D9167',
        deepYellow: '#F8D394',
        deepOrange: '#EC7357',
      },
      fontColor: {
        primaryBlack: '#242320',
      },
      backgroundImage: {
        'grey-check-off-icon': "url('/icon/check/ic_check_grey_off.svg')",
        'grey-check-on-icon': "url('/icon/check/ic_check_grey_on.svg')",
        'todo-check-icon': "url('/icon/ic_todo_check.svg')",
        'checked-icon': "url('/icon/icon_checked.svg')",
        'goTo-icon': "url('/icon/icon_goTo.svg')",
        'shape-icon': "url('/status/icon_shape.svg')",
        'dry-icon': "url('/status/icon_dry.svg')",
        'carve-icon': "url('/status/icon_carve.svg')",
        'glaze-icon': "url('/status/icon_glaze.svg')",
        'bisqueFire-icon': "url('/status/icon_bisqueFire.svg')",
        'refire-icon': "url('/status/icon_refire.svg')",
        'chevron-down-icon': "url('/icon/icon_chevron_down.svg')",
        'tab-home-icon': "url('/icon/bottombar/home_normal_24px')",
        'tab-member-icon': "url('/icon/bottombar/member_normal_24px.svg')",
        'tab-calendar-icon': "url('/icon/bottombar/calendar_normal_24px.svg')",
        'tab-gallery-icon': "url('/icon/bottombar/gallery_normal_24px.svg')",
        'tab-my-icon': "url('/icon/bottombar/mypage_normal_24px.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
