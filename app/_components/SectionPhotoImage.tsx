import React from 'react';
import ContainerSection from './ContainerSection';
import { Box, Typography } from '@mui/material';
import { Grid2 as Grid } from '@mui/material';
import Image from 'next/image';

export default function SectionPhotoImage() {
  return (
    <ContainerSection isMaxContent={true} isSecoundColor={true}>
      <Grid size={12}>
        <Typography variant='h2'>กิจกรรมดี ๆ ที่เกิดขึ้น</Typography>
      </Grid>
      <Grid size={12}>
        <Typography variant='body1'>
          ภาพบันทึกกิจกรรมที่เราลงพื้นที่ร่วมสร้างการเรียนรู้และสายสัมพันธ์กับโรงเรียนทั่วประเทศ
        </Typography>
      </Grid>
      <Grid
        height={{ xs: '200px', md: '430px' }}
        size={12}
        container
        spacing={2}
      >
        <Grid size={{ xs: 12, md: 6 }}>
          <Box height='100%' width='100%' position='relative'>
            <Image
              src='/media/media-1.svg'
              alt='photo-1'
              fill
              style={{ objectFit: 'cover' }}
            />
          </Box>
        </Grid>
        <Grid
          display={{ xs: 'none', md: 'flex' }}
          container
          justifyContent='center'
          size={4}
        >
          <Box width='100%' position='relative'>
            <Image
              src='/media/media-2.svg'
              alt='photo-1'
              fill
              style={{ objectFit: 'cover' }}
            />
          </Box>
          <Box width='100%' position='relative'>
            <Image
              src='/media/media-3.svg'
              alt='photo-1'
              fill
              style={{ objectFit: 'cover' }}
            />
          </Box>
        </Grid>
        <Grid display={{ xs: 'none', md: 'block' }} size={2}>
          <Box height='100%' width='100%' position='relative'>
            <Image
              src='/media/media-4.svg'
              alt='photo-1'
              fill
              style={{ objectFit: 'cover' }}
            />
          </Box>
        </Grid>
      </Grid>
      <Grid
        display={{ xs: 'none', md: 'flex' }}
        height='430px'
        size={12}
        container
      >
        <Grid container justifyContent='center' size={4}>
          <Box width='100%' position='relative'>
            <Image
              src='/media/media-5.svg'
              alt='photo-1'
              fill
              style={{ objectFit: 'cover' }}
            />
          </Box>
          <Box width='100%' position='relative'>
            <Image
              src='/media/media-6.svg'
              alt='photo-1'
              fill
              style={{ objectFit: 'cover' }}
            />
          </Box>
        </Grid>
        <Grid size={2}>
          <Box height='100%' width='100%' position='relative'>
            <Image
              src='/media/media-7.svg'
              alt='photo-1'
              fill
              style={{ objectFit: 'cover' }}
            />
          </Box>
        </Grid>
        <Grid size={6}>
          <Box height='100%' width='100%' position='relative'>
            <Image
              src='/media/media-8.svg'
              alt='photo-1'
              fill
              style={{ objectFit: 'cover' }}
            />
          </Box>
        </Grid>
      </Grid>
    </ContainerSection>
  );
}
