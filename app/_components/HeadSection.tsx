import { Divider, Grid2 as Grid, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';

export default function HeadSection() {
  return (
    <Grid size={{ xs: 12, md: 12 }} container>
      <Grid
        px='25px'
        py='36px'
        height='534px'
        sx={{
          position: 'relative',
          overflow: 'hidden',
        }}
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
        size={12}
      >
        <Image
          src='/headSection/head-about.svg'
          alt='head-section'
          fill
          style={{
            objectFit: 'cover',
            filter: 'brightness(0.6)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: { xs: '0px', md: '400px' },
            right: 0,
            bottom: 0,
            background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7))',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 2,
            color: 'white',
            padding: { xs: '25px', md: '60px' },
          }}
        >
          <Typography variant='h1' sx={{ mb: 2 }}>
            เกี่ยวกับเรา
          </Typography>
          <Divider sx={{ backgroundColor: 'secondary.main' }} />
          <Typography variant='body1'>
            มูลนิธิเครือข่ายครอบครัว ก่อตั้งในปี พ.ศ. 2542
            จากการรวมตัวของกลุ่มพ่อแม่ที่ตั้งใจการปฏิรูปการศึกษา
            พัฒนาสู่การเป็นองค์กรสาธารณประโยชน์ในปัจจุบัน
            สร้างความเข้มแข็งให้ครอบครัวไทย
            ผ่านความร่วมมือและการมีส่วนร่วมจากทุกภาคส่วน
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
