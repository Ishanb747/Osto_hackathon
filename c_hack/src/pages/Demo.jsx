import React from "react";

const Demo = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">
      {/* Page Header */}
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
          Try Osto – <span className="text-blue-900">Secure Your Future</span>
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Book a demo, explore the free trial, or get a quick assessment to
          experience how Osto protects and empowers your business.
        </p>
      </div>

      {/* Lead Generation Form */}
      <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 shadow-lg rounded-2xl p-10 hover:shadow-xl transition">
        <h3 className="text-2xl font-semibold text-slate-900 mb-6">
          Lead Generation Form
        </h3>
        <form className="space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-slate-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-900 focus:outline-none transition"
          />
          <input
            type="email"
            placeholder="Work Email"
            className="w-full border border-slate-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-900 focus:outline-none transition"
          />
          <input
            type="text"
            placeholder="Company"
            className="w-full border border-slate-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-900 focus:outline-none transition"
          />
          <textarea
            placeholder="Your security needs"
            rows="4"
            className="w-full border border-slate-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-900 focus:outline-none transition"
          ></textarea>
          <button className="w-full bg-blue-900 text-white py-3 rounded-xl font-semibold hover:bg-blue-800 transition">
            Submit
          </button>
        </form>
      </div>

      {/* Demo Scheduling with Date Picker */}
      <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 shadow-lg rounded-2xl p-10 hover:shadow-xl transition">
        <h3 className="text-2xl font-semibold text-slate-900 mb-6">
          Schedule a Demo
        </h3>
        <p className="text-slate-600 mb-4">
          Select a convenient date and we’ll confirm your demo session.
        </p>
        <div className="flex gap-4">
          <input
            type="date"
            className="flex-1 border border-slate-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-900 focus:outline-none transition"
          />
          <select className="w-40 border border-slate-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-900 focus:outline-none transition">
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
          </select>
        </div>
        <button className="mt-6 w-full bg-blue-900 text-white py-3 rounded-xl font-semibold hover:bg-blue-800 transition">
          Confirm Demo
        </button>
      </div>

      {/* Free Trial Section */}
      <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 shadow-lg rounded-2xl p-10 hover:shadow-xl transition">
        <h3 className="text-2xl font-semibold text-slate-900 mb-6">
          Free Trial
        </h3>
        <p className="text-slate-600 mb-6">
          Get instant access to Osto’s sandbox environment with limited
          features. Test and explore how it fits your security needs.
        </p>
        <button className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-500 transition">
          Start Free Trial
        </button>
      </div>

      {/* Security Assessment */}
      <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 shadow-lg rounded-2xl p-10 hover:shadow-xl transition">
        <h3 className="text-2xl font-semibold text-slate-900 mb-6">
          Quick Security Assessment
        </h3>
        <p className="text-slate-600 mb-6">
          Answer a few quick questions and get a personalized initial security
          evaluation.
        </p>
        <form className="space-y-5">
          <label className="block">
            <span className="text-slate-700">Do you have a security team?</span>
            <select className="w-full border border-slate-300 rounded-xl p-3 mt-2 focus:ring-2 focus:ring-blue-900 focus:outline-none transition">
              <option>Yes</option>
              <option>No</option>
              <option>Outsourced</option>
            </select>
          </label>
          <label className="block">
            <span className="text-slate-700">Primary concern?</span>
            <select className="w-full border border-slate-300 rounded-xl p-3 mt-2 focus:ring-2 focus:ring-blue-900 focus:outline-none transition">
              <option>Data Protection</option>
              <option>Compliance</option>
              <option>Threat Detection</option>
              <option>Other</option>
            </select>
          </label>
          <button className="w-full bg-blue-900 text-white py-3 rounded-xl font-semibold hover:bg-blue-800 transition">
            Get Assessment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Demo;
