'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'HOME', path: '/#hero' },
  { name: 'ABOUT', path: '/#about' },
  { name: 'PORTFOLIO', path: '/#portfolio' },
  { name: 'BENEFITS', path: '/#benefits' },
  { name: 'CONTACT', path: '/#contact' },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // 현재 활성 섹션 감지
      const sections = ['hero', 'about', 'portfolio', 'benefits', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className={`max-w-7xl mx-auto px-6 flex items-end justify-between transition-all duration-300 ${
        isScrolled ? 'h-[60px] pb-2' : 'h-[120px] pb-8'
      }`}>
        {/* Logo */}
        <a 
          href="#hero" 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
          className={`relative flex mt-auto transition-all duration-300 ${
            isScrolled ? 'w-[200px] h-[70px] pt-0 -mb-2' : 'w-[250px] h-[100px] pt-7 mb-0'
          }`}
        >
          <div className="relative w-full h-full">
            <Image 
              src={isScrolled ? "/images/logo/logo_black_new.png?v=3" : "/images/logo/logo_white_new.png?v=3"}
              alt="Company Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className={`hidden md:flex items-center space-x-6 mr-10 transition-all duration-300 ${
          isScrolled ? 'mb-1' : 'mb-2'
        }`}>
          {navItems.map((item) => {
            const sectionId = item.path.replace('/#', '');
            return (
              <a 
                key={item.path} 
                href={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(sectionId);
                }}
                className={`relative group pb-1 transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-gray-800' 
                    : 'text-white'
                } ${
                  activeSection === sectionId ? 'font-semibold' : ''
                }`}
              >
                {item.name}
                <span className={`absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-gray-800' : 'bg-white'
                }`}></span>
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button className={`md:hidden transition-colors duration-300 ${
          isScrolled ? 'text-gray-800 mb-1' : 'text-white mb-2'
        }`} onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className={`md:hidden absolute left-0 w-full transition-all duration-300 ${
          isScrolled ? 'bg-white bg-opacity-95 top-[60px]' : 'bg-black bg-opacity-95 top-[160px]'
        }`}>
          <div className="px-6 py-4 flex flex-col space-y-4">
            {navItems.map((item) => {
              const sectionId = item.path.replace('/#', '');
              return (
                <a 
                  key={item.path} 
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(sectionId);
                  }}
                  className={`relative group transition-colors duration-300 ${
                    isScrolled 
                      ? 'text-gray-800' 
                      : 'text-white'
                  } ${
                    activeSection === sectionId ? 'font-semibold' : ''
                  }`}
                >
                  {item.name}
                  <span className={`absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                    isScrolled ? 'bg-gray-800' : 'bg-white'
                  }`}></span>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
} 
 