import { Divider, Typography } from '@mui/material';
import React from 'react';
import ContainerSection from './ContainerSection';
import { Grid2 as Grid } from '@mui/material';
import VideoTap from './VideoTap';

export default function SectionMediaVideo() {
  return (
    <ContainerSection>
      <Grid size={12}>
        <Typography variant='h2' textAlign='center'>
          คลิปบรรยากาศที่เล่าเรื่องมากกว่าคำพูด
        </Typography>
      </Grid>
      <Grid height={{ xs: 'max-content', md: '425px' }} size={12} container>
        <Grid
          height={{ xs: '170px', md: '100%' }}
          mb={{ xs: 2, md: 0 }}
          size={{ xs: 12, md: 6 }}
        >
          <iframe
            width='100%'
            height='100%'
            src='https://www.youtube.com/embed/d5LvrTyNCts?autoplay=1&mute=1'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay;mute'
            allowFullScreen
          />
        </Grid>
        <Grid
          height={{ xs: 'max-content', md: '100%' }}
          size={{ xs: 12, md: 6 }}
        >
          <Grid size={12} container mb={2}>
            <Typography variant='h3' textAlign='center'>
              วิดีโอรวมกิจกรรมมูลนิธิ
            </Typography>
            <Divider />
          </Grid>
          <Grid
            maxHeight={{ xs: '300px', md: '100%' }}
            container
            spacing={2}
            size={12}
            overflow='auto'
          >
            {Array.from({ length: 10 }).map((_, index) => (
              <VideoTap key={index} />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </ContainerSection>
  );
}
