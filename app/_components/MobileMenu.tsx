'use client';
import { IconButton } from '@mui/material';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SidebarMenu from './SidebarMenu';

export default function MobileMenu() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleOpenSidebar = () => setIsSidebarOpen(true);
  const handleCloseSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      <IconButton onClick={handleOpenSidebar}>
        <MenuIcon sx={{ height: '30px', width: '30px' }} />
      </IconButton>
      <SidebarMenu isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
    </>
  );
}
