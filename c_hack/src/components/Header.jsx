import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { Search, Globe, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white text-slate-800 shadow-sm">
      <div className="bg-blue-900 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm text-white">
            <div className="flex items-center">
              <span className="text-white">
                Osto has been named a Leader in the 2025 Gartner® Magic Quadrant™ for Endpoint Protection Platforms for the 16th consecutive report.
              </span>
              <a href="#" className="ml-2 text-blue-300 hover:text-blue-200 transition-colors underline">
                Learn More →
              </a>
            </div>
            <div className="flex items-center space-x-6">
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation - White background */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo - Purple */}
            <div className="flex items-center">
              <div className="text-5xl font-bold text-navy-900">
                osto
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/about-us" className="hover:text-purple-600 transition-colors font-medium text-slate-700">
                About us
              </Link>
              <a href="#" className="hover:text-purple-600 transition-colors font-medium text-slate-700">
                Products
              </a>
              <a href="#" className="hover:text-purple-600 transition-colors font-medium text-slate-700">
                Support
              </a>
              <a href="#" className="hover:text-purple-600 transition-colors font-medium text-slate-700">
                Partners
              </a>
              <a href="#" className="hover:text-purple-600 transition-colors font-medium text-slate-700">
                Company
              </a>
              <a href="#" className="hover:text-purple-600 transition-colors font-medium text-slate-700">
                Contact Us
              </a>
            </nav>

            {/* CTA Section */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center bg-emerald-600 px-3 py-1 rounded text-sm">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
                <span className="text-white font-medium">OSTO LABS</span>
                <span className="text-emerald-200 ml-1">THREAT INTELLIGENCE</span>
                <span className="text-white ml-1">»</span>
              </div>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden hover:text-purple-600 transition-colors text-slate-700">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;