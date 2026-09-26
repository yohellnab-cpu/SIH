import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { successStoriesData } from '../data/successStoriesData';

export default function SuccessStoryDetailView({ id, onNavigate }) {
  const story = successStoriesData.find(s => s.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!story) {
    return (
      <div className="min-h-screen bg-transparent flex flex-col pt-[80px]">
        <Header onNavigate={onNavigate} isScrolled={true} />
        <div className="flex-1 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-gray-800">Story Not Found</h1>
          <button onClick={() => onNavigate('/success-stories')} className="mt-4 btn-primary">Back to Success Stories</button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent flex flex-col pt-[80px]">
      <Header onNavigate={onNavigate} isScrolled={true} />
      
      {/* Title Header */}
      <div className="bg-secondary py-12 border-b border-accent/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-4">
            <button 
              onClick={() => onNavigate('/success-stories')}
              className="text-white/80 hover:text-white text-sm font-medium flex items-center gap-1 transition-colors"
            >
              &larr; Back to Success Stories
            </button>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wider mb-4 leading-tight">{story.name}</h1>
          <div className="flex flex-wrap items-center gap-3">
             <span className="bg-white/10 text-white border border-white/20 text-xs px-3 py-1 uppercase font-bold tracking-wider rounded-sm">
               {story.domain}
             </span>
             <span className="bg-accent text-white border border-accent px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm">
               Deployed
             </span>
          </div>
        </div>
      </div>

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Image */}
            <div className="w-full h-[300px] md:h-[450px] bg-white p-2 border border-gray-200 shadow-sm rounded-sm">
              <img 
                src={story.image} 
                alt={story.name} 
                className="w-full h-full object-cover rounded-sm"
              />
            </div>

            {/* Overview */}
            <section className="bg-white border border-gray-200 p-8 shadow-sm rounded-sm">
              <h2 className="text-xl font-bold text-gray-800 uppercase tracking-wide border-b border-gray-200 pb-2 mb-4">Project Overview</h2>
              <p className="text-gray-700 leading-relaxed">{story.overview}</p>
            </section>

            {/* The Challenge & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <section className="bg-white border border-gray-200 p-6 shadow-sm rounded-sm border-t-4 border-t-red-500">
                <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Original Challenge</h2>
                <p className="text-gray-800 leading-relaxed text-sm">{story.challenge}</p>
              </section>
              <section className="bg-white border border-gray-200 p-6 shadow-sm rounded-sm border-t-4 border-t-green-500">
                <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Proposed Solution</h2>
                <p className="text-gray-800 leading-relaxed text-sm">{story.solution}</p>
              </section>
            </div>

            {/* Implementation Details */}
            <section className="bg-white border border-gray-200 p-8 shadow-sm rounded-sm">
              <h2 className="text-xl font-bold text-gray-800 uppercase tracking-wide border-b border-gray-200 pb-2 mb-4">Implementation Details</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{story.implementation}</p>
              
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Technology Used</h3>
              <div className="flex flex-wrap gap-2">
                {story.technology.split(', ').map((tech, idx) => (
                  <span key={idx} className="bg-gray-100 border border-gray-200 text-gray-700 px-3 py-1 text-xs font-bold rounded-sm uppercase">
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Related Images (if any) */}
            {story.relatedImages && story.relatedImages.length > 0 && (
              <section className="bg-white border border-gray-200 p-8 shadow-sm rounded-sm">
                <h2 className="text-xl font-bold text-gray-800 uppercase tracking-wide border-b border-gray-200 pb-2 mb-4">Gallery</h2>
                <div className="grid grid-cols-2 gap-4">
                  {story.relatedImages.map((img, idx) => (
                    <img key={idx} src={img} alt={`Gallery ${idx + 1}`} className="w-full h-40 object-cover border border-gray-200 p-1 rounded-sm shadow-sm hover:shadow-md transition-shadow cursor-pointer" />
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 p-6 shadow-sm rounded-sm">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 border-b border-gray-200 pb-2">Team & Organization</h3>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                  {story.team.charAt(0)}
                </div>
                <p className="text-sm font-bold text-gray-800">{story.team}</p>
              </div>
            </div>

            <div className="bg-secondary p-6 shadow-sm rounded-sm text-white">
              <h3 className="text-xs font-bold text-accent uppercase tracking-wider mb-4 border-b border-white/20 pb-2">Results & Impact</h3>
              <p className="font-medium text-sm leading-relaxed">{story.impact}</p>
            </div>
            
            <div className="bg-white border border-gray-200 p-6 shadow-sm rounded-sm text-center">
               <p className="text-xs text-gray-500 font-bold uppercase mb-3">Have a similar solution?</p>
               <button onClick={() => onNavigate('/citizen/submit')} className="btn-primary w-full py-3">Submit Your Innovation</button>
            </div>
          </div>
          
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
