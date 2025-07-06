'use client';
import { Grid2 as Grid } from '@mui/material';
import React from 'react';
import Navbar from './Navbar';
import { useScrollDirection } from '../_hooks/useScrollDirection';

export default function StickyNabnar() {
  const { shouldShowSticky } = useScrollDirection(116);
  return (
    <Grid
      size={12}
      height='116px'
      container
      bgcolor='primary.main'
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        transform: `translateY(${shouldShowSticky ? '0' : '-100%'})`,
        transition: 'transform 0.3s ease-in-out',
        boxShadow: shouldShowSticky ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
        zIndex: 999,
        px: 2,
      }}
    >
      <Navbar />
    </Grid>
  );
}
