import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white text-blue-900 shadow-sm">
      {/* Top Banner */}
      <div className="bg-blue-900 py-3 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center">
              <span>
                Osto has been named a Leader in the 2025 Gartner® Magic Quadrant™ for Endpoint Protection Platforms for the 16th consecutive report.
              </span>
              <a
                href="#"
                className="ml-2 text-blue-300 hover:text-blue-200 transition-colors underline"
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="no-underline">
                <div className="text-5xl font-bold text-blue-900">
                  osto
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/about-us"
                className="hover:text-blue-600 transition-colors font-medium text-blue-900"
              >
                About us
              </Link>
              <a href="#" className="hover:text-blue-600 transition-colors font-medium text-blue-900">
                Products
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors font-medium text-blue-900">
                Support
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors font-medium text-blue-900">
                Partners
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors font-medium text-blue-900">
                Company
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors font-medium text-blue-900">
                Contact Us
              </a>
            </nav>

            {/* CTA Section */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center bg-blue-900 px-3 py-1 rounded text-sm">
                <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                <span className="text-white font-medium">OSTO LABS</span>
                <span className="text-blue-200 ml-1">THREAT INTELLIGENCE</span>
                <span className="text-white ml-1">»</span>
              </div>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden hover:text-blue-600 transition-colors text-blue-900">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
