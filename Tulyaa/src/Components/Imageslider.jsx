import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  '/images/Discountdeal.png',
  '/images/HowtogetDiscount.png',
  '/images/stores.png'
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    transition: { duration: 0.4, ease: 'easeIn' }
  })
};

const ImageSlider = () => {
  const [[current, direction], setCurrent] = useState([0, 0]);

  const paginate = (newDirection) => {
    setCurrent(([prev]) => [
      (prev + newDirection + images.length) % images.length,
      newDirection
    ]);
  };

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-[600px] max-w-5xl h-[400px] mx-auto overflow-hidden rounded-3xl shadow-xl bg-gradient-to-r from-[#effcfb] to-[#d6f5f2] border border-[#e2f7f6]">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={current}
          src={images[current]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute w-full h-full object-cover rounded-3xl"
        />
      </AnimatePresence>

      {/* Left Control */}
      <button
        onClick={() => paginate(-1)}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white text-[#07484A] hover:shadow-lg transition p-3 rounded-full backdrop-blur-md"
      >
        <ChevronLeft size={26} />
      </button>

      {/* Right Control */}
      <button
        onClick={() => paginate(1)}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white text-[#07484A] hover:shadow-lg transition p-3 rounded-full backdrop-blur-md"
      >
        <ChevronRight size={26} />
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${index === current ? 'bg-[#07484A]' : 'bg-gray-300'} transition`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
