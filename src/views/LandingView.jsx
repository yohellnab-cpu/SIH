import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function LandingView({ onNavigate }) {
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

      {/* HERO SECTION */}
      <section className="relative w-full h-[500px] overflow-hidden bg-[#2d1b11]">
        {/* Background Image styling to match reference (a realistic village scene) */}
        <div 
          className="absolute inset-0 bg-center bg-cover opacity-80" 
          style={{ backgroundImage: 'url(/assets/images/jj.jpg)' }}
        /> 
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a120b] via-[#1a120b]/80 to-transparent"></div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight uppercase tracking-tight">
              COLLABORATE FOR IMPACT:<br />SOLVING JHARKHAND'S SOCIETAL CHALLENGES
            </h1>
            <p className="text-lg text-gray-200 mb-8 font-medium max-w-xl">
              Connecting Citizens, Academia, and Industry to drive innovation-led growth.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => onNavigate('/citizen/submit')}
                className="btn-primary"
              >
                Submit a Challenge
              </button>
              <button 
                className="btn-outline border-white text-white hover:bg-white hover:text-primary"
              >
                Explore Solutions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-secondary mb-4 uppercase tracking-wide">About Nav Nirmarn</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nav Nirmarn is a flagship initiative by the Government of Jharkhand aimed at crowdsourcing societal challenges directly from citizens and local administrations, and matching them with technical expertise from engineering institutes, universities, and industry partners.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By creating a unified digital platform, we bridge the gap between real-world problems and academic/industrial innovation, fostering a culture of practical problem-solving and rapid deployment of technology for public good.
            </p>
          </div>
          <div className="flex-1 bg-gray-100 p-6 border border-gray-200 shadow-sm flex flex-col items-center text-center">
             <img src="/assets/images/app_logo.png" alt="Nav Nirmarn Logo" className="w-24 h-24 mb-4 object-contain mix-blend-multiply" />
             <h3 className="font-bold text-primary text-lg">Department of Innovation & IT</h3>
             <p className="text-sm text-gray-600 mt-2">Government of Jharkhand</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">How it Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Step 1 */}
            <div className="relative h-32 bg-gray-900 overflow-hidden group">
              <img src="/assets/images/how_submit.png" alt="Submit" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity" />
              <div className="relative h-full p-4 flex flex-col justify-end">
                <p className="text-white font-bold text-lg leading-tight">1. (Submit)</p>
                <p className="text-gray-200 text-xs">Citizens submit a verified local issue.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative h-32 bg-gray-900 overflow-hidden group">
              <img src="/assets/images/how_innovate.png" alt="Innovate" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity" />
              <div className="relative h-full p-4 flex flex-col justify-end">
                <p className="text-white font-bold text-lg leading-tight">2. (Innovate)</p>
                <p className="text-gray-200 text-xs">Students & faculty collaborate to prototype solutions.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative h-32 bg-gray-900 overflow-hidden group">
              <img src="/assets/images/how_deploy.png" alt="Deploy" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity" />
              <div className="relative h-full p-4 flex flex-col justify-end">
                <p className="text-white font-bold text-lg leading-tight">3. (Deploy)</p>
                <p className="text-gray-200 text-xs">Field implementation with industry partners.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* THEMATIC DOMAINS */}
      <section className="bg-background border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Thematic Domains</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { name: "Education", icon: "📘" },
              { name: "Healthcare", icon: "🩺" },
              { name: "Agriculture", icon: "🚜" },
              { name: "Water Resources", icon: "🚰" },
              { name: "Sanitation", icon: "🗑️" },
              { name: "Environment", icon: "🌳" },
              { name: "Public Service Delivery", icon: "📄" },
              { name: "Smart Mobility", icon: "🚌" },
              { name: "Women Empowerment", icon: "👩‍💼" },
              { name: "Tribal Development", icon: "🏘️" },
              { name: "Disaster Management", icon: "🚨" },
              { name: "Clean Energy", icon: "⚡" }
            ].map(domain => (
              <div key={domain.name} className="flex items-center gap-2 bg-[#fdfdfb] border border-gray-200 px-4 py-2 hover:bg-gray-100 cursor-pointer shadow-sm">
                <span className="text-xl">{domain.icon}</span>
                <span className="font-medium text-sm text-gray-800">{domain.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-between items-end mb-6">
            <h2 className="text-2xl font-bold text-secondary uppercase tracking-wide">Success Stories</h2>
            <button className="text-sm font-bold text-primary hover:underline">View All &rarr;</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Story 1 */}
            <div className="bg-white border border-gray-200 shadow-sm flex flex-col">
              <div className="h-40 bg-gray-200 border-b border-gray-200 overflow-hidden relative">
                 <div className="absolute inset-0 bg-primary/10"></div>
                 <div className="absolute top-2 left-2 bg-green-100 text-green-800 text-[10px] font-bold px-2 py-1 uppercase border border-green-300">Deployed</div>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-bold text-gray-800 mb-2">Solar-Powered Cold Storage for Farmers</h3>
                <p className="text-xs text-gray-600 mb-4 line-clamp-3">A low-cost solar cold storage unit developed by BIT Mesra students, successfully preserving tomato yields in Ranchi district.</p>
                <div className="mt-auto pt-4 border-t border-gray-200 text-xs text-gray-500 font-medium">
                   Partner: Tata Steel CSR
                </div>
              </div>
            </div>

            {/* Story 2 */}
            <div className="bg-white border border-gray-200 shadow-sm flex flex-col">
              <div className="h-40 bg-gray-200 border-b border-gray-200 overflow-hidden relative">
                 <div className="absolute inset-0 bg-secondary/10"></div>
                 <div className="absolute top-2 left-2 bg-green-100 text-green-800 text-[10px] font-bold px-2 py-1 uppercase border border-green-300">Deployed</div>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-bold text-gray-800 mb-2">AI-based Anemia Screening Tool</h3>
                <p className="text-xs text-gray-600 mb-4 line-clamp-3">Non-invasive smartphone app for ASHA workers to screen for anemia in remote tribal blocks, created by NIT Jamshedpur.</p>
                <div className="mt-auto pt-4 border-t border-gray-200 text-xs text-gray-500 font-medium">
                   Partner: Ministry of Health
                </div>
              </div>
            </div>

            {/* Story 3 */}
            <div className="bg-white border border-gray-200 shadow-sm flex flex-col">
              <div className="h-40 bg-gray-200 border-b border-gray-200 overflow-hidden relative">
                 <div className="absolute inset-0 bg-accent/10"></div>
                 <div className="absolute top-2 left-2 bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-1 uppercase border border-blue-300">Pilot Phase</div>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-bold text-gray-800 mb-2">Smart IoT Water ATM</h3>
                <p className="text-xs text-gray-600 mb-4 line-clamp-3">Automated dispensing and quality monitoring for rural water tanks, preventing wastage and ensuring safe drinking water.</p>
                <div className="mt-auto pt-4 border-t border-gray-200 text-xs text-gray-500 font-medium">
                   Partner: WaterTech Solutions
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SNAPSHOT OF IMPACT */}
      <section className="bg-secondary py-10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-xl font-bold text-white mb-6">Snapshot of Impact</h2>
          
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4">
              
              <div className="bg-background p-4 border border-gray-200 flex flex-col shadow-sm">
                <h3 className="text-xs font-bold text-gray-800 mb-4">Total Challenges Posted</h3>
                <div className="flex-1 flex items-end gap-2">
                  <div className="w-4 bg-secondary h-[30%]"></div>
                  <div className="w-4 bg-secondary h-[50%]"></div>
                  <div className="w-4 bg-secondary h-[80%]"></div>
                  <div className="w-4 bg-[#80b918] h-[40%]"></div>
                  <div className="w-4 bg-[#80b918] h-[60%]"></div>
                  <div className="ml-auto text-2xl font-bold text-gray-800">12K+</div>
                </div>
              </div>

              <div className="bg-background p-4 border border-gray-200 flex flex-col shadow-sm">
                <h3 className="text-xs font-bold text-gray-800 mb-4">Active Student Innovators</h3>
                <div className="flex-1 flex items-end gap-2">
                  <div className="w-6 bg-primary h-[60%]"></div>
                  <div className="w-6 bg-gray-400 h-[20%]"></div>
                  <div className="ml-auto flex -space-x-2">
                     <div className="w-8 h-8 bg-gray-300 border-2 border-white rounded-[var(--radius)]"></div>
                     <div className="w-8 h-8 bg-gray-400 border-2 border-white rounded-[var(--radius)]"></div>
                     <div className="w-8 h-8 bg-gray-500 border-2 border-white rounded-[var(--radius)]"></div>
                  </div>
                </div>
              </div>

              <div className="bg-background p-4 border border-gray-200 flex flex-col justify-between shadow-sm">
                <h3 className="text-xs font-bold text-gray-800">Industry Partners Onboarded</h3>
                <p className="text-4xl font-bold text-[#80b918]">14</p>
                <div className="h-10 w-full bg-gray-200 mt-2 flex items-center justify-center text-xs text-gray-500 overflow-hidden">
                  <img src="/assets/images/app_logo.png" alt="Handshake" className="w-full h-full object-cover opacity-30 mix-blend-multiply" />
                </div>
              </div>

              <div className="bg-background p-4 border border-gray-200 flex flex-col justify-between shadow-sm">
                <h3 className="text-xs font-bold text-gray-800">Solutions Deployed</h3>
                <p className="text-4xl font-bold text-[#80b918]">8</p>
                <div className="h-10 w-full bg-blue-50 mt-2 flex items-center justify-center text-xs text-blue-800 font-bold border border-blue-200">
                  Jharkhand Map
                </div>
              </div>

            </div>

            {/* Stylized Map Area (from reference image) */}
            <div className="hidden lg:block w-72 h-48 bg-[#e2d5c4] border border-[#c1aa8b] shadow-sm p-4 rotate-2 opacity-90" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'p\' width=\'20\' height=\'20\' patternUnits=\'userSpaceOnUse\'%3E%3Cpath d=\'M0 20L20 0ZM20 20L0 0\' stroke=\'%23c1aa8b\' stroke-width=\'0.5\' opacity=\'0.3\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'url(%23p)\'/%3E%3C/svg%3E")' }}>
               <div className="w-full h-full border border-dashed border-[#8b7558] flex items-center justify-center text-[#5a4835] font-bold text-sm">
                  State Infrastructure Map
               </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
