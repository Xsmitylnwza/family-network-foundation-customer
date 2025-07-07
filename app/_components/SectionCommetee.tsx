import { Grid2 as Grid, Typography } from '@mui/material';
import React from 'react';
import CardCommetee from './CardCommetee';
import ContainerSection from './ContainerSection';

export default function SectionCommetee() {
  return (
    <ContainerSection>
      <Grid size={12}>
        <Typography textAlign='center' variant='h2'>
          ผู้อยู่เบื้องหลังการขับเคลื่อนเพื่อครอบครัว
        </Typography>
      </Grid>
      <Grid size={12}>
        <Typography textAlign='center' variant='body1'>
          คณะกรรมการผู้ร่วมสร้างพลังและทิศทางให้มูลนิธิเครือข่ายครอบครัว
          เติบโตเพื่อสังคมที่อบอุ่นและยั่งยืน
        </Typography>
      </Grid>
      <Grid container justifyContent='center' size={12}>
        {Array.from({ length: 7 }).map((_, index) => (
          <Grid key={index} size={{ xs: 12, md: 3 }}>
            <CardCommetee />
          </Grid>
        ))}
      </Grid>
    </ContainerSection>
  );
}
