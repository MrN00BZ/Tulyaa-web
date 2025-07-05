import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import TopScroller from "./TopScroller";

export default function SmartDealsSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [groupedResults, setGroupedResults] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!query) return setResults([]);
      try {
        const smartphoneRes = await axios.get("http://localhost:5000/api/smartphones?q=" + query);
        const laptopRes = await axios.get("http://localhost:5000/api/laptops?q=" + query);
        const clothingRes = await axios.get("http://localhost:5000/api/clothing?q=" + query);
        const headphoneRes = await axios.get("http://localhost:5000/api/headphones?q=" + query);
        const allRes = await axios.get("http://localhost:5000/api/all?q=" + query);
        const combined = [...smartphoneRes.data, ...laptopRes.data, ...clothingRes.data, ...headphoneRes.data, ...allRes.data];
        setResults(combined);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [query]);

  const handleBuyNow = (productName) => {
    const sameProducts = results.filter(p => p.name === productName);
    const sorted = sameProducts.sort((a, b) => a.price - b.price);
    setGroupedResults({ name: productName, offers: sorted });
    setSelectedProduct(sorted[0]);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    setGroupedResults({});
  };

  return (
    <>
    <TopScroller />
    <div className="relative min-h-[400px] bg-gradient-to-b from-white via-[#e2e9e8] to-[#70908B] py-10 px-4">
      <div className={`transition duration-300 ${isModalOpen ? 'blur-md pointer-events-none select-none' : ''}`}>
        <div className="text-center mb-10">
          <h1 id="search" className="text-4xl font-bold bg-gradient-to-r from-[#07484A] via-[#4b6f6b] to-[#70908B] text-transparent bg-clip-text">
            Discover Smart Deals, Instantly
          </h1>
          <p className="mt-2 text-gray-600 italic">Powered by intelligent search & style</p>
        </div>

        <div className="flex justify-center mb-8">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a product..."
            className="w-full max-w-3xl px-6 py-4 border border-slate-700 rounded-full placeholder:italic placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#07484A] shadow-md"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <AnimatePresence>
            {results.map((item, idx) => (
              <motion.div
                key={item.id + idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center"
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-48 object-contain mb-4 rounded-xl"
                />
                <h2 className="text-lg font-semibold mb-1">{item.name}</h2>
                <p className="text-sm text-gray-500 mb-2">{item.store}</p>
                <p className="text-lg font-bold text-green-700">NPR {item.price}</p>
                <button
                  className="mt-4 bg-[#07484A] text-white px-6 py-2 rounded-full hover:bg-[#0a5c5e]"
                  onClick={() => handleBuyNow(item.name)}
                >
                  Buy Now
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-2xl shadow-2xl p-6 max-w-5xl w-full relative flex flex-col md:flex-row"
          >
            <button
              className="absolute top-4 right-4 text-xl font-bold text-gray-600 hover:text-black z-10"
              onClick={handleCloseModal}
            >
              ✕
            </button>
            <img
              src={selectedProduct?.imageUrl}
              alt={groupedResults.name}
              className="w-full md:w-1/2 object-contain rounded-xl"
            />
            <div className="w-full md:w-1/2 p-4 flex flex-col gap-4">
              <h3 className="text-2xl font-bold mb-2">{groupedResults.name}</h3>
              <div className="border-l-4 border-[#07484A] pl-4 space-y-4">
                {groupedResults.offers.map((offer, idx) => (
                  <div key={idx} className="bg-gray-50 p-4 rounded-xl shadow-md">
                    <p className="font-semibold text-[#07484A]">{offer.store}</p>
                    <p className="text-green-700 font-bold">NPR {offer.price}</p>
                    <a
                      href={offer.storeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 px-4 py-2 bg-[#07484A] text-white rounded-full hover:bg-[#0a5c5e]"
                    >
                      Visit Store
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
    </>
  );
}
