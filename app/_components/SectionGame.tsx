import { Grid2 as Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import game from '@/public/game/game-1.png';

export default function SectionGame() {
  return (
    <Grid
      px={{ xs: '30px', md: '60px' }}
      py='36px'
      spacing={4}
      justifyContent='space-between'
      size={12}
      minHeight={{ xs: 'max-content' }}
      maxHeight={{ md: '882px' }}
    >
      <Grid maxWidth={'1440px'} mx='auto' container size={12} spacing={4}>
        <Grid
          order={{ xs: 1, md: 2 }}
          size={{ xs: 12, md: 6 }}
          container
          spacing={4}
        >
          <Grid size={12} order={{ xs: 1, md: 2 }}>
            <Typography textAlign='center' variant='h5' fontWeight='bold'>
              เล่นเกมสนุก <br />
              พร้อมเรียนรู้ภัยจากบุหรี่ไฟฟ้า
            </Typography>
          </Grid>
          <Grid
            height='300px'
            position='relative'
            size={12}
            order={{ xs: 2, md: 1 }}
            sx={{
              borderRadius: '10px',
              overflow: 'hidden',
            }}
          >
            <Image
              src={game}
              alt='game'
              style={{
                objectFit: 'cover',
              }}
              fill
            />
          </Grid>
        </Grid>

        <Grid order={{ xs: 2, md: 1 }} size={{ xs: 12, md: 6 }}>
          <iframe
            style={{
              border: 'none',
              borderRadius: '10px',
            }}
            height='600px'
            width='100%'
            src='https://www.spatial.io/s/Electronic-Cigarette-Exhibition-6818ab89021e15e02d84b116?share=8112305362199440867'
            title='Electronic Cigarette Exhibition'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
