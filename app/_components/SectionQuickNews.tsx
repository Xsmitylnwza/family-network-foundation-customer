import React from 'react';
import BoxSlide from './BoxSlide';
import { Button, Grid2 as Grid, Typography } from '@mui/material';
import AnimationSlideAutoCard from './AnimationSlideAutoCard';
import { ArrowForward } from '@mui/icons-material';

export default function SectionQuickNews() {
  return (
    <Grid my={1} container>
      <BoxSlide />
      <Grid container size={{ xs: 12, md: 8 }}>
        <Grid alignItems='center' px={1} container size={12}>
          <Grid size={6}>
            <Typography variant='h3'>กิจกรรมเด่น</Typography>
          </Grid>
          <Grid container justifyContent='flex-end' size={6}>
            <Button
              endIcon={<ArrowForward />}
              variant='text'
              size='small'
              sx={{
                color: 'secondary.main',
              }}
            >
              ดูกิจกรรมทั้งหมด
            </Button>
          </Grid>
        </Grid>
        <Grid size={12}>
          <AnimationSlideAutoCard animationDuration={240} />
        </Grid>
      </Grid>
    </Grid>
  );
}
