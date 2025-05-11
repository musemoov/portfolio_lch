'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from 'react';

// Sample portfolio items
const portfolioItems = [
  {
    id: 1,
    title: 'AI Marketing Company',
    category: 'Website',
    image: '/images/portfolio/marketing_company_main.png',
    brightness: 0.7,
    url: 'https://marketing-homepage-delta.vercel.app/',
  },
  {
    id: 2,
    title: 'Shopping Mall',
    category: 'E-commerce',
    image: '/images/portfolio/shopping_mall_main.png',
    brightness: 0.3,
    url: 'https://shopping-mall-pink.vercel.app/',
  },
  {
    id: 3,
    title: 'Dragon Ball Portfolio',
    category: 'Game',
    image: '/images/portfolio/dragonball_main.png',
    brightness: 0.4,
    url: 'https://changheelee-portfolio.vercel.app/',
  },
  {
    id: 4,
    title: 'Shopping Mall',
    category: 'E-commerce',
    image: '/images/portfolio/shopping_mall_main.png',
    brightness: 0.3,
    url: 'https://shopping-mall-pink.vercel.app/',
  },
  {
    id: 5,
    title: 'Translator',
    category: 'Web App',
    image: '/images/portfolio/translator_main.png',
    brightness: 1,
    url: 'https://translator-app-gules.vercel.app/',
  },
  {
    id: 6,
    title: 'Dragon Ball Portfolio',
    category: 'Game',
    image: '/images/portfolio/dragonball_main.png',
    brightness: 0.4,
    url: 'https://changheelee-portfolio.vercel.app/',
  }
];

// 복사 카드용 임의 데이터 (첫 번째 복사)
const copiedItems1 = [
  {
    id: 'c1',
    title: 'AI Email Generator',
    category: 'Web App',
    image: '/images/portfolio/ai-email-generator.png',
    brightness: 0.3,
    url: 'https://ai-email-generator-chi.vercel.app/',
  },
  {
    id: 'c2',
    title: 'AI Invoice Generator',
    category: 'Web App',
    image: '/images/portfolio/ai-invoice-generator.png',
    brightness: 0.3,
    url: 'https://ai-invoice-generator-beta.vercel.app/',
  },
  {
    id: 'c3',
    title: 'KPI Dashboard',
    category: 'Web App',
    image: '/images/portfolio/kpi-dashboard.png',
    brightness: 0.3,
    url: 'https://kpi-dashboard-v6zv.vercel.app/',
  },
];

// 복사 카드용 임의 데이터 (두 번째 복사)
const copiedItems2 = [
  {
    id: 'd1',
    title: 'Practice Dashboard',
    category: 'Web App',
    image: '/images/portfolio/practice-dashboard.png',
    brightness: 0.3,
    url: 'https://practice-dashboard-zeta.vercel.app/',
  },
  {
    id: 'd2',
    title: 'AI Chatbot',
    category: 'Youtube',
    image: '/images/portfolio/chat_with_ai_main.png',
    brightness: 1,
    url: 'https://ai-chat-bot-mu-rosy.vercel.app/',
  },
  {
    id: 'd3',
    title: 'AI Marketing Company',
    category: 'Website',
    image: '/images/portfolio/marketing_company_main.png',
    brightness: 0.7,
    url: 'https://marketing-homepage-delta.vercel.app/',
  },
];

// 유튜브 카드용 임의 데이터 (첫 3개)
const youtubeItems = [
  {
    id: 'y1',
    title: 'My 1st Portfolio Video',
    videoId: 'uBkNvM3t1oQ',
    brightness: 0.7,
    url: 'https://youtu.be/uBkNvM3t1oQ?si=2-vOJNioWzcznbl2',
  },
  {
    id: 'y2',
    title: 'AI Email Generator and AI Invoice Generator VIDEO',
    videoId: 'EyYJoCqcylM',
    brightness: 0.6,
    url: 'https://youtu.be/EyYJoCqcylM?si=1y0U57kDEhJ0HJQR',
  },
  {
    id: 'y3',
    title: 'Marketing Company AI Chatbot VIDEO',
    videoId: 'hhUvK2BckrM',
    brightness: 0.8,
    url: 'https://youtu.be/hhUvK2BckrM?si=mIa0ekt1ZuUH_CsX',
  },
];

