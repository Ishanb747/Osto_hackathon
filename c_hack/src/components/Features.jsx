import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { 
  Shield, Network, Cloud, Lock, Globe, Server, Search, Activity, 
  Filter, CheckCircle, TestTube, CloudCog, Play, Pause 
} from 'lucide-react';

// *** REDUCED: Define a smaller constant for the item height (h-24 = 6rem = 96px)
const ITEM_HEIGHT_PX = 96; 

const Features = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Data remains the same
  const features = [
    {
      icon: Shield,
      title: "Endpoint Security",
      path: "/features/endpoint-security",
      description: "Superior cyber protection keeps your organization and data safe from malware and advanced attacks.",
      details: [ "Next-Gen Antimalware Engine", "Device Control & Application Control", "Data Leakage Prevention", "Real-time File Upload Blocking" ]
    },
    {
      icon: Network,
      title: "Network Security",
      path: "/features/network-security",
      description: "Securely connect your networks with next-gen firewalls, access points and switches to support a ZTNA architecture.",
      details: [ "Zero Trust Network Access (ZTNA)", "Web Filtering & Content Control", "Real-time Traffic Analysis", "Network Threat Detection" ]
    },
    {
      icon: Cloud,
      title: "Cloud Security",
      path: "/features/cloud-security",
      description: "Cloud workload protection with CPSM processes to monitor systems and infrastructure.",
      details: [ "Web App & API Protection", "Vulnerability Scanners", "Cloud Security Posture Management", "AI Security Posture Management" ]
    }
  ];

  const allSecurityModules = [
    { icon: Globe, title: "Web App Protection", description: "Safeguards against DDoS, sophisticated bots & OWASP Top 10 vulnerabilities.", features: ["DDoS Protection", "Bot Mitigation", "OWASP Top 10 Defense", "Real-time Monitoring"] },
    { icon: Network, title: "API Protection", description: "Uses rate limiting and traffic inspection to prevent abuse and attacks.", features: ["Rate Limiting", "Traffic Inspection", "Abuse Prevention", "Attack Mitigation"] },
    { icon: Activity, title: "Log Analyzer", description: "Monitors, parses, and analyzes logs to deliver deep security insights.", features: ["Log Monitoring", "Pattern Analysis", "Security Insights", "Threat Detection"] },
    { icon: Server, title: "Secure Server Access", description: "Encrypted & controlled server access with MFA & self-host gateway.", features: ["Encrypted Access", "Multi-Factor Authentication", "Gateway Control", "Session Management"] },
    { icon: Shield, title: "Threat Protection", description: "Protects endpoints from threats, including malware, ransomware, and zero-day exploits.", features: ["Malware Protection", "Ransomware Defense", "Zero-day Detection", "Endpoint Security"] },
    { icon: Lock, title: "Device Control", description: "Restricts communication via USB, network shares & more to prevent data leakage.", features: ["USB Control", "Network Restriction", "Data Loss Prevention", "Access Control"] },
    { icon: Filter, title: "Content Filtering", description: "Filters URLs and applications to restrict risky access and reduce threats.", features: ["URL Filtering", "App Control", "Risk Assessment", "Threat Reduction"] },
    { icon: Search, title: "Web Scanner", description: "Automates vulnerability scanning and assessment to uncover security risks.", features: ["Automated Scanning", "Vulnerability Assessment", "Risk Discovery", "Security Reports"] },
    { icon: CheckCircle, title: "Compliance as a Service", description: "Helps you achieve compliance with ISO 27001, SOC 2, GDPR, and more.", features: ["ISO 27001", "SOC 2", "GDPR", "Compliance Monitoring"] },
    { icon: TestTube, title: "VAPT as a Service", description: "Simulates real cyber-attacks via automated and manual testing.", features: ["Penetration Testing", "Vulnerability Assessment", "Attack Simulation", "Security Validation"] },
    { icon: CloudCog, title: "Cloud Scanner", description: "Provides runtime security with integrated cloud-native posture.", features: ["Runtime Security", "Cloud-native Posture", "Continuous Monitoring", "Threat Detection"] }
  ];

  // Auto-play functionality remains the same
  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % allSecurityModules.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, allSecurityModules.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  const currentModule = allSecurityModules[currentSlide];
  const IconComponent = currentModule.icon;

  return (
    // REDUCED: Overall padding and max-width
    <div className="bg-white py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12"> {/* REDUCED: margin-bottom */}
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3 tracking-tight"> {/* REDUCED: font-size and margin */}
            All Osto Security Features
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto"> {/* REDUCED: font-size */}
            Comprehensive protection across your entire digital infrastructure.
          </p>
        </div>

        {/* Feature Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"> {/* REDUCED: gap and margin-bottom */}
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              // REDUCED: padding inside card
              <Link key={index} to={feature.path} className="bg-slate-50 rounded-2xl p-6 hover:bg-slate-100 transition-colors duration-300 block no-underline text-current group">
                {/* REDUCED: icon container size */}
                <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <Icon className="w-5 h-5 text-white" /> {/* REDUCED: icon size */}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3> {/* REDUCED: font-size */}
                <p className="text-slate-600 mb-4 text-sm leading-6">{feature.description}</p>
                <ul className="space-y-1.5"> {/* REDUCED: space-y */}
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center space-x-2.5 text-slate-700 text-sm">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </Link>
            );
          })}
        </div>

        {/* === COMPACT SLIDESHOW CONTAINER === */}
        <div className="bg-slate-50 rounded-2xl p-4"> {/* REDUCED: padding */}
          <div className="lg:grid lg:grid-cols-3 lg:gap-6"> {/* REDUCED: gap */}
            
            {/* Left Side: Navigation List */}
            <div className="lg:col-span-1 flex flex-col justify-between">
              {/* REDUCED: Container height */}
              <div className="h-[480px] overflow-hidden relative p-1">
                <div 
                  className="transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateY(-${currentSlide * ITEM_HEIGHT_PX}px)` }}
                >
                  {allSecurityModules.map((module, index) => {
                    const ModuleIcon = module.icon;
                    const isActive = currentSlide === index;
                    return (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        // REDUCED: fixed height `h-24`, padding `p-3`, and margin `mb-1.5`
                        className={`w-full text-left p-3 rounded-lg transition-all duration-300 flex items-center space-x-3 h-24 mb-1.5 ${
                          isActive 
                          ? 'bg-slate-900 text-white shadow-lg' 
                          : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                        }`}
                        disabled={!isActive && isAutoPlay}
                      >
                        <ModuleIcon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-blue-400' : 'text-slate-500'}`} /> {/* REDUCED: icon size */}
                        <div>
                          <h4 className={`font-semibold text-base ${isActive ? 'text-white' : 'text-slate-900'}`}>{module.title}</h4> {/* REDUCED: font-size */}
                          <p className={`text-sm mt-1 ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>{module.description.split('.')[0]}.</p>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="p-2 flex justify-center border-t border-slate-200">
                 <button
                    onClick={() => setIsAutoPlay(!isAutoPlay)}
                    className="flex items-center space-x-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    <span>{isAutoPlay ? 'Pause' : 'Play'}</span>
                  </button>
              </div>
            </div>
            
            {/* Right Side: Content Display */}
            {/* REDUCED: padding and min-height */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-md mt-4 lg:mt-0 p-8 flex flex-col justify-center min-h-[520px]">
              <div key={currentSlide} className="animate-fadeIn space-y-4"> {/* REDUCED: space-y */}
                {/* REDUCED: icon container and inner icon size */}
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-2">
                  <IconComponent className="w-7 h-7 text-white" />
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight"> {/* REDUCED: font-size and margin */}
                    {currentModule.title}
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed"> {/* REDUCED: font-size */}
                    {currentModule.description}
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 pt-3 border-t border-slate-200"> {/* REDUCED: gap and padding-top */}
                  {currentModule.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      <span className="text-slate-700 font-medium text-sm">{feature}</span> {/* REDUCED: font-size */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;