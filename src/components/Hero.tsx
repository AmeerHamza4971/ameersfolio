"use client"

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // You'll need to install framer-motion

interface HeroProps {
  profileImage: string;
}

const Hero = ({ profileImage }: HeroProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section 
      id="home" 
      className="pt-24 md:pt-0 min-h-screen flex items-center overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #f5f7fa 0%, #d8cbe8 100%)',
      }}
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left content */}
          <motion.div 
            className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative inline-block mb-3">
              <span className="text-lg text-indigo-700 font-medium relative z-10">Hello, I'm</span>
              <div className="absolute -bottom-1 left-0 w-full h-3 bg-yellow-200 opacity-60 -rotate-1"></div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-indigo-700 to-purple-600 bg-clip-text text-transparent">
              Ameer Hamza
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-6 font-light">
              <span className="relative">
                Full Stack Developer
                <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 200 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 3C50 0.5 150 0.5 200 3" stroke="#8B5CF6" strokeWidth="5" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>
            
            <p className="text-gray-600 mb-8 max-w-md mx-auto md:mx-0 leading-relaxed text-lg">
              I craft elegant, high-performing digital experiences with modern technologies and a focus on user experience.
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-5">
              <motion.a 
                href="#projects" 
                className="px-8 py-3.5 bg-indigo-700 text-white rounded-lg hover:bg-indigo-800 transition-all shadow-lg hover:shadow-indigo-200 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                View My Work
              </motion.a>
              <motion.a 
                href="#contact" 
                className="px-8 py-3.5 border-2 border-indigo-700 text-indigo-700 rounded-lg hover:bg-indigo-50 transition-all font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Me
              </motion.a>
            </div>
            
            <div className="mt-12 flex space-x-6 justify-center md:justify-start">
              {/* Social media icons with improved hover effects */}
              <motion.a 
                href="#" 
                className="text-gray-600 hover:text-indigo-700 transition-colors"
                whileHover={{ y: -5, scale: 1.1 }}
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-600 hover:text-indigo-700 transition-colors"
                whileHover={{ y: -5, scale: 1.1 }}
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-600 hover:text-indigo-700 transition-colors"
                whileHover={{ y: -5, scale: 1.1 }}
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
          
          {/* Right content - Profile image */}
          <motion.div 
            className="md:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 50 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative h-[320px] w-[320px] md:h-[450px] md:w-[450px] mx-auto">
              {/* Background elements */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-300 to-purple-300 rounded-full transform rotate-6 opacity-80"></div>
              <div className="absolute inset-0 bg-gradient-to-bl from-indigo-400 to-purple-400 rounded-full transform -rotate-6 opacity-80"></div>
              
              {/* Profile image container */}
              <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white shadow-2xl bg-white">
                <Image 
                  src={profileImage} 
                  alt="Ameer Hamza" 
                  fill
                  className="object-cover"
                  priority
                  onLoadingComplete={() => setIsLoaded(true)}
                />
              </div>
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute -top-6 -right-6 h-20 w-20 bg-yellow-300 rounded-full opacity-70"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.7, 0.9, 0.7] 
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              ></motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 h-16 w-16 bg-indigo-500 rounded-full opacity-70"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.7, 0.9, 0.7] 
                }}
                transition={{ 
                  duration: 3,
                  delay: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              ></motion.div>
              
              {/* Tech stack card */}
              <motion.div 
                className="absolute -bottom-2 right-10 bg-white p-3 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="flex space-x-2">
                  <span className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm">R</span>
                  <span className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm">N</span>
                  <span className="h-8 w-8 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm">JS</span>
                  <span className="h-8 w-8 bg-blue-400 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm">TS</span>
                </div>
              </motion.div>
              
              {/* Experience badge */}
              <motion.div 
                className="absolute top-10 -left-5 bg-white py-1 px-3 rounded-full shadow-lg flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-xs font-semibold text-indigo-800">5+ Years Experience</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-indigo-100 rounded-full opacity-50 hidden md:block" style={{zIndex:'-1'}}></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-100 rounded-full opacity-50 hidden md:block"></div>
      </div>
    </section>
  );
};

export default Hero;