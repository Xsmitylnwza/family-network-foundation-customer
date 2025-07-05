'use client';
import { Box, Button, Grid2 as Grid, Modal, Typography } from '@mui/material';
import React from 'react';
import { PlayCircle } from '@mui/icons-material';

export default function SectionPlayIntroduce() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Grid container>
        <Grid px={2} size={12}>
          <Typography variant='h5'>มูลนิธิเครือข่ายครอบครัว</Typography>
          <Typography variant='body2' mt={1}>
            พักสักครู่ แล้วมารับแรงบันดาลใจจากเรื่องราว
            &ldquo;การเดินทางของมูลนิธิเครือข่ายครอบครัว&rdquo;
          </Typography>
          <Button
            variant='text'
            color='secondary'
            sx={{ padding: 0, mt: 1 }}
            endIcon={<PlayCircle sx={{ scale: 0.8 }} />}
            onClick={handleOpen}
          >
            <Typography variant='body2' sx={{ textDecoration: 'underline' }}>
              วิดีโอ 3:33 นาที
            </Typography>
          </Button>
        </Grid>
      </Grid>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '90vw', sm: '80vw', md: '70vw' },
            height: { xs: '50vh', sm: '60vh', md: '70vh' },
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            p: 2,
          }}
        >
          <iframe
            width='100%'
            height='100%'
            src='https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay; microphone'
            allowFullScreen
          ></iframe>
        </Box>
      </Modal>
    </>
  );
}
