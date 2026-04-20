"use client";

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TrackPage() {
  const [awb, setAwb] = useState("");
  const [isSearched, setIsSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (awb.trim()) {
      setIsSearched(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-shipzy-dark bg-shipzy-bg">
      <Header />
      <main className="flex-1 flex flex-col items-center py-20 px-6 sm:px-12 w-full max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black mb-12 text-center tracking-tighter">
          Track Your Shipment.
        </h1>
        
        <form onSubmit={handleSearch} className="w-full max-w-2xl flex flex-col sm:flex-row gap-4 mb-16">
          <input 
            type="text" 
            placeholder="Enter AWB or Tracking ID" 
            className="flex-1 px-6 py-5 bg-shipzy-white border-2 border-shipzy-dark/10 focus:border-shipzy-dark outline-none font-semibold text-lg transition-all"
            value={awb}
            onChange={(e) => setAwb(e.target.value)}
          />
          <button 
            type="submit" 
            className="bg-shipzy-green text-shipzy-dark font-bold text-lg px-8 py-5 uppercase tracking-widest hover:bg-[#12e078] transition-colors"
          >
            Track
          </button>
        </form>

        {isSearched && (
          <div className="w-full animate-in slide-in-from-bottom-8 fade-in duration-500">
            {/* Meta Info Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-shipzy-white p-6 border border-shipzy-dark/5 shadow-sm">
                <span className="block text-xs font-bold text-shipzy-dark/50 uppercase tracking-widest mb-1">Status</span>
                <span className="block text-xl font-black text-shipzy-green">In Transit</span>
              </div>
              <div className="bg-shipzy-white p-6 border border-shipzy-dark/5 shadow-sm">
                <span className="block text-xs font-bold text-shipzy-dark/50 uppercase tracking-widest mb-1">Est. Delivery</span>
                <span className="block text-xl font-black">Oct 28</span>
              </div>
              <div className="bg-shipzy-white p-6 border border-shipzy-dark/5 shadow-sm">
                <span className="block text-xs font-bold text-shipzy-dark/50 uppercase tracking-widest mb-1">Weight</span>
                <span className="block text-xl font-black">24.5 kg</span>
              </div>
              <div className="bg-shipzy-white p-6 border border-shipzy-dark/5 shadow-sm">
                <span className="block text-xs font-bold text-shipzy-dark/50 uppercase tracking-widest mb-1">Location</span>
                <span className="block text-xl font-black">Nagpur Hub</span>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-shipzy-white p-8 md:p-12 border border-shipzy-dark/5 shadow-sm relative">
              <div className="absolute left-10 md:left-14 top-12 bottom-12 w-0.5 bg-shipzy-dark/10"></div>
              
              <div className="space-y-12 relative z-10">
                <div className="flex items-start gap-6">
                  <div className="w-5 h-5 rounded-full bg-shipzy-green border-4 border-shipzy-white shrink-0 mt-1 shadow-sm"></div>
                  <div>
                    <h4 className="text-xl font-bold tracking-tight mb-1">Processed at Nagpur Facility</h4>
                    <p className="text-shipzy-dark/60 font-medium font-mono text-sm">Oct 25, 08:42 AM</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-5 h-5 rounded-full bg-shipzy-green border-4 border-shipzy-white shrink-0 mt-1 shadow-sm"></div>
                  <div>
                    <h4 className="text-xl font-bold tracking-tight mb-1">Departed Mumbai Gateway</h4>
                    <p className="text-shipzy-dark/60 font-medium font-mono text-sm">Oct 24, 11:15 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-5 h-5 rounded-full bg-shipzy-green border-4 border-shipzy-white shrink-0 mt-1 shadow-sm"></div>
                  <div>
                    <h4 className="text-xl font-bold tracking-tight mb-1">Shipment Picked Up</h4>
                    <p className="text-shipzy-dark/60 font-medium font-mono text-sm">Oct 24, 02:30 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 opacity-30">
                  <div className="w-5 h-5 rounded-full bg-shipzy-dark/20 border-4 border-shipzy-white shrink-0 mt-1"></div>
                  <div>
                    <h4 className="text-xl font-bold tracking-tight mb-1">Label Generated</h4>
                    <p className="text-shipzy-dark/60 font-medium font-mono text-sm">Oct 24, 10:00 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
