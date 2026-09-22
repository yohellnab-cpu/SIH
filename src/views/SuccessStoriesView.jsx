import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function SuccessStoriesView({ onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stories = [
    {
      id: 1,
      name: "Solar-Powered Cold Storage Unit",
      challenge: "High spoilage of tomato yields in Ranchi district due to lack of electricity.",
      solution: "A low-cost, off-grid solar cold storage unit built with locally sourced insulation materials.",
      domain: "Agriculture",
      team: "BIT Mesra (Dept. of Mechanical Engineering)",
      impact: "Reduced post-harvest losses by 40% for 200+ local farmers.",
      statusColor: "bg-green-100 text-green-800 border-green-300"
    },
    {
      id: 2,
      name: "AI-Based Anemia Screening Tool",
      challenge: "ASHA workers lacked non-invasive tools to screen for anemia in remote tribal blocks.",
      solution: "A smartphone application that analyzes conjunctiva images to estimate hemoglobin levels.",
      domain: "Healthcare",
      team: "NIT Jamshedpur (AI Research Lab)",
      impact: "Screened 5,000+ women across Khunti block with 88% accuracy.",
      statusColor: "bg-green-100 text-green-800 border-green-300"
    },
    {
      id: 3,
      name: "Smart IoT Water ATM",
      challenge: "Inequitable distribution and contamination of drinking water in rural panchayats.",
      solution: "Automated dispensing and real-time quality monitoring systems for community water tanks.",
      domain: "Water Resources",
      team: "IIT (ISM) Dhanbad",
      impact: "Ensured safe drinking water access for 3 villages (approx. 4,500 residents).",
      statusColor: "bg-blue-100 text-blue-800 border-blue-300"
    },
    {
      id: 4,
      name: "Biodegradable Sanitary Pads Manufacturing",
      challenge: "Lack of affordable and eco-friendly menstrual hygiene products for rural women.",
      solution: "Establishing micro-manufacturing units using bamboo fiber and banana pulp.",
      domain: "Women Empowerment",
      team: "Women's College, Jamshedpur",
      impact: "Created livelihood for 40 women and provided pads to 2,000 adolescent girls.",
      statusColor: "bg-green-100 text-green-800 border-green-300"
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col pt-[80px]">
      <Header onNavigate={onNavigate} isScrolled={isScrolled} />
      
      {/* Title Header */}
      <div className="bg-secondary py-12 border-b border-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wider mb-2">Success Stories</h1>
          <p className="text-gray-200 text-sm font-medium">Real-world impact created by students, industry, and government collaboration.</p>
        </div>
      </div>

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        
        <div className="space-y-8">
          {stories.map((story) => (
            <div key={story.id} className="bg-white border border-gray-200 shadow-sm flex flex-col md:flex-row overflow-hidden">
              <div className="w-full md:w-48 bg-gray-100 border-r border-gray-200 p-6 flex flex-col justify-center items-center flex-shrink-0">
                 <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-3">
                   <span className="text-white font-bold text-xl">{story.id}</span>
                 </div>
                 <span className={`text-[10px] px-2 py-1 font-bold uppercase border ${story.statusColor}`}>
                   Deployed
                 </span>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-bold text-gray-800 leading-tight">{story.name}</h2>
                  <span className="inline-block bg-gray-100 text-gray-700 text-[10px] px-2 py-1 uppercase font-bold border border-gray-200 ml-4 shrink-0">
                    {story.domain}
                  </span>
                </div>
                
                <p className="text-sm text-primary font-bold mb-4">{story.team}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">The Challenge</h3>
                    <p className="text-sm text-gray-800 leading-relaxed">{story.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">The Solution</h3>
                    <p className="text-sm text-gray-800 leading-relaxed">{story.solution}</p>
                  </div>
                </div>
                
                <div className="mt-auto border-t border-gray-200 pt-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h3 className="text-xs font-bold text-secondary uppercase tracking-wider mb-1">Measurable Impact</h3>
                    <p className="text-sm font-medium text-gray-800">{story.impact}</p>
                  </div>
                  <button className="bg-accent hover:bg-[#e55a10] text-white font-bold text-xs uppercase tracking-wider px-6 py-2 transition-colors flex-shrink-0 whitespace-nowrap">
                    View Story &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </main>
      
      <Footer />
    </div>
  );
}
