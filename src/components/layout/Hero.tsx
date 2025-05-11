'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

// 버튼 스타일을 위한 커스텀 CSS
const buttonStyles = `
  .bracket-btn {
    position: relative;
    cursor: pointer;
    padding: 0.75rem 2rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: white;
    background-color: transparent;
    transition: all 0.3s ease;
    border: none;
    outline: none;
  }

  .bracket-btn::before,
  .bracket-btn::after {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    border: 2px solid rgba(255, 255, 255, 0.5);
    transition: all 0.3s ease;
  }

  .bracket-btn::before {
    top: 0;
    left: 0;
    border-right: 0;
    border-bottom: 0;
  }

  .bracket-btn::after {
    bottom: 0;
    right: 0;
    border-left: 0;
    border-top: 0;
  }

  .bracket-btn:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  .bracket-btn:hover::before {
    width: 100%;
    height: 100%;
  }

  .bracket-btn:hover::after {
    width: 100%;
    height: 100%;
  }
`;

// 배경 이미지 애니메이션 설정
const bgImageAnimation = {
  animate: {
    scale: [1, 1.05, 1],
  },
  transition: {
    duration: 16,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "loop" as const
  }
};

// 스크롤 힌트 애니메이션 설정
const scrollHintAnimation = {
  animate: {
    y: [0, 55],  // bottom-10에서 55px 내려가면 bottom-(-5) 위치가 됩니다
    opacity: [0, 1, 1, 0],
    times: [0, 0.3, 0.8, 1]
  },
  transition: {
    duration: 1.5,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "loop" as const,
    repeatDelay: 0.5
  }
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // 스크롤 기반 패럴랙스 효과
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]); // 스크롤 위치에 따라 y값 변환
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]); // 스크롤 위치에 따라 불투명도 변환

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <style jsx>{buttonStyles}</style>
      <motion.div 
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            style={{ y, opacity }} // 스크롤 패럴랙스 적용
            transition={{ 
              duration: 0.5, 
              ease: "easeOut",
              x: { duration: 0.5, ease: "easeOut" },
              y: { duration: 0.5, ease: "easeOut" }
            }}
            className="w-full h-full relative"
          >
            <motion.div
              animate={bgImageAnimation.animate}
              transition={bgImageAnimation.transition}
              className="w-full h-full relative"
            >
              <Image
                src="/images/hero_bg.png"
                alt="Hero Background"
                fill
                priority
                className="object-cover"
              />
            </motion.div>
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 text-center px-6 mt-10">
          <div className="space-y-6">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3, ease: "easeOut", delay: 1 }}
              className="text-white text-lg uppercase tracking-wider mb-1 mt-4"
            >
              CHANGHEE LEE&apos;S
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3, ease: "easeOut", delay: 1.5 }}
              className="text-white text-6xl md:text-8xl font-bold tracking-tight mt-8"
            >
              PROJECTS
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3, ease: "easeOut", delay: 2 }}
              className="mt-8"
            >
              <button 
                onClick={scrollToPortfolio}
                className="bracket-btn mt-8"
              >
                VIEW PORTFOLIO
              </button>
            </motion.div>
          </div>
        </div>

        {/* 스크롤 힌트 */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
          initial={{ opacity: 0, height: 50 }}
          animate={scrollHintAnimation.animate}
          transition={scrollHintAnimation.transition}
        >
          <div className="w-[1px] bg-white h-full"></div>
        </motion.div>
      </motion.div>
    </>
  );
} 