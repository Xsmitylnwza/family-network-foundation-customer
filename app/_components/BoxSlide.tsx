'use client';
import { Box, Grid2 as Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { GRADIENT_BG } from '../theme';
import { useSlideShow } from '@/app/_hooks/useSlideShow';

const slides = [
  {
    title: '"รวมพลังครอบครัว\nสร้างสังคมอบอุ่นไปด้วยกัน"',
    description: `มูลนิธิเครือข่ายครอบครัว มีบทบาทในการประสานและสร้างความตระหนักในการส่งเสริมสถาบันครอบครัวให้เกิดขึ้นทั้งในบุคคล ชุมชน และสังคม ด้วยการนำเสนอกระบวนการรวมกลุ่มเป็นเครือข่ายความร่วมมือ ช่วยเหลือเกื้อกูลกันและเรียกร้องต่อรองสิทธิอันพึงมีของครอบครัว พันธกิจที่สำคัญของเราคือ ส่งเสริมให้พ่อแม่ใช้โอกาสเป็นพ่อแม่ของตนอย่างมีคุณค่า เพื่อทำหน้าที่ยิ่งใหญ่ให้ประสบผลสำเร็จนั่นคือหน้าที่ของความเป็นพ่อแม่นั่นเอง`,
  },
  {
    title: 'ข่าวประชาสัมพันธ์',
    description: 'ข่าวประชาสัมพันธ์ของมูลนิธิเครือข่ายครอบครัว',
  },
  {
    title: 'ข่าวประชาสัมพันธ์',
    description: 'ข่าวประชาสัมพันธ์ของมูลนิธิเครือข่ายครอบครัว',
  },
  {
    title: 'ข่าวประชาสัมพันธ์',
    description: 'ข่าวประชาสัมพันธ์ของมูลนิธิเครือข่ายครอบครัว',
  },
];

export default function BoxSlide() {
  const {
    currentSlide,
    getSlidePosition,
    handlePrevSlide,
    handleNextSlide,
    stopAutoPlay,
  } = useSlideShow({
    totalSlides: slides.length,
    intervalSeconds: 5,
    gapPixels: 30,
  });

  return (
    <Grid size={{ xs: 12, md: 4 }} container>
      <Grid
        px='25px'
        py='36px'
        height='534px'
        sx={{
          background: GRADIENT_BG,
          position: 'relative',
          overflow: 'hidden',
        }}
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
        size={12}
      >
        <Grid
          sx={{
            transform: `translateX(${getSlidePosition(currentSlide)}%)`,
            transition: 'transform 0.5s ease-in-out',
            display: 'flex',
            width: 'calc(100%)',
            gap: '30px',
          }}
        >
          {slides.map((slide, index) => (
            <Grid
              key={index}
              sx={{
                width: '100%',
                flex: 'none',
                pr: '20px',
              }}
            >
              <Typography variant='h2' whiteSpace='pre-line'>
                {slide.title}
              </Typography>
              <Typography variant='body1' mt={2}>
                {slide.description}
              </Typography>
            </Grid>
          ))}
        </Grid>

        <Grid
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          size={12}
        >
          {/* Pagination dots */}
          <Grid display='flex' gap={1}>
            {slides.map((_, index) => (
              <Box
                key={index}
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: currentSlide === index ? 'secondary.main' : 'gray',
                  transition: 'background-color 0.3s',
                }}
              />
            ))}
          </Grid>

          {/* Navigation buttons */}
          <Grid>
            <IconButton
              color='secondary'
              onClick={handlePrevSlide}
              onMouseEnter={stopAutoPlay}
            >
              <ArrowBackIosNewIcon />
            </IconButton>
            <IconButton
              color='secondary'
              onClick={handleNextSlide}
              onMouseEnter={stopAutoPlay}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
