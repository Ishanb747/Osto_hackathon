import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Get Support & Info */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Get Support & Info</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">Help</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Refund Policy</a></li>
            <li><a href="#">Exchange Policy</a></li>
          </ul>
        </div>

        {/* Let's Connect */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Let's Connect</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">Talk to Sales</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Trusted Security */}
        <div>
          <h3 className="font-semibold text-lg mb-4">
            Trusted Security & Compliance Standards
          </h3>
          <p className="text-gray-300 mb-4">
            At Osto, we prioritize information security and data privacy. 
            With ISO 27001 certification and SOC 2 Type II compliance, 
            we uphold the highest standards to protect your data.
          </p>
          <div className="flex flex-col space-y-2">
            <span className="bg-white text-blue-900 px-3 py-1 rounded-md font-medium text-sm w-max">
              SOC 2 Type II Certified
            </span>
            <span className="bg-white text-blue-900 px-3 py-1 rounded-md font-medium text-sm w-max">
              ISO 27001 Certified
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
