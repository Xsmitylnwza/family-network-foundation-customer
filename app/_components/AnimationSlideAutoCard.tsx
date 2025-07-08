'use client';
import { Box } from '@mui/material';
import React from 'react';
import { useInfiniteScroll } from '@/app/_hooks/useInfiniteScroll';
import { CardActivity as CardActivityType } from '../type';
import CardActivity from './CardActivity';

interface Props {
  animationDuration?: number;
  items?: CardActivityType[];
}

export default function AnimationSlideAutoCard({
  animationDuration = 40,
}: Props) {
  const { containerRef, scrollRef } = useInfiniteScroll();
  const items = Array.from({ length: 24 });
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
          animation: `scroll ${animationDuration}s linear infinite`,
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
          <Box key={index} width={{ xs: '250px', md: '425px' }}>
            <CardActivity />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
