import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ChallengeDomainsView({ onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const domains = [
    { name: "Education", icon: "📘", desc: "Enhancing school infrastructure, digital literacy, and learning outcomes in rural areas." },
    { name: "Healthcare", icon: "🩺", desc: "Improving medical access, diagnostic tools, and maternal care in tribal blocks." },
    { name: "Agriculture", icon: "🚜", desc: "Smart farming, irrigation tech, and crop disease prevention for smallholder farmers." },
    { name: "Water Resources", icon: "🚰", desc: "Tackling summer water scarcity, groundwater recharge, and contamination issues." },
    { name: "Sanitation", icon: "🗑️", desc: "Scientific waste disposal, sewage management, and public hygiene innovations." },
    { name: "Environment", icon: "🌳", desc: "Pollution control, forest conservation, and sustainable ecological practices." },
    { name: "Public Service", icon: "📄", desc: "Streamlining government scheme delivery and digitizing civic administrative tasks." },
    { name: "Technology", icon: "💻", desc: "Bridging the digital divide with localized software and connectivity solutions." },
    { name: "Rural Development", icon: "🏘️", desc: "Infrastructure, livelihood generation, and community-driven socio-economic growth." },
    { name: "Smart Infrastructure", icon: "🏗️", desc: "IoT-enabled street lighting, traffic management, and structural monitoring." }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col pt-[80px]">
      <Header onNavigate={onNavigate} isScrolled={isScrolled} />
      
      {/* Title Header */}
      <div className="bg-secondary py-12 border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wider mb-2">Challenge Domains</h1>
          <p className="text-gray-200 text-sm font-medium">Explore the key thematic areas where Jharkhand needs your innovation.</p>
        </div>
      </div>

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {domains.map((domain, i) => (
            <div key={i} className="bg-white border border-gray-200 shadow-sm flex flex-col justify-between hover:border-secondary/20 transition-colors p-6">
              <div>
                <div className="w-12 h-12 bg-gray-100 border border-gray-200 flex items-center justify-center text-2xl mb-4">
                  {domain.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{domain.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {domain.desc}
                </p>
              </div>
              
              <button 
                onClick={() => onNavigate('/role-selection-demo-login')}
                className="w-full text-center border border-primary/20 text-primary hover:bg-primary hover:text-white transition-colors py-2 text-xs font-bold uppercase tracking-wider"
              >
                View Challenges
              </button>
            </div>
          ))}
        </div>

      </main>
      
      <Footer />
    </div>
  );
}
