import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="bg-white text-black font-sans leading-relaxed overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 py-10 md:py-16">
        
        {/* Header Section: Founder Image and Quote */}
        <header className="flex flex-col md:flex-row items-center mb-16 animate-fade-in-up">
          <div className="flex-1 w-full flex justify-center md:justify-start mb-8 md:mb-0 md:pr-10">
            <img 
              src="/fimg.jpeg" 
              alt="Karmesh Gupta, Co-Founder & CEO of Osto"
              className="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover border-2 border-blue-900 shadow-lg animate-scale-in"
            />
          </div>
          <div className="flex-[2] text-center md:text-left animate-slide-in-right">
            <p className="text-2xl lg:text-3xl italic leading-snug border-l-4 border-blue-600 pl-5 mb-5 text-blue-900">
              "We set out to build a global technology product from India because we saw a critical need. Security shouldn't be a privilege reserved for large enterprises. With Osto, we're giving startups the power to build, scale, and compete securely from day one. Persistence is what got us here."
            </p>
            <p className="text-2xl font-bold text-black">Karmesh Gupta</p>
            <p className="text-lg mt-1 text-black">Co-Founder & CEO of Osto</p>
            <p className="text-base text-black mt-1">Forbes 30 Under 30 Asia</p>
          </div>
        </header>

        {/* --- */}

        {/* Mission Section */}
        <section className="mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-5 border-b-2 text-blue-900 border-black pb-2.5">
            Our Mission
          </h2>
          <p className="text-2xl font-medium mb-4 text-black">
            Empowering startups with enterprise-grade security.
          </p>
          <p className="text-lg text-black">
            At Osto, we believe that robust security is the bedrock of innovation. Our mission is to democratize cybersecurity by providing a unified, accessible, and powerful platform. We enable new-age businesses to protect their critical digital assets—including applications, users, servers, and APIs—without the complexity and high cost typically associated with enterprise solutions.
          </p>
        </section>

        {/* --- */}

        {/* Company Stats Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 border-b-2 text-blue-900 border-black pb-2.5 animate-fade-in-up">
            Our Impact by the Numbers
          </h2>
          <div className="flex flex-wrap justify-around text-center gap-y-8 gap-x-4">
            <div className="min-w-[200px] animate-fade-in-up delay-100">
              <h3 className="text-5xl font-bold text-black">500+</h3>
              <p className="text-lg text-black mt-2">Startups Protected</p>
            </div>
            <div className="min-w-[200px] animate-fade-in-up delay-200">
              <h3 className="text-5xl font-bold text-black">1M+</h3>
              <p className="text-lg text-black mt-2">Threats Blocked Daily</p>
            </div>
            <div className="min-w-[200px] animate-fade-in-up delay-300">
              <h3 className="text-5xl font-bold text-black">99.9%</h3>
              <p className="text-lg text-black mt-2">Platform Uptime</p>
            </div>
            <div className="min-w-[200px] animate-fade-in-up delay-400">
              <h3 className="text-5xl font-bold text-black">11</h3>
              <p className="text-lg text-black mt-2">Core Security Modules</p>
            </div>
          </div>
        </section>

        {/* --- */}

        {/* Team/Founder Section */}
        <section className="mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-5 border-b-2 text-blue-900 border-black pb-2.5">
            Meet Our Founder
          </h2>
          <p className="text-lg text-black">
            Karmesh Gupta's journey is one of persistence and vision. He foresaw that as digitization accelerated in India, security would become a paramount concern. Driven by the goal to build a world-class technology product from India, he founded Osto to address the security gaps faced by SMBs and startups. He believes that unified platforms are far more efficient than fragmented tools, and his work embodies the principle of making cybersecurity accessible, affordable, and manageable for businesses that are often the most vulnerable. His determination and "never-give-up" attitude are the cornerstones of our company culture.
          </p>
        </section>
        
        {/* --- */}

        {/* Contact Information Section */}
        <footer className="border-t border-black pt-8 animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-5 text-black text-blue-900">
            Contact Us
          </h2>
          <div className="text-lg text-black space-y-2">
            <p><strong>Email:</strong> contact@osto.one</p>
            <p><strong>Phone:</strong> +91 123 456 7890</p>
            <p><strong>Head Office:</strong> Tech Hub, Gurugram, Haryana, India</p>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default AboutUsPage;