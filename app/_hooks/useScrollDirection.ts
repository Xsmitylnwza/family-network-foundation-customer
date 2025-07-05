import { useState, useEffect } from 'react';

interface ScrollDirection {
  isScrollingDown: boolean;
  isPassedThreshold: boolean;
  shouldShowSticky: boolean;
}

export const useScrollDirection = (
  threshold: number = 100
): ScrollDirection => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isPassedThreshold, setIsPassedThreshold] = useState(false);
  const [shouldShowSticky, setShouldShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // ตรวจสอบทิศทางการ scroll
      setIsScrollingDown(currentScrollY > lastScrollY);

      // ตรวจสอบว่าเลื่อนผ่านตำแหน่ง threshold หรือไม่
      setIsPassedThreshold(currentScrollY > threshold);

      // แสดง sticky navbar เมื่อ:
      // 1. scroll ผ่าน threshold และ
      // 2. กำลัง scroll ลง หรือ อยู่เหนือ threshold
      setShouldShowSticky(
        currentScrollY > threshold &&
          (!isScrollingDown || currentScrollY <= threshold)
      );

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, threshold, isScrollingDown]);

  return {
    isScrollingDown,
    isPassedThreshold,
    shouldShowSticky,
  };
};
