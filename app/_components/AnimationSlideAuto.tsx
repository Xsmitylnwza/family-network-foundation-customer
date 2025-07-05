'use client';
import { Box } from '@mui/material';
import React from 'react';
import AliveLogo from './AliveLogo';
import { useInfiniteScroll } from '@/app/_hooks/useInfiniteScroll';

export default function AnimationSlideAuto() {
  const { containerRef, scrollRef } = useInfiniteScroll();

  const items = Array.from({ length: 20 });
  const doubledItems = [...items, ...items];

  return (
    <Box
      ref={containerRef}
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        overflow: 'hidden',
        cursor: 'grab',
        position: 'relative',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
      }}
    >
      <Box
        ref={scrollRef}
        sx={{
          display: 'flex',
          gap: 2,
          animation: 'scroll 40s linear infinite',
          '@keyframes scroll': {
            '0%': {
              transform: 'translateX(0)',
            },
            '100%': {
              transform: 'translateX(-50%)',
            },
          },
          '&:hover': {
            animationPlayState: 'paused',
          },
        }}
      >
        {doubledItems.map((_, index) => (
          <Box
            key={index}
            sx={{
              flex: 'none',
            }}
          >
            <AliveLogo />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
