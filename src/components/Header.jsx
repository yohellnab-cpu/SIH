import React from 'react';
import { Menu } from 'lucide-react';

export default function Header({ onNavigate, isScrolled }) {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b border-border ${
      isScrolled ? 'bg-background shadow-sm' : 'bg-background'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo & Branding */}
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => onNavigate('/')}
          >
            <img 
              src="/assets/images/app_logo.png" 
              alt="Government Emblem" 
              className="w-19 h-12 object-contain"
            />
            <div className="flex flex-col">
              <span className="font-bold text-secondary text-xl leading-tight">Nav Nirmarn</span>
              <span className="font-bold text-secondary text-xl leading-tight">Portal</span>
            </div>
            <img 
              src="/assets/images/emblem.png" 
              alt="Government Emblem" 
              className="w-12 h-12 object-contain"
            /><img 
              src="/assets/images/sih-removebg-preview.png" 
              alt="Government Emblem" 
              className="w-12 h-12 object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => onNavigate('/')} className="text-gray-800 font-medium text-sm hover:text-accent border-b-2 border-transparent hover:border-accent transition-colors">Home</button>
            <button onClick={() => onNavigate('/about')} className="text-gray-800 font-medium text-sm hover:text-accent border-b-2 border-transparent hover:border-accent transition-colors">About Us</button>
            <button onClick={() => onNavigate('/domains')} className="text-gray-800 font-medium text-sm hover:text-accent border-b-2 border-transparent hover:border-accent transition-colors">Challenge Domains</button>
            <button onClick={() => onNavigate('/success-stories')} className="text-gray-800 font-medium text-sm hover:text-accent border-b-2 border-transparent hover:border-accent transition-colors">Success Stories</button>
            <button onClick={() => onNavigate('/role-selection-demo-login')} className="text-gray-800 font-medium text-sm hover:text-accent border-b-2 border-transparent hover:border-accent transition-colors">Dashboard</button>
            <button 
              onClick={() => onNavigate('/role-selection-demo-login')}
              className="ml-4 border border-gray-200 bg-transparent text-gray-800 font-medium text-sm px-4 py-1.5 hover:bg-gray-100 transition-colors"
            >
              Login/Register
            </button>
          </nav>

          {/* Mobile Menu */}
          <button className="md:hidden p-2 text-gray-600">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
