import { Button, Grid2 as Grid, Typography } from '@mui/material';
import React from 'react';
import { PlayCircle } from '@mui/icons-material';

export default function SectionPlayIntroduce() {
  return (
    <Grid container>
      <Grid px={2} size={12}>
        <Typography variant='h6'>มูลนิธิเครือข่ายครอบครัว</Typography>
        <Typography variant='body2' mt={1}>
          พักสักครู่ แล้วมารับแรงบันดาลใจจากเรื่องราว
          “การเดินทางของมูลนิธิเครือข่ายครอบครัว“
        </Typography>
        <Button
          variant='text'
          color='secondary'
          sx={{ padding: 0, mt: 1 }}
          endIcon={<PlayCircle sx={{ scale: 0.8 }} />}
        >
          <Typography variant='body2' sx={{ textDecoration: 'underline' }}>
            วิดีโอ 0:00 นาที
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
}
