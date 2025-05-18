'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from 'react';

// portfolio items
const portfolioItems = [
  {
    id: 1,
    title: 'AI Email Generator',
    category: 'Web App',
    image: '/images/portfolio/ai-email-generator.png',
    brightness: 0.4,
    url: 'https://ai-email-generator-chi.vercel.app/',
    hoverText: 'Next.js, Tailwind CSS, OpenAI API, TypeScript, Supabase, Shadcn UI',
  },
  {
    id: 2,
    title: 'AI Invoice Generator',
    category: 'Web App',
    image: '/images/portfolio/ai-invoice-generator.png',
    brightness: 0.4,
    url: 'https://ai-invoice-generator-beta.vercel.app/',
    hoverText: 'Next.js, TypeScript, OpenAI API, Shadcn UI, Supabase, Tailwind CSS',
  },
  {
    id: 3,
    title: 'KPI Dashboard',
    category: 'Web App',
    image: '/images/portfolio/kpi-dashboard.png',
    brightness: 0.4,
    url: 'https://kpi-dashboard-v6zv.vercel.app/',
    hoverText: 'Next.js, Shadcn UI, Tailwind CSS, TypeScript, Supabase RLS, Recharts',
  },
  {
    id: 4,
    title: 'Dashboard Sample',
    category: 'Web App',
    image: '/images/portfolio/practice-dashboard.png',
    brightness: 0.5,
    url: 'https://practice-dashboard-zeta.vercel.app/',
    hoverText: 'Next.js, Shadcn UI, Tailwind CSS, TypeScript',
  },
  {
    id: 5,
    title: 'AI Chatbot',
    category: 'Youtube',
    image: '/images/portfolio/chat_with_ai_main.png',
    brightness: 1,
    url: 'https://ai-chat-bot-mu-rosy.vercel.app/',
    hoverText: 'React, Tailwind CSS, OpenAI API, Aceternity UI, localStorage, uuid, emoji-mart',
  },
  {
    id: 6,
    title: 'AI Marketing Company',
    category: 'Website',
    image: '/images/portfolio/marketing_company_main.png',
    brightness: 0.9,
    url: 'https://marketing-homepage-delta.vercel.app/',
    hoverText: 'Next.js, Tailwind CSS, OpenAI API, TypeScript',
  },
  {
    id: 7,
    title: 'Shopping Mall',
    category: 'E-commerce',
    image: '/images/portfolio/shopping_mall_main.png',
    brightness: 0.5,
    url: 'https://shopping-mall-pink.vercel.app/',
    hoverText: 'React, Tailwind CSS, TypeScript, Stripe',
  },
  {
    id: 8,
    title: 'Language Translator',
    category: 'Web App',
    image: '/images/portfolio/translator_main.png',
    brightness: 1,
    url: 'https://translator-app-gules.vercel.app/',
    hoverText: 'React, Tailwind CSS, DottedMap, MyMemory API',
  },
  {
    id: 9,
    title: 'Dragon Ball Portfolio',
    category: 'Game',
    image: '/images/portfolio/dragonball_main.png',
    brightness: 0.9,
    url: 'https://changheelee-portfolio.vercel.app/',
    hoverText: 'React, Three.js, React Three Fiber',
  }
];


