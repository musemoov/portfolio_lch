'use client';

import { useState, ChangeEvent, FormEvent, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError('');
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormError('please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }
    
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormError('please enter a valid email address.');
      setIsSubmitting(false);
      return;
    }
    
    try {
      if (formRef.current) {
        // FormSubmit 서비스를 통한 제출
        formRef.current.action = "https://formsubmit.co/musemoov@gmail.com";
        formRef.current.method = "POST";
        
        // 폼 직접 제출
        formRef.current.submit();
        
        // 제출 성공 처리
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormError('message send failed. please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
        >
          <motion.h2 
            className="text-4xl text-gray-900 md:text-5xl font-bold mb-6"
          >
            CONTACT ME
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1 }}
            transition={{ 
              delay: 0.2,
              duration: 0.6
            }}
          >
            Got a question or a project in mind?
            Feel free to reach out anytime — I&apos;d love to hear from you.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* 왼쪽 연락처 정보 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl text-gray-900 font-bold mb-4">Let's Connect</h3>
              <motion.p
                className="text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Please fill out the form on this section to contact with me.
              </motion.p>
            </motion.div>
            
            <div className="space-y-8 mt-0">
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="mr-6 bg-gray-100 p-3 rounded-full">
                  <Mail size={24} className="text-[#c84545]" />
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Email</p>
                  <p className="text-xl font-bold">musemoov@gmail.com</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* 오른쪽 폼 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 shadow-sm border border-gray-100 rounded-sm"
          >
            {isSubmitted ? (
              <motion.div 
                className="bg-green-50 text-green-800 p-6 border border-green-200 rounded-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <h4 className="text-xl font-bold mb-2">Thank you!</h4>
                <><span>Your message has been sent successfully. </span><span>I will contact you soon.</span></>
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* FormSubmit에 필요한 숨겨진 필드들 */}
                <input type="hidden" name="_subject" value={`new message from ${formData.name}`} />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://portfolio-lch.vercel.app/" />
                <input type="hidden" name="_template" value="table" />
                
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                    Name <span className="text-[#c84545]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full text-gray-700 px-4 py-3 bg-gray-100 border-none focus:ring-1 focus:ring-gray-400 focus:outline-none rounded-sm"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                    Email <span className="text-[#c84545]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full text-gray-700 px-4 py-3 bg-gray-100 border-none focus:ring-1 focus:ring-gray-400 focus:outline-none rounded-sm"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone Number"
                    className="w-full text-gray-700 px-4 py-3 bg-gray-100 border-none focus:ring-1 focus:ring-gray-400 focus:outline-none rounded-sm"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                    Message <span className="text-[#c84545]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    rows={6}
                    className="w-full text-gray-700 px-4 py-3 bg-gray-100 border-none focus:ring-1 focus:ring-gray-400 focus:outline-none resize-none rounded-sm"
                    required
                  ></textarea>
                </div>
                
                {formError && (
                  <div className="text-[#c84545]">
                    {formError}
                  </div>
                )}
                
                <div className="relative">
                  {/* 호버 시 나타나는 분홍색 원 */}
                  <div className="absolute -right-20 -top-20 w-64 h-64 bg-pink-200 rounded-full opacity-0 group-hover:opacity-70 transition-opacity duration-300 pointer-events-none"></div>
                  
                  <motion.button
                    type="submit"
                    className="relative px-8 py-4 bg-black text-white border border-transparent hover:bg-white hover:text-black hover:border-black transition-all inline-flex items-center cursor-pointer group z-10"
                    disabled={isSubmitting}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <motion.span>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </motion.span>
                    
                    {/* 기본 화살표 아이콘 */}
                    <motion.div 
                      className="ml-2 group-hover:opacity-0 transition-opacity"
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Send size={18} />
                    </motion.div>
                    
                    {/* 호버 시 나타나는 종이비행기 아이콘 */}
                    <motion.div 
                      className="absolute right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ rotate: -45 }}
                      whileHover={{ rotate: 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 2L11 13" />
                        <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                      </svg>
                    </motion.div>
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 