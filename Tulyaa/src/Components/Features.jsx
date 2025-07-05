import React, { useRef } from 'react';
import { ShieldCheck, ChartArea, RefreshCw, Heart } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Features = () => {
  const scrollRef = useRef(null);

  // For horizontal motion
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-60%']);

  // Base features list
  const baseFeatures = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-white" />,
      title: 'Best Price Guarantee',
      description: 'We ensure you get the best deals across Nepal with our price comparison technology.'
    },
    {
      icon: <ChartArea className="w-8 h-8 text-white" />,
      title: 'Price Comparison',
      description: 'Quick and reliable price comparison for best price.'
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-white" />,
      title: 'Time Saving',
      description: 'Saves hours and hours of time spent scrolling on web.'
    },
    {
      icon: <Heart className="w-9 h-8 text-white" />,
      title: 'Affinity with Costumers',
      description: 'Dedicated support team to help you with all your shopping needs.'
    }
  ];

  // Repeat the baseFeatures to create a longer scrollable list
  const features = [...baseFeatures, ...baseFeatures, ...baseFeatures];

  return (
    <section
      className="py-20 bg-gradient-to-br from-[#e1f4f3] to-white overflow-hidden"
      ref={scrollRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#07484A] mb-4 font-display">
            Why Choose Tulyaa?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to providing you with the best shopping experience in Nepal.
          </p>
        </div>

        {/* Horizontally scrolling cards */}
        <motion.div className="flex gap-6" style={{ x }}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="min-w-[270px] max-w-[300px] bg-gradient-to-tr from-[#07484A] to-[#156f6f] text-white p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: (index % 4) * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-sm text-white/90 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
