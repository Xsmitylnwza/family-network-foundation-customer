import { useState, useRef, useEffect } from 'react';

interface UseSwipeablePagesProps {
  totalPages: number;
}

interface UseSwipeablePagesReturn {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  containerRef: React.RefObject<HTMLDivElement | null>;
  handleTouchStart: (e: React.TouchEvent) => void;
  handleTouchMove: (e: React.TouchEvent) => void;
  handleTouchEnd: () => void;
  handleMouseDown: (e: React.MouseEvent) => void;
  handleMouseMove: (e: React.MouseEvent) => void;
  handleMouseUp: () => void;
}

export const useSwipeablePages = ({
  totalPages,
}: UseSwipeablePagesProps): UseSwipeablePagesReturn => {
  const [currentPage, setCurrentPage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isDragging = useRef(false);

  const handleSwipe = () => {
    const swipeDistance = touchEndX.current - touchStartX.current;
    const threshold = 50; // minimum distance for swipe

    if (Math.abs(swipeDistance) > threshold) {
      if (swipeDistance > 0) {
        // Swipe right, go to previous page
        setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
      } else {
        // Swipe left, go to next page
        setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
      }
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    isDragging.current = true;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    touchEndX.current = e.touches[0].clientX;

    // Optional: Add visual feedback during swipe
    if (containerRef.current) {
      const delta = touchEndX.current - touchStartX.current;
      containerRef.current.style.transform = `translateX(${delta}px)`;
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;

    if (containerRef.current) {
      containerRef.current.style.transform = '';
    }

    handleSwipe();
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    touchStartX.current = e.clientX;
    isDragging.current = true;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    touchEndX.current = e.clientX;

    if (containerRef.current) {
      const delta = touchEndX.current - touchStartX.current;
      containerRef.current.style.transform = `translateX(${delta}px)`;
    }
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;

    if (containerRef.current) {
      containerRef.current.style.transform = '';
    }

    handleSwipe();
  };

  // Clean up mouse events
  useEffect(() => {
    const handleMouseUpGlobal = () => {
      if (isDragging.current) {
        handleMouseUp();
      }
    };

    window.addEventListener('mouseup', handleMouseUpGlobal);
    return () => {
      window.removeEventListener('mouseup', handleMouseUpGlobal);
    };
  }, []);

  return {
    currentPage,
    setCurrentPage,
    containerRef,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  };
};
