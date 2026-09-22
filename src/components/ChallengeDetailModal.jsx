import React from 'react';
import { X, MapPin, Users, Calendar, Award, CheckCircle2, Building2, ChevronRight, AlertTriangle } from 'lucide-react';

export default function ChallengeDetailModal({ challenge, onClose, onAction }) {
  if (!challenge) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm fade-in">
      <div className="bg-card w-full max-w-2xl rounded-2xl border border-border shadow-modal overflow-hidden flex flex-col max-h-[90vh] slide-up">
        {/* Header */}
        <div className="px-6 py-5 border-b border-border flex items-start justify-between bg-muted/20">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-mono text-xs text-primary font-semibold">{challenge.id}</span>
              <span className={`priority-badge ${challenge.priorityBadge}`}>
                ● {challenge.priority} Priority
              </span>
              <span className={`status-badge ${challenge.statusBadge}`}>
                {challenge.status}
              </span>
            </div>
            <h2 className="text-xl font-bold text-foreground leading-snug">{challenge.title}</h2>
          </div>
          <button 
            onClick={onClose}
            className="btn-ghost p-1.5 rounded-full text-muted-foreground hover:text-foreground"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* AI Priority & Match Box */}
          <div className="bg-gradient-to-r from-secondary to-blue-50 border border-primary/20 rounded-xl p-4 flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">AI Classification Score</p>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-extrabold text-primary">{challenge.priorityScore || 85}</span>
                <span className="text-xs text-muted-foreground">/ 100 Priority Index</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Matched Institution</p>
              <p className="text-sm font-bold text-foreground mt-1">{challenge.matchedStudent || "BIT Mesra — 92%"}</p>
            </div>
          </div>

          {/* Key Meta Details */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 bg-muted/40 p-4 rounded-xl border border-border">
            <div>
              <p className="metric-label">Domain</p>
              <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold mt-1 ${challenge.domainColor}`}>
                {challenge.domain}
              </span>
            </div>
            <div>
              <p className="metric-label">Location</p>
              <p className="text-sm font-semibold text-foreground flex items-center gap-1 mt-1">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                {challenge.district || challenge.location}
              </p>
            </div>
            <div>
              <p className="metric-label">Population Impacted</p>
              <p className="text-sm font-semibold text-foreground flex items-center gap-1 mt-1">
                <Users className="w-3.5 h-3.5 text-primary" />
                {challenge.affectedCount} citizens
              </p>
            </div>
          </div>

          {/* Problem Statement */}
          <div>
            <h3 className="text-sm font-bold text-foreground mb-2 uppercase tracking-wide">Problem Description</h3>
            <p className="text-sm text-muted-foreground leading-relaxed bg-card border border-border p-4 rounded-xl">
              {challenge.description}
            </p>
          </div>

          {/* Milestones / Solution Pipeline */}
          <div>
            <h3 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wide">Deployment Pipeline & Milestones</h3>
            <div className="space-y-2">
              {(challenge.milestones || [
                { title: "AI Problem Categorization & Validation", done: true },
                { title: "Student R&D Team Allocation", done: true },
                { title: "Prototype Development & Sensor Pilot", done: false },
                { title: "District Govt Field Testing & Deployment", done: false }
              ]).map((m, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card">
                  <CheckCircle2 className={`w-5 h-5 ${m.done ? 'text-success fill-success/20' : 'text-muted-foreground/40'}`} />
                  <span className={`text-sm ${m.done ? 'font-medium text-foreground' : 'text-muted-foreground'}`}>
                    {m.title}
                  </span>
                  {m.done && <span className="ml-auto text-xs text-success font-semibold">Completed</span>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-border flex items-center justify-between bg-muted/20">
          <span className="text-xs text-muted-foreground">
            Submitted {challenge.submittedDate || "recently"}
          </span>
          <div className="flex items-center gap-3">
            <button onClick={onClose} className="btn-ghost text-sm">
              Close
            </button>
            <button 
              onClick={() => {
                if (onAction) onAction(challenge);
                onClose();
              }}
              className="btn-accent text-sm"
            >
              Collaborate on Solution
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
