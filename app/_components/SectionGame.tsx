import { Box, Grid2 as Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import game from '@/public/game/game-1.png';

export default function SectionGame() {
  return (
    <Grid
      px='30px'
      py='36px'
      spacing={4}
      justifyContent='space-between'
      size={12}
    >
      <Grid container size={12} spacing={4}>
        <Grid size={12}>
          <Typography textAlign='center' variant='h5' fontWeight='bold'>
            เล่นเกมสนุก <br />
            พร้อมเรียนรู้ภัยจากบุหรี่ไฟฟ้า
          </Typography>
        </Grid>
        <Box height='300px' width='100%' position='relative'>
          <Image
            src={game}
            alt='game'
            style={{
              objectFit: 'cover',
            }}
            fill
          />
        </Box>

        <Grid size={12}>
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
