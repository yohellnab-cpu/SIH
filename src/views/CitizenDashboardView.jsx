import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { 
  Bell, 
  House, 
  MapPin, 
  Calendar, 
  Plus, 
  FileText, 
  TrendingUp, 
  Clock, 
  Zap, 
  CheckCircle2, 
  Search, 
  Filter, 
  ExternalLink, 
  ChevronRight, 
  Building2, 
  Users
} from 'lucide-react';

export default function CitizenDashboardView({ challenges, onNavigate, currentUser, setSelectedChallenge }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filtered = challenges.filter(c => {
    const matchesSearch = c.title.toLowerCase().includes(searchTerm.toLowerCase()) || c.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || c.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="flex h-screen overflow-hidden bg-background">
     

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
       

        {/* Dashboard Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 xl:px-10 py-8">
            {/* User Greeting & CTA */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-muted-foreground text-sm">Good afternoon,</span>
                  <span className="inline-flex items-center gap-1 text-xs bg-success-bg text-success px-2 py-0.5 rounded-[var(--radius)] font-medium">
                    <span className="w-1.5 h-1.5 rounded-[var(--radius)] bg-success pulse-dot"></span>
                    Verified Citizen
                  </span>
                </div>
                <h1 className="text-2xl font-bold text-foreground">Priya Kumari</h1>
                <p className="text-muted-foreground text-sm flex items-center gap-1.5 mt-1">
                  <MapPin className="w-3.5 h-3.5" /> Ranchi District, Jharkhand
                  <span className="mx-1 text-border">·</span>
                  <Calendar className="w-3.5 h-3.5" /> Member since July 2026
                </p>
              </div>

              <button 
                onClick={() => onNavigate('/citizen/submit')}
                className="btn-accent self-start sm:self-auto gap-2"
              >
                <Plus className="w-4 h-4" />
                <span>Report a Challenge</span>
              </button>
            </div>

            {/* Action Needed Alert Banner */}
            <div className="bg-amber-50 border border-amber-200 rounded-[var(--radius)] px-5 py-4 mb-7 flex items-start gap-3">
              <Bell className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-foreground">Action needed on JH-WAT-2026-00482</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  BIT Mesra has accepted your challenge and formed a project team. You can now track progress in the project workspace.
                </p>
              </div>
              <button 
                onClick={() => setSelectedChallenge(challenges.find(c => c.id === "JH-WAT-2026-00482"))}
                className="ml-auto flex-shrink-0 text-xs font-semibold text-primary hover:underline bg-transparent border-0 cursor-pointer"
              >
                View
              </button>
            </div>

            {/* Metric Cards Grid */}
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-7">
              <div className="rounded p-5 border border-border bg-white shadow-card">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-9 h-9 rounded-[var(--radius)] bg-secondary flex items-center justify-center">
                    <FileText className="w-4 h-4 text-primary" />
                  </div>
                  <TrendingUp className="w-3.5 h-3.5 text-success" />
                </div>
                <p className="text-3xl font-bold tabular-nums text-foreground mb-1">8</p>
                <p className="metric-label mb-1.5">Submitted</p>
                <p className="text-xs font-medium text-success">+2 this month</p>
              </div>

              <div className="rounded p-5 border border-border bg-white shadow-card">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-9 h-9 rounded-[var(--radius)] bg-warning-bg flex items-center justify-center">
                    <Clock className="w-4 h-4 text-warning" />
                  </div>
                  <TrendingUp className="w-3.5 h-3.5 text-warning" />
                </div>
                <p className="text-3xl font-bold tabular-nums text-foreground mb-1">3</p>
                <p className="metric-label mb-1.5">Under Review</p>
                <p className="text-xs font-medium text-warning">1 awaiting validation</p>
              </div>

              <div className="rounded p-5 border border-border bg-white shadow-card">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-9 h-9 rounded-[var(--radius)] bg-orange-50 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-accent" />
                  </div>
                  <TrendingUp className="w-3.5 h-3.5 text-success" />
                </div>
                <p className="text-3xl font-bold tabular-nums text-foreground mb-1">2</p>
                <p className="metric-label mb-1.5">Active Projects</p>
                <p className="text-xs font-medium text-success">BIT Mesra + RIMS</p>
              </div>

              <div className="rounded p-5 border border-border bg-white shadow-card">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-9 h-9 rounded-[var(--radius)] bg-success-bg flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-success" />
                  </div>
                  <TrendingUp className="w-3.5 h-3.5 text-success" />
                </div>
                <p className="text-3xl font-bold tabular-nums text-foreground mb-1">3</p>
                <p className="metric-label mb-1.5">Resolved</p>
                <p className="text-xs font-medium text-success">500 people impacted</p>
              </div>
            </div>

            {/* Split Section: Table & Recent Activity */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              {/* My Challenges Data Table */}
              <div className="xl:col-span-2">
                <div className="card-base">
                  <div className="flex items-center justify-between px-5 py-4 border-b border-border">
                    <div>
                      <h2 className="text-base font-semibold text-foreground">My Challenges</h2>
                      <p className="text-xs text-muted-foreground mt-0.5">{challenges.length} challenges submitted</p>
                    </div>
                  </div>

                  {/* Filter & Search Toolbar */}
                  <div className="px-5 py-3 border-b border-border flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1">
                      <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Search by title, ID or domain..."
                        className="input-field pl-9 py-2 text-sm"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <div className="relative">
                      <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="input-field py-2 text-sm pr-8 cursor-pointer min-w-[160px]"
                      >
                        <option value="All">All Statuses</option>
                        <option value="Submitted">Submitted</option>
                        <option value="Validated">Validated</option>
                        <option value="Student Matched">Student Matched</option>
                        <option value="Prototype">Prototype</option>
                        <option value="Pilot">Pilot</option>
                      </select>
                      <button className="btn-outline h-9 gap-2">
                        <Filter className="w-4 h-4" />
                        <span className="hidden sm:inline">Filter</span>
                      </button>
                    </div>
                  </div>

                  {/* Challenges List */}
                  <div className="divide-y divide-border">
                    {filtered.map((item) => (
                      <div 
                        key={item.id}
                        onClick={() => setSelectedChallenge(item)}
                        className="bg-white border-b border-border last:border-b-0 p-5 hover:bg-slate-50 transition-colors flex flex-col md:flex-row gap-5 md:items-center cursor-pointer group"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-mono text-xs text-primary font-semibold">{item.id}</span>
                            <span className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${item.priorityBadge}`}>
                              ● {item.priority}
                            </span>
                            <span className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${item.statusBadge}`}>
                              {item.status}
                            </span>
                          </div>
                          <p className="font-medium text-foreground text-sm leading-snug">{item.title}</p>
                          <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                            <span className={`inline-flex items-center px-2 py-0.5 text-xs font-semibold ${item.domainColor}`}>
                              {item.domain}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {item.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="w-3 h-3" /> {item.similarCount || 12} similar reports
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <ExternalLink className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="px-5 py-3 border-t border-border bg-slate-50 flex items-center justify-between">
                    <p className="text-xs text-muted-foreground">
                      Showing {filtered.length} of {challenges.length} challenges
                    </p>
                    <button 
                      onClick={() => onNavigate('/citizen/submit')}
                      className="btn-accent text-xs py-1.5 px-3 gap-1"
                    >
                      <span>+ Report New Challenge</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Activity Feed & Tracker Sidebar */}
              <div className="flex flex-col gap-6">
                <div className="bg-white border border-border">
                  <div className="p-4 border-b border-border">
                    <h3 className="text-sm font-bold text-foreground">Live Project Tracker</h3>
                  </div>
                  <div className="p-4">
                    <div className="bg-slate-50 border border-border p-4 mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-mono text-muted-foreground font-bold">JH-WAT-2026-00482</span>
                        <span className="text-xs font-bold text-primary">Active</span>
                      </div>
                      <h4 className="text-sm font-bold text-foreground mb-1 leading-snug">Rural Pond Water Contamination During Summer</h4>
                      <p className="text-xs text-muted-foreground mb-3 flex items-center gap-1">
                        <Building2 className="w-3.5 h-3.5" /> Birla Institute of Technology, Mesra
                      </p>
                      
                      {/* Timeline */}
                      <div className="relative pl-3 mt-5">
                        <div className="absolute left-[5px] top-1.5 bottom-1.5 w-0.5 bg-border"></div>
                        <div className="absolute left-[5px] top-1.5 h-1/2 w-0.5 bg-primary"></div>
                        
                        <div className="relative flex gap-3 mb-4">
                          <div className="w-3 h-3 bg-primary flex-shrink-0 mt-0.5 z-10 ring-4 ring-card"></div>
                          <div>
                            <p className="text-xs font-bold text-foreground">Matched with Student</p>
                            <p className="text-[11px] text-muted-foreground">Team formed, lab allocated.</p>
                          </div>
                        </div>
                        <div className="relative flex gap-3 mb-4">
                          <div className="w-3 h-3 bg-primary flex-shrink-0 mt-0.5 z-10 ring-4 ring-card"></div>
                          <div>
                            <p className="text-xs font-bold text-foreground">Prototyping Phase</p>
                            <p className="text-[11px] text-muted-foreground">Water filtration prototype being tested in lab.</p>
                          </div>
                        </div>
                        <div className="relative flex gap-3">
                          <div className="w-3 h-3 bg-border flex-shrink-0 mt-0.5 z-10 ring-4 ring-card"></div>
                          <div>
                            <p className="text-xs font-bold text-muted-foreground">Field Deployment</p>
                            <p className="text-[11px] text-muted-foreground">Expected by Nov 2026.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button 
                      onClick={() => onNavigate('/government')}
                      className="w-full btn-outline text-xs justify-center gap-2"
                    >
                      View Full Details <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                <div className="card-base h-full">
                  <div className="px-5 py-4 border-b border-border">
                    <h2 className="text-base font-semibold text-foreground">Recent Activity</h2>
                    <p className="text-xs text-muted-foreground mt-0.5">Updates on your challenges</p>
                  </div>

                  <div className="divide-y divide-border overflow-y-auto max-h-[520px]">
                    <div className="px-5 py-4 hover:bg-slate-50 transition-colors">
                      <div className="flex items-start gap-3">
                        <div className="w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5 bg-success-bg text-success">
                          <Building2 className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-foreground leading-snug">
                            BIT Mesra accepted your challenge
                          </p>
                          <p className="text-xs text-muted-foreground mt-0.5 leading-snug">
                            JH-WAT-2026-00482 — Smart Water Monitoring project created
                          </p>
                          <p className="text-xs text-muted-foreground/70 mt-1.5">2 hours ago</p>
                        </div>
                      </div>
                    </div>

                    <div className="px-5 py-4 hover:bg-slate-50 transition-colors">
                      <div className="flex items-start gap-3">
                        <div className="w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5 bg-secondary text-primary">
                          <Users className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-foreground leading-snug">
                            Project team formed
                          </p>
                          <p className="text-xs text-muted-foreground mt-0.5 leading-snug">
                            7 members including Dr. Rajiv Sharma (mentor) and WaterTech expert
                          </p>
                          <p className="text-xs text-muted-foreground/70 mt-1.5">1 day ago</p>
                        </div>
                      </div>
                    </div>

                    <div className="px-5 py-4 hover:bg-slate-50 transition-colors">
                      <div className="flex items-start gap-3">
                        <div className="w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5 bg-success-bg text-success">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-foreground leading-snug">
                            Milestone 1 completed
                          </p>
                          <p className="text-xs text-muted-foreground mt-0.5 leading-snug">
                            Literature review and research plan approved by faculty mentor
                          </p>
                          <p className="text-xs text-muted-foreground/70 mt-1.5">3 days ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
