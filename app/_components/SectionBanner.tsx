import React from 'react';
import ContainerSection from './ContainerSection';
import { Box, Button, Divider, Grid2 as Grid, Typography } from '@mui/material';
import Image from 'next/image';

export default function SectionBanner() {
  return (
    <ContainerSection isMaxContent={true}>
      <Grid justifyContent='center' container size={{ xs: 12, md: 6 }}>
        <Box
          width={{ xs: '310px', md: '310px' }}
          height={{ xs: '310px', md: '310px' }}
          position='relative'
        >
          <Image
            src={'/logo.svg'}
            alt='banner'
            fill
            style={{ objectFit: 'contain' }}
          />
        </Box>
      </Grid>

      <Grid spacing={{ xs: 2, md: 0 }} container size={{ xs: 12, md: 6 }}>
        <Typography height='max-content' variant='h2'>
          ตราสัญลักษณ์
        </Typography>
        <Divider />
        <Typography variant='body1'>
          มูลนิธิเครือข่ายครอบครัว ก่อตั้งในปี พ.ศ. 2542 จากการรวมตัวของกลุ่ม
          พ่อแม่ที่ตั้งใจการปฏิรูปการศึกษา
          พัฒนาสู่การเป็นองค์กรสาธารณประโยชน์ในปัจจุบัน
          สร้างความเข้มแข็งให้ครอบครัวไทย
          ผ่านความร่วมมือและการมีส่วนร่วมจากทุกภาคส่วน
        </Typography>
        <Button
          size='large'
          sx={{ height: 'max-content' }}
          variant='contained'
          color='secondary'
          component='a'
          href='/logo-download.png'
          download='family-network-foundation-logo.png'
        >
          ดาวน์โหลด
        </Button>
      </Grid>
    </ContainerSection>
  );
}
