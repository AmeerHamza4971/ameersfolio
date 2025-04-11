import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

// Import profile image
import profileImage from '../assets/images/circlewhole.png';

// Import other images
import codeImage from '../assets/images/code.jpg';
import techmindImage from '../assets/images/techmind.jpg';
import oldtechImage from '../assets/images/oldtech.jpg';
import laptop2Image from '../assets/images/laptop2.jpg';
import fingureImage from '../assets/images/fingure.jpg';
import handleImage from '../assets/images/handle.jpg';

export default function Home() {
  // Use the imported images
  const skillImages = {
    frontend: codeImage.src,
    backend: techmindImage.src,
    database: oldtechImage.src
  };
  
  const projectImages = [
    laptop2Image.src, 
    fingureImage.src, 
    handleImage.src
  ];

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      <Navbar />
      <Hero profileImage={profileImage.src} />
      <About />
      <Skills skillImages={skillImages} />
      <Projects projectImages={projectImages} />
      <Contact />
      <Footer />
    </div>
  );
}
