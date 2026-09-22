import React from 'react';
import { GraduationCap, Sparkles, FolderOpen, Users } from 'lucide-react';

export default function StudentDashboardView({ challenges, onNavigate }) {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Dr. Rajiv Sharma</h1>
          <p className="text-muted-foreground text-sm flex items-center gap-2 mt-1">
            <GraduationCap className="w-4 h-4 text-primary" />
            BIT Mesra, Ranchi · Environmental Engineering & IoT Lab
          </p>
        </div>
        <div className="flex gap-3">
          <button className="btn-outline text-sm" onClick={() => onNavigate('/student/teams')}>Manage R&D Teams</button>
          <button className="btn-primary text-sm gap-2" onClick={() => onNavigate('/student/recommended')}>
            <Sparkles className="w-4 h-4" />
            <span>View AI Recommendations</span>
          </button>
        </div>
      </div>

      {/* AI Recommendation Alert */}
      <div className="bg-primary text-white p-5 mb-8 flex items-start gap-4 shadow-sm border border-primary/20">
        <div className="w-10 h-10 bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1">
          <p className="text-base font-bold text-white">5 new AI-matched challenges await your review</p>
          <p className="text-sm text-gray-200 mt-0.5 max-w-2xl leading-relaxed">
            Based on BIT Mesra's registered expertise in Environmental Engineering, IoT Sensors, and Clean Water Tech, Nav Nirmarn has flagged top societal priorities for your institution.
          </p>
        </div>
      </div>

      {/* Stats Metrics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white border border-gray-200 p-5 shadow-sm">
          <p className="text-3xl font-bold tabular-nums text-primary mb-1">5</p>
          <p className="text-xs uppercase tracking-wider font-bold text-gray-500 mt-1">Recommended</p>
          <p className="text-[10px] text-gray-500 mt-1 font-medium">Ready for faculty claim</p>
        </div>
        <div className="bg-white border border-gray-200 p-5 shadow-sm">
          <p className="text-3xl font-bold tabular-nums text-accent mb-1">1</p>
          <p className="text-xs uppercase tracking-wider font-bold text-gray-500 mt-1">Accepted</p>
          <p className="text-[10px] text-gray-500 mt-1 font-medium">Teams allocated</p>
        </div>
        <div className="bg-white border border-gray-200 p-5 shadow-sm">
          <p className="text-3xl font-bold tabular-nums text-green-700 mb-1">8</p>
          <p className="text-xs uppercase tracking-wider font-bold text-gray-500 mt-1">Active Projects</p>
          <p className="text-[10px] text-gray-500 mt-1 font-medium">In prototyping phase</p>
        </div>
        <div className="bg-white border border-gray-200 p-5 shadow-sm">
          <p className="text-3xl font-bold tabular-nums text-purple-700 mb-1">34</p>
          <p className="text-xs uppercase tracking-wider font-bold text-gray-500 mt-1">Team Members</p>
          <p className="text-[10px] text-gray-500 mt-1 font-medium">Students & Faculty Mentors</p>
        </div>
      </div>
    </div>
  );
}
