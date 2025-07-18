import { Button, Grid2 as Grid, Link, Typography } from '@mui/material';
import ContainerSection from '@/app/_components/ContainerSection';
import React from 'react';
import ArrowBackIosNew from '@mui/icons-material/ArrowBackIosNew';
import ShowAllContent from '@/app/_components/AcivitiesContent';

interface Props {
  searchParams: {
    page?: string;
    size?: string;
  };
}

export default function Activity({ searchParams }: Props) {
  return (
    <>
      <ContainerSection>
        <Grid size={12}>
          <Button
            component={Link}
            href='/news'
            variant='text'
            color='secondary'
            startIcon={<ArrowBackIosNew />}
          >
            ย้อนกลับ
          </Button>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant='h2'>กิจกรรมทั้งหมด</Typography>
        </Grid>
        <ShowAllContent searchParams={searchParams} type='activity' />
      </ContainerSection>
    </>
  );
}
