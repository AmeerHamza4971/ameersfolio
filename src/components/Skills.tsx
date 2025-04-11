"use client"

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SkillsProps {
  skillImages: {
    frontend: string;
    backend: string;
    database: string;
  };
}

const Skills = ({ skillImages }: SkillsProps) => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Checkmark icon component to avoid repetition
  const CheckIcon = ({ className }: { className: string }) => (
    <svg className={`w-5 h-5 ${className} mr-2`} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
    </svg>
  );

  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 inline-block relative mb-4">
            My Expertise
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Specialized technologies I use to build powerful digital solutions
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Frontend Development Card */}
          <motion.div 
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            variants={itemVariants}
            whileHover={{ y: -8 }}
          >
            <div className="h-3 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
            <div className="p-6">
              {/* Increased image size from 120px to 160px */}
              <div className="relative h-[160px] w-[160px] mx-auto mb-6 bg-indigo-50 rounded-full p-4">
                <Image 
                  src={skillImages.frontend} 
                  alt="Frontend Development" 
                  fill
                  className="object-contain p-4"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-indigo-700 text-center">Frontend Development</h3>
              <p className="text-gray-600 mb-6 text-center">
                Creating responsive and interactive user interfaces with modern frameworks and libraries.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckIcon className="text-indigo-600" />
                  <span className="text-gray-700">React & Next.js</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="text-indigo-600" />
                  <span className="text-gray-700">TypeScript</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="text-indigo-600" />
                  <span className="text-gray-700">Tailwind CSS</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="text-indigo-600" />
                  <span className="text-gray-700">Responsive Design</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Backend Development Card */}
          <motion.div 
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            variants={itemVariants}
            whileHover={{ y: -8 }}
          >
            <div className="h-3 bg-gradient-to-r from-green-500 to-emerald-600"></div>
            <div className="p-6">
              {/* Increased image size from 120px to 160px */}
              <div className="relative h-[160px] w-[160px] mx-auto mb-6 bg-green-50 rounded-full p-4">
                <Image 
                  src={skillImages.backend} 
                  alt="Backend Development" 
                  fill
                  className="object-contain p-4"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-700 text-center">Backend Development</h3>
              <p className="text-gray-600 mb-6 text-center">
                Building robust server-side applications and APIs to power web applications.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckIcon className="text-emerald-600" />
                  <span className="text-gray-700">.NET Core & .NET</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="text-emerald-600" />
                  <span className="text-gray-700">Node.js</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="text-emerald-600" />
                  <span className="text-gray-700">REST APIs</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="text-emerald-600" />
                  <span className="text-gray-700">Azure Functions</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Database Management Card */}
          <motion.div 
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            variants={itemVariants}
            whileHover={{ y: -8 }}
          >
            <div className="h-3 bg-gradient-to-r from-amber-500 to-orange-600"></div>
            <div className="p-6">
              {/* Increased image size from 120px to 160px */}
              <div className="relative h-[160px] w-[160px] mx-auto mb-6 bg-amber-50 rounded-full p-4">
                <Image 
                  src={skillImages.database} 
                  alt="Database Management" 
                  fill
                  className="object-contain p-4"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-amber-700 text-center">Database Management</h3>
              <p className="text-gray-600 mb-6 text-center">
                Designing and optimizing database structures for efficient data storage and retrieval.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckIcon className="text-amber-600" />
                  <span className="text-gray-700">SQL Server</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="text-amber-600" />
                  <span className="text-gray-700">MongoDB</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="text-amber-600" />
                  <span className="text-gray-700">Data Modeling</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="text-amber-600" />
                  <span className="text-gray-700">Query Optimization</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
