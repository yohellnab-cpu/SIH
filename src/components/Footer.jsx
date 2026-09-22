import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-gray-300 py-10 border-t-4 border-[#ff7f00]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Section */}
        <div className="flex flex-col md:flex-row gap-8 pb-8 border-b border-gray-600">
          
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/assets/images/app_logo.png" alt="Gov Logo" className="w-10 h-10 object-contain brightness-0 invert opacity-90" />
              <div className="flex flex-col">
                <span className="font-bold text-white text-lg leading-tight uppercase tracking-wide">Government of Jharkhand</span>
                <span className="text-sm text-gray-300">Department of Innovation & IT</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 max-w-xs mb-4">
              A state-wide initiative connecting citizens, universities, and industries to solve ground-level societal challenges.
            </p>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> 1800-345-6542 (Toll Free)</span>
              <span className="flex items-center gap-2"><Mail className="w-4 h-4" /> support.sih@jharkhand.gov.in</span>
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Project Building, Dhurwa, Ranchi, 834004</span>
            </div>
          </div>

          <div className="flex-1">
             <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Quick Links</h3>
             <ul className="space-y-2 text-sm text-gray-400">
               <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
               <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Challenge Domains</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Citizen Dashboard</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Nodal Officer Login</a></li>
             </ul>
          </div>

          <div className="flex-1">
             <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Policies</h3>
             <ul className="space-y-2 text-sm text-gray-400">
               <li><a href="#" className="hover:text-white transition-colors">Website Policies</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Help</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Terms and Conditions</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Web Information Manager</a></li>
             </ul>
          </div>

        </div>

        {/* Bottom Footer Section */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© 2026 Government of Jharkhand. All Rights Reserved.</p>
          <div className="flex gap-4">
             <p>Designed & Developed by NIC, Jharkhand</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
