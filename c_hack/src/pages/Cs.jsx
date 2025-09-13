import React from "react";

const Cs = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
      {/* Hero Section */}
      <section className="text-center py-16 px-6 bg-gradient-to-r from-blue-50 to-blue-100">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
          Cloud Security That Adapts to Your Startup’s Speed
        </h1>
        <p className="mt-6 text-lg max-w-3xl mx-auto text-gray-700">
          Protect your apps, APIs, and cloud posture with real-time scanning and
          AI-driven insights — deployed in minutes, not weeks.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 bg-blue-900 text-white rounded-xl shadow hover:bg-blue-800 transition">
            Book a Demo
          </button>
          <button className="px-6 py-3 bg-white text-blue-900 border border-blue-900 rounded-xl shadow hover:bg-blue-50 transition">
            Start Free Trial
          </button>
        </div>
      </section>

      {/* Key Modules */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-900">
          Core Cloud Security Modules
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {/* Application Layer */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-900">
              Application Layer Protection
            </h3>
            <p className="mt-4 text-gray-600">
              Web App Firewall, API Protection, and Bot Mitigation to stop
              SQLi/XSS/DDoS attacks.
            </p>
          </div>

          {/* Scanners */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-900">
              Cloud Scanners
            </h3>
            <p className="mt-4 text-gray-600">
              Web, API, and Mobile App Scanners to detect vulnerabilities early
              in the dev cycle.
            </p>
          </div>

          {/* Posture Management */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-900">
              Posture Management
            </h3>
            <p className="mt-4 text-gray-600">
              AI-driven misconfiguration detection and Cloud Security Posture
              Management (CSPM).
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-blue-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-blue-900">
          Real-World Use Cases
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mt-10 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-blue-900">
              API Security
            </h3>
            <p className="mt-3 text-gray-600">
              Prevent unauthorized access and stop API abuse with continuous
              monitoring.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-blue-900">
              Compliance Made Simple
            </h3>
            <p className="mt-3 text-gray-600">
              Stay audit-ready for SOC2, ISO, and HIPAA with automated checks.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-blue-900">
              Shadow IT Detection
            </h3>
            <p className="mt-3 text-gray-600">
              Find risky or unmanaged cloud resources before attackers do.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-blue-900">
              AI-Powered Fixes
            </h3>
            <p className="mt-3 text-gray-600">
              Get actionable remediation suggestions for misconfigurations.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-900">Key Benefits</h2>
        <ul className="mt-8 grid md:grid-cols-2 gap-6 text-gray-700">
          <li>✅ Faster setup — live in under 10 minutes</li>
          <li>✅ Unified protection for Apps, APIs & Cloud</li>
          <li>✅ Reduced compliance overhead</li>
          <li>✅ AI-powered misconfiguration detection</li>
        </ul>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-900 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold">
          Secure Your Cloud. Scale Without Fear.
        </h2>
        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 bg-white text-blue-900 rounded-xl shadow hover:bg-gray-100 transition">
            Start Free Cloud Security Trial
          </button>
          <button className="px-6 py-3 border border-white rounded-xl shadow hover:bg-blue-800 transition">
            Request Demo
          </button>
        </div>
      </section>
    </div>
  );
};

export default Cs;
