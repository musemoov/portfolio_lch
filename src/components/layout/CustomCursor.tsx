'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    // 호버 상태 감지
    const handleMouseOver = (e: MouseEvent) => {
      if (e.target instanceof Element) {
        const targetElement = e.target as HTMLElement;
        // 현재 요소가 data-hoverable를 가지고 있거나, 부모 중에 data-hoverable을 가진 요소가 있는지 확인
        const isHoverableElement = 
          targetElement.tagName === 'A' || 
          targetElement.tagName === 'BUTTON' || 
          targetElement.closest('a') || 
          targetElement.closest('button') ||
          targetElement.dataset.hoverable === 'true' ||
          targetElement.closest('[data-hoverable="true"]');
        
        setIsHovered(!!isHoverableElement);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      if (e.target instanceof Element) {
        const targetElement = e.target as HTMLElement;
        const relatedTarget = e.relatedTarget as HTMLElement | null;
        
        // 마우스가 data-hoverable 속성을 가진 요소나 그 자식에서 벗어났는지 확인
        const leavingHoverable = 
          (targetElement.dataset.hoverable === 'true' || targetElement.closest('[data-hoverable="true"]')) &&
          (!relatedTarget || 
            (relatedTarget && !relatedTarget.closest('[data-hoverable="true"]')));
          
        if (leavingHoverable) {
          setIsHovered(false);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed z-[100]"
      animate={{
        x: isHovered ? mousePosition.x - 30 : mousePosition.x - 15,
        y: isHovered ? mousePosition.y - 30 : mousePosition.y - 15,
        scale: isClicked ? 0.8 : 1,
      }}
      transition={{
        x: { type: 'tween', duration: 0 },
        y: { type: 'tween', duration: 0 },
        scale: { type: 'spring', stiffness: 800, damping: 35 }
      }}
    >
      {isHovered ? (
        // 호버 시 색상이 채워진 커서 (크기 2배, 투명도 추가)
        <div className="w-20 h-20 rounded-full bg-[#c84545] opacity-30 mix-blend-difference"></div>
      ) : (
        // 기본 커서
        <div className="w-10 h-10 rounded-full border border-red-500 mix-blend-difference">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-red-500 mix-blend-difference"></div>
        </div>
      )}
    </motion.div>
  );
} 