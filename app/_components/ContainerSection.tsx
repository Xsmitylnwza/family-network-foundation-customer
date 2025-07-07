import { Grid2 as Grid } from '@mui/material';
import React from 'react';
import { GRADIENT_BG } from '../theme';

interface Props {
  children: React.ReactNode;
  isSecoundColor?: boolean;
}

export default function ContainerSection({ children, isSecoundColor }: Props) {
  return (
    <Grid
      sx={{
        background: isSecoundColor ? GRADIENT_BG : 'white',
      }}
      minHeight='80vh'
      container
    >
      <Grid
        maxWidth={'1440px'}
        mx='auto'
        px='60px'
        my='auto'
        py='36px'
        spacing={4}
        size={12}
        container
      >
        {children}
      </Grid>
    </Grid>
  );
}
