import React, { useState, useEffect } from 'react';
import { Shield, Zap, TrendingUp } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      icon: Shield,
      headline: "Enterprise-Grade Security, Radically Simplified.",
      subheadline: "Osto is the all-in-one cybersecurity platform that lets startups and fast-growing businesses secure their entire digital footprint in minutes. No complexity, no dedicated team required.",
      highlight: "Complete Protection",
      image: "/1.png"
    },
    {
      icon: Zap,
      headline: "Go Live in 9 Minutes, Not 90 Days.",
      subheadline: "Onboard your entire organization faster than a coffee break. Automated discovery and simple deployment mean you're protected from day one with zero technical expertise required.",
      highlight: "Instant Setup",
      image: "/2.png"
    },
    {
      icon: TrendingUp,
      headline: "Turn Security Into Your Competitive Edge.",
      subheadline: "Win bigger deals and build customer trust with enterprise-grade compliance. Meet rigorous standards like ISO 27001 and SOC 2, accelerating your growth and market credibility.",
      highlight: "Business Growth",
      image: "/3.png"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const IconComponent = slides[currentSlide].icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.1),transparent_50%)]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32 lg:pb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-white">
              {/* Slide Indicator */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex items-center space-x-2 bg-white/10 rounded-full px-3 py-1 backdrop-blur-sm">
                  <IconComponent className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium text-blue-300">
                    {slides[currentSlide].highlight}
                  </span>
                </div>
              </div>

              {/* Animated Content */}
              <div className="space-y-6">
                <h1
                  key={`headline-${currentSlide}`}
                  className="text-4xl lg:text-6xl font-bold leading-tight animate-fade-in"
                >
                  {slides[currentSlide].headline}
                </h1>

                <p
                  key={`subheadline-${currentSlide}`}
                  className="text-xl text-slate-300 max-w-2xl animate-fade-in-delay"
                >
                  {slides[currentSlide].subheadline}
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
                    Get Started for Free
                  </button>
                  <button className="border border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 backdrop-blur-sm">
                    Request a Demo
                  </button>
                </div>
              </div>

              {/* Slide Navigation */}
              <div className="flex space-x-2 mt-8">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-12 h-1 rounded-full transition-all duration-300 ${index === currentSlide
                      ? 'bg-blue-400'
                      : 'bg-white/20 hover:bg-white/40'
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* Enhanced Visual Element with Image */}
            <div className="relative">
              <div className="relative z-10">
                <div
                  key={`visual-${currentSlide}`}
                  className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/10 shadow-2xl animate-slide-up"
                >
                  {/* Image Section */}
                  <div className="relative h-96 overflow-hidden">
                    <img
                      src={slides[currentSlide].image}
                      alt={slides[currentSlide].highlight}
                      className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="bg-blue-500/30 rounded-full p-3 backdrop-blur-sm">
                        <IconComponent className="w-8 h-8 text-blue-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-400/10 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Bar with Real Company Logos */}
      <div className="bg-[#f6f8ff] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* New Section Title and Subtitle */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a237e] mb-4">
              Your Data is Our Top Priority.
            </h2>
            <p className="text-lg md:text-xl text-[#5c6bc0]">
              At Osto, we prioritize data privacy and uphold the highest standards of security.
            </p>
          </div>

          {/* Certifications Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* ISO 27001 */}
            <div className="bg-white rounded-2xl shadow px-8 py-8 flex flex-col items-start">
              {/* <img src="/iso27001.svg" alt="ISO 27001" className="w-14 h-14 mb-4" /> */}
              <h3 className="text-lg font-bold text-[#1a237e] mb-2">ISO 27001 Certified</h3>
              <p className="text-slate-600 text-sm">
                Our systems meet international standards for security management.
              </p>
            </div>
            {/* SOC 2 */}
            <div className="bg-white rounded-2xl shadow px-8 py-8 flex flex-col items-start">
              {/* <img src="/soc2.svg" alt="SOC 2 Type II" className="w-14 h-14 mb-4" /> */}
              <h3 className="text-lg font-bold text-[#1a237e] mb-2">SOC 2 Type II Compliant</h3>
              <p className="text-slate-600 text-sm">
                Independently verified security, availability, and confidentiality.
              </p>
            </div>
            {/* GDPR */}
            <div className="bg-white rounded-2xl shadow px-8 py-8 flex flex-col items-start">
              {/* <img src="/gdpr.svg" alt="GDPR" className="w-14 h-14 mb-4" /> */}
              <h3 className="text-lg font-bold text-[#1a237e] mb-2">GDPR Compliant</h3>
              <p className="text-slate-600 text-sm">
                We adhere to strict data privacy regulations and best practices.
              </p>
            </div>
          </div>

          {/* Company Logos */}
          <div className="text-center">
            <h3 className="text-base font-semibold text-[#1a237e] mb-8">
              Trusted by industry leaders
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 py-2">
              <img src="/logo1.png" alt="Powering Ambitions" className="h-7 object-contain" />
              <img src="/logo2.png" alt="CyberAssure" className="h-7 object-contain" />
              <img src="/logo3.png" alt="Credit Ghar" className="h-7 object-contain" />
              <img src="/logo4.png" alt="Event Graphia" className="h-7 object-contain" />
              <img src="/logo5.png" alt="Handpicked" className="h-7 object-contain" />
              {/* <img src="/logo6.png" alt="Drizz" className="h-7 object-contain" /> */}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-fade-in-delay {
          animation: fade-in 0.6s ease-out 0.2s forwards;
          opacity: 0;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Hero;