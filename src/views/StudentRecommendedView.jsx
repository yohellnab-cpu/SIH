import React, { useState } from 'react';
import { Sparkles, MapPin, Users, CheckCircle2, ArrowRight, X, Plus } from 'lucide-react';

const AVAILABLE_TAGS = [
  "AI", "Machine Learning", "Web Development", "Agriculture", 
  "Healthcare", "Education", "IoT", "Robotics", 
  "Sustainability", "Cybersecurity"
];

export default function StudentRecommendedView({ challenges }) {
  const [selectedTags, setSelectedTags] = useState(["IoT", "Sustainability", "Agriculture"]);
  const [acceptedIds, setAcceptedIds] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const addTag = (tag) => {
    if (!selectedTags.includes(tag)) setSelectedTags([...selectedTags, tag]);
    setDropdownOpen(false);
  };

  const removeTag = (tag) => {
    setSelectedTags(selectedTags.filter(t => t !== tag));
  };

  const handleAccept = (id) => {
    if (!acceptedIds.includes(id)) setAcceptedIds([...acceptedIds, id]);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      
      {/* Tags System Section */}
      <div className="bg-white p-6 border border-gray-200 shadow-sm">
        <h2 className="text-xl font-bold text-secondary uppercase tracking-wide mb-1">AI-Recommended Challenges</h2>
        <p className="text-sm text-gray-600 mb-6">Nav Nirmarn matches you with real-world problems based on your expertise tags.</p>
        
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center border-t border-gray-200 pt-4">
          <span className="text-sm font-bold text-gray-800 shrink-0">Your Expertise Tags:</span>
          
          <div className="flex flex-wrap gap-2 flex-1">
            {selectedTags.map(tag => (
              <span key={tag} className="flex items-center gap-1 bg-blue-50 border border-blue-200 text-primary text-xs font-bold px-3 py-1 uppercase tracking-wider">
                {tag}
                <button onClick={() => removeTag(tag)} className="hover:text-red-600 focus:outline-none">
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
            
            <div className="relative">
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 bg-gray-100 border border-gray-200 text-gray-600 text-xs font-bold px-3 py-1 uppercase tracking-wider hover:bg-gray-200"
              >
                <Plus className="w-3 h-3" /> Add Tag
              </button>
              
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 shadow-sm z-10 py-1">
                  {AVAILABLE_TAGS.filter(t => !selectedTags.includes(t)).map(tag => (
                    <button 
                      key={tag} 
                      onClick={() => addTag(tag)}
                      className="w-full text-left px-4 py-2 text-xs font-bold text-gray-700 hover:bg-blue-50 hover:text-primary uppercase"
                    >
                      {tag}
                    </button>
                  ))}
                  {AVAILABLE_TAGS.filter(t => !selectedTags.includes(t)).length === 0 && (
                    <div className="px-4 py-2 text-xs text-gray-500">All tags added</div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {challenges.slice(0, 5).map((item) => {
          const isAccepted = acceptedIds.includes(item.id);
          return (
            <div key={item.id} className="bg-white border border-gray-200 p-5 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono text-gray-500">{item.id}</span>
                  <span className="text-[10px] font-bold text-white bg-secondary px-2 py-0.5 uppercase">
                    92% AI Match
                  </span>
                </div>

                <h3 className="text-sm font-bold text-gray-800 mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-600 leading-relaxed line-clamp-3 mb-4">
                  {item.description}
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs text-gray-500 border-t border-gray-200 pt-3 mb-4">
                  <span className="flex items-center gap-1 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-accent" />
                    {item.location}
                  </span>
                  <span className="flex items-center gap-1 font-medium">
                    <Users className="w-3.5 h-3.5 text-primary" />
                    {item.affectedCount} affected
                  </span>
                </div>

                <button 
                  onClick={() => handleAccept(item.id)}
                  className={`w-full py-2.5 px-4 text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                    isAccepted 
                      ? 'bg-green-50 text-green-700 border border-green-300' 
                      : 'bg-accent text-white hover:bg-[#e55a10] border border-accent/20'
                  }`}
                >
                  {isAccepted ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Accepted & Team Formed</span>
                    </>
                  ) : (
                    <>
                      <span>Accept Challenge</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
