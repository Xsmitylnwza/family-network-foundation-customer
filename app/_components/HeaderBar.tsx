import { Grid2 as Grid, Typography } from '@mui/material';
import React from 'react';

export default function HeaderBar() {
  return (
    <Grid height='44px' container bgcolor='secondary.main' px={2}>
      <Grid display='flex' alignItems='center' size={{ xs: 12, md: 6 }}>
        <Typography variant='subtitle2' color='white'>
          มูลนิธิเครือข่ายครอบครัว
        </Typography>
      </Grid>
    </Grid>
  );
}
