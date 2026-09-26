import React from 'react';
import { 
  Building2, 
  MapPin, 
  Calendar, 
  Bell, 
  Target, 
  CheckCircle2, 
  FolderOpen, 
  Users, 
  Sparkles, 
  AlertTriangle, 
  ThumbsUp, 
  Eye, 
  ChevronDown, 
  ClipboardList 
} from 'lucide-react';

export default function StudentDashboardView({ challenges, onNavigate }) {
  // Use mock challenges or the ones provided to render the AI recommendations
  const aiMatches = [
    {
      id: "JH-WAT-2026-00482",
      score: 91,
      scoreColor: "text-green-700 bg-green-50 border-green-200",
      priority: "High Priority",
      priorityBadge: "bg-orange-100 text-orange-700 border-orange-200",
      title: "Rural Pond Water Contamination During Summer",
      location: "Ranchi",
      affected: "500 affected",
      domain: "Water & Environment",
      tags: ["Environmental Engineering", "IoT", "Chemistry"]
    },
    {
      id: "JH-AGR-2026-00198",
      score: 84,
      scoreColor: "text-blue-700 bg-blue-50 border-blue-200",
      priority: "High Priority",
      priorityBadge: "bg-orange-100 text-orange-700 border-orange-200",
      title: "Unreliable Irrigation Scheduling for Paddy Farmers",
      location: "Dumka",
      affected: "1,200 affected",
      domain: "Agriculture",
      tags: ["IoT", "Data Science", "Agricultural Engineering"]
    },
    {
      id: "JH-HLT-2026-00087",
      score: 76,
      scoreColor: "text-blue-700 bg-blue-50 border-blue-200",
      priority: "Critical Priority",
      priorityBadge: "bg-red-100 text-red-700 border-red-200",
      title: "Absence of Specialist Healthcare in Tribal Blocks",
      location: "Ranchi",
      affected: "8,500 affected",
      domain: "Healthcare",
      tags: ["AI/ML", "Telemedicine", "IoT"]
    },
    {
      id: "JH-INF-2026-00388",
      score: 79,
      scoreColor: "text-blue-700 bg-blue-50 border-blue-200",
      priority: "High Priority",
      priorityBadge: "bg-orange-100 text-orange-700 border-orange-200",
      title: "Drainage Overflow During Monsoon Causing Road Damage",
      location: "Dhanbad",
      affected: "4,100 affected",
      domain: "Infrastructure",
      tags: ["Civil Engineering", "Urban Planning", "Hydrology"]
    }
  ];

  return (
    <div className="max-w-screen-2xl mx-auto px-2 sm:px-6 lg:px-8 py-4 sm:py-8">
      {/* Header Profile Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-muted-foreground text-sm">Welcome back,</span>
            <span className="inline-flex items-center gap-1 text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-medium border border-blue-200">
              <Building2 className="w-3 h-3" />
              University Portal
            </span>
          </div>
          <h1 className="text-2xl font-bold text-foreground">Dr. Rajiv Sharma</h1>
          <p className="text-muted-foreground text-sm flex items-center gap-1.5 mt-1">
            <MapPin className="w-3.5 h-3.5" /> BIT Mesra, Ranchi
            <span className="mx-1 text-border">·</span>
            <Calendar className="w-3.5 h-3.5" /> Environmental Engineering Dept.
          </p>
        </div>
        <div className="flex items-center gap-3 self-start sm:self-auto">
          <button onClick={() => onNavigate('/student/recommended')} className="btn-outline text-sm border-gray-300">View All Challenges</button>
          <button onClick={() => onNavigate('/student/teams')} className="btn-primary bg-blue-600 hover:bg-blue-700 border-transparent text-sm">Manage Teams</button>
        </div>
      </div>

      {/* AI Alert Banner */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl px-5 py-4 mb-7 flex items-start gap-3">
        <Bell className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-semibold text-foreground">5 new AI-matched challenges await your review</p>
          <p className="text-xs text-muted-foreground mt-0.5 max-w-3xl">
            Based on BIT Mesra's expertise in Environmental Engineering and IoT, the system has identified high-priority challenges that match your capabilities.
          </p>
        </div>
        <button onClick={() => onNavigate('/student/recommended')} className="ml-auto flex-shrink-0 text-xs font-semibold text-primary hover:underline bg-transparent border-0 cursor-pointer whitespace-nowrap">
          Review Now
        </button>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="rounded-xl border border-blue-200 bg-blue-50 px-5 py-4">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Recommended</p>
              <p className="text-3xl font-bold text-foreground mt-1">5</p>
              <p className="text-xs text-muted-foreground mt-0.5">AI-matched challenges</p>
            </div>
            <div className="p-2 rounded-lg bg-blue-50 border border-blue-200">
              <Target className="w-5 h-5 text-blue-600" />
            </div>
          </div>
        </div>
        
        <div className="rounded-xl border border-green-200 bg-green-50 px-5 py-4">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Assigned</p>
              <p className="text-3xl font-bold text-foreground mt-1">3</p>
              <p className="text-xs text-muted-foreground mt-0.5">Challenges accepted</p>
            </div>
            <div className="p-2 rounded-lg bg-green-50 border border-green-200">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
            </div>
          </div>
        </div>
        
        <div className="rounded-xl border border-orange-200 bg-orange-50 px-5 py-4">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Active Projects</p>
              <p className="text-3xl font-bold text-foreground mt-1">8</p>
              <p className="text-xs text-muted-foreground mt-0.5">In progress</p>
            </div>
            <div className="p-2 rounded-lg bg-orange-50 border border-orange-200">
              <FolderOpen className="w-5 h-5 text-orange-500" />
            </div>
          </div>
        </div>
        
        <div className="rounded-xl border border-purple-200 bg-purple-50 px-5 py-4">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Team Members</p>
              <p className="text-3xl font-bold text-foreground mt-1">34</p>
              <p className="text-xs text-muted-foreground mt-0.5">Students & faculty</p>
            </div>
            <div className="p-2 rounded-lg bg-purple-50 border border-purple-200">
              <Users className="w-5 h-5 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 space-y-8">
        {/* AI-Recommended Challenges List */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <h2 className="text-base font-semibold text-foreground">AI-Recommended Challenges</h2>
              <span className="inline-flex items-center justify-center h-5 min-w-[20px] px-1.5 rounded-full bg-blue-600 text-white text-xs font-bold">5</span>
            </div>
            <button onClick={() => onNavigate('/student/recommended')} className="text-xs text-primary font-medium hover:underline bg-transparent border-0 cursor-pointer">
              View all &rarr;
            </button>
          </div>
          
          <div className="space-y-3">
            {aiMatches.map((match) => (
              <div key={match.id} className="bg-white border rounded-xl overflow-hidden transition-all border-gray-200 hover:border-blue-200">
                <div className="px-5 py-4">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                    
                    {/* Match Score Box */}
                    <div className={`flex-shrink-0 flex flex-col items-center justify-center w-14 h-14 rounded-xl border font-bold text-lg ${match.scoreColor}`}>
                      {match.score}
                      <span className="text-[10px] font-normal leading-none mt-0.5">match</span>
                    </div>
                    
                    {/* Challenge Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs font-mono text-muted-foreground">{match.id}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${match.priorityBadge}`}>
                          {match.priority}
                        </span>
                      </div>
                      <h3 className="font-semibold text-foreground text-sm leading-snug">{match.title}</h3>
                      
                      <div className="flex flex-wrap items-center gap-3 mt-1.5 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{match.location}</span>
                        <span className="flex items-center gap-1"><Users className="w-3 h-3" />{match.affected}</span>
                        <span className="flex items-center gap-1"><AlertTriangle className="w-3 h-3" />{match.domain}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {match.tags.map(tag => (
                          <span key={tag} className="text-xs bg-blue-50 text-blue-700 border border-blue-100 px-2 py-0.5 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex sm:flex-col items-center gap-2 flex-shrink-0 mt-3 sm:mt-0">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white border-transparent text-xs px-3 py-1.5 rounded-md font-medium flex items-center gap-1 transition-colors w-full justify-center">
                        <ThumbsUp className="w-3.5 h-3.5" /> Accept
                      </button>
                      <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-xs px-3 py-1.5 rounded-md font-medium flex items-center gap-1 transition-colors w-full justify-center">
                        <Eye className="w-3.5 h-3.5" /> Review
                      </button>
                      <button className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors w-full justify-center mt-1">
                        <span className="hidden sm:inline font-medium">Why?</span>
                        <ChevronDown className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Assigned Challenges Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 pt-4">
          <section className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <ClipboardList className="w-4 h-4 text-purple-600" />
                <h2 className="text-sm font-semibold text-foreground">Assigned Challenges</h2>
                <span className="inline-flex items-center justify-center h-5 min-w-[20px] px-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-bold">3</span>
              </div>
              <button className="text-xs text-primary font-medium hover:underline bg-transparent border-0 cursor-pointer">
                View all &rarr;
              </button>
            </div>
            
            <div className="divide-y divide-gray-100">
              <div className="px-5 py-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-muted-foreground">JH-WAT-2026-00482</span>
                      <span className="text-xs px-2 py-0.5 rounded-full border font-medium bg-blue-100 text-blue-700 border-blue-200">University Accepted</span>
                    </div>
                    <p className="text-sm font-medium text-foreground leading-snug">Rural Pond Water Contamination During Summer</p>
                    <div className="flex flex-wrap items-center gap-3 mt-1.5 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />Ranchi</span>
                      <span className="flex items-center gap-1"><Users className="w-3 h-3" />500 affected</span>
                    </div>
                  </div>
                  <button className="btn-outline text-xs px-3 py-1.5 border-gray-300 whitespace-nowrap">View Workspace</button>
                </div>
              </div>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
}
