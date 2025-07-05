import { Box, Grid2 as Grid, IconButton, Typography } from '@mui/material';
import { GRADIENT_BG } from '../theme';
import Image from 'next/image';

import {
  CONTACT_INFO,
  LOCATION_INFO,
  SOCIAL_LINKS,
} from '@/app/const/constants';

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
          {SOCIAL_LINKS.map((link) => (
            <IconButton key={link.href}>
              <Image
                src={link.icon.src}
                alt={link.title}
                width={24}
                height={24}
              />
            </IconButton>
          ))}
        </Grid>
        <Typography variant='subtitle2' gutterBottom>
          {LOCATION_INFO}
        </Typography>
        <Grid container>
          <Grid size={12}>
            <Typography variant='h6' fontWeight={700} gutterBottom>
              ข้อมูลติดต่อ
            </Typography>
          </Grid>
          <Grid size={12}>
            <Box display='flex' alignItems='center' gap={2}>
              {CONTACT_INFO.map((info) => (
                <Box key={info.href} display='flex' alignItems='center' gap={2}>
                  <Image
                    src={info.icon.src}
                    alt={info.title}
                    width={24}
                    height={24}
                  />
                  <Typography variant='subtitle2'>{info.title}</Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
