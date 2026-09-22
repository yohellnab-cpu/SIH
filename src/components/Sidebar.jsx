import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  FolderOpen, 
  ChevronLeft, 
  ChevronRight, 
  LogOut, 
  GraduationCap, 
  Briefcase,
  Users,
  UserCircle,
  Tag,
  HandHeart,
  Award
} from 'lucide-react';

export default function Sidebar({ currentPath, onNavigate, currentUser, activeRole = "Citizen" }) {
  const [collapsed, setCollapsed] = useState(false);

  const getNavItems = () => {
    switch (activeRole) {
      case "Student":
        return [
          { label: "Dashboard", path: "/student/dashboard", icon: LayoutDashboard },
          { label: "Recommended", path: "/student/recommended", badge: "5", icon: Tag },
          { label: "Active Projects", path: "/student/projects", icon: FolderOpen },
          { label: "Teams", path: "/student/teams", icon: Users },
          { label: "Account", path: "/student/account", icon: UserCircle }
        ];
      case "Industry":
        return [
          { label: "Dashboard", path: "/industry/dashboard", icon: LayoutDashboard },
          { label: "CSR Opportunities", path: "/industry/csr", badge: "12", icon: HandHeart },
          { label: "Funded Projects", path: "/industry/projects", icon: FolderOpen },
          { label: "Mentorship", path: "/industry/mentorship", icon: Award }
        ];
      case "Citizen":
      default:
        return [
          { label: "Dashboard", path: "/citizen/dashboard", icon: LayoutDashboard },
          { label: "Submit Challenge", path: "/citizen/submit", icon: FileText },
          { label: "My Challenges", path: "/citizen/my-challenges", badge: "8", icon: FolderOpen }
        ];
    }
  };

  const navItems = getNavItems();
  const userName = currentUser?.name || (activeRole === "Student" ? "Dr. Rajiv Sharma" : activeRole === "Industry" ? "Anita Mehta" : "Priya Kumari");
  const userOrg = currentUser?.org || (activeRole === "Student" ? "BIT Mesra" : activeRole === "Industry" ? "WaterTech / Tata CSR" : "Ranchi District");

  return (
    <aside className={`hidden lg:flex flex-col bg-card border-r border-border flex-shrink-0 relative transition-all duration-300 ${collapsed ? 'w-16' : 'w-60'}`}>
      <div className="flex flex-col h-full">
        {/* Header Branding */}
        <div className="flex items-center gap-3 px-4 py-5 border-b border-border">
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => onNavigate('/')}
          >
            <img 
              alt="Logo" 
              width="32" 
              height="32" 
              className="flex-shrink-0 object-contain p-0.5"
              src="/assets/images/app_logo.png" 
            />
            {!collapsed && (
              <div>
                <span className="font-bold text-sm text-foreground leading-tight block">Nav Nirmarn</span>
                <span className="text-xs text-muted-foreground leading-tight block">Jharkhand Innovation</span>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-5">
          <div>
            {!collapsed && <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider px-2 mb-2">{activeRole} Portal</p>}
            <ul className="space-y-0.5">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = currentPath === item.path;
                return (
                  <li key={index}>
                    <button
                      onClick={() => onNavigate(item.path)}
                      className={`w-full text-left flex items-center gap-3 px-2 py-2 text-sm font-medium transition-colors border-l-2 ${isActive ? 'bg-secondary/40 text-primary border-primary' : 'text-muted-foreground hover:bg-slate-50 hover:text-foreground border-transparent'}`}
                      title={item.label}
                    >
                      <span className="flex-shrink-0">
                        <Icon className="w-4 h-4" />
                      </span>
                      {!collapsed && <span className="flex-1 truncate">{item.label}</span>}
                      {!collapsed && item.badge && (
                        <span className="ml-auto inline-flex items-center justify-center h-5 min-w-[20px] px-1.5 bg-accent text-accent-foreground text-xs font-bold">
                          {item.badge}
                        </span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>

        {/* User Footer Profile */}
        <div className="border-t border-border px-3 py-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold flex-shrink-0">
              {userName.charAt(0)}
            </div>
            {!collapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground truncate">{userName}</p>
                <p className="text-xs text-muted-foreground truncate">{userOrg}</p>
                <span className="px-2 py-0.5 border text-[11px] font-bold uppercase mt-1 bg-green-50 text-green-700 border-green-200 inline-block">
                  {activeRole}
                </span>
              </div>
            )}
            {!collapsed && (
              <button
                onClick={() => onNavigate('/role-selection-demo-login')}
                className="text-muted-foreground hover:text-foreground transition-colors p-1"
                title="Switch Role / Log out"
              >
                <LogOut className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Collapse Toggle Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-20 w-6 h-6 bg-card border border-border flex items-center justify-center shadow-sm hover:bg-muted transition-colors z-10"
        aria-label="Toggle sidebar"
      >
        {collapsed ? <ChevronRight className="w-3 h-3" /> : <ChevronLeft className="w-3 h-3" />}
      </button>
    </aside>
  );
}
