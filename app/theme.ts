'use client';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export const GRADIENT_BG = 'linear-gradient(135deg, #FADADD 0%, #C8E7F5 100%)';

let theme = createTheme({
  palette: {
    primary: {
      main: '#FADADD', // สีหลัก
      light: '#C8E7F5',
      contrastText: '#2C3E50',
    },
    secondary: {
      main: '#FF69B4', // สีรอง
      light: '#40E0D0',
      dark: '#2C3E50',
      contrastText: '#FFFFFF',
    },
    background: {
      default: GRADIENT_BG,
    },
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: '#FF69B4',
          width: '100%',
          height: '1px',
        },
      },
    },
  },
  typography: {
    fontFamily: 'var(--font-noto-sans-thai)',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: '1.125rem',
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: 500,
      textTransform: 'none',
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 400,
      textTransform: 'uppercase',
    },
  },
});

theme = responsiveFontSizes(theme, {
  breakpoints: ['sm', 'md', 'lg'],
  factor: 2,
});
export default theme;
