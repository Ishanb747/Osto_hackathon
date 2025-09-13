import React from 'react';

// A simple check icon component
const CheckIcon = () => (
  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
  </svg>
);

// A simple dot icon component for the first plan
const DotIcon = () => (
    <svg className="w-5 h-5 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="5" />
    </svg>
);


const Pricing = () => {
  return (
    <div className="bg-white font-sans antialiased text-gray-800">
      <div className="container mx-auto px-4 py-16 sm:py-24 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0B1A4C]">
            Simple Pricing. Powerful Security.
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            We want to ensure that cybersecurity is accessible without slowing down your growth journey.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

          {/* Plan 1: Osto One */}
          <div className="flex flex-col border border-gray-200 rounded-2xl p-8">
            <div className="flex-grow">
              <h2 className="text-2xl font-semibold text-[#0B1A4C]">Osto One</h2>
              <p className="mt-4 text-gray-500">
                Comprehensive cybersecurity built for businesses that demand reliability, control, and peace of mind.
              </p>
              <div className="mt-8">
                <button className="w-full bg-white text-gray-800 border border-gray-300 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
                  Get started
                </button>
              </div>
              <div className="mt-8 flex items-baseline">
                <span className="text-5xl font-bold tracking-tight text-[#0B1A4C]">$10</span>
                <span className="ml-2 text-gray-500">/ User / Month</span>
              </div>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center">
                  <DotIcon />
                  <span className="text-gray-700">All Security Modules Included</span>
                </li>
                <li className="flex items-center">
                  <DotIcon />
                  <span className="text-gray-700">Each User can use upto 3 devices.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Plan 2: Osto One + Managed Services */}
          <div className="flex flex-col border border-gray-200 rounded-2xl p-8 bg-gray-50 relative">
             <div className="flex-grow">
              <h2 className="text-2xl font-semibold text-[#0B1A4C]">Osto One + Managed Services*</h2>
              <p className="mt-4 text-gray-500">
                Full protection plus expert-led management, proactive threat response, and dedicated support — your security, fully handled.
              </p>
              <div className="mt-8">
                <button className="w-full bg-[#1e3a8a] text-white py-3 rounded-xl font-semibold hover:bg-[#1c347b] transition-colors shadow-lg">
                  Get started
                </button>
              </div>
              <div className="mt-8 flex items-baseline">
                <span className="text-5xl font-bold tracking-tight text-[#0B1A4C]">$15</span>
                <span className="ml-2 text-gray-500">/ User / Month</span>
              </div>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center">
                  <CheckIcon />
                  <span className="text-gray-700">All Security Modules Included</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon />
                  <span className="text-gray-700">Each User can use upto 3 devices.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Pricing;
