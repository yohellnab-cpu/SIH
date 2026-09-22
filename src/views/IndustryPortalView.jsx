import React from 'react';
import Sidebar from '../components/Sidebar';
import { 
  Bell, 
  House, 
  Briefcase, 
  Building2, 
  DollarSign, 
  Award, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';

export default function IndustryPortalView({ challenges, onNavigate, currentUser, setSelectedChallenge }) {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar 
        currentPath="/industry" 
        onNavigate={onNavigate} 
        currentUser={currentUser} 
        activeRole="Industry" 
      />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Navbar */}
        <header className="h-14 bg-white border-b border-border flex items-center gap-4 px-4 lg:px-6 flex-shrink-0 shadow-sm">
          <div className="flex-1 flex items-center gap-2 text-sm text-muted-foreground">
            <House className="w-4 h-4" />
            <span>/</span>
            <span className="text-foreground font-medium">Industry Portal</span>
            <span>/</span>
            <span className="text-foreground font-medium">WaterTech Solutions / Tata CSR</span>
          </div>

          <div className="flex items-center gap-2">
            <button className="relative btn-ghost p-2" aria-label="Notifications">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-[var(--radius)] bg-accent"></span>
            </button>
            <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-border">
              <div className="w-7 h-7 rounded-[var(--radius)] bg-accent flex items-center justify-center text-white text-xs font-bold">
                A
              </div>
              <span className="text-sm font-medium text-foreground hidden md:block">Anita Mehta</span>
            </div>
          </div>
        </header>

        {/* Industry Main Body */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 xl:px-10 py-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h1 className="text-2xl font-bold text-foreground">Anita Mehta</h1>
                <p className="text-muted-foreground text-sm flex items-center gap-2 mt-1">
                  <Briefcase className="w-4 h-4 text-accent" />
                  WaterTech Solutions & Tata Steel CSR Cell
                </p>
              </div>

              <div className="flex gap-3">
                <button className="btn-outline text-sm">Pledge CSR Funds</button>
                <button className="btn-accent text-sm gap-2">
                  <Building2 className="w-4 h-4" />
                  <span>Explore Student Projects</span>
                </button>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="card-base p-5">
                <p className="text-3xl font-bold tabular-nums text-accent mb-1">₹ 45 Lakh</p>
                <p className="metric-label">Pledged CSR Capital</p>
                <p className="text-xs text-muted-foreground mt-1">For Water & Clean Tech</p>
              </div>

              <div className="card-base p-5">
                <p className="text-3xl font-bold tabular-nums text-primary mb-1">12</p>
                <p className="metric-label">Student R&D Partners</p>
                <p className="text-xs text-muted-foreground mt-1">BIT Mesra, NIT, SKMU</p>
              </div>

              <div className="card-base p-5">
                <p className="text-3xl font-bold tabular-nums text-success mb-1">6</p>
                <p className="metric-label">Deployed Pilots</p>
                <p className="text-xs text-muted-foreground mt-1">Last-mile field trials</p>
              </div>

              <div className="card-base p-5">
                <p className="text-3xl font-bold tabular-nums text-violet-600 mb-1">1.2 Lakh</p>
                <p className="metric-label">Direct Beneficiaries</p>
                <p className="text-xs text-muted-foreground mt-1">Verified impact score</p>
              </div>
            </div>

            {/* CSR Opportunities List */}
            <div className="card-base p-6">
              <h2 className="text-lg font-bold text-foreground mb-4">CSR-Aligned Student Projects Seeking Co-Funding</h2>
              <div className="space-y-4">
                {challenges.slice(0, 4).map((c) => (
                  <div 
                    key={c.id}
                    onClick={() => setSelectedChallenge(c)}
                    className="p-4 rounded-[var(--radius)] border border-border bg-slate-50 hover:bg-slate-50 transition-colors cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-xs text-primary font-bold">{c.id}</span>
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-[var(--radius)] text-xs font-semibold ${c.domainColor}`}>
                          {c.domain}
                        </span>
                      </div>
                      <h3 className="text-sm font-bold text-foreground">{c.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{c.matchedStudent}</p>
                    </div>

                    <div className="flex items-center gap-4 flex-shrink-0">
                      <div className="text-right">
                        <span className="text-xs text-muted-foreground block">Funding Target</span>
                        <span className="text-sm font-bold text-foreground">₹ 4.5 Lakh</span>
                      </div>
                      <button className="btn-accent text-xs py-2 px-3 gap-1">
                        <span>Fund & Co-Sponsor</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
