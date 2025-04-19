'use client';

import { useState } from 'react';
import { motion } from "framer-motion";
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function Benefits() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // Benefits 섹션 컨텐츠
  const benefits = [
    {
      title: "Expertly Crafted Design",
      description: "I deliver interfaces that are intuitive, aesthetic, and conversion-driven.",
      icon: <CheckCircle2 size={24} />,
      image: "/images/BENEFITS/expert_design.jpg", // 샘플 이미지 경로
      category: "SINGLE IMAGE"
    },
    {
      title: "Modern Tech Stack Mastery",
      description: "Built with the latest frameworks and best practices, your website runs smoothly, securely, and ready to scale.",
      icon: <CheckCircle2 size={24} />,
      image: "/images/portfolio/technology.jpg", // 샘플 이미지 경로
      category: "YOUTUBE VIDEO"
    },
    {
      title: "Responsive & Reliable Communication",
      description: "Expect fast replies, clear timelines, and zero guesswork. I treat your project like it's my own.",
      icon: <CheckCircle2 size={24} />,
      image: "/images/portfolio/support.jpg", // 샘플 이미지 경로
      category: "VIMEO VIDEO"
    },
    {
      title: "Strategy-Driven Solutions",
      description: "Every line of code serves a purpose. I align every decision with your business goals.",
      icon: <CheckCircle2 size={24} />,
      image: "/images/portfolio/strategy.jpg", // 샘플 이미지 경로
      category: "KEN BURNS SLIDESHOW"
    },
    {
      title: "Flawless Integration",
      description: "Whether it's APIs, CMS, or analytics — I ensure everything works together seamlessly and intelligently.",
      icon: <CheckCircle2 size={24} />,
      image: "/images/portfolio/integration.jpg", // 샘플 이미지 경로
      category: "HERO SLIDESHOW - ZOOM/FADE"
    },
    {
      title: "Fully Responsive, Always Optimized",
      description: "From mobile to desktop, your site will look pixel-perfect and load fast — everywhere.",
      icon: <CheckCircle2 size={24} />,
      image: "/images/portfolio/responsive.jpg", // 샘플 이미지 경로
      category: "SELF-HOSTED HTML5 VIDEO"
    },
  ];

  return (
    <section 
      id="benefits" 
      className="min-h-screen py-16 pb-24 relative bg-fixed bg-cover bg-center" 
      style={{ backgroundImage: "url('/images/BENEFITS/backgroundImg.png')" }}
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10 h-full flex flex-col">
        <div className="text-center mb-16 pt-8">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Choose Me
          </motion.h2>
          <motion.p 
            className="text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            More than just a developer — I'm your creative partner.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-grow">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              data-hoverable="true"
            >
              {/* 흰색 카드 */}
              <div className="bg-white h-full p-8 shadow-sm rounded-sm">
                {/* 아이콘 */}
                <div className="text-black mb-4">
                  {benefit.icon}
                </div>
                
                {/* 제목 */}
                <h3 className="text-xl font-bold mb-3 text-black">{benefit.title}</h3>
                
                {/* 설명 */}
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-14 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-white mb-8">
          Great things start with a conversation. Shall we begin?
          </p>
          <a 
            href="#contact" 
            className="inline-block px-8 py-4 bg-white text-black hover:bg-gray-200 transition-colors"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  );
} 