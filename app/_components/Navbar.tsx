import { Grid2 as Grid, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import Image from 'next/image';

export default function Navbar() {
  return (
    <Grid
      height='116px'
      container
      bgcolor='primary.main'
      sx={{ xs: { px: 2 } }}
    >
      <Grid display='flex' alignItems='center' size={{ xs: 6, md: 6 }}>
        <Image src='/logo.svg' alt='logo' width={100} height={100} />
      </Grid>
      <Grid
        display='flex'
        alignItems='center'
        justifyContent='flex-end'
        size={{ xs: 6, md: 6 }}
      >
        <IconButton>
          <MenuIcon sx={{ height: '30px', width: '30px' }} />
        </IconButton>
      </Grid>
    </Grid>
  );
}
