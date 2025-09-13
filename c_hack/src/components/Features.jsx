import React from 'react';
import { 
  Shield, 
  Network, 
  Mail, 
  Cloud, 
  Monitor, 
  ChevronRight,
  Lock,
  Smartphone,
  FileText
} from 'lucide-react';
import { Link } from 'react-router-dom';
    
const Features = () => {
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
    },
   
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Osto has you covered
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Synchronized solutions for smarter, faster, more effective defenses.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="group bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-200 cursor-pointer relative overflow-hidden"
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-900 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Key Features List */}
                  <div className="mb-6">
                    <ul className="space-y-2">
                      {feature.details.slice(0, 3).map((detail, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm text-slate-700">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Learn More Link */}
                  <Link 
                    to={feature.path} 
                    className="flex items-center space-x-2 text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300"
                  >
                    <span>Learn More</span>
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-700 transition-colors duration-300">
                      <ChevronRight className="w-4 h-4 text-white" />
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 bg-slate-900 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Complete Security Ecosystem
              </h3>
              <p className="text-slate-300 mb-6 text-lg">
                All modules work together seamlessly, sharing threat intelligence and providing unified visibility across your entire digital infrastructure.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Lock className="w-5 h-5 text-green-400" />
                  <span className="text-white font-medium">Unified Dashboard</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Smartphone className="w-5 h-5 text-green-400" />
                  <span className="text-white font-medium">Mobile Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FileText className="w-5 h-5 text-green-400" />
                  <span className="text-white font-medium">Compliance Ready</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Monitor className="w-5 h-5 text-green-400" />
                  <span className="text-white font-medium">24/7 Monitoring</span>
                </div>
              </div>

              <Link 
                to="/features" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 inline-block"
              >
                Explore All Features
              </Link>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <div className="grid grid-cols-2 gap-4">
                  {[Shield, Network, Cloud, Mail].map((Icon, idx) => (
                    <div key={idx} className="bg-white/5 rounded-lg p-4 text-center backdrop-blur-sm">
                      <Icon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                      <div 
                        className="h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded animate-pulse" 
                        style={{animationDelay: `${idx * 200}ms`}}
                      ></div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 text-center">
                  <div className="text-white font-medium mb-2">Integrated Protection</div>
                  <div className="flex justify-center space-x-1">
                    {[1,2,3,4,5].map((dot) => (
                      <div 
                        key={dot} 
                        className="w-2 h-2 bg-green-400 rounded-full animate-pulse" 
                        style={{animationDelay: `${dot * 100}ms`}}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-blue-400/10 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-purple-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
