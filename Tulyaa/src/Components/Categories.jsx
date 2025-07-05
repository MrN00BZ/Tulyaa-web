import React from 'react';
import { motion } from 'framer-motion';

const categoryCards = [
  { title: 'Mobile Phones', image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { title: 'Laptops', image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400' },
  { title: 'Headphones', image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { title: 'Clothing', image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { title: 'Shoes', image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { title: 'Accessories', image: 'https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { title: 'Kitchenwares', image: 'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { title: 'Furnitures', image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const Categories = () => {
  return (
    <section id='Category' className="py-24 bg-gradient-to-b from-[#effcfb] via-[#d6f5f2] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#07484A] font-display">
            Explore by Category
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {categoryCards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              className="bg-white rounded-2xl shadow-xl overflow-hidden relative group cursor-pointer hover:shadow-2xl transition"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-300 ease-in-out"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-transparent group-hover:bg-black/60 transition duration-300 ease-in-out">
                <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                  <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                  <button className="bg-white text-[#07484A] px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-90 transition">
                    Explore
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;
