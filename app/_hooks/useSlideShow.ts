'use client';
import { useState, useEffect } from 'react';

interface SlideShowOptions {
  totalSlides: number;
  intervalSeconds?: number;
  gapPixels?: number;
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
  gapPixels = 30,
}: SlideShowOptions): UseSlideShowReturn => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [windowWidth, setWindowWidth] = useState(0);

  // Initialize window width on client side
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  // Calculate slide position including gap
  const getSlidePosition = (index: number) => {
    if (windowWidth === 0) return -(index * 100); // Default behavior before window width is available
    const gapPercentage = (gapPixels / windowWidth) * 100;
    return -(index * (100 + gapPercentage));
  };

  // Auto play effect
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, intervalSeconds * 1000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, intervalSeconds, totalSlides]);

  // Window resize handler
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
