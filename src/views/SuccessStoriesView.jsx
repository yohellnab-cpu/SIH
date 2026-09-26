import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { successStoriesData as stories } from '../data/successStoriesData';

export default function SuccessStoriesView({ onNavigate }) {
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
                  <button 
                    onClick={() => onNavigate(`/success-stories/${story.id}`)}
                    className="bg-accent hover:bg-[#e55a10] text-white font-bold text-xs uppercase tracking-wider px-6 py-2 transition-colors flex-shrink-0 whitespace-nowrap"
                  >
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
