import React, { useState } from 'react';
import { FileText, Eye, CheckCircle2, Clock } from 'lucide-react';

export default function CitizenMyChallengesView({ challenges }) {
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [activeReport, setActiveReport] = useState(null);

  const openReport = (challenge) => {
    setActiveReport(challenge);
    setReportModalOpen(true);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="bg-white p-6 border border-gray-200 shadow-sm">
        <h2 className="text-xl font-bold text-secondary uppercase tracking-wide mb-2">My Submitted Challenges</h2>
        <p className="text-sm text-gray-600 mb-6">Track the progress of the issues you have reported to Nav Nirmarn.</p>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b-2 border-gray-200 text-xs uppercase tracking-wider text-gray-700">
                <th className="p-3 font-bold">Challenge Title</th>
                <th className="p-3 font-bold">Domain</th>
                <th className="p-3 font-bold">Date Submitted</th>
                <th className="p-3 font-bold">Current Phase</th>
                <th className="p-3 font-bold">Resolution</th>
                <th className="p-3 font-bold text-center">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-800">
              {challenges.slice(0, 4).map((c, i) => (
                <tr key={c.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="p-3 font-bold max-w-[250px] truncate">{c.title}</td>
                  <td className="p-3">
                    <span className="bg-gray-200 text-gray-800 text-[10px] px-2 py-1 font-bold uppercase border border-gray-200">
                      {c.domain}
                    </span>
                  </td>
                  <td className="p-3 whitespace-nowrap text-gray-600 font-medium">{c.submittedDate}</td>
                  <td className="p-3">
                    <span className={`text-[10px] px-2 py-1 font-bold uppercase border ${i === 0 ? 'bg-green-100 text-green-800 border-green-300' : 'bg-blue-100 text-blue-800 border-blue-300'}`}>
                      {c.status}
                    </span>
                  </td>
                  <td className="p-3">
                    {i === 0 ? (
                      <span className="flex items-center gap-1 text-green-700 font-bold text-xs"><CheckCircle2 className="w-4 h-4"/> Solved</span>
                    ) : (
                      <span className="flex items-center gap-1 text-orange-600 font-bold text-xs"><Clock className="w-4 h-4"/> In Progress</span>
                    )}
                  </td>
                  <td className="p-3 text-center">
                    <button 
                      onClick={() => openReport(c)}
                      className="bg-transparent border border-primary/20 text-primary hover:bg-primary hover:text-white px-3 py-1.5 text-xs font-bold transition-colors inline-flex items-center gap-1"
                    >
                      <Eye className="w-3 h-3" /> View Report
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {reportModalOpen && activeReport && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white max-w-3xl w-full border border-gray-200 shadow-sm flex flex-col max-h-[90vh]">
            <div className="bg-secondary p-4 flex justify-between items-center text-white border-b border-accent/20">
              <h2 className="text-lg font-bold uppercase tracking-wider">Official Action Report</h2>
              <button onClick={() => setReportModalOpen(false)} className="text-white hover:text-gray-200 font-bold text-xl">&times;</button>
            </div>
            <div className="p-6 overflow-y-auto">
              <div className="flex justify-between items-start border-b border-gray-200 pb-4 mb-4">
                <div>
                  <p className="text-xs text-gray-500 font-bold tracking-widest uppercase mb-1">Challenge ID: {activeReport.id}</p>
                  <h3 className="text-xl font-bold text-gray-800">{activeReport.title}</h3>
                </div>
                <span className="bg-green-100 text-green-800 border border-green-300 text-xs px-3 py-1 font-bold uppercase">
                  Active Intervention
                </span>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-primary uppercase border-b border-gray-200 pb-1 mb-3">Timeline of Actions</h4>
                  <ul className="space-y-4">
                    {activeReport.milestones?.map((m, i) => (
                      <li key={i} className="flex gap-4 items-start">
                        <div className={`mt-0.5 w-5 h-5 flex items-center justify-center border ${m.done ? 'bg-green-600 border-green-700 text-white' : 'bg-gray-100 border-gray-200 text-transparent'}`}>
                          {m.done && <CheckCircle2 className="w-3 h-3" />}
                        </div>
                        <div>
                          <p className={`text-sm font-bold ${m.done ? 'text-gray-800' : 'text-gray-500'}`}>{m.title}</p>
                          <p className="text-xs text-gray-500">{m.done ? 'Completed and verified by Nodal Officer.' : 'Pending initiation.'}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-4">
                  <h4 className="text-sm font-bold text-primary uppercase mb-2">Stakeholder Involvement</h4>
                  <p className="text-sm text-gray-800"><strong>Academic Partner:</strong> {activeReport.matchedStudent}</p>
                  <p className="text-sm text-gray-800"><strong>Industry Sponsor:</strong> Pending / Ongoing</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-gray-100 border-t border-gray-200 text-right">
              <button onClick={() => setReportModalOpen(false)} className="btn-outline text-xs py-1.5 px-4">Close Report</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
