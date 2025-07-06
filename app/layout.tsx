import { Noto_Sans_Thai } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/app/theme';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { Metadata } from 'next';
import Footer from './_components/Footer';
import { Grid2 as Grid } from '@mui/material';
import Navbar from './_components/Navbar';
import HeaderBar from './_components/HeaderBar';

const notoSansThai = Noto_Sans_Thai({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['thai'],
  variable: '--font-noto-sans-thai',
});

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'มูลนิธิเครือข่ายครอบครัว',
  description: 'มูลนิธิเครือข่ายครอบครัว',
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang='en'>
      <body style={{ margin: 0 }} className={`${notoSansThai.variable}`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Grid container>
              <Grid size={12} mx='auto'>
                <HeaderBar />
                <Navbar />

                {children}

                <Footer />
              </Grid>
            </Grid>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
