import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { 
  Bell, 
  House, 
  Mic, 
  Lightbulb, 
  ArrowRight, 
  Upload, 
  MapPin, 
  Users, 
  CheckCircle2, 
  Sparkles, 
  FileText,
  AlertTriangle
} from 'lucide-react';

export default function CitizenSubmitView({ onNavigate, currentUser, onAddChallenge }) {
  const [step, setStep] = useState(1);
  const [problemText, setProblemText] = useState('');
  const [district, setDistrict] = useState('Ranchi');
  const [block, setBlock] = useState('Khunti Block / Village Panchayat');
  const [affectedCount, setAffectedCount] = useState('500');
  const [urgency, setUrgency] = useState('High');
  const [evidenceFile, setEvidenceFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedChallenge, setSubmittedChallenge] = useState(null);

  const examplePrompts = [
    "Our village pond becomes dirty every summer and we cannot use the water for cattle or washing.",
    "Street lights on the main NH-33 bypass road have not worked for months causing accidents.",
    "Farmers cannot get water for paddy irrigation on time due to broken canal gate valves."
  ];

  const handleNextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const newId = `JH-NEW-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      const newObj = {
        id: newId,
        title: problemText.slice(0, 50) + (problemText.length > 50 ? '...' : ''),
        domain: problemText.toLowerCase().includes('water') ? 'Water & Environment' : problemText.toLowerCase().includes('light') ? 'Infrastructure' : 'Healthcare',
        domainColor: 'bg-sky-100 text-sky-700',
        location: district,
        district: `${district} District`,
        priority: urgency,
        priorityBadge: urgency === 'Critical' ? 'badge-critical' : urgency === 'High' ? 'badge-high' : 'badge-moderate',
        priorityScore: Math.floor(75 + Math.random() * 20),
        status: 'Submitted',
        statusBadge: 'badge-info',
        affectedCount: affectedCount,
        timeAgo: 'Just now',
        submittedDate: '12 Sep 2026',
        description: problemText,
        matchedStudent: 'BIT Mesra & SKMU — 92% AI Match',
        milestones: [
          { title: 'AI Categorization & Priority Scoring', done: true },
          { title: 'District Nodal Verification', done: false },
          { title: 'Student R&D Matching', done: false }
        ]
      };

      onAddChallenge(newObj);
      setSubmittedChallenge(newObj);
      setIsSubmitting(false);
    }, 1200);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar 
        currentPath="/citizen/submit" 
        onNavigate={onNavigate} 
        currentUser={currentUser} 
        activeRole="Citizen" 
      />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Navbar */}
        <header className="h-14 bg-white border-b border-border flex items-center gap-4 px-4 lg:px-6 flex-shrink-0 shadow-sm">
          <div className="flex-1 flex items-center gap-2 text-sm text-muted-foreground">
            <House className="w-4 h-4" />
            <span>/</span>
            <span className="text-foreground font-medium">Citizen Portal</span>
            <span>/</span>
            <span className="text-foreground font-medium">Submit Challenge</span>
          </div>

          <div className="flex items-center gap-2">
            <button className="relative btn-ghost p-2 rounded-[var(--radius)]" aria-label="Notifications">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-[var(--radius)] bg-accent"></span>
            </button>
            <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-border">
              <div className="w-7 h-7 rounded-[var(--radius)] bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
                P
              </div>
              <span className="text-sm font-medium text-foreground hidden md:block">Priya Kumari</span>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
              <p className="section-label mb-1">Citizen Portal</p>
              <h1 className="text-2xl font-bold text-foreground">Report a Challenge</h1>
              <p className="text-muted-foreground text-sm mt-1.5">
                Share a problem affecting your community. Our AI will analyze and route it to the right experts.
              </p>
            </div>

            {/* Step Header */}
            {!submittedChallenge && (
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold text-primary uppercase tracking-wider mb-1">Step {step} of 4</span>
                  <span className="text-xl font-bold text-foreground">
                    {step === 1 ? 'Describe the Challenge' :
                     step === 2 ? 'Upload Evidence' :
                     step === 3 ? 'Location Details' : 'Impact & Urgency'}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 hidden sm:flex">
                  {[1, 2, 3, 4].map(num => (
                    <div 
                      key={num}
                      className={`h-2 rounded-[var(--radius)] transition-all duration-300 ${
                        step >= num ? 'bg-primary w-12' : 'bg-border w-6'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            )}

            {/* Form Steps */}
            {submittedChallenge ? (
              /* Success View */
              <div className="bg-white border border-border p-10 rounded-[var(--radius)] text-center max-w-lg mx-auto shadow-sm">
                <div className="w-16 h-16 bg-green-50 rounded-[var(--radius)] flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 className="w-8 h-8 text-[#138808]" />
                </div>
                <h2 className="text-2xl font-bold text-primary mb-3">Challenge Submitted!</h2>
                <p className="text-muted-foreground text-sm max-w-md mx-auto mb-6">
                  Your submission <span className="font-mono font-bold text-primary">{submittedChallenge.id}</span> has been logged and queued for AI classification.
                </p>

                <div className="bg-slate-50 border border-slate-200 rounded-[var(--radius)] p-6 mb-8 space-y-4 text-left">
                  <div className="flex justify-between items-start pb-4 border-b border-slate-200">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-primary">AI Priority Analysis</span>
                      <p className="text-sm font-bold text-foreground mt-1">{submittedChallenge.title}</p>
                    </div>
                    <span className="text-sm font-extrabold bg-blue-100 text-blue-800 px-2.5 py-1 rounded-[var(--radius)]">{submittedChallenge.priorityScore} / 100 Index</span>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-[var(--radius)] p-4 flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-primary mb-1">AI Classification Ready</p>
                      <p className="text-xs text-blue-800 leading-relaxed">
                        Matched: {submittedChallenge.matchedStudent}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                  <button 
                    onClick={() => onNavigate('/citizen-dashboard')}
                    className="btn-primary rounded-[var(--radius)]"
                  >
                    View in My Dashboard
                  </button>
                  <button 
                    onClick={() => {
                      setSubmittedChallenge(null);
                      setStep(1);
                      setProblemText('');
                    }}
                    className="btn-outline rounded-[var(--radius)]"
                  >
                    Submit Another Challenge
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white border border-border p-6 sm:p-8 rounded-[var(--radius)] shadow-sm">
                {step === 1 && (
                  <div>
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <h2 className="text-lg font-bold text-foreground">What's the problem?</h2>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Describe the issue in your own words — no technical language needed. The more detail you share, the better our AI can help.
                      </p>
                    </div>

                    <div className="relative mb-5">
                      <textarea
                        placeholder="Describe the problem in your own words... For example: 'Our village pond becomes completely dirty and smelly every summer. We cannot use the water for any purpose. Children are falling sick. About 500 families depend on this pond.'"
                        rows={7}
                        className="w-full h-32 input-field text-sm resize-none rounded-[var(--radius)]"
                        maxLength={2000}
                        value={problemText}
                        onChange={(e) => setProblemText(e.target.value)}
                      />
                      <div className="absolute bottom-3 right-3 flex items-center gap-2">
                        <span className="text-xs text-muted-foreground tabular-nums">
                          {problemText.length}/2000
                        </span>
                        <button
                          type="button"
                          title="Voice input simulation"
                          onClick={() => setProblemText(examplePrompts[0])}
                          className="p-1.5 rounded-[var(--radius)] transition-all duration-200 bg-muted text-muted-foreground hover:bg-secondary hover:text-primary"
                        >
                          <Mic className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="mb-8">
                      <div className="flex items-center gap-1.5 mb-3">
                        <Lightbulb className="w-3.5 h-3.5 text-warning" />
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                          Example challenges (Click to autofill)
                        </span>
                      </div>
                      <div className="flex flex-col gap-2">
                        {examplePrompts.map((prompt, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={() => setProblemText(prompt)}
                            className="text-xs text-muted-foreground bg-white border border-border px-3 py-2 rounded-[var(--radius)] text-left hover:border-primary hover:text-primary transition-colors leading-snug"
                          >
                            "{prompt}"
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="button"
                        disabled={!problemText.trim()}
                        onClick={handleNextStep}
                        className="btn-primary rounded-[var(--radius)] gap-2"
                      >
                        <span>Continue to Evidence</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <h2 className="text-lg font-bold text-foreground">Upload Photo or Document Evidence</h2>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Supporting photo, video, or audio proof speeds up verification by government and university teams.
                      </p>
                    </div>

                    <div className="border-2 border-dashed border-border rounded-[var(--radius)] p-8 text-center hover:border-primary hover:bg-slate-50 transition-colors cursor-pointer group mb-6">
                      <div className="w-12 h-12 rounded-[var(--radius)] bg-secondary text-primary flex items-center justify-center mx-auto mb-3">
                        <Upload className="w-6 h-6" />
                      </div>
                      <p className="text-sm font-bold text-foreground mb-1">
                        Click to upload photo, audio, or video evidence
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Supports JPG, PNG, MP4, MP3 up to 25MB
                      </p>
                    </div>

                    <div className="flex justify-between">
                      <button type="button" onClick={handlePrevStep} className="btn-outline rounded-[var(--radius)]">
                        Back
                      </button>
                      <button type="button" onClick={handleNextStep} className="btn-primary rounded-[var(--radius)] gap-2">
                        <span>Continue to Location</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <h2 className="text-lg font-bold text-foreground">Where is this happening?</h2>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Select the district and block location to auto-route to local university hubs and nodal officers.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                      <div>
                        <label className="block text-sm font-bold text-foreground mb-1.5">District / Region</label>
                        <select
                          value={district}
                          onChange={(e) => setDistrict(e.target.value)}
                          className="w-full input-field rounded-[var(--radius)]"
                        >
                          <option value="Ranchi">Ranchi District</option>
                          <option value="Dumka">Dumka District</option>
                          <option value="Dhanbad">Dhanbad District</option>
                          <option value="Jamshedpur">East Singhbhum (Jamshedpur)</option>
                          <option value="Hazaribagh">Hazaribagh District</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-foreground mb-1.5">Block / Village Panchayat (Optional)</label>
                        <input
                          type="text"
                          value={block}
                          onChange={(e) => setBlock(e.target.value)}
                          className="w-full input-field rounded-[var(--radius)]"
                          placeholder="e.g. Kanke Block, Village Angara"
                        />
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <button type="button" onClick={handlePrevStep} className="btn-outline rounded-[var(--radius)]">
                        Back
                      </button>
                      <button type="button" onClick={handleNextStep} className="btn-primary rounded-[var(--radius)] gap-2">
                        <span>Continue to Population Impact</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div>
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <h2 className="text-lg font-bold text-foreground">Impact & Severity</h2>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Estimate how many citizens are affected and the urgency level of this challenge.
                      </p>
                    </div>

                    <div className="space-y-5 mb-8">
                      <div>
                        <label className="block text-sm font-bold text-foreground mb-1.5">
                          Estimated People Affected: <span className="text-primary font-bold">{affectedCount}</span>
                        </label>
                        <input
                          type="range"
                          min="50"
                          max="10000"
                          step="50"
                          value={affectedCount}
                          onChange={(e) => setAffectedCount(e.target.value)}
                          className="w-full accent-primary"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-foreground mb-2">Urgency Level</label>
                        <div className="grid grid-cols-3 gap-3">
                          {["Moderate", "High", "Critical"].map((u) => (
                            <button
                              key={u}
                              type="button"
                              onClick={() => setUrgency(u)}
                              className={`py-3 px-4 rounded-[var(--radius)] border text-sm font-bold transition-all ${
                                urgency === u
                                  ? 'bg-primary text-white border-primary shadow-sm'
                                  : 'bg-white border-border text-muted-foreground hover:bg-muted'
                              }`}
                            >
                              {u}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <button type="button" onClick={handlePrevStep} className="btn-outline">
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="btn-accent px-8 gap-2"
                      >
                        {isSubmitting ? (
                          <span>Analyzing with AI...</span>
                        ) : (
                          <>
                            <Sparkles className="w-4 h-4" />
                            <span>Submit Challenge</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
