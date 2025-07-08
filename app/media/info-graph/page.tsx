import {
  Button,
  Grid2 as Grid,
  Link,
  Pagination,
  Typography,
} from '@mui/material';
import ContainerSection from '@/app/_components/ContainerSection';
import React from 'react';
import CardActivity from '@/app/_components/CardActivity';
import ArrowBackIosNew from '@mui/icons-material/ArrowBackIosNew';

export default function InfoGraph() {
  return (
    <>
      <ContainerSection>
        <Grid size={12}>
          <Button
            component={Link}
            href='/media'
            variant='text'
            color='secondary'
            startIcon={<ArrowBackIosNew />}
          >
            ย้อนกลับ
          </Button>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant='h2'>อินโฟกราฟิกทั้งหมด</Typography>
        </Grid>
        <Grid container justifyContent='end' size={{ xs: 12, md: 6 }}>
          <Pagination count={10} color='secondary' />
        </Grid>
        <Grid container spacing={2} size={12}>
          {Array.from({ length: 12 }).map((_, index) => (
            <Grid key={index} size={{ xs: 12, md: 4 }}>
              <CardActivity />
            </Grid>
          ))}
        </Grid>
        <Grid container justifyContent='center' size={12}>
          <Pagination count={10} color='secondary' />
        </Grid>
      </ContainerSection>
    </>
  );
}
