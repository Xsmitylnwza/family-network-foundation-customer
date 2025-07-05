import { useEffect, useState } from 'react';

interface UseAutoSlideProps {
  totalPages: number;
  intervalSeconds: number;
  onSlide?: (nextPage: number) => void;
}

export const useAutoSlide = ({
  totalPages,
  intervalSeconds,
  onSlide,
}: UseAutoSlideProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    if (isInteracting) return;

    const interval = setInterval(() => {
      const nextPage = (currentPage + 1) % totalPages;
      setCurrentPage(nextPage);
      onSlide?.(nextPage);
    }, intervalSeconds * 1000);

    return () => clearInterval(interval);
  }, [currentPage, isInteracting, intervalSeconds, totalPages, onSlide]);

  const startInteraction = () => setIsInteracting(true);
  const stopInteraction = () => setIsInteracting(false);
  const setPage = (page: number) => {
    setCurrentPage(page);
    onSlide?.(page);
  };

  return {
    currentPage,
    setPage,
    isInteracting,
    startInteraction,
    stopInteraction,
  };
};
