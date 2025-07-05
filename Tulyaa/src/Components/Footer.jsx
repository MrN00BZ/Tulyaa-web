import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook size={20} />, href: '#' },
    { icon: <Instagram size={20} />, href: '#' },
    { icon: <Twitter size={20} />, href: '#' },
  ];

  const footerLinks = {
    'Quick Links': ['Home', 'Categories', 'Deals', 'About Us'],
    'Support': ['Help Center', 'Returns', 'Shipping', 'Track Order'],
    'Legal': ['Privacy Policy', 'Terms of Service', 'Cookie Policy']
  };

  return (
    <footer id='footer' className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">  
        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <span className="ml-2 text-xl font-bold">Tulyaa</span>
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Your trusted partner for finding the best deals in Nepal. Never overpay again!
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-[#74b4af] transition-colors duration-200 p-2 rounded-lg hover:bg-gray-800"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Link Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-lg font-semibold mb-4 text-white">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-[#74b4af] transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Tulyaa. All rights reserved. | A must stop destination for vendors and customers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
