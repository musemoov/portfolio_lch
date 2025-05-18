'use client';

import { useState, useRef } from 'react';
import { motion } from "framer-motion";

export default function Benefits() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  
  // Benefits 섹션 컨텐츠
  const services = [
    {
      title: "AI API Integration",
      description: "Bringing intelligent features to life — powered by AI.",
      icon: "M"
    },
    {
      title: "UI/UX Design",
      description: "Intuitive designs that think like users and feel like brands.",
      icon: "M"
    },
    {
      title: "Product Design",
      description: "From concept to execution — building products that people remember.",
      icon: "M"
    },
    {
      title: "OpenAI API Integration",
      description: "Bringing intelligent features to life — powered by AI.",
      icon: "M"
    },
    {
      title: "Vercel Deployment",
      description: "Blazing-fast, automated deployments for modern web projects.",
      icon: "M"
    },
    {
      title: "Responsive Design",
      description: "Pixel-perfect layouts across all screens and devices.",
      icon: "M"
    }
  ];

  // 컨테이너 애니메이션
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  // 아이템 애니메이션
  const itemVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 12
      }
    }
  };

  // 아이콘 애니메이션
  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    },
    hover: { 
      scale: 1.1,
      rotate: 10,
      transition: { 
        duration: 0.3,
        yoyo: Infinity,
        repeatDelay: 0.5
      }
    }
  };

  return (
    <section 
      id="benefits" 
      className="py-24 bg-white relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* 제목 */}
        <motion.div 
          className="mb-20 text-center"
          ref={titleRef}
        >
          <motion.h2 
            className="text-4xl text-gray-900 md:text-5xl font-bold mb-6"
          >
            WHAT I DO
          </motion.h2>
        </motion.div>

        {/* 서비스 그리드 */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              custom={index}
              whileHover={{ 
                y: -15,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.3 }
              }}
              className="border border-[#121b2a]/30 bg-black rounded-[10px] p-10 text-center flex flex-col items-center cursor-pointer"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              {/* 아이콘 */}
              <motion.div 
                className="mb-6 h-20 w-20 rounded-full border border-gray-600 flex items-center justify-center relative"
                variants={iconVariants}
                animate={hoveredIndex === index ? "hover" : "visible"}
              >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={hoveredIndex === index ? "#c84545" : "currentColor"} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={hoveredIndex === index ? "text-[#c84545]" : "text-gray-400"}>
                  {index === 0 && (
                    <>
                      <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                      <path d="M6 8h.01M6 12h.01M6 16h.01M10 8h8M10 12h8M10 16h8" />
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <path d="M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5C8.12 15 7 13.88 7 12.5S8.12 10 9.5 10H17" />
                      <circle cx="15" cy="12" r="1" />
                      <path d="M9.5 10H17" />
                      <path d="M9.5 15H18c2.21 0 4-1.79 4-4s-1.79-4-4-4H7.5" />
                    </>
                  )}
                  {index === 3 && (
                    <>
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 3c-1.602 0-3.064.632-4.142 1.658m-1.1 1.544C5.696 7.195 5 9.342 5 11c0 1.657.696 3.804 1.758 4.798m1.1 1.544C8.936 18.368 10.398 19 12 19c1.603 0 3.065-.632 4.142-1.658m1.1-1.544C18.304 14.805 19 12.658 19 11c0-1.657-.696-3.804-1.758-4.798m-1.1-1.544C15.064 3.632 13.602 3 12 3" />
                      <path d="M8 16l.553-1.658A6.995 6.995 0 0 1 5 11c0-1.818.687-3.505 1.847-4.787" />
                      <path d="M16 16l-.553-1.658A6.995 6.995 0 0 0 19 11c0-1.818-.687-3.505-1.847-4.787" />
                    </>
                  )}
                  {index === 4 && (
                    <>
                      <path d="M12 2L2 19.5h20z" />
                      <path d="M9 15l3-3 3 3" />
                      <path d="M15 10l-3-3-3 3" />
                    </>
                  )}
                  {index === 5 && (
                    <>
                      <rect x="2" y="4" width="20" height="12" rx="2" />
                      <rect x="8" y="20" width="8" height="2" rx="1" />
                      <path d="M12 16v4" />
                      <path d="M6 12h12" />
                      <path d="M6 8h12" />
                    </>
                  )}
                </svg>
              </motion.div>
              
              {/* 제목 */}
              <motion.h3 
                className={`text-xl font-medium mb-4 ${hoveredIndex === index ? "text-[#c84545]" : "text-white"}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {service.title}
              </motion.h3>
              
              {/* 설명 */}
              <motion.p 
                className={`text-sm ${hoveredIndex === index ? "text-[#c84545]/80" : "text-gray-400"}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {service.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
        
    
      </div>
    </section>
  );
} 