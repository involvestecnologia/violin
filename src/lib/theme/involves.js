import { rem } from 'polished';

const typography = {
  htmlFontSize: '100%',
  fontFamily: 'Open Sans, sans-serif',
  fontFamilyIcon: 'Material Icons Round',
  fontSize: {
    "size1": "0.75rem",
    "size2": "0.875rem",
    "size3": "1rem",
    "size4": "1.125rem",
    "size5": "1.5rem",
    h1: rem(40),
    h2: rem(34),
    h3: rem(28),
    h4: rem(24),
    h5: rem(21),
    h6: rem(18),
    large: rem(16),
    body: rem(14),
    small: rem(13),
    xsmall: rem(11)
  },
  fontWeight: {
    light: '300',
    regular: '400',
    semiBold: '600',
    bold: '700'
  },
  lineHeight: '1.4'
}

const breakpoint = {
  sm: '@media(min-width: 768px)',
  md: '@media(min-width: 992px)',
  lg: '@media(min-width: 1200px)'
}

const zIndex = {
  z1: 100,
  z2: 200,
  z3: 300,
  z4: 400,
  z5: 500,
  z6: 600,
  z7: 700,
  z8: 800,
  z9: 900,
}

const spacing = {
  space1: '4px',
  space2: '8px',
  space3: '16px',
  space4: '24px',
  space5: '32px',
  space6: '40px',
  space7: '48px',
  space8: '56px',
  space9: '64px'
}

const shadow = {
  shadowBorder1: '0 0 0 1px',
  shadowBorder2: '0 0 0 2px',
  shadow3: '0 2px 3px',
  shadow4: '0 1px 4px',
  shadow6: '0 3px 6px',
  shadow8: '0 4px 8px',
  shadow12: '0 6px 12px',
  shadow16: '0 8px 16px',
  shadow24: '0 10px 24px'
}
const borderRadius = {
  border1: '4px',
  border2: '8px',
  border3: '12px',
  border4: '20px',
  border5: '24px'
}

const common = {
  transition: 'all 0.2s ease'
}

const colors = {
  misc: {
    white: '#FFFFFF',
    black: '#111111'
  },
  blue: {
    50: '#F6FAFF',
    100: '#DFECFE',
    200: '#C7DFFD',
    300: '#87B9FB',
    400: '#66A6F9',
    500: '#4693F8',
    600: '#3F7BD7',
    700: '#3864B7',
    800: '#324D96',
    900: '#2B3675'
  },
  black: {
    50: '#FAFBFC',
    100: '#E1E5EB',
    200: '#BDC7D3',
    300: '#A3ABBD',
    400: '#8A90A7',
    500: '#6F7390',
    600: '#59577A',
    700: '#443C63',
    800: '#322550',
    900: '#1F0E3D'
  },
  purple: {
    50: '#FAF4FE',
    100: '#EFD9FD',
    200: '#E1BFF7',
    300: '#CF99F2',
    400: '#BE73ED',
    500: '#B146F3',
    600: '#9B28E3',
    700: '#842FC0',
    800: '#701FA9',
    900: '#44166F'
  },
  cyan: {
    50: '#F2FBFC',
    100: '#D3F2F5',
    200: '#B3E9ED',
    300: '#86DDE2',
    400: '#59D0D7',
    500: '#00B7C2 ',
    600: '#0599AB',
    700: '#0B7C93',
    800: '#105F7C',
    900: '#164165'
  },
  green: {
    50: '#F5FFF8',
    100: '#DCFFE6',
    200: '#C3FED4',
    300: '#7CFCA3',
    400: '#36FA71',
    500: '#33DF6B',
    600: '#31C365',
    700: '#2EA75F',
    800: '#2A7E56',
    900: '#26554D'
  },
  lime: {
    50: '#FCFEF5',
    100: '#EEFAC2',
    200: '#DBF47A',
    300: '#C7EE33',
    400: '#B4D434',
    500: '#A0BB35',
    600: '#8CA036',
    700: '#798637',
    800: '#656C39',
    900: '#51513A'
  },
  yellow: {
    50: '#FFFAE3',
    100: '#FEEBAF',
    200: '#FDDC7C',
    300: '#FCCE48',
    400: '#FBBF14',
    500: '#E7A80D',
    600: '#D39007',
    700: '#BF7800',
    800: '#9F5600',
    900: '#7F3300'
  },
  orange: {
    50: '#FFF5EE',
    100: '#FFE2C9',
    200: '#FFCFA5',
    300: '#FFBB80',
    400: '#FFA85B',
    500: '#FF8212',
    600: '#E7680D',
    700: '#CF4E09',
    800: '#B63404',
    900: '#9E1A00'
  },
  red: {
    50: '#FFF6F6',
    100: '#FFDFDF',
    200: '#FEC8C8',
    300: '#FDA9A9',
    400: '#FD8989',
    500: '#FD6969',
    600: '#FC4949',
    700: '#D63E47',
    800: '#AF3445',
    900: '#612041'
  },
  brown: {
    50: '#FCF9F5',
    100: '#F3EADB',
    200: '#EBDBC2',
    300: '#D3B17A',
    400: '#C79C56',
    500: '#BB8732',
    600: '#9F7234',
    700: '#845D36',
    800: '#694838',
    900: '#4E323A'
  },
  "primary": {
    "dark": "#3864B7",
    "regular": "#4693F8",
    "light": "#C7DFFD",
    "white": "#F6FAFF",
    "shadow": "rgba(56,100,183,0.25)"
  },
  "primaryAcid": {
    "regular": "#5E78FF",
    "dark": "#4865FC"
  },
  "accent": {
    "dark": "#A33E47",
    "regular": "#FC4949",
    "light": "#FDA4A4",
    "white": "#FFECEC",
    "shadow": "rgba(163,62,71,0.25)"
  },
  "system": {
    "dark": "#10213E",
    "regular": "",
    "light": "#F4F5F6",
    "white": "#FFFFFF",
    "shadow": "rgba(16,33,62,0.25)"
  },
  "default": {
    "dark": "#68778C",
    "regular": "#9AA9BC",
    "light": "#CCD4DD",
    "white": "#E5E8EB",
    "shadow": "rgba(104,119,140,0.25)"
  },
  "done": {
    "dark": "#219B81",
    "regular": "#27C499",
    "light": "#B3EADB",
    "white": "#E9F9F5",
    "shadow": "rgba(33,155,129,0.25)"
  },
  "error": {
    "dark": "#B64458",
    "regular": "#ED4759",
    "light": "#F9C2C8",
    "white": "#FDEDEF",
    "shadow": "rgba(182,68,88,0.25)"
  },
  "alert": {
    "dark": "#9B8E51",
    "regular": "#EECE5A",
    "light": "#F6E6AC",
    "white": "#FDFAEE",
    "shadow": "rgba(155,142,81,0.25)"
  },
  "progress": {
    "dark": "#46829B",
    "regular": "#60BBD6",
    "light": "#AFDDEA",
    "white": "#EFF8FB",
    "shadow": "rgba(70,130,155,0.25)"
  }
}

const involves = {
  typography,
  breakpoint,
  zIndex,
  spacing,
  shadow,
  borderRadius,
  common,
  palette: {
    ...colors,
    primaryxpto: colors.blue
  }
};

export { involves };
