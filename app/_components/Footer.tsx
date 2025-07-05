import { Box, Grid2 as Grid, IconButton, Typography } from '@mui/material';
import { GRADIENT_BG } from '../theme';
import Image from 'next/image';
import tiktokIcon from '@/public/icon/tiktok.svg';
import facebookIcon from '@/public/icon/facebook.svg';
import youtubeIcon from '@/public/icon/youtube.svg';
import mailIcon from '@/public/icon/mail.svg';

export default function Footer() {
  return (
    <Grid container>
      <Grid
        px='60px'
        py='36px'
        sx={{
          background: GRADIENT_BG,
        }}
        display='flex'
        flexDirection='column'
        gap={2}
        size={12}
      >
        <Typography variant='h6' fontWeight={700} gutterBottom>
          มูลนิธิเครือข่ายครอบครัว
        </Typography>
        <Grid container size={12}>
          <IconButton>
            <Image src={facebookIcon.src} alt='tiktok' width={24} height={24} />
          </IconButton>
          <IconButton>
            <Image src={youtubeIcon.src} alt='tiktok' width={24} height={24} />
          </IconButton>
          <IconButton>
            <Image src={tiktokIcon.src} alt='tiktok' width={24} height={24} />
          </IconButton>
        </Grid>
        <Typography variant='subtitle2' gutterBottom>
          77/47  ซอยแจ้งวัฒนะ 15 แยก 2 แขวงทุ่งสองห้อง เขตหลักสี่ กรุงเทพมหานคร
          <br />
          10220
        </Typography>
        <Grid container>
          <Grid size={12}>
            <Typography variant='h6' fontWeight={700} gutterBottom>
              ข้อมูลติดต่อ
            </Typography>
          </Grid>
          <Grid size={12}>
            <Box display='flex' alignItems='center' gap={2}>
              <Image src={mailIcon.src} alt='mail' width={24} height={24} />
              <Typography variant='subtitle2'>
                familynetwork2568@gmail.com
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
