import React from 'react';
import { motion } from 'framer-motion';
import ImageSlider from './Imageslider';

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="bg-[linear-gradient(to_bottom,_#d6d3d1_0%,_#e7e5e4_35%,_#f5f5f4_70%,_#ffffff_100%)]
                 min-h-screen flex flex-wrap items-center justify-around 
                 px-4 sm:px-6 lg:px-8 py-10 overflow-hidden"
    >
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="w-full md:w-1/2 text-center md:text-left mt-16 md:mt-0 lg:ml-0"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-[#07484A] leading-tight font-display">
          Never Overpay in <br className="hidden sm:block" /> Nepal Again
        </h1>

        <p className="mt-2 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-[#2e7579] font-semibold">
          " एक्चोटी खोज्, सबैभन्दा राम्रो रोज। "
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="mt-4 sm:mt-6 md:mt-8 w-full sm:w-auto bg-[#07484B] hover:bg-[#0a5c5e] 
                     text-white font-semibold my-5 py-3 sm:py-4 px-5 sm:px-6 md:px-8 rounded-lg 
                     transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base md:text-lg"
        >
          <a href="#search">Shop Now</a>
        </motion.button>
      </motion.div>

      {/* Right Content - Image Slider */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <ImageSlider />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
