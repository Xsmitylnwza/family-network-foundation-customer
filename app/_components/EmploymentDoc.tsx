import { Button, Divider, Typography } from '@mui/material';
import { Grid2 as Grid } from '@mui/material';
import React from 'react';

export default function EmploymentDoc() {
  return (
    <Grid container direction='column' size={12}>
      <Divider />
      <Button
        sx={{
          p: 0,
          textTransform: 'none',
          justifyContent: 'start',
          fontSize: '1rem',
          textAlign: 'start',
        }}
        variant='text'
        color='secondary'
        size='small'
      >
        APICES 2025: Registration Opens Wednesday, June 25, 2025
      </Button>
      <Typography variant='body1'>วันที่ 25 มิถุนายน 2025</Typography>
    </Grid>
  );
}
