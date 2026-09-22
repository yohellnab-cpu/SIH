import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutUsView({ onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col pt-[80px]">
      <Header onNavigate={onNavigate} isScrolled={isScrolled} />
      
      {/* Title Header */}
      <div className="bg-secondary py-12 border-b border-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wider mb-2">About Us</h1>
          <p className="text-gray-200 text-sm font-medium">Nav Nirmarn - Department of Innovation & IT, Government of Jharkhand</p>
        </div>
      </div>

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 w-full">
        
        {/* About Nav Nirmarn */}
        <section className="bg-white p-8 border border-gray-200 shadow-sm flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-primary uppercase tracking-wide mb-4 border-b border-gray-200 pb-2">About Nav Nirmarn</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nav Nirmarn is a flagship initiative by the Government of Jharkhand aimed at crowdsourcing societal challenges directly from citizens and local administrations, and matching them with technical expertise from engineering institutes, universities, and industry partners.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By creating a unified digital platform, we bridge the gap between real-world problems and academic/industrial innovation, fostering a culture of practical problem-solving and rapid deployment of technology for public good.
            </p>
          </div>
          <div className="w-full md:w-64 bg-gray-100 p-6 border border-gray-200 shadow-sm flex flex-col items-center text-center flex-shrink-0">
             <img src="/assets/images/app_logo.png" alt="Emblem" className="w-24 h-24 mb-4 object-contain mix-blend-multiply" />
             <h3 className="font-bold text-secondary text-sm uppercase">Dept. of Innovation</h3>
             <p className="text-xs text-gray-600 mt-1">Govt. of Jharkhand</p>
          </div>
        </section>

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="bg-white p-8 border border-gray-200 shadow-sm">
            <h2 className="text-xl font-bold text-secondary uppercase tracking-wide mb-4 border-b border-gray-200 pb-2">Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To transform Jharkhand into a leading hub of grassroots innovation by seamlessly integrating technological advancement with societal needs, empowering every citizen to be an agent of change.
            </p>
          </section>
          <section className="bg-white p-8 border border-gray-200 shadow-sm">
            <h2 className="text-xl font-bold text-accent uppercase tracking-wide mb-4 border-b border-gray-200 pb-2">Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To establish a transparent, robust, and scalable ecosystem that identifies local challenges, matches them with specialized academic and industry teams, and delivers sustainable solutions that drive socio-economic growth.
            </p>
          </section>
        </div>

        {/* Objectives */}
        <section className="bg-white p-8 border border-gray-200 shadow-sm">
          <h2 className="text-xl font-bold text-primary uppercase tracking-wide mb-4 border-b border-gray-200 pb-2">Objectives</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Identify and document core societal issues faced by rural and urban communities across the state.</li>
            <li>Foster active collaboration between academic institutions and government bodies.</li>
            <li>Incentivize student innovators to apply their technical skills to real-world problems.</li>
            <li>Channel Corporate Social Responsibility (CSR) funds into verified, high-impact prototypes.</li>
            <li>Deploy scalable technological solutions in domains like healthcare, agriculture, and sanitation.</li>
          </ul>
        </section>

        {/* Collaboration & How it Works */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <section className="bg-white p-8 border border-gray-200 shadow-sm">
            <h2 className="text-xl font-bold text-secondary uppercase tracking-wide mb-4 border-b border-gray-200 pb-2">Tri-Sector Collaboration</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-gray-800">1. Government & Citizens</h3>
                <p className="text-sm text-gray-600">Provide verified ground-truth challenges and coordinate field implementation.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-800">2. Students & Academia</h3>
                <p className="text-sm text-gray-600">Bring cutting-edge research, prototyping capabilities, and technical manpower.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-800">3. Industry & CSR</h3>
                <p className="text-sm text-gray-600">Supply essential funding, scalability expertise, and professional mentorship.</p>
              </div>
            </div>
          </section>

          <section className="bg-white p-8 border border-gray-200 shadow-sm">
            <h2 className="text-xl font-bold text-primary uppercase tracking-wide mb-4 border-b border-gray-200 pb-2">How it Works</h2>
            <ol className="list-decimal pl-5 space-y-3 text-gray-700">
              <li><strong>Submission:</strong> Citizens or District Magistrates submit a challenge via the portal.</li>
              <li><strong>Verification:</strong> The nodal committee reviews and approves the challenge.</li>
              <li><strong>Matching:</strong> An AI-driven system recommends the challenge to relevant university departments.</li>
              <li><strong>Prototyping:</strong> Student teams accept the challenge and begin R&D with faculty guidance.</li>
              <li><strong>Deployment:</strong> Industry partners fund successful prototypes for mass rollout.</li>
            </ol>
          </section>
        </div>

        {/* Impact */}
        <section className="bg-secondary p-8 border border-gray-200 shadow-sm text-white">
          <h2 className="text-xl font-bold uppercase tracking-wide mb-6 border-b border-[#30664e] pb-2 text-accent">Statewide Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold mb-1">12K+</p>
              <p className="text-xs uppercase tracking-wider font-bold text-gray-300">Challenges Logged</p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-1">1,283</p>
              <p className="text-xs uppercase tracking-wider font-bold text-gray-300">Active Projects</p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-1">14</p>
              <p className="text-xs uppercase tracking-wider font-bold text-gray-300">Industry Partners</p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-1">8.4L</p>
              <p className="text-xs uppercase tracking-wider font-bold text-gray-300">Citizens Impacted</p>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
