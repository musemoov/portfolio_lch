'use client';

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-5">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            ABOUT ME
          </motion.h2>
        </div>

        {/* My Skills Section */}
        <div className="py-2 mt-0">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="bg-white text-black p-10 rounded-lg">
                <motion.h4
                  className="text-2xl font-medium mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: false }}
                >
                  My Skills
                </motion.h4>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: false }}
                >
                  <h2 className="text-5xl font-bold mb-1">You imagine it</h2>
                  <h2 className="text-5xl font-bold mb-6">I bring it to life</h2>
                </motion.div>
                <motion.p
                  className="text-base"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: false }}
                >
                  I&apos;m a creative developer crafting modern, visually striking,<br/> and technically advanced digital experiences.
                  <br />My work is responsive, pixel-perfect, and purpose-driven.
                </motion.p>
              </div>
            </div>
            <div className="md:w-1/2 space-y-6 mt-14">
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
              >
                <div className="flex justify-between">
                  <span className="font-medium">AI API Integration</span>
                  <span className="font-medium">100%</span>
                </div>
                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-[#c84545] rounded-full"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: false }}
                  />
                </div>
              </motion.div>
              
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: false }}
              >
                <div className="flex justify-between">
                  <span className="font-medium">UI/UX Design</span>
                  <span className="font-medium">100%</span>
                </div>
                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-[#c84545] rounded-full"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: false }}
                  />
                </div>
              </motion.div>
              
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: false }}
              >
                <div className="flex justify-between">
                  <span className="font-medium">Web Development</span>
                  <span className="font-medium">100%</span>
                </div>
                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-[#c84545] rounded-full"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once: false }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 