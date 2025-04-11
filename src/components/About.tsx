"use client"

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const skillVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 inline-block relative mb-4">
            About Me
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Here you'll find more information about me, my professional journey, and my technical expertise
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* About Me Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center space-x-3 mb-2">
              <div className="h-8 w-1 bg-indigo-600 rounded-full"></div>
              <h3 className="text-2xl font-bold text-indigo-700">Get to know me!</h3>
            </div>
            
            <motion.div 
              className="space-y-5 text-gray-600 text-lg leading-relaxed"
              variants={itemVariants}
            >
              <p className="relative pl-4 border-l-2 border-indigo-100">
                I'm a <span className="font-semibold text-indigo-800">Full Stack Web Developer</span> with expertise in building robust and scalable web applications. I focus on creating solutions that deliver exceptional user experiences while maintaining clean, efficient code.
              </p>
              
              <p className="relative pl-4 border-l-2 border-indigo-100">
                I enjoy sharing my knowledge and insights with the developer community through articles, tutorials, and open-source contributions. I believe in continuous learning and staying updated with the latest industry trends.
              </p>
              
              <p className="relative pl-4 border-l-2 border-indigo-100">
                I'm passionate about collaborating on challenging projects where I can leverage my skills to create impactful solutions. If you're looking for a developer who combines technical expertise with a creative approach to problem-solving, I'd love to connect.
              </p>
            </motion.div>
            
            <motion.div 
              className="pt-4"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <a 
                href="#contact" 
                className="inline-flex items-center px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 font-medium group"
              >
                Contact Me
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
          
          {/* Skills Section */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-8 w-1 bg-indigo-600 rounded-full"></div>
              <h3 className="text-2xl font-bold text-indigo-700">My Skills</h3>
            </div>
            
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 gap-4"
              variants={containerVariants}
            >
              {[
                {skill: '.Net Core', color: 'bg-blue-50 border-blue-200 text-blue-700'},
                {skill: 'WebForm', color: 'bg-indigo-50 border-indigo-200 text-indigo-700'},
                {skill: 'Blazor', color: 'bg-purple-50 border-purple-200 text-purple-700'},
                {skill: '.Net Core MVC', color: 'bg-blue-50 border-blue-200 text-blue-700'},
                {skill: 'Azure Functions', color: 'bg-cyan-50 border-cyan-200 text-cyan-700'},
                {skill: 'Rest APIs', color: 'bg-green-50 border-green-200 text-green-700'},
                {skill: 'Node.js', color: 'bg-green-50 border-green-200 text-green-700'},
                {skill: 'SQL', color: 'bg-orange-50 border-orange-200 text-orange-700'},
                {skill: 'MongoDB', color: 'bg-green-50 border-green-200 text-green-700'},
                {skill: 'CI/CD Piplelines', color: 'bg-pink-50 border-pink-200 text-pink-700'},
                {skill: 'Next.js', color: 'bg-gray-50 border-gray-200 text-gray-700'},
                {skill: 'Tailwind CSS', color: 'bg-cyan-50 border-cyan-200 text-cyan-700'}
              ].map((item, index) => (
                <motion.div 
                  key={item.skill} 
                  className={`${item.color} py-3 px-4 rounded-lg text-center border transition-all duration-300 hover:shadow-md`}
                  variants={skillVariants}
                  whileHover={{ y: -5, scale: 1.05 }}
                  custom={index}
                >
                  <span className="font-medium">{item.skill}</span>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Experience Indicators */}
            <motion.div 
              className="mt-8 flex flex-col space-y-4"
              variants={itemVariants}
            >
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">5+ Years Professional Experience</h4>
                    <p className="text-sm text-gray-500">Working with enterprise-level applications</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Problem Solver</h4>
                    <p className="text-sm text-gray-500">Analytical approach to complex challenges</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
