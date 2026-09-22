import React, { useState } from 'react';
import { User, FileText, Briefcase, GraduationCap, Award, CheckCircle2, Shield, Eye, EyeOff } from 'lucide-react';

export default function StudentAccountView() {
  const [showAadhaar, setShowAadhaar] = useState(false);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      {/* Profile Header */}
      <div className="bg-white border border-gray-200 shadow-sm flex flex-col md:flex-row items-center p-6 gap-6">
        <div className="w-24 h-24 bg-primary text-white flex items-center justify-center text-3xl font-bold border-4 border-gray-100 shadow-sm">
          RS
        </div>
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-2xl font-bold text-gray-800">Dr. Rajiv Sharma</h1>
          <p className="text-sm font-bold text-secondary uppercase tracking-wide mt-1">Faculty Mentor / Lead Researcher</p>
          <p className="text-sm text-gray-600 mt-1">BIT Mesra, Ranchi • Environmental Engineering Dept.</p>
        </div>
        <button className="btn-outline text-xs mt-4 md:mt-0 px-4 py-2">Edit Profile</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Left Column - Sensitive Info & Quick Links */}
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 shadow-sm p-5">
            <h3 className="flex items-center gap-2 text-sm font-bold text-secondary uppercase border-b border-gray-200 pb-2 mb-4">
              <Shield className="w-4 h-4" /> Identity Verification
            </h3>
            
            <div className="mb-4">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Aadhaar Number</label>
              <div className="flex items-center justify-between bg-gray-50 border border-gray-200 p-2">
                <span className="font-mono text-sm tracking-widest text-gray-800">
                  {showAadhaar ? "4829 1042 9942" : "XXXX XXXX 9942"}
                </span>
                <button onClick={() => setShowAadhaar(!showAadhaar)} className="text-gray-500 hover:text-primary">
                  {showAadhaar ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">KYC Status</label>
              <div className="flex items-center gap-2 text-green-700 text-sm font-bold bg-green-50 p-2 border border-green-200">
                <CheckCircle2 className="w-4 h-4" /> Verified via UIDAI
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 shadow-sm p-5">
             <h3 className="flex items-center gap-2 text-sm font-bold text-secondary uppercase border-b border-gray-200 pb-2 mb-4">
              <FileText className="w-4 h-4" /> Documents
            </h3>
            <button className="w-full flex items-center justify-between p-3 border border-gray-200 hover:bg-gray-50 mb-3 transition-colors">
              <span className="text-sm font-bold text-gray-700">Resume_Rajiv_Sharma.pdf</span>
              <span className="text-xs text-primary font-bold">Update</span>
            </button>
            <button className="w-full flex items-center justify-between p-3 border border-gray-200 hover:bg-gray-50 transition-colors">
              <span className="text-sm font-bold text-gray-700">Faculty_ID_BIT.jpg</span>
              <span className="text-xs text-primary font-bold">Update</span>
            </button>
          </div>
        </div>

        {/* Right Column - Professional Details */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white border border-gray-200 shadow-sm p-6">
             <h3 className="flex items-center gap-2 text-sm font-bold text-secondary uppercase border-b border-gray-200 pb-2 mb-4">
              <GraduationCap className="w-4 h-4" /> Education & Qualifications
            </h3>
            <ul className="space-y-4">
              <li>
                <h4 className="font-bold text-gray-800">Ph.D. in Environmental Engineering</h4>
                <p className="text-sm text-gray-600">Indian Institute of Technology (IIT), Kharagpur • 2012</p>
              </li>
              <li>
                <h4 className="font-bold text-gray-800">M.Tech in Water Resource Management</h4>
                <p className="text-sm text-gray-600">NIT Jamshedpur • 2008</p>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 shadow-sm p-6">
             <h3 className="flex items-center gap-2 text-sm font-bold text-secondary uppercase border-b border-gray-200 pb-2 mb-4">
              <Briefcase className="w-4 h-4" /> Professional Experience
            </h3>
            <ul className="space-y-4">
              <li>
                <h4 className="font-bold text-gray-800">Associate Professor</h4>
                <p className="text-sm text-gray-600">BIT Mesra, Ranchi • 2018 - Present</p>
                <p className="text-xs text-gray-500 mt-1">Leading the IoT and Clean Water Tech lab, mentoring 40+ postgraduate students.</p>
              </li>
              <li>
                <h4 className="font-bold text-gray-800">Research Scientist</h4>
                <p className="text-sm text-gray-600">CSIR-NEERI, Nagpur • 2013 - 2018</p>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 shadow-sm p-6">
             <h3 className="flex items-center gap-2 text-sm font-bold text-secondary uppercase border-b border-gray-200 pb-2 mb-4">
              <Award className="w-4 h-4" /> Skills & Certifications
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {['Water Quality Monitoring', 'IoT Sensors', 'Hydrogeology', 'Waste Management', 'Project Management'].map(skill => (
                <span key={skill} className="bg-gray-100 border border-gray-200 text-gray-800 text-xs font-bold px-3 py-1 uppercase">{skill}</span>
              ))}
            </div>
            
            <h4 className="font-bold text-gray-800 text-sm mb-2">Certifications</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-green-600" /> NPTEL IoT Architecture Design
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-green-600" /> ISO 14001 Lead Auditor
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
