"use client";

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function B2BPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-shipzy-dark bg-shipzy-bg">
      <Header />
      <main className="flex-1 w-full max-w-6xl mx-auto px-6 sm:px-12 py-20 lg:py-32">
        {/* Hero Section */}
        <section className="mb-24">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] mb-8 max-w-4xl">
            Scale Your Logistics with Shipzy B2B.
          </h1>
          <p className="text-xl text-shipzy-dark/60 font-medium max-w-2xl">
            Enterprise-grade infrastructure. Ironclad SLAs. Seamless integration for high-volume supply chains.
          </p>
        </section>

        {/* Value Props Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-32 border-t border-shipzy-dark/10 pt-16">
          <div>
            <h3 className="text-2xl font-black mb-4 tracking-tight">Bulk Freight</h3>
            <p className="text-shipzy-dark/70 font-medium leading-relaxed">
              Optimized LTL and FTL operations with dynamic routing algorithms. We move heavy cargo with precision.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-black mb-4 tracking-tight">Custom SLA Adherence</h3>
            <p className="text-shipzy-dark/70 font-medium leading-relaxed">
              Strict delivery timelines backed by proactive anomaly detection. We ensure your promises are met.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-black mb-4 tracking-tight">Dedicated Account Manager</h3>
            <p className="text-shipzy-dark/70 font-medium leading-relaxed">
              Direct access to a logistics expert 24/7. No support queues, just immediate, actionable resolutions.
            </p>
          </div>
        </section>

        {/* Enquiry Module */}
        <section className="max-w-3xl">
          <div className="bg-shipzy-white p-8 md:p-12 lg:p-16 border border-shipzy-dark/5 shadow-2xl shadow-shipzy-dark/5 cursor-default">
            
            {isSubmitted ? (
              <div className="animate-in fade-in zoom-in duration-300 text-center py-12">
                <div className="w-16 h-16 bg-shipzy-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-shipzy-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-3xl font-black tracking-tight mb-2">Request Received</h3>
                <p className="text-shipzy-dark/60 font-medium text-lg">Our enterprise team will contact you shortly.</p>
              </div>
            ) : (
              <>
                <h2 className="text-3xl lg:text-4xl font-black tracking-tight mb-8">General Enquiry</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-widest text-shipzy-dark/60">Company Name</label>
                      <input required type="text" className="w-full bg-[#f4f7f9] border border-transparent focus:border-shipzy-dark px-4 py-3 outline-none font-medium transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-widest text-shipzy-dark/60">Contact Person</label>
                      <input required type="text" className="w-full bg-[#f4f7f9] border border-transparent focus:border-shipzy-dark px-4 py-3 outline-none font-medium transition-colors" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-widest text-shipzy-dark/60">Expected Monthly Volume</label>
                    <select className="w-full bg-[#f4f7f9] border border-transparent focus:border-shipzy-dark px-4 py-3 outline-none font-medium transition-colors appearance-none" defaultValue="">
                      <option value="" disabled>Select volume</option>
                      <option value="10-50">10 - 50 tons</option>
                      <option value="50-200">50 - 200 tons</option>
                      <option value="200+">200+ tons</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-widest text-shipzy-dark/60">Requirements</label>
                    <textarea required rows={4} className="w-full bg-[#f4f7f9] border border-transparent focus:border-shipzy-dark px-4 py-3 outline-none font-medium transition-colors resize-none"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-shipzy-dark text-shipzy-white font-bold text-lg px-8 py-4 uppercase tracking-widest hover:bg-black transition-colors mt-4">
                    Submit Enquiry
                  </button>
                </form>
              </>
            )}

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
