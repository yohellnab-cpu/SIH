import React, { useState } from 'react';
import { MapPin, IndianRupee, Building2, ArrowRight } from 'lucide-react';

export default function IndustryCSRView() {
  // Generate 12 mock opportunities
  const opportunities = Array.from({ length: 12 }).map((_, i) => ({
    id: `CSR-${2026}-${1000 + i}`,
    title: [
      "Solar-Powered Cold Storage Unit",
      "AI-Based Anemia Screening Tool",
      "Smart IoT Water ATM for Rural Schools",
      "Waste Segregation Blockchain Tracker",
      "Drone-based Crop Disease Analysis",
      "Low-Cost Portable Tele-Clinic",
      "Biodegradable Sanitary Pad Manufacturing",
      "Automated Canal Irrigation Valve",
      "Tribal Language Translation Engine",
      "Smart Traffic Management System",
      "Aquaponics Kit for Small Farmers",
      "Groundwater Recharge Sensor Network"
    ][i],
    domain: [
      "Agriculture", "Healthcare", "Water Resources", "Sanitation",
      "Agriculture", "Healthcare", "Women Empowerment", "Agriculture",
      "Education", "Smart Mobility", "Agriculture", "Environment"
    ][i],
    organization: [
      "BIT Mesra", "NIT Jamshedpur", "IIT (ISM) Dhanbad", "CUJ Ranchi",
      "BIT Sindri", "RIMS Ranchi", "Women's College", "BAU Ranchi",
      "Tribal Research Institute", "IIIT Ranchi", "BAU Ranchi", "BIT Mesra"
    ][i],
    funding: [
      "₹12.5 Lakhs", "₹8.0 Lakhs", "₹5.5 Lakhs", "₹15.0 Lakhs",
      "₹22.0 Lakhs", "₹45.0 Lakhs", "₹3.5 Lakhs", "₹6.0 Lakhs",
      "₹4.0 Lakhs", "₹32.0 Lakhs", "₹2.5 Lakhs", "₹18.0 Lakhs"
    ][i],
    location: [
      "Ranchi", "Dumka", "Dhanbad", "Ranchi",
      "Bokaro", "Khunti", "Jamshedpur", "Palamu",
      "Gumla", "Ranchi", "Deoghar", "Hazaribagh"
    ][i],
    status: i % 3 === 0 ? "Seeking Full Funding" : (i % 2 === 0 ? "Partial Funding Needs" : "Mentorship Required")
  }));

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      
      <div className="bg-white p-6 border border-gray-200 shadow-sm">
        <h2 className="text-xl font-bold text-secondary uppercase tracking-wide mb-1">CSR Opportunities</h2>
        <p className="text-sm text-gray-600 mb-6">Invest your CSR funds into verified, high-impact prototypes developed by academic partners.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {opportunities.map((opp) => (
            <div key={opp.id} className="bg-white border border-gray-200 p-4 shadow-sm flex flex-col justify-between hover:border-primary/20 transition-colors">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">{opp.id}</span>
                  <span className={`text-[10px] px-2 py-0.5 font-bold uppercase ${
                    opp.status === 'Seeking Full Funding' ? 'bg-red-50 text-red-700 border border-red-200' :
                    opp.status === 'Partial Funding Needs' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                    'bg-blue-50 text-blue-700 border border-blue-200'
                  }`}>
                    {opp.status}
                  </span>
                </div>
                
                <h3 className="font-bold text-gray-800 text-sm mb-1 leading-tight line-clamp-2 min-h-[40px]">{opp.title}</h3>
                
                <span className="inline-block bg-gray-100 text-gray-700 text-[10px] px-2 py-1 uppercase font-bold border border-gray-200 mb-4">
                  {opp.domain}
                </span>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <Building2 className="w-3.5 h-3.5 text-primary" />
                    <span className="font-medium truncate">{opp.organization}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <IndianRupee className="w-3.5 h-3.5 text-secondary" />
                    <span className="font-bold text-gray-800">{opp.funding}</span> <span className="text-[10px]">required</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <MapPin className="w-3.5 h-3.5 text-accent" />
                    <span>Deploying in: <strong>{opp.location}</strong></span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-gray-50 hover:bg-primary text-primary hover:text-white border border-primary/20 transition-colors text-xs font-bold py-2 flex items-center justify-center gap-1.5 uppercase tracking-wider">
                View Details <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
