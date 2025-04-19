'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play } from 'lucide-react';

// Sample portfolio items
const portfolioItems = [
  {
    id: 1,
    title: 'Marketing Company with AI Chatbot',
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
    title: 'Chat with AI Chatbot',
    category: 'Youtube',
    image: '/images/portfolio/chat_with_ai_main.png',
    brightness: 1,
    url: 'https://ai-chat-bot-mu-rosy.vercel.app/',
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
    title: 'Tic Tac Toe Game',
    category: 'Game',
    image: '/images/portfolio/tictactoe_main.png',
    brightness: 0.3,
    url: 'https://tic-tac-toe-ivory-kappa.vercel.app/',
  }
];

const categories = ['all', 'web', 'mobile', 'branding', 'photography', 'marketing'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredId, setHoveredId] = useState<number | null>(null);
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
      <div className="container mx-auto px-6 mb-16">
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-bold tracking-wide mb-4">PORTFOLIO</h2>
          <div className="text-sm text-gray-600 font-medium uppercase tracking-widest max-w-2xl mx-auto flex items-center justify-center">
            <div className="w-10 h-px bg-gray-400 mr-4"></div>
            Dive Into the Details
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
          <motion.div 
            key={project.id} 
            className="relative group overflow-hidden border border-gray-200 m-2 rounded-[10px] cursor-pointer"
            variants={item}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => handleProjectClick(project.url)}
            data-hoverable="true"
          >
            <div className="relative h-80 w-full bg-black rounded-[10px]">
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
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
} 