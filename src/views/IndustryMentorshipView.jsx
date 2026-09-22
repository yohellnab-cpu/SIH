import React from 'react';
import { Users, GraduationCap, Video, Mail, Calendar } from 'lucide-react';

export default function IndustryMentorshipView() {
  const mentors = [
    {
      id: 1,
      name: "Dr. Rajiv Sharma",
      role: "Faculty Lead - WaterTech",
      institute: "BIT Mesra",
      students: 12,
      activeProjects: 3,
      domain: "Water Resources"
    },
    {
      id: 2,
      name: "Prof. Sunita Kerketta",
      role: "Head of AI Lab",
      institute: "NIT Jamshedpur",
      students: 8,
      activeProjects: 2,
      domain: "Healthcare"
    },
    {
      id: 3,
      name: "Dr. A.K. Singh",
      role: "Dept of Agriculture",
      institute: "BAU Ranchi",
      students: 15,
      activeProjects: 4,
      domain: "Agriculture"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      
      <div className="bg-white p-6 border border-gray-200 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold text-secondary uppercase tracking-wide mb-1">Mentorship Directory</h2>
            <p className="text-sm text-gray-600">Connect with faculty leads to guide student teams developing solutions for your CSR projects.</p>
          </div>
          <button className="bg-secondary text-white font-bold text-xs uppercase tracking-wider px-4 py-2 flex items-center gap-2 border border-secondary/20">
            <Calendar className="w-4 h-4" /> Schedule Group Session
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b-2 border-gray-200 text-xs uppercase tracking-wider text-gray-700">
                <th className="p-4 font-bold">Faculty Profile</th>
                <th className="p-4 font-bold">Institute</th>
                <th className="p-4 font-bold">Domain</th>
                <th className="p-4 font-bold text-center">Mentee Students</th>
                <th className="p-4 font-bold text-center">Active CSR Projects</th>
                <th className="p-4 font-bold text-center">Connect</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-800">
              {mentors.map((m) => (
                <tr key={m.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                        {m.name.charAt(4)}
                      </div>
                      <div>
                        <p className="font-bold text-gray-800">{m.name}</p>
                        <p className="text-xs text-gray-500">{m.role}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2 text-gray-700">
                      <GraduationCap className="w-4 h-4 text-gray-400" />
                      <span className="font-medium">{m.institute}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="bg-gray-200 text-gray-800 text-[10px] px-2 py-1 font-bold uppercase border border-gray-200">
                      {m.domain}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex items-center justify-center gap-1 font-bold">
                      <Users className="w-4 h-4 text-primary" /> {m.students}
                    </div>
                  </td>
                  <td className="p-4 text-center font-bold text-green-700">
                    {m.activeProjects}
                  </td>
                  <td className="p-4">
                    <div className="flex justify-center gap-2">
                      <button className="p-2 border border-gray-200 bg-white hover:bg-gray-100 hover:border-gray-200 text-gray-700 transition-colors" title="Send Message">
                        <Mail className="w-4 h-4" />
                      </button>
                      <button className="p-2 border border-primary/20 bg-white hover:bg-primary hover:text-white text-primary transition-colors" title="Schedule Video Call">
                        <Video className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