export default function Portfolio() {
  const [activeCategory] = useState('all');
  const [hoveredId, setHoveredId] = useState<number | string | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };
  
  const handleProjectClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 bg-white text-black" ref={ref} id="portfolio">
      <div className="container mx-auto px-6 mb-6">
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-bold tracking-wide mb-6">PORTFOLIO</h2>
          <div className="text-sm text-gray-600 font-medium uppercase tracking-widest max-w-2xl mx-auto flex items-center justify-center mb-0">
            <div className="w-10 h-px bg-gray-400 mr-4"></div>
            VIDEO PORTFOLIO
            <div className="w-10 h-px bg-gray-400 ml-4"></div>
          </div>
        </div>
      </div>

      {/* Portfolio Grid - Full Width */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-8"
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        {filteredItems.map((project, index) => (
          <React.Fragment key={project.id}>
            <motion.div 
              className="relative group overflow-hidden border border-gray-200 m-2 rounded-[10px] cursor-pointer"
              variants={item}
              onMouseEnter={() => setHoveredId(index < 3 ? youtubeItems[index].id : project.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => handleProjectClick(index < 3 ? youtubeItems[index].url : project.url)}
              data-hoverable="true"
            >
              <div className="relative h-80 w-full bg-black rounded-[10px] flex items-center justify-center">
                {index < 3 ? (
                  <>
                    {/* 첫번째 유튜브 동영상 카드 */}
                    {index === 0 && null}
                    {/* 두번째 유튜브 동영상 카드 */}
                    {index === 1 && null}
                    {/* 세번째 유튜브 동영상 카드 */}
                    {index === 2 && null}
                    <div className="relative w-full h-full">
                      <Image
                        src={`https://img.youtube.com/vi/${youtubeItems[index].videoId}/maxresdefault.jpg`}
                        alt={youtubeItems[index].title}
                        fill
                        className="object-cover transition-all duration-300 rounded-[10px]"
                        style={{
                          filter: hoveredId === youtubeItems[index].id
                            ? 'grayscale(100%) brightness(1)'
                            : `grayscale(100%) brightness(${youtubeItems[index].brightness})`
                        }}
                      />
                      {/* 기본 어두운 오버레이 */}
                      <div className="absolute inset-0 bg-black rounded-[10px]" style={{ opacity: hoveredId === youtubeItems[index].id ? 0.8 : 0.5, transition: 'opacity 0.3s' }}></div>
                      {/* 호버 시 붉은색 오버레이 */}
                      {hoveredId === youtubeItems[index].id && (
                        <div className="absolute inset-0 bg-[#ff0000] opacity-50 transition-opacity duration-300 z-10 rounded-[10px]"></div>
                      )}
                      {/* 호버 시 LIVE PREVIEW와 타이틀 */}
                      {hoveredId === youtubeItems[index].id && (
                        <div className="absolute inset-0 flex flex-col items-center z-20">
                          {/* LIVE PREVIEW 버튼 - 중앙 배치 */}
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="px-6 py-3 border-2 border-white text-white text-sm font-medium tracking-wider transition-transform hover:scale-105">
                              LIVE PREVIEW
                            </div>
                          </div>
                          {/* 타이틀 - 하단 배치 */}
                          <div className="absolute bottom-10 text-center w-full">
                            <h3 className="text-white text-xl font-bold">{youtubeItems[index].title}</h3>
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <motion.div
                    className="h-full w-full rounded-[10px] overflow-hidden"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 0.8, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-all duration-300"
                      style={{ 
                        filter: hoveredId === project.id 
                          ? 'grayscale(100%) brightness(1)'
                          : `grayscale(100%) brightness(${project.brightness})`
                      }}
                    />
                    {/* 호버 시 붉은색 오버레이 */}
                    {hoveredId === project.id && (
                      <div className="absolute inset-0 bg-[#ff0000] opacity-50 transition-opacity duration-300 z-10"></div>
                    )}
                    {/* 호버 시 재생 버튼과 텍스트 표시 */}
                    {hoveredId === project.id && (
                      <div className="absolute inset-0 flex flex-col items-center z-20">
                        {/* LIVE PREVIEW 버튼 - 중앙 배치 */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <div className="px-6 py-3 border-2 border-white text-white text-sm font-medium tracking-wider transition-transform hover:scale-105">
                            LIVE PREVIEW
                          </div>
                        </div>
                        {/* 웹사이트 이름 - 하단 배치 */}
                        <div className="absolute bottom-10 text-center w-full">
                          <h3 className="text-white text-xl font-bold">{project.title}</h3>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </div>
            </motion.div>
            {index === 2 && (
              <>
                <div className="col-span-full w-full text-center mt-8 text-gray-600 font-medium uppercase tracking-widest">
                  Dive Into the Details
                </div>
                {/* 첫 3개 카드를 복사해서 아래에 3개 더 추가 (copiedItems1) */}
                {copiedItems1.map((copyProject) => (
                  <motion.div
                    key={`copy1-${copyProject.id}`}
                    className="relative group overflow-hidden border border-gray-200 m-2 rounded-[10px] cursor-pointer"
                    variants={item}
                    onMouseEnter={() => setHoveredId(`copy1-${copyProject.id}`)}
                    onMouseLeave={() => setHoveredId(null)}
                    onClick={() => handleProjectClick(copyProject.url)}
                    data-hoverable="true"
                  >
                    <div className="relative h-80 w-full bg-black rounded-[10px] flex items-center justify-center">
                      <motion.div
                        className="h-full w-full rounded-[10px] overflow-hidden"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 0.8, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false }}
                      >
                        <Image
                          src={copyProject.image}
                          alt={copyProject.title}
                          fill
                          className="object-cover transition-all duration-300"
                          style={{ 
                            filter: hoveredId === `copy1-${copyProject.id}`
                              ? 'grayscale(100%) brightness(1)'
                              : `grayscale(100%) brightness(${copyProject.brightness})`
                          }}
                        />
                        {/* 호버 시 붉은색 오버레이 */}
                        {hoveredId === `copy1-${copyProject.id}` && (
                          <div className="absolute inset-0 bg-[#ff0000] opacity-50 transition-opacity duration-300 z-10"></div>
                        )}
                        {/* 호버 시 재생 버튼과 텍스트 표시 */}
                        {hoveredId === `copy1-${copyProject.id}` && (
                          <div className="absolute inset-0 flex flex-col items-center z-20">
                            {/* LIVE PREVIEW 버튼 - 중앙 배치 */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                              <div className="px-6 py-3 border-2 border-white text-white text-sm font-medium tracking-wider transition-transform hover:scale-105">
                                LIVE PREVIEW
                              </div>
                            </div>
                            {/* 웹사이트 이름 - 하단 배치 */}
                            <div className="absolute bottom-10 text-center w-full">
                              <h3 className="text-white text-xl font-bold">{copyProject.title}</h3>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
                {/* 첫 3개 카드를 한 번 더 복사해서 아래에 3개 더 추가 (copiedItems2) */}
                {copiedItems2.map((copyProject) => (
                  <motion.div
                    key={`copy2-${copyProject.id}`}
                    className="relative group overflow-hidden border border-gray-200 m-2 rounded-[10px] cursor-pointer"
                    variants={item}
                    onMouseEnter={() => setHoveredId(`copy2-${copyProject.id}`)}
                    onMouseLeave={() => setHoveredId(null)}
                    onClick={() => handleProjectClick(copyProject.url)}
                    data-hoverable="true"
                  >
                    <div className="relative h-80 w-full bg-black rounded-[10px] flex items-center justify-center">
                      <motion.div
                        className="h-full w-full rounded-[10px] overflow-hidden"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 0.8, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false }}
                      >
                        <Image
                          src={copyProject.image}
                          alt={copyProject.title}
                          fill
                          className="object-cover transition-all duration-300"
                          style={{ 
                            filter: hoveredId === `copy2-${copyProject.id}`
                              ? 'grayscale(100%) brightness(1)'
                              : `grayscale(100%) brightness(${copyProject.brightness})`
                          }}
                        />
                        {/* 호버 시 붉은색 오버레이 */}
                        {hoveredId === `copy2-${copyProject.id}` && (
                          <div className="absolute inset-0 bg-[#ff0000] opacity-50 transition-opacity duration-300 z-10"></div>
                        )}
                        {/* 호버 시 재생 버튼과 텍스트 표시 */}
                        {hoveredId === `copy2-${copyProject.id}` && (
                          <div className="absolute inset-0 flex flex-col items-center z-20">
                            {/* LIVE PREVIEW 버튼 - 중앙 배치 */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                              <div className="px-6 py-3 border-2 border-white text-white text-sm font-medium tracking-wider transition-transform hover:scale-105">
                                LIVE PREVIEW
                              </div>
                            </div>
                            {/* 웹사이트 이름 - 하단 배치 */}
                            <div className="absolute bottom-10 text-center w-full">
                              <h3 className="text-white text-xl font-bold">{copyProject.title}</h3>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </>
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </section>
  );
} 