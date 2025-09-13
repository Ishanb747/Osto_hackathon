import React from "react";

const Ns = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          Secure Your Startup’s Network with Zero Trust & Real-Time Protection
        </h1>
        <p className="text-lg text-gray-600">
          Osto.one ensures your users, apps, and data are protected against modern threats
          with ZTNA, Web Filtering, and traffic analysis built for speed.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-blue-900 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-800">
            Book a Demo
          </button>
          <button className="bg-white text-blue-900 border border-blue-900 px-6 py-3 rounded-xl shadow hover:bg-gray-100">
            Start Free Trial
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
        {[
          {
            title: "Zero Trust Network Access (ZTNA)",
            desc: "Grant only the minimum required access per user/device."
          },
          {
            title: "Web Filtering",
            desc: "Block malicious, harmful, or non-compliant websites."
          },
          {
            title: "Traffic Analysis",
            desc: "Continuous monitoring with anomaly detection."
          },
          {
            title: "Threat Detection & Response",
            desc: "Instant alerts and automated mitigation."
          }
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Use Cases */}
      <div className="max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">
          Use Cases
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Remote Workforce Security",
              desc: "Secure WFH and remote employee connections."
            },
            {
              title: "BYOD Security",
              desc: "Protect unmanaged devices connecting to the network."
            },
            {
              title: "Cloud App Access",
              desc: "Control access to SaaS apps like Slack, Notion, etc."
            }
          ].map((useCase, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                {useCase.title}
              </h3>
              <p className="text-gray-600">{useCase.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">
          Why Choose Our Network Security?
        </h2>
        <ul className="grid md:grid-cols-2 gap-6 text-gray-700">
          <li className="bg-white p-6 rounded-2xl shadow">✅ Reduced Attack Surface — ZTNA ensures no broad network exposure.</li>
          <li className="bg-white p-6 rounded-2xl shadow">✅ Visibility — Full insights into traffic, threats, and usage patterns.</li>
          <li className="bg-white p-6 rounded-2xl shadow">✅ Compliance Support — Map controls to ISO, SOC2, HIPAA.</li>
          <li className="bg-white p-6 rounded-2xl shadow">✅ Scalable — Works seamlessly as your startup grows.</li>
        </ul>
      </div>

      {/* KPI / Stats */}
      <div className="max-w-4xl mx-auto bg-blue-900 text-white rounded-2xl p-10 text-center mb-16 shadow">
        <h2 className="text-2xl font-bold mb-6">Network Security Impact</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <p className="text-4xl font-bold">5,243</p>
            <p className="text-gray-200">Connections Secured</p>
          </div>
          <div>
            <p className="text-4xl font-bold">1,128</p>
            <p className="text-gray-200">Threats Blocked</p>
          </div>
          <div>
            <p className="text-4xl font-bold">5ms</p>
            <p className="text-gray-200">Avg Latency Added</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">
          Build a Zero Trust Network in 9 Minutes.
        </h2>
        <button className="bg-blue-900 text-white px-8 py-4 rounded-xl shadow hover:bg-blue-800">
          Get My Security Plan
        </button>
      </div>
    </div>
  );
};

export default Ns;
