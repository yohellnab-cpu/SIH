import React, { useState } from 'react';
import { 
  ChevronLeft, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  Copy, 
  User, 
  GraduationCap, 
  Briefcase, 
  ShieldCheck, 
  Settings,
  Check
} from 'lucide-react';
import { demoUsers } from '../data/mockData';

export default function DemoLoginView({ onNavigate, setCurrentUser, setActiveRole }) {
  const [selectedRole, setSelectedRole] = useState("Citizen");
  const [email, setEmail] = useState("priya.kumari@citizen.jh.gov.in");
  const [password, setPassword] = useState("citizen@2026");
  const [showPassword, setShowPassword] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(null);

  const handleRoleSelect = (user) => {
    setSelectedRole(user.role);
    setEmail(user.email);
    setPassword(user.password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = demoUsers.find(u => u.role === selectedRole) || demoUsers[0];
    setCurrentUser(user);
    setActiveRole(user.role);
    onNavigate(user.path);
  };

  const handleCopy = (txt) => {
    navigator.clipboard.writeText(txt);
    setCopiedEmail(txt);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Branding Hero Sidebar */}
      <div className="hidden lg:flex w-96 xl:w-[480px] bg-primary flex-col justify-between p-10 flex-shrink-0">
        <div>
          <div className="flex items-center gap-3 mb-12 cursor-pointer" onClick={() => onNavigate('/')}>
            <div className="flex items-center">
              <img 
                alt="Logo" 
                width="36" 
                height="36" 
                className="flex-shrink-0 object-contain mix-blend-screen" 
                src="/assets/images/app_logo.png"
              />
            </div>
            <div>
              <span className="font-bold text-white tracking-wide uppercase block text-sm">Nagarsetu</span>
              <span className="text-white/70 font-medium text-xs block">Societal Innovation Portal, Jharkhand</span>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-4 leading-tight">
            One platform.<br />Every stakeholder.
          </h2>
          <p className="text-white/65 text-sm leading-relaxed mb-8">
            Transforming citizen-reported societal challenges into university-led, industry-supported, deployable solutions.
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-4 bg-white/5 rounded-[var(--radius)] px-4 py-3 border border-white/10">
              <p className="text-2xl font-bold text-white tabular-nums">12,842</p>
              <p className="text-white/60 font-semibold uppercase tracking-wider text-[11px]">Challenges Reported</p>
            </div>
            <div className="flex items-center gap-4 bg-white/5 rounded-[var(--radius)] px-4 py-3 border border-white/10">
              <p className="text-2xl font-bold text-white tabular-nums">1,283</p>
              <p className="text-white/60 font-semibold uppercase tracking-wider text-[11px]">Active Projects</p>
            </div>
            <div className="flex items-center gap-4 bg-white/5 rounded-[var(--radius)] px-4 py-3 border border-white/10">
              <p className="text-2xl font-bold text-white tabular-nums">8.4 Lakh</p>
              <p className="text-white/60 font-semibold uppercase tracking-wider text-[11px]">People Impacted</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Login & Role Selection Form */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 lg:p-12 overflow-y-auto">
        <div className="w-full max-w-2xl">
          <button 
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to home
          </button>

          <div className="mb-8">
            <h1 className="text-2xl font-bold text-foreground mb-1">Select Your Role</h1>
            <p className="text-muted-foreground text-sm">Choose your stakeholder role to access the relevant portal</p>
          </div>

          {/* Role Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
            {demoUsers.map((u) => {
              const isSelected = selectedRole === u.role;
              let Icon = User;
              if (u.role === "Student") Icon = GraduationCap;
              if (u.role === "Industry") Icon = Briefcase;

              return (
                <button
                  key={u.role}
                  type="button"
                  onClick={() => handleRoleSelect(u)}
                  className={`flex flex-col items-center gap-2 p-4 rounded-[var(--radius)] border-2 transition-all duration-150 active:scale-95 ${
                    isSelected 
                      ? 'border-primary bg-blue-50 text-primary font-bold shadow-sm' 
                      : 'border-border bg-white text-muted-foreground hover:border-primary/40 hover:bg-slate-50'
                  }`}
                >
                  <div className={`w-11 h-11 rounded-[var(--radius)] flex items-center justify-center transition-colors border ${
                    isSelected ? 'bg-primary text-white border-primary' : 'bg-slate-50 text-slate-500 border-slate-200'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] uppercase tracking-wider font-bold">{u.role}</span>
                </button>
              );
            })}
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="card-base p-6 mb-6">
            <h2 className="text-base font-semibold text-foreground mb-4">
              Sign In as <span className="text-primary font-bold">{selectedRole}</span>
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Select a role above to auto-fill"
                  className="input-field"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="password">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="input-field pr-10"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="btn-primary w-full justify-center py-3 text-sm gap-2"
              >
                <span>Enter {selectedRole} Portal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/*<div className="card-base p-5">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
              Demo Credentials — Click any row to auto-fill
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 px-3 text-xs font-semibold text-muted-foreground">Role</th>
                    <th className="text-left py-2 px-3 text-xs font-semibold text-muted-foreground">Email</th>
                    <th className="text-left py-2 px-3 text-xs font-semibold text-muted-foreground">Password</th>
                    <th className="py-2 px-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {demoUsers.map((u) => (
                    <tr
                      key={u.role}
                      onClick={() => handleRoleSelect(u)}
                      className={`border-b border-border last:border-0 cursor-pointer transition-colors hover:bg-slate-50 ${
                        selectedRole === u.role ? 'bg-secondary/40' : ''
                      }`}
                    >
                      <td className="py-2.5 px-3">
                        <span
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[var(--radius)] text-xs font-semibold text-white"
                          style={{ backgroundColor: u.badgeColor }}
                        >
                          {u.role}
                        </span>
                      </td>
                      <td className="py-2.5 px-3 font-mono text-xs text-foreground">{u.email}</td>
                      <td className="py-2.5 px-3 font-mono text-xs text-muted-foreground">{u.password}</td>
                      <td className="py-2.5 px-3">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCopy(u.email);
                          }}
                          className="btn-ghost p-1.5 text-muted-foreground"
                          title="Copy email"
                        >
                          {copiedEmail === u.email ? <Check className="w-3.5 h-3.5 text-success" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>*/}
        </div>
      </div>
    </div>
  );
}
