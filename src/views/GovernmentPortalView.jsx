import React from 'react';
import Sidebar from '../components/Sidebar';
import { 
  Bell, 
  House, 
  ShieldCheck, 
  MapPin, 
  TrendingUp, 
  Building2, 
  CheckCircle2, 
  FileText, 
  Award, 
  Users, 
  ArrowRight 
} from 'lucide-react';

export default function GovernmentPortalView({ challenges, onNavigate, currentUser, setSelectedChallenge }) {
  const districts = [
    { name: "Ranchi District", challenges: 4120, active: 380, deployed: 142, priority: "High" },
    { name: "Dumka District", challenges: 2840, active: 290, deployed: 98, priority: "Critical" },
    { name: "Dhanbad District", challenges: 3110, active: 310, deployed: 110, priority: "High" },
    { name: "East Singhbhum", challenges: 1950, active: 180, deployed: 64, priority: "Moderate" }
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar 
        currentPath="/government" 
        onNavigate={onNavigate} 
        currentUser={currentUser} 
        activeRole="Government" 
      />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Navbar */}
        <header className="h-14 bg-white border-b border-border flex items-center gap-4 px-4 lg:px-6 flex-shrink-0 shadow-sm">
          <div className="flex-1 flex items-center gap-2 text-sm text-muted-foreground">
            <House className="w-4 h-4" />
            <span>/</span>
            <span className="text-foreground font-medium">Government Command Center</span>
            <span>/</span>
            <span className="text-foreground font-medium">Jharkhand Innovation Cell</span>
          </div>

          <div className="flex items-center gap-2">
            <button className="relative btn-ghost p-2" aria-label="Notifications">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-[var(--radius)] bg-accent"></span>
            </button>
            <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-border">
              <div className="w-7 h-7 rounded-[var(--radius)] bg-violet-600 flex items-center justify-center text-white text-xs font-bold">
                A
              </div>
              <span className="text-sm font-medium text-foreground hidden md:block">Arvind Prasad</span>
            </div>
          </div>
        </header>

        {/* Command Center Main Body */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 xl:px-10 py-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h1 className="text-2xl font-bold text-foreground">Arvind Prasad</h1>
                <p className="text-muted-foreground text-sm flex items-center gap-2 mt-1">
                  <ShieldCheck className="w-4 h-4 text-violet-600" />
                  State Innovation Nodal Officer · Govt. of Jharkhand
                </p>
              </div>

              <div className="flex gap-3">
                <button className="btn-outline text-sm">Download Impact Dossier</button>
                <button className="btn-primary text-sm gap-2">
                  <Award className="w-4 h-4" />
                  <span>Sanction State Grant</span>
                </button>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="card-base p-5">
                <p className="text-3xl font-bold tabular-nums text-primary mb-1">12,842</p>
                <p className="metric-label">State-Wide Submissions</p>
                <p className="text-xs text-muted-foreground mt-1">Across 24 Districts</p>
              </div>

              <div className="card-base p-5">
                <p className="text-3xl font-bold tabular-nums text-success mb-1">9,421</p>
                <p className="metric-label">AI Validated</p>
                <p className="text-xs text-muted-foreground mt-1">73.3% Validation Rate</p>
              </div>

              <div className="card-base p-5">
                <p className="text-3xl font-bold tabular-nums text-accent mb-1">1,283</p>
                <p className="metric-label">Active Student Projects</p>
                <p className="text-xs text-muted-foreground mt-1">BIT, ISM, RIMS, SKMU</p>
              </div>

              <div className="card-base p-5">
                <p className="text-3xl font-bold tabular-nums text-violet-600 mb-1">8.4 Lakh</p>
                <p className="metric-label">Lives Impacted</p>
                <p className="text-xs text-muted-foreground mt-1">Verified Field Audit</p>
              </div>
            </div>

            {/* District Wise Analytics Cards */}
            <div className="mb-8">
              <h2 className="text-lg font-bold text-foreground mb-4">District-Wise Societal Innovation Monitor</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                {districts.map((d, i) => (
                  <div key={i} className="card-base p-5 hover:shadow-sm transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-bold text-base text-foreground flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-accent" />
                        {d.name}
                      </span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-[var(--radius)] bg-muted text-muted-foreground">
                        {d.priority}
                      </span>
                    </div>

                    <div className="space-y-2 border-t border-border pt-3">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Reported Challenges</span>
                        <span className="font-bold text-foreground">{d.challenges.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Active R&D Projects</span>
                        <span className="font-bold text-primary">{d.active}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Solutions Deployed</span>
                        <span className="font-bold text-success">{d.deployed}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* High Priority Intervention Queue */}
            <div className="card-base p-6">
              <h2 className="text-lg font-bold text-foreground mb-4">High-Priority Challenges Requiring State Sanction</h2>
              <div className="space-y-3">
                {challenges.filter(c => c.priority === 'Critical' || c.priority === 'High').map((c) => (
                  <div 
                    key={c.id} 
                    onClick={() => setSelectedChallenge(c)}
                    className="p-4 rounded-[var(--radius)] border border-border bg-white hover:bg-slate-50 transition-colors cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-xs text-primary font-bold">{c.id}</span>
                        <span className={`priority-badge ${c.priorityBadge}`}>● {c.priority}</span>
                      </div>
                      <h3 className="text-sm font-bold text-foreground">{c.title}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{c.matchedStudent}</p>
                    </div>

                    <button className="btn-primary text-xs py-2 px-4 gap-1 self-start sm:self-auto">
                      <span>Review State Grant</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
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
