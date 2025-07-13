import { Typography } from '@mui/material';
import React from 'react';
import ContainerSection from './ContainerSection';
import { Grid2 as Grid } from '@mui/material';
import MediaVideo from './MediaVideo';
import { getVideos } from '@/app/api/fetch';

export default async function SectionMediaVideo() {
  const { data: videos } = await getVideos();
  return (
    <ContainerSection>
      <Grid size={12}>
        <Typography variant='h2' textAlign='center'>
          คลิปบรรยากาศที่เล่าเรื่องมากกว่าคำพูด
        </Typography>
      </Grid>
      <MediaVideo videos={videos} />
    </ContainerSection>
  );
}
