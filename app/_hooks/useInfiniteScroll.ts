import { useEffect, useRef } from 'react';

interface UseInfiniteScrollReturn {
  containerRef: React.RefObject<HTMLDivElement | null>;
  scrollRef: React.RefObject<HTMLDivElement | null>;
}

export const useInfiniteScroll = (): UseInfiniteScrollReturn => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const scrollContainer = scrollRef.current;
    if (!container || !scrollContainer) return;

    let isMouseDown = false;
    let startX: number;
    let scrollLeft: number;

    const handleMouseDown = (e: MouseEvent) => {
      isMouseDown = true;
      container.style.cursor = 'grabbing';
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
      // Pause animation when dragging
      if (scrollContainer) {
        scrollContainer.style.animationPlayState = 'paused';
      }
    };

    const handleMouseUp = () => {
      isMouseDown = false;
      container.style.cursor = 'grab';
      // Resume animation
      if (scrollContainer) {
        scrollContainer.style.animationPlayState = 'running';
      }
    };

    const handleMouseLeave = () => {
      isMouseDown = false;
      container.style.cursor = 'grab';
      if (scrollContainer) {
        scrollContainer.style.animationPlayState = 'running';
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMouseDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = scrollLeft - walk;
    };

    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return {
    containerRef,
    scrollRef,
  };
};
