import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { 
  Shield, 
  Network, 
  Cloud, 
  ChevronRight,
  ChevronLeft,
  Lock,
  Globe,
  Server,
  Search,
  Activity,
  Filter,
  CheckCircle,
  TestTube,
  CloudCog,
  Play,
  Pause
} from 'lucide-react';

const Features = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // 3 Feature Cards
  const features = [
    {
      icon: Shield,
      title: "Endpoint Security",
      path: "/features/endpoint-security",
      description: "Superior cyber protection keeps your organization and data safe from malware and advanced attacks.",
      details: [
        "Next-Gen Antimalware Engine",
        "Device Control & Application Control",
        "Data Leakage Prevention",
        "Real-time File Upload Blocking"
      ]
    },
    {
      icon: Network,
      title: "Network Security",
      path: "/features/network-security",
      description: "Securely connect your networks with next-gen firewalls, access points and switches to support a ZTNA architecture.",
      details: [
        "Zero Trust Network Access (ZTNA)",
        "Web Filtering & Content Control",
        "Real-time Traffic Analysis",
        "Network Threat Detection"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud Security",
      path: "/features/cloud-security",
      description: "Cloud workload protection with CPSM processes to monitor systems and infrastructure.",
      details: [
        "Web App & API Protection",
        "Vulnerability Scanners",
        "Cloud Security Posture Management",
        "AI Security Posture Management"
      ]
    }
  ];

  // Slideshow Modules
  const allSecurityModules = [
    {
      icon: Globe,
      title: "Web App Protection",
      category: "Main Security Module",
      description: "Safeguards against DDoS, sophisticated bots & OWASP Top 10 vulnerabilities.",
      features: ["DDoS Protection", "Bot Mitigation", "OWASP Top 10 Defense", "Real-time Monitoring"]
    },
    {
      icon: Network,
      title: "API Protection",
      category: "Main Security Module",
      description: "Uses rate limiting and traffic inspection to prevent abuse and attacks.",
      features: ["Rate Limiting", "Traffic Inspection", "Abuse Prevention", "Attack Mitigation"]
    },
    {
      icon: Activity,
      title: "Log Analyzer",
      category: "Main Security Module", 
      description: "Monitors, parses, and analyzes logs to deliver deep security insights.",
      features: ["Log Monitoring", "Pattern Analysis", "Security Insights", "Threat Detection"]
    },
    {
      icon: Server,
      title: "Secure Server Access",
      category: "Main Security Module",
      description: "Encrypted & controlled server access with MFA & self-host gateway.",
      features: ["Encrypted Access", "Multi-Factor Authentication", "Gateway Control", "Session Management"]
    },
    {
      icon: Shield,
      title: "Threat Protection",
      category: "Main Security Module",
      description: "Protects endpoints from threats, including malware, ransomware, and zero-day exploits.",
      features: ["Malware Protection", "Ransomware Defense", "Zero-day Detection", "Endpoint Security"]
    },
    {
      icon: Lock,
      title: "Device Control",
      category: "Main Security Module",
      description: "Restricts communication via USB, network shares & more to prevent data leakage.",
      features: ["USB Control", "Network Restriction", "Data Loss Prevention", "Access Control"]
    },
    {
      icon: Filter,
      title: "Content Filtering",
      category: "Main Security Module",
      description: "Filters URLs and applications to restrict risky access and reduce threats.",
      features: ["URL Filtering", "App Control", "Risk Assessment", "Threat Reduction"]
    },
    {
      icon: Search,
      title: "Web Scanner",
      category: "Main Security Module",
      description: "Automates vulnerability scanning and assessment to uncover security risks.",
      features: ["Automated Scanning", "Vulnerability Assessment", "Risk Discovery", "Security Reports"]
    },
    {
      icon: CheckCircle,
      title: "Compliance as a Service",
      category: "Additional Service",
      description: "Helps you achieve compliance with ISO 27001, SOC 2, GDPR, and more.",
      features: ["ISO 27001", "SOC 2", "GDPR", "Compliance Monitoring"]
    },
    {
      icon: TestTube,
      title: "VAPT as a Service",
      category: "Additional Service",
      description: "Simulates real cyber-attacks via automated and manual testing.",
      features: ["Penetration Testing", "Vulnerability Assessment", "Attack Simulation", "Security Validation"]
    },
    {
      icon: CloudCog,
      title: "Cloud Scanner",
      category: "Coming Soon",
      description: "Provides runtime security with integrated cloud-native posture.",
      features: ["Runtime Security", "Cloud-native Posture", "Continuous Monitoring", "Threat Detection"]
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % allSecurityModules.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, allSecurityModules.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % allSecurityModules.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + allSecurityModules.length) % allSecurityModules.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "Main Security Module": return "bg-blue-100 text-blue-800";
      case "Additional Service": return "bg-purple-100 text-purple-800";
      case "Coming Soon": return "bg-gray-100 text-gray-600";
      default: return "bg-blue-100 text-blue-800";
    }
  };

  const currentModule = allSecurityModules[currentSlide];
  const IconComponent = currentModule.icon;

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            All Osto Security Features
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive protection across your entire digital infrastructure
          </p>
        </div>

        {/* Feature Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Link 
                key={index} 
                to={feature.path}
                className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition block no-underline text-current"
              >
                <div className="w-16 h-16 bg-slate-900 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-slate-700">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </Link>
            );
          })}
        </div>

        {/* Slideshow Container */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Slideshow Header */}
          <div className="bg-slate-900 px-8 py-6 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(currentModule.category)}`}>
                {currentModule.category}
              </span>
              <span className="text-white text-sm">
                {currentSlide + 1} of {allSecurityModules.length}
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className="text-white hover:text-blue-400 transition-colors p-2"
              >
                {isAutoPlay ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Slideshow Content */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {allSecurityModules.map((module, index) => {
                const ModuleIcon = module.icon;
                return (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="p-8 lg:p-12">
                      <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[400px]">
                        {/* Left Side - Content */}
                        <div className="space-y-6">
                          <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 bg-slate-900 rounded-xl flex items-center justify-center">
                              <ModuleIcon className="w-8 h-8 text-white" />
                            </div>
                          </div>

                          <div>
                            <h3 className="text-3xl font-bold text-slate-900 mb-4">
                              {module.title}
                            </h3>
                            <p className="text-lg text-slate-600 leading-relaxed">
                              {module.description}
                            </p>
                          </div>

                          <div className="grid grid-cols-1 gap-3">
                            {module.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center space-x-3 bg-slate-50 p-4 rounded-lg transform transition-all duration-500"
                                  style={{ transitionDelay: `${idx * 100}ms` }}>
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <span className="text-slate-700 font-medium">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Right Side - Visual */}
                        <div className="relative">
                          <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-8 text-center transform transition-all duration-700">
                            <div className="mb-6">
                              <ModuleIcon className="w-24 h-24 text-blue-400 mx-auto mb-4 transform transition-transform duration-700 hover:scale-110" />
                              <div className="text-white font-bold text-xl mb-2">{module.title}</div>
                              <div className="h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto w-3/4 transform transition-all duration-1000"
                                  style={{ transitionDelay: '200ms' }}></div>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4 mb-6">
                              {module.features.map((feature, idx) => (
                                <div key={idx} className="bg-white/10 rounded-lg p-3 backdrop-blur-sm transform transition-all duration-500"
                                  style={{ transitionDelay: `${300 + idx * 100}ms` }}>
                                  <div className="text-white text-sm font-medium truncate">{feature}</div>
                                  <div 
                                    className="h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded mt-2 transform transition-all duration-1000" 
                                    style={{
                                      width: `${70 + idx * 10}%`,
                                      transitionDelay: `${500 + idx * 100}ms`
                                    }}
                                  ></div>
                                </div>
                              ))}
                            </div>

                            <div className="flex justify-center space-x-1">
                              {[1,2,3,4,5].map((dot) => (
                                <div 
                                  key={dot} 
                                  className="w-2 h-2 bg-green-400 rounded-full animate-pulse" 
                                  style={{animationDelay: `${dot * 150}ms`}}
                                ></div>
                              ))}
                            </div>
                          </div>

                          {/* Decorative elements */}
                          <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
                          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="bg-slate-50 px-8 py-6">
            <div className="flex items-center justify-between">
              <button
                onClick={prevSlide}
                className="flex items-center space-x-2 bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition-all transform hover:scale-105"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              {/* Slide Indicators */}
              <div className="flex space-x-2">
                {allSecurityModules.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-blue-600 w-8' 
                        : 'bg-slate-300 hover:bg-slate-400 w-3'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="flex items-center space-x-2 bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition-all transform hover:scale-105"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
