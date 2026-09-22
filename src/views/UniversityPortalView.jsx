import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { 
  Bell, 
  House, 
  Sparkles, 
  GraduationCap, 
  CheckCircle2, 
  Users, 
  ArrowRight, 
  ExternalLink, 
  MapPin, 
  Building2, 
  Clock 
} from 'lucide-react';

export default function StudentPortalView({ challenges, onNavigate, currentUser, setSelectedChallenge }) {
  const [acceptedIds, setAcceptedIds] = useState(['JH-WAT-2026-00482']);

  const handleAccept = (id, e) => {
    e.stopPropagation();
    if (!acceptedIds.includes(id)) {
      setAcceptedIds([...acceptedIds, id]);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar 
        currentPath="/university" 
        onNavigate={onNavigate} 
        currentUser={currentUser} 
        activeRole="Student" 
      />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Navbar */}
        <header className="h-14 bg-white border-b border-border flex items-center gap-4 px-4 lg:px-6 flex-shrink-0 shadow-sm">
          <div className="flex-1 flex items-center gap-2 text-sm text-muted-foreground">
            <House className="w-4 h-4" />
            <span>/</span>
            <span className="text-foreground font-medium">Student Portal</span>
            <span>/</span>
            <span className="text-foreground font-medium">BIT Mesra Ranchi</span>
          </div>

          <div className="flex items-center gap-2">
            <button className="relative btn-ghost p-2" aria-label="Notifications">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-[var(--radius)] bg-accent"></span>
            </button>
            <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-border">
              <div className="w-7 h-7 rounded-[var(--radius)] bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
                R
              </div>
              <span className="text-sm font-medium text-foreground hidden md:block">Dr. Rajiv Sharma</span>
            </div>
          </div>
        </header>

        {/* Student Main Body */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 xl:px-10 py-8">
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
                <button className="btn-outline text-sm">Manage R&D Teams</button>
                <button className="btn-primary text-sm gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>AI Recommendations</span>
                </button>
              </div>
            </div>

            {/* AI Recommendation Alert */}
            <div className="bg-primary from-secondary  to-white border border-primary/20 rounded-[var(--radius)] p-5 mb-8 flex items-start gap-4 shadow-sm">
              <div className="w-10 h-10 rounded-[var(--radius)] bg-primary text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-base font-bold text-foreground">5 new AI-matched challenges await your review</p>
                <p className="text-sm text-muted-foreground mt-0.5 max-w-2xl leading-relaxed">
                  Based on BIT Mesra's registered expertise in Environmental Engineering, IoT Sensors, and Clean Water Tech, the platform system has flagged these top societal priorities.
                </p>
              </div>
            </div>

            {/* Stats Metrics Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="card-base p-5">
                <p className="text-3xl font-bold tabular-nums text-primary mb-1">5</p>
                <p className="metric-label">AI Recommended</p>
                <p className="text-xs text-muted-foreground mt-1">Ready for faculty claim</p>
              </div>

              <div className="card-base p-5">
                <p className="text-3xl font-bold tabular-nums text-accent mb-1">{acceptedIds.length}</p>
                <p className="metric-label">Accepted Challenges</p>
                <p className="text-xs text-muted-foreground mt-1">Teams allocated</p>
              </div>

              <div className="card-base p-5">
                <p className="text-3xl font-bold tabular-nums text-success mb-1">8</p>
                <p className="metric-label">Active R&D Projects</p>
                <p className="text-xs text-muted-foreground mt-1">In prototyping & testing</p>
              </div>

              <div className="card-base p-5">
                <p className="text-3xl font-bold tabular-nums text-violet-600 mb-1">34</p>
                <p className="metric-label">Team Members</p>
                <p className="text-xs text-muted-foreground mt-1">Students & Faculty Mentors</p>
              </div>
            </div>

            {/* AI Recommended Challenges Grid */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-foreground">AI-Recommended Challenges</h2>
                <span className="text-xs text-muted-foreground">Sorted by capability match %</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {challenges.slice(0, 5).map((item) => {
                  const isAccepted = acceptedIds.includes(item.id);
                  return (
                    <div 
                      key={item.id} 
                      onClick={() => setSelectedChallenge(item)}
                      className="card-base p-5 card-hover cursor-pointer bg-white flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-xs font-mono text-muted-foreground">{item.id}</span>
                          <span className="text-xs font-bold text-primary bg-secondary px-2 py-0.5 rounded-[var(--radius)]">
                            92% AI Match
                          </span>
                        </div>

                        <h3 className="text-sm font-bold text-foreground mb-2 leading-snug">
                          {item.title}
                        </h3>

                        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-4">
                          {item.description}
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-3 mb-4">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-accent" />
                            {item.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-3.5 h-3.5 text-primary" />
                            {item.affectedCount} affected
                          </span>
                        </div>

                        <button 
                          onClick={(e) => handleAccept(item.id, e)}
                          className={`w-full py-2 px-4 rounded-[var(--radius)] text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                            isAccepted 
                              ? 'bg-success-bg text-success border border-success/30' 
                              : 'btn-primary'
                          }`}
                        >
                          {isAccepted ? (
                            <>
                              <CheckCircle2 className="w-4 h-4" />
                              <span>Accepted & Team Formed</span>
                            </>
                          ) : (
                            <>
                              <span>Accept Challenge & Form Team</span>
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
          </div>
        </main>
      </div>
    </div>
  );
}
