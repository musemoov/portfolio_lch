'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Send } from 'lucide-react';

export default function Contact() {
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
      setFormError('모든 필수 항목을 입력해주세요.');
      setIsSubmitting(false);
      return;
    }
    
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormError('유효한 이메일 주소를 입력해주세요.');
      setIsSubmitting(false);
      return;
    }
    
    try {
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Success case
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setFormError('메시지 전송에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            CONTACT ME
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            궁금한 점이 있으시거나 프로젝트에 대해 논의하고 싶으시다면 언제든지 연락해 주세요.
          </motion.p>
        </div>
        
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
              <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
              <p className="text-gray-600">
                Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. KST, Monday through Friday.
              </p>
            </motion.div>
            
            <div className="space-y-8 mt-12">
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="mr-6 bg-gray-100 p-3 rounded-full">
                  <Phone size={24} className="text-[#c84545]" />
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Call me</p>
                  <p className="text-xl font-bold">+1234 5678 9000</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="mr-6 bg-gray-100 p-3 rounded-full">
                  <Mail size={24} className="text-[#c84545]" />
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Email</p>
                  <p className="text-xl font-bold">hello@example.com</p>
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
                <h4 className="text-xl font-bold mb-2">감사합니다!</h4>
                <p>메시지가 성공적으로 전송되었습니다. 곧 연락드리겠습니다.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                    이름 <span className="text-[#c84545]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="홍길동"
                    className="w-full px-4 py-3 bg-gray-100 border-none focus:ring-1 focus:ring-gray-400 focus:outline-none rounded-sm"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                    이메일 <span className="text-[#c84545]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    className="w-full px-4 py-3 bg-gray-100 border-none focus:ring-1 focus:ring-gray-400 focus:outline-none rounded-sm"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
                    전화번호
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="010-1234-5678"
                    className="w-full px-4 py-3 bg-gray-100 border-none focus:ring-1 focus:ring-gray-400 focus:outline-none rounded-sm"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                    메시지 <span className="text-[#c84545]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="문의 내용을 입력해 주세요"
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-100 border-none focus:ring-1 focus:ring-gray-400 focus:outline-none resize-none rounded-sm"
                    required
                  ></textarea>
                </div>
                
                {formError && (
                  <div className="text-[#c84545]">
                    {formError}
                  </div>
                )}
                
                <button
                  type="submit"
                  className="px-8 py-4 bg-black text-white hover:bg-gray-800 transition-colors inline-flex items-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? '제출 중...' : '메시지 보내기'}
                  <Send size={18} className="ml-2" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 