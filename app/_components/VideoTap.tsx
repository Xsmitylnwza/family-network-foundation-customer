import { Box, Typography } from '@mui/material';
import { Grid2 as Grid } from '@mui/material';
import Image from 'next/image';
import React from 'react';

export default function VideoTap() {
  return (
    <Grid
      overflow='hidden'
      bgcolor='white'
      spacing={2}
      height='50px'
      size={12}
      container
    >
      <Grid maxWidth='73px' size={4}>
        <Box height='100%' width='100%' position='relative'>
          <Image
            src='/showCaseMock/img-card.svg'
            alt='video-1'
            fill
            style={{ objectFit: 'cover' }}
          />
        </Box>
      </Grid>
      <Grid container alignItems='center' size={8}>
        <Typography variant='body1'>ชื่อคลิปวิดีโอ</Typography>
      </Grid>
    </Grid>
  );
}
