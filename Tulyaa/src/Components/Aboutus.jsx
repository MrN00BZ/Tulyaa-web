import React from 'react';
import { motion } from 'framer-motion';

const Aboutus = () => {
  return (
    <section
      id="About"
      className="py-24 bg-gradient-to-b from-[#effcfb] via-[#d6f5f2] to-white"
    >
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Animated Title */}
        <motion.h2
          className="text-4xl font-bold text-[#07484A] mb-6 font-display"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          About Us
        </motion.h2>

        {/* Animated Text Paragraph */}
        <motion.p
          className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
        >
          Tulyaa is designed to make your shopping experience smarter and easier.
          We automatically scrape prices from trusted online stores across Nepal,
          compare them in real-time, and show you the best deal instantly.
          No more guesswork — just savings.
        </motion.p>

        {/* Optional Animated Button */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
        >
          <a
            href="#"
            className="inline-block bg-[#07484A] text-white px-6 py-2 rounded-md font-medium hover:bg-[#0b5e5d] transition"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Aboutus;
