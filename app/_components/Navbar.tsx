'use client';
import { Grid2 as Grid, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import Image from 'next/image';
import SidebarMenu from './SidebarMenu';
import { useScrollDirection } from '@/app/_hooks/useScrollDirection';

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { shouldShowSticky } = useScrollDirection(116); // height of navbar

  const handleOpenSidebar = () => setIsSidebarOpen(true);
  const handleCloseSidebar = () => setIsSidebarOpen(false);

  return (
    <>
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
          <IconButton onClick={handleOpenSidebar}>
            <MenuIcon sx={{ height: '30px', width: '30px' }} />
          </IconButton>
        </Grid>
      </Grid>

      <Grid
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
        <Grid display='flex' alignItems='center' size={{ xs: 6, md: 6 }}>
          <Image src='/logo.svg' alt='logo' width={60} height={60} />
        </Grid>
        <Grid
          display='flex'
          alignItems='center'
          justifyContent='flex-end'
          size={{ xs: 6, md: 6 }}
        >
          <IconButton onClick={handleOpenSidebar}>
            <MenuIcon sx={{ height: '30px', width: '30px' }} />
          </IconButton>
        </Grid>
      </Grid>

      <SidebarMenu isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
    </>
  );
}