// 유튜브 카드용 임의 데이터 (첫 3개)
const youtubeItems = [
  {
    id: 'y1',
    title: 'AI Chatbot Demo Video',
    videoId: 'XDd9U7Vrb-o',
    brightness: 0.9,
    url: 'https://youtu.be/XDd9U7Vrb-o?si=nubR1ak2P3atrbJA',
    hoverText: 'OpenAI API, Next.js, TypeScript, Tailwind CSS ',
  },
  {
    id: 'y2',
    title: 'AI Email + AI Invoice Demo Video',
    videoId: 'mrP1YH_3A6c',
    brightness: 0.9,
    url: 'https://youtu.be/mrP1YH_3A6c?si=6gtPNDVScDfcqQi1',
    hoverText: 'OpenAI API, Next.js, TypeScript, Tailwind CSS, Supabase'
  },
  {
    id: 'y3',
    title: 'Portfolio Demo Video',
    videoId: 'uBkNvM3t1oQ',
    brightness: 0.9,
    url: 'https://youtu.be/uBkNvM3t1oQ?si=2-vOJNioWzcznbl2',
    hoverText: 'React, Three.js, React Three Fiber',
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

  const itemAnim = {
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
          {/* NOTION RESUME 카드 */}
          <div className="max-w-md mx-auto mb-8">
            <div className="bg-white border border-gray-200 rounded-[10px] shadow flex flex-col items-center justify-center py-8">
              <button
                className="px-8 py-3 bg-[#f24949] text-white text-base font-bold rounded transition-transform hover:scale-105"
                onClick={() => window.open('https://changeable-alphabet-614.notion.site/CHANGHEE-LEE-Web-Development-Portfolio-1f7207977ade804d9874e4cb29f737c8', '_blank')}
              >
                VIEW NOTION RESUME
              </button>
            </div>
          </div>
          <div className="text-lg md:text-2xl font-bold text-gray-800 uppercase tracking-widest max-w-2xl mx-auto flex items-center justify-center mb-0">
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
        animate={inView ? 'show' : 'hidden'}
      >
        {/* 유튜브 카드 3개 */}
        {youtubeItems.map((yt, idx) => (
          <motion.div
            key={yt.id}
            className="relative group overflow-hidden border border-gray-200 m-2 rounded-[10px] cursor-pointer flex flex-col"
            style={{height: '320px'}}
            variants={itemAnim}
            onMouseEnter={() => setHoveredId(yt.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => handleProjectClick(yt.url)}
            data-hoverable="true"
          >
            <div className="relative w-full bg-black rounded-t-[10px] flex items-center justify-center" style={{height: '280px'}}>
              <div className="relative w-full h-full">
                <Image
                  src={`https://img.youtube.com/vi/${yt.videoId}/maxresdefault.jpg`}
                  alt={yt.title}
                  fill
                  className="object-cover transition-all duration-300 rounded-[10px]"
                  style={{
                    filter: hoveredId === yt.id
                      ? 'grayscale(100%) brightness(1)'
                      : `grayscale(100%) brightness(${yt.brightness})`
                  }}
                />
                <div className="absolute inset-0 bg-black rounded-[10px]" style={{ opacity: hoveredId === yt.id ? 0.8 : 0.5, transition: 'opacity 0.3s' }}></div>
                {hoveredId === yt.id && (
                  <div className="absolute inset-0 bg-[#ff0000] opacity-50 transition-opacity duration-300 z-10 rounded-[10px]"></div>
                )}
                {hoveredId === yt.id && (
                  <div className="absolute inset-0 flex flex-col items-center z-20">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-24 h-24">
                      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                        <rect x="8" y="16" width="48" height="32" rx="16" fill="#FF0000"/>
                        <polygon points="28,22 44,32 28,42" fill="white"/>
                      </svg>
                    </div>
                    <div className="absolute bottom-10 text-center w-full">
                      <h3 className="text-white text-xl font-bold">{yt.hoverText}</h3>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="h-10 flex items-center justify-center bg-gray-50 text-gray-700 text-base font-semibold border-t border-gray-200 rounded-b-[10px]">
              {yt.title}
            </div>
          </motion.div>
        ))}
        {/* DIVE INTO THE DETAILS 텍스트 */}
        <div className="col-span-full w-full text-center mt-8 text-lg md:text-2xl font-bold text-gray-800 uppercase tracking-widest max-w-2xl mx-auto flex items-center justify-center">
          <div className="w-10 h-px bg-gray-400 mr-4"></div>
          DIVE INTO THE DETAILS
          <div className="w-10 h-px bg-gray-400 ml-4"></div>
        </div>
        {/* 일반 카드 9개 */}
        {portfolioItems.map((item) => (
          <motion.div
            key={item.id}
            className="relative group overflow-hidden border border-gray-200 m-2 rounded-[10px] cursor-pointer flex flex-col"
            style={{height: '320px'}}
            variants={itemAnim}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => handleProjectClick(item.url)}
            data-hoverable="true"
          >
            <div className="relative w-full bg-black rounded-t-[10px] flex items-center justify-center" style={{height: '280px'}}>
              <motion.div
                className="h-full w-full rounded-[10px] overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 0.8, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-all duration-300"
                  style={{
                    filter: hoveredId === item.id
                      ? 'grayscale(100%) brightness(1)'
                      : `grayscale(100%) brightness(${item.brightness})`
                  }}
                />
                {hoveredId === item.id && (
                  <div className="absolute inset-0 bg-[#ff0000] opacity-50 transition-opacity duration-300 z-10"></div>
                )}
                {hoveredId === item.id && (
                  <div className="absolute inset-0 flex flex-col items-center z-20">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="px-6 py-3 bg-[#FF0000] text-white text-sm font-medium tracking-wider rounded transition-transform hover:scale-105">
                        LIVE PREVIEW
                      </div>
                    </div>
                    <div className="absolute bottom-10 text-center w-full">
                      <h3 className="text-white text-xl font-bold">{item.hoverText}</h3>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
            <div className="h-10 flex items-center justify-center bg-gray-50 text-gray-700 text-base font-semibold border-t border-gray-200 rounded-b-[10px]">
              {item.title}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
} 