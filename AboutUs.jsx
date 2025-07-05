import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Search, Target, DollarSign, TrendingUp, ShoppingCart } from 'lucide-react';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [counters, setCounters] = useState({ products: 0, stores: 0, customers: 0, savings: 0 });
  const fullText = "Smart Shopping for Nepal";
  const statsRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Typewriter effect
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, []);

  // Animated counter hook
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const targets = { products: 50000, stores: 500, customers: 100000, savings: 30 };
          const duration = 2000;
          const startTime = Date.now();

          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            setCounters({
              products: Math.floor(progress * targets.products),
              stores: Math.floor(progress * targets.stores),
              customers: Math.floor(progress * targets.customers),
              savings: Math.floor(progress * targets.savings)
            });

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Back Button */}
      <button
        onClick={handleGoBack}
        className="fixed top-4 left-4 z-50 group bg-white/90 backdrop-blur-sm hover:bg-white border border-gray-200/50 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
      >
        <ArrowLeft className="w-5 h-5 text-gray-700 group-hover:text-blue-600 transition-colors duration-200" />
      </button>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Us
            </h1>
            
            <div className="h-12 mb-8">
              <p className="text-xl md:text-2xl text-gray-700 font-medium">
                {typedText}
                <span className="animate-pulse text-blue-600">|</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Problem Statement */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl border border-gray-200/50 p-8 md:p-12 mb-12 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <TrendingUp className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">The Problem</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Shopping in Nepal is frustrating. Customers waste hours visiting different stores, comparing prices manually, 
              and often end up paying more than necessary. With limited transparency in pricing and scattered product 
              information, making smart purchasing decisions becomes a time-consuming challenge.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From Kathmandu to Pokhara, shoppers struggle with inconsistent pricing, lack of product reviews, 
              and difficulty finding the best deals across multiple retailers.
            </p>
          </div>

          {/* Solution */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl border border-gray-200/50 p-8 md:p-12 mb-12 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <ShoppingCart className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our Solution</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We've built Nepal's most comprehensive price comparison platform that aggregates products from hundreds 
              of trusted retailers across the country. Our intelligent system continuously monitors prices, tracks 
              availability, and provides real-time comparisons to help you make informed decisions.
            </p>
            
            {/* How it works */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <Search className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Search</h3>
                <p className="text-sm text-gray-600">Find any product across Nepal's top retailers</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Compare</h3>
                <p className="text-sm text-gray-600">View prices, reviews, and features side-by-side</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Save</h3>
                <p className="text-sm text-gray-600">Choose the best deal and save money</p>
              </div>
            </div>
          </div>

          {/* Impact Stats */}
          <div ref={statsRef} className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{counters.products.toLocaleString()}+</div>
                <div className="text-blue-100 text-sm">Products Compared</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{counters.stores}+</div>
                <div className="text-blue-100 text-sm">Partner Stores</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{counters.customers.toLocaleString()}+</div>
                <div className="text-blue-100 text-sm">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{counters.savings}%</div>
                <div className="text-blue-100 text-sm">Average Savings</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Start Saving Today
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of smart shoppers across Nepal
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Start Comparing Prices
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;