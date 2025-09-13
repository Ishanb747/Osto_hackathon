import React, { useState, useEffect } from 'react';
import { Shield, Zap, TrendingUp } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      icon: Shield,
      headline: "Enterprise-Grade Security, Radically Simplified.",
      subheadline: "Osto is the all-in-one cybersecurity platform that lets startups and fast-growing businesses secure their entire digital footprint in minutes. No complexity, no dedicated team required.",
      highlight: "Complete Protection"
    },
    {
      icon: Zap,
      headline: "Go Live in 9 Minutes, Not 90 Days.",
      subheadline: "Onboard your entire organization faster than a coffee break. Automated discovery and simple deployment mean you're protected from day one with zero technical expertise required.",
      highlight: "Instant Setup"
    },
    {
      icon: TrendingUp,
      headline: "Turn Security Into Your Competitive Edge.",
      subheadline: "Win bigger deals and build customer trust with enterprise-grade compliance. Meet rigorous standards like ISO 27001 and SOC 2, accelerating your growth and market credibility.",
      highlight: "Business Growth"
    }
  ];

  const companies = [
    { name: "Powering Ambitions", logo: "PA" },
    { name: "CyberAssure", logo: "CA" },
    { name: "Credit Ghar", logo: "CG" },
    { name: "Event Graphia", logo: "EG" },
    { name: "Handpickd", logo: "HP" },
    { name: "Drizz", logo: "DZ" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

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
                    className={`w-12 h-1 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-blue-400' 
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="relative z-10">
                <div 
                  key={`visual-${currentSlide}`}
                  className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-2xl animate-slide-up"
                >
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-blue-500/20 rounded-full p-6">
                      <IconComponent className="w-16 h-16 text-blue-400" />
                    </div>
                  </div>
                  
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-4">
                      {slides[currentSlide].highlight}
                    </h3>
                    <div className="space-y-3">
                      <div className="bg-white/5 rounded-lg p-3 backdrop-blur-sm">
                        <div className="h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded animate-pulse"></div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 backdrop-blur-sm">
                        <div className="h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded animate-pulse delay-75"></div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 backdrop-blur-sm">
                        <div className="h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded animate-pulse delay-150"></div>
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

      {/* Trust Bar */}
      <div className="bg-slate-800/50 border-t border-slate-700/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
              Compliant, Certified, and Ready for Business
            </h2>
            
            {/* Certifications */}
            <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
              <div className="flex items-center space-x-2 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm font-medium">ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm font-medium">SOC 2 Type II Compliant</span>
              </div>
              <div className="flex items-center space-x-2 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm font-medium">GDPR Ready</span>
              </div>
            </div>
          </div>

          {/* Company Logos */}
          <div className="text-center">
            <h3 className="text-sm font-medium text-slate-400 mb-6">
              Trusted by innovative companies
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
              {companies.map((company, index) => (
                <div 
                  key={company.name}
                  className="flex flex-col items-center space-y-2 hover:opacity-100 transition-opacity duration-200"
                >
                  <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center border border-white/10">
                    <span className="text-white font-bold text-sm">
                      {company.logo}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 text-center">
                    {company.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
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