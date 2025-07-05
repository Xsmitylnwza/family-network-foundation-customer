'use client';
import { createTheme } from '@mui/material/styles';

export const GRADIENT_BG = 'linear-gradient(135deg, #FADADD 0%, #C8E7F5 100%)';

const theme = createTheme({
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
  typography: {
    fontFamily: 'var(--font-noto-sans-thai)',
  },
});

export default theme;
