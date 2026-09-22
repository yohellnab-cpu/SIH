import React, { useState, useEffect } from 'react';
import LandingView from './views/LandingView';
import DemoLoginView from './views/DemoLoginView';
import CitizenSubmitView from './views/CitizenSubmitView';
import CitizenDashboardView from './views/CitizenDashboardView';
import CitizenMyChallengesView from './views/CitizenMyChallengesView';
import StudentDashboardView from './views/StudentDashboardView';
import StudentRecommendedView from './views/StudentRecommendedView';
import StudentAccountView from './views/StudentAccountView';
import IndustryDashboardView from './views/IndustryDashboardView';
import IndustryCSRView from './views/IndustryCSRView';
import IndustryMentorshipView from './views/IndustryMentorshipView';
import AboutUsView from './views/AboutUsView';
import ChallengeDomainsView from './views/ChallengeDomainsView';
import SuccessStoriesView from './views/SuccessStoriesView';
import Sidebar from './components/Sidebar';
import ChallengeDetailModal from './components/ChallengeDetailModal';
import { initialChallenges, demoUsers } from './data/mockData';

// Placeholder empty views for missing routes
const PlaceholderView = ({ title }) => (
  <div className="p-8"><h2 className="text-2xl font-bold text-gray-800">{title}</h2><p className="mt-4 text-gray-600">This section is currently under development.</p></div>
);

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname === '/' ? '/' : window.location.pathname);
  const [currentUser, setCurrentUser] = useState(demoUsers[0]);
  const [activeRole, setActiveRole] = useState('Citizen');
  const [challenges, setChallenges] = useState(initialChallenges);
  const [selectedChallenge, setSelectedChallenge] = useState(null);

  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path) => {
    setCurrentPath(path);
    window.history.pushState({}, '', path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddChallenge = (newChallenge) => setChallenges([newChallenge, ...challenges]);

  // Layout wrapper for authenticated portal pages
  const PortalLayout = ({ children, role }) => (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar currentPath={currentPath} onNavigate={navigate} currentUser={currentUser} activeRole={role} />
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Simple top header for authenticated views */}
        <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-6 flex-shrink-0">
           <div className="font-bold text-secondary text-sm uppercase tracking-wide">Nav Nirmarn • {role} Portal</div>
           <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-gray-700">{currentUser?.name}</span>
           </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
      {selectedChallenge && (
        <ChallengeDetailModal 
          challenge={selectedChallenge}
          onClose={() => setSelectedChallenge(null)}
          onAction={(c) => navigate(currentPath)}
        />
      )}
    </div>
  );

  // Routing Logic
  if (currentPath === '/') return <LandingView onNavigate={navigate} />;
  if (currentPath === '/about') return <AboutUsView onNavigate={navigate} />;
  if (currentPath === '/domains') return <ChallengeDomainsView onNavigate={navigate} />;
  if (currentPath === '/success-stories') return <SuccessStoriesView onNavigate={navigate} />;
  if (currentPath === '/role-selection-demo-login') return <DemoLoginView onNavigate={navigate} setCurrentUser={setCurrentUser} setActiveRole={setActiveRole} />;

  // Citizen Routes
  if (currentPath === '/citizen/submit') return <CitizenSubmitView onNavigate={navigate} currentUser={currentUser} onAddChallenge={handleAddChallenge} />;
  if (currentPath === '/citizen/dashboard') return <PortalLayout role="Citizen"><CitizenDashboardView challenges={challenges} onNavigate={navigate} setSelectedChallenge={setSelectedChallenge} /></PortalLayout>;
  if (currentPath === '/citizen/my-challenges') return <PortalLayout role="Citizen"><CitizenMyChallengesView challenges={challenges} /></PortalLayout>;

  // Student Routes
  if (currentPath === '/student/dashboard') return <PortalLayout role="Student"><StudentDashboardView challenges={challenges} onNavigate={navigate} /></PortalLayout>;
  if (currentPath === '/student/recommended') return <PortalLayout role="Student"><StudentRecommendedView challenges={challenges} /></PortalLayout>;
  if (currentPath === '/student/projects') return <PortalLayout role="Student"><PlaceholderView title="Active Projects" /></PortalLayout>;
  if (currentPath === '/student/teams') return <PortalLayout role="Student"><PlaceholderView title="My Teams" /></PortalLayout>;
  if (currentPath === '/student/account') return <PortalLayout role="Student"><StudentAccountView /></PortalLayout>;

  // Industry Routes
  if (currentPath === '/industry/dashboard') return <PortalLayout role="Industry"><IndustryDashboardView challenges={challenges} onNavigate={navigate} /></PortalLayout>;
  if (currentPath === '/industry/csr') return <PortalLayout role="Industry"><IndustryCSRView /></PortalLayout>;
  if (currentPath === '/industry/projects') return <PortalLayout role="Industry"><PlaceholderView title="Funded Projects" /></PortalLayout>;
  if (currentPath === '/industry/mentorship') return <PortalLayout role="Industry"><IndustryMentorshipView /></PortalLayout>;

  // Fallback
  return (
    <div className="flex flex-col items-center justify-center h-screen">
       <h1 className="text-4xl font-bold text-gray-800">404 - Page Not Found</h1>
       <button onClick={() => navigate('/')} className="mt-4 btn-primary">Go Home</button>
    </div>
  );
}
