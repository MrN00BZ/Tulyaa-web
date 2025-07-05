import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const CustomerReviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      name: 'Rajesh Sharma',
      location: 'Kathmandu',
      rating: 5,
      comment: 'Tulyaa helped me save Rs. 15,000 on my laptop purchase! I found the same model at three different stores and chose the best deal. Highly recommended!',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      product: 'Dell Laptop'
    },
    {
      id: 2,
      name: 'Priya Thapa',
      location: 'Pokhara',
      rating: 5,
      comment: 'Amazing platform! I was looking for a smartphone and Tulyaa showed me all the available options with prices. Saved both time and money.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      product: 'iPhone 15'
    },
    {
      id: 3,
      name: 'Bikash Gurung',
      location: 'Lalitpur',
      rating: 4,
      comment: 'Great service! The price comparison feature is very helpful. I found the best deal for my gaming headphones within minutes.',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      product: 'Gaming Headphones'
    },
    {
      id: 4,
      name: 'Sunita Rai',
      location: 'Chitwan',
      rating: 5,
      comment: 'Tulyaa is a game-changer for online shopping in Nepal. The interface is user-friendly and the deals are genuine. Love it!',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150',
      product: 'Kitchen Appliances'
    },
    {
      id: 5,
      name: 'Arjun Magar',
      location: 'Biratnagar',
      rating: 5,
      comment: 'Excellent platform for price comparison. I saved a lot of money on my furniture purchase. The customer service is also very responsive.',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
      product: 'Furniture Set'
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToReview = (index) => {
    setCurrentReview(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextReview();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={20}
        className={i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#07484A] mb-4 font-display" id='CostumerReviews'>
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real experiences from real customers who saved money with Tulyaa
          </p>
        </div>

        <div className="relative">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Quote size={40} className="text-[#07484A] opacity-50" />
            </div>

            <div className="text-center mb-8">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
                "{reviews[currentReview].comment}"
              </p>

              <div className="flex justify-center mb-4">
                {renderStars(reviews[currentReview].rating)}
              </div>

              <div className="flex items-center justify-center space-x-4">
                <img
                  src={reviews[currentReview].avatar}
                  alt={reviews[currentReview].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900 text-lg">
                    {reviews[currentReview].name}
                  </h4>
                  <p className="text-gray-600">{reviews[currentReview].location}</p>
                  <p className="text-sm text-[#07484A] font-medium">
                    Purchased: {reviews[currentReview].product}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={prevReview}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-600 hover:text-[#07484A] p-3 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextReview}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-600 hover:text-[#07484A] p-3 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="mt-8">
          <div className="flex justify-center items-center space-x-2 mb-4">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToReview(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentReview
                    ? 'bg-[#07484A] scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <div className="max-w-md mx-auto">
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div
                className="bg-[#07484A] h-1 rounded-full transition-all duration-300"
                style={{ width: `${((currentReview + 1) / reviews.length) * 100}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>1</span>
              <span>{reviews.length}</span>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <div className="inline-flex items-center space-x-2 text-sm text-gray-500">
            <div className="w-2 h-2 bg-[#07484A] rounded-full animate-pulse"></div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
