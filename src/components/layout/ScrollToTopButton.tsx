'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // 스크롤 위치가 300px 이상이면 버튼 표시
      const scrollY = window.scrollY;
      const heroSection = document.getElementById('hero');
      
      // hero 섹션이 화면에 보이는지 확인
      const heroVisible = heroSection && 
        heroSection.getBoundingClientRect().top >= -100 && 
        heroSection.getBoundingClientRect().bottom >= 0;
      
      // hero 섹션에 있으면 버튼 숨기기, 그 외에는 스크롤 위치에 따라 결정
      setIsVisible(scrollY > 300 && !heroVisible);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // 초기 상태 확인
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-md bg-[#c84545] text-white flex items-center justify-center shadow-lg hover:bg-red-600 transition-colors z-40 cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          aria-label="Scroll to top"
          data-hoverable="true"
        >
          <ChevronUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
} 
 