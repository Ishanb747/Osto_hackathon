// src/pages/Es.jsx
import React from "react";
import { ShieldCheck, Usb, Cpu, Lock } from "lucide-react"; // icons
import { motion } from "framer-motion";

const features = [
  {
    title: "Next-Gen Antimalware",
    desc: "AI-driven threat detection beyond signatures.",
    icon: <ShieldCheck className="w-8 h-8 text-blue-900" />,
  },
  {
    title: "Device Control",
    desc: "Block unauthorized devices like USB or Bluetooth.",
    icon: <Usb className="w-8 h-8 text-blue-900" />,
  },
  {
    title: "Application Control",
    desc: "Whitelist/blacklist apps with policy enforcement.",
    icon: <Cpu className="w-8 h-8 text-blue-900" />,
  },
  {
    title: "Data Leakage Prevention",
    desc: "Monitor & stop sensitive file transfers in real-time.",
    icon: <Lock className="w-8 h-8 text-blue-900" />,
  },
];

const useCases = [
  {
    title: "File Upload Blocking",
    desc: "Prevent unsafe or malicious file transfers.",
  },
  {
    title: "PII Detection",
    desc: "Scan devices for sensitive personal data leaks.",
  },
  {
    title: "Policy Enforcement",
    desc: "Auto-enforce security configurations across endpoints.",
  },
];

const benefits = [
  "Risk Reduction — Minimize chances of endpoint-based breaches.",
  "Compliance Support — Map policies to SOC2, ISO, GDPR standards.",
  "Real-Time Monitoring — Continuous visibility & instant alerts.",
  "Employee Productivity — Security without interrupting workflow.",
];

const stats = {
  agents: 124,
  threats: 356,
  violations: 12,
};

const Es = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Next-Gen Endpoint Security
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Protect every device with real-time monitoring, data loss prevention,
          and full control — deployed in under 9 minutes.
        </p>
        <div className="mt-6 space-x-4">
          <button className="bg-blue-900 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-800 transition">
            Get Started
          </button>
          <button className="bg-gray-100 text-blue-900 px-6 py-3 rounded-xl shadow hover:bg-gray-200 transition">
            See Demo
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
          Core Features
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
              whileHover={{ scale: 1.05 }}
            >
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                {f.title}
              </h3>
              <p className="text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Dashboard Mock */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">
          Unified Endpoint Dashboard
        </h2>
        <div className="bg-white border rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-blue-900">{stats.agents}</p>
              <p className="text-gray-600">Agents Online</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-900">{stats.threats}</p>
              <p className="text-gray-600">Threats Blocked</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-900">
                {stats.violations}
              </p>
              <p className="text-gray-600">Policy Violations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
          Use Cases
        </h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {useCases.map((u, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                {u.title}
              </h3>
              <p className="text-gray-600">{u.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">
          Why Choose Osto Endpoint Security?
        </h2>
        <ul className="grid gap-4 md:grid-cols-2 max-w-4xl mx-auto text-left">
          {benefits.map((b, i) => (
            <li key={i} className="flex items-start space-x-3">
              <span className="text-blue-900 font-bold">✔</span>
              <span className="text-gray-700">{b}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-blue-900 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Secure every device in minutes, not weeks.
        </h2>
        <button className="bg-white text-blue-900 px-8 py-3 rounded-xl shadow hover:bg-gray-100 transition font-semibold">
          Get My 9-Minute Plan
        </button>
      </section>
    </div>
  );
};

export default Es;
