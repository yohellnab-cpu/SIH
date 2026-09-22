import React from 'react';
import { Briefcase, HandHeart, FolderOpen, Award } from 'lucide-react';

export default function IndustryDashboardView({ onNavigate }) {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Anita Mehta</h1>
          <p className="text-muted-foreground text-sm flex items-center gap-2 mt-1">
            <Briefcase className="w-4 h-4 text-primary" />
            WaterTech Solutions / Tata CSR
          </p>
        </div>
        <div className="flex gap-3">
          <button className="btn-outline text-sm" onClick={() => onNavigate('/industry/projects')}>Manage Funded Projects</button>
          <button className="btn-primary text-sm gap-2" onClick={() => onNavigate('/industry/csr')}>
            <HandHeart className="w-4 h-4" />
            <span>Explore CSR Opportunities</span>
          </button>
        </div>
      </div>

      {/* CSR Alert */}
      <div className="bg-accent text-white p-5 mb-8 flex items-start gap-4 shadow-sm border border-accent/20">
        <div className="w-10 h-10 bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
          <HandHeart className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1">
          <p className="text-base font-bold text-white">12 New CSR Opportunities available for funding</p>
          <p className="text-sm text-white mt-0.5 max-w-2xl leading-relaxed">
            Match your company's CSR mandate with validated societal projects actively being developed by university teams across Jharkhand.
          </p>
        </div>
      </div>

      {/* Stats Metrics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white border border-gray-200 p-5 shadow-sm">
          <p className="text-3xl font-bold tabular-nums text-primary mb-1">12</p>
          <p className="text-xs uppercase tracking-wider font-bold text-gray-500 mt-1">CSR Opportunities</p>
          <p className="text-[10px] text-gray-500 mt-1 font-medium">Ready for funding</p>
        </div>
        <div className="bg-white border border-gray-200 p-5 shadow-sm">
          <p className="text-3xl font-bold tabular-nums text-green-700 mb-1">3</p>
          <p className="text-xs uppercase tracking-wider font-bold text-gray-500 mt-1">Funded Projects</p>
          <p className="text-[10px] text-gray-500 mt-1 font-medium">Currently active</p>
        </div>
        <div className="bg-white border border-gray-200 p-5 shadow-sm">
          <p className="text-3xl font-bold tabular-nums text-purple-700 mb-1">₹4.2 Cr</p>
          <p className="text-xs uppercase tracking-wider font-bold text-gray-500 mt-1">Total Impact</p>
          <p className="text-[10px] text-gray-500 mt-1 font-medium">Funds disbursed</p>
        </div>
        <div className="bg-white border border-gray-200 p-5 shadow-sm">
          <p className="text-3xl font-bold tabular-nums text-accent mb-1">14</p>
          <p className="text-xs uppercase tracking-wider font-bold text-gray-500 mt-1">Mentors Assigned</p>
          <p className="text-[10px] text-gray-500 mt-1 font-medium">From your organization</p>
        </div>
      </div>
    </div>
  );
}
