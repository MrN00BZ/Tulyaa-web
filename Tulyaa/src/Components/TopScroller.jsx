import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const products = [
  {
    name: "iPhone 15 Pro",
    price: "Rs. 1,80,000",
    image: "/images/iphone15.jpg",
  },
  {
    name: "Gaming Headset",
    price: "Rs. 8,499",
    image: "/images/headphones.jpg",
  },
  {
    name: "Dell XPS 13",
    price: "Rs. 2,25,000",
    image: "/images/dellxps.jpg",
  },
  {
    name: "Smart Watch",
    price: "Rs. 15,000",
    image: "/images/smartwatch.jpg",
  },
  {
    name: "Air Purifier",
    price: "Rs. 25,000",
    image: "/images/Airfilter.jpg",
  },
];

const TopScroller = () => {
  const controls = useAnimation();
  const productList = [...products, ...products]; // duplicated for infinite effect

  useEffect(() => {
    controls.start({
      x: ['0%', '-50%'],
      transition: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 20,
        ease: 'linear',
      },
    });
  }, [controls]);

  return (
    <section className="relative w-full bg-gradient-to-b from-[#effcfb] via-[#d6f5f2] to-white py-12">
      <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#07484A] mb-8 text-center font-display">
          Top Products
        </h2>

        <div className="relative overflow-hidden p-5" style={{
    WebkitMaskImage:
      "linear-gradient(90deg, transparent, #d6f5f2 15%, #effcfb 30%, #effcfb 70%, #d6f5f2 85%, transparent)",
    maskImage:
      "linear-gradient(90deg, transparent, #d6f5f2 15%, #effcfb 30%, #effcfb 70%, #d6f5f2 85%, transparent)",
  }}>
          {/* Left Green Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none" />

          {/* Right Green Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none" />

          {/* Scrolling Products */}
          <motion.div
            className="flex gap-8 w-max"
            animate={controls}
          >
            {productList.map((product, index) => (
              <div
                key={index}
                className="min-w-[220px] sm:min-w-[260px] bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 group hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 sm:h-48 object-contain"
                />
                <div className="p-4">
                  <h3 className="text-[#07484A] font-semibold text-base">{product.name}</h3>
                  <p className="text-gray-500 text-sm mt-1">{product.price}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TopScroller;
