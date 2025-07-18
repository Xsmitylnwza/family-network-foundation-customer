'use client';
import { useState, useEffect } from 'react';

interface SlideShowOptions {
  totalSlides: number;
  intervalSeconds?: number;
}

interface UseSlideShowReturn {
  currentSlide: number;
  isAutoPlaying: boolean;
  getSlidePosition: (index: number) => number;
  handlePrevSlide: () => void;
  handleNextSlide: () => void;
  stopAutoPlay: () => void;
  startAutoPlay: () => void;
}

export const useSlideShow = ({
  totalSlides,
  intervalSeconds = 5,
}: SlideShowOptions): UseSlideShowReturn => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Calculate slide position including gap
  const getSlidePosition = (index: number) => {
    // Convert gap pixels to percentage of slide width
    const slideWidth = 100; // 100%
    const position = -(index * slideWidth);

    // No need to calculate gaps here since we're using marginRight in the component
    return position;
  };

  // Auto play effect
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, intervalSeconds * 1000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, intervalSeconds, totalSlides]);

  const handlePrevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const stopAutoPlay = () => setIsAutoPlaying(false);
  const startAutoPlay = () => setIsAutoPlaying(true);

  return {
    currentSlide,
    isAutoPlaying,
    getSlidePosition,
    handlePrevSlide,
    handleNextSlide,
    stopAutoPlay,
    startAutoPlay,
  };
};
