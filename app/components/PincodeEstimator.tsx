import React, { useState } from 'react';

interface PincodeEstimatorProps {
  onGetQuote: (pickup: string, delivery: string, weight: number) => void;
}

export default function PincodeEstimator({ onGetQuote }: PincodeEstimatorProps) {
  const [pickup, setPickup] = useState('');
  const [delivery, setDelivery] = useState('');
  const [weight, setWeight] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pickup && delivery && weight) {
      onGetQuote(pickup, delivery, parseFloat(weight));
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-3xl font-black text-shipzy-dark mb-8 tracking-tight">Ship your heavy freight instance.</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2 relative">
            <label className="text-xs font-bold text-shipzy-dark/50 ml-1 uppercase tracking-widest block">Pickup Node</label>
            <input 
              type="text" 
              maxLength={6}
              value={pickup}
              onChange={(e) => setPickup(e.target.value.replace(/\D/g, ''))}
              placeholder="e.g. 110001" 
              className="w-full px-5 py-4 rounded-2xl bg-shipzy-bg border border-shipzy-dark/5 focus:bg-shipzy-white focus:border-shipzy-green focus:ring-4 focus:ring-shipzy-green/20 outline-none text-shipzy-dark font-bold text-lg transition-all placeholder:font-medium placeholder:text-shipzy-dark/20"
              required
            />
          </div>
          <div className="space-y-2 relative">
            <label className="text-xs font-bold text-shipzy-dark/50 ml-1 uppercase tracking-widest block">Drop Node</label>
            <input 
              type="text" 
              maxLength={6}
              value={delivery}
              onChange={(e) => setDelivery(e.target.value.replace(/\D/g, ''))}
              placeholder="e.g. 560001" 
              className="w-full px-5 py-4 rounded-2xl bg-shipzy-bg border border-shipzy-dark/5 focus:bg-shipzy-white focus:border-shipzy-green focus:ring-4 focus:ring-shipzy-green/20 outline-none text-shipzy-dark font-bold text-lg transition-all placeholder:font-medium placeholder:text-shipzy-dark/20"
              required
            />
          </div>
        </div>

        <div className="space-y-2 relative">
          <label className="text-xs font-bold text-shipzy-dark/50 ml-1 uppercase tracking-widest block">Gross Weight (kg)</label>
          <input 
            type="number" 
            min="1"
            max="1000"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Min. 20kg" 
            className="w-full px-5 py-4 rounded-2xl bg-shipzy-bg border border-shipzy-dark/5 focus:bg-shipzy-white focus:border-shipzy-green focus:ring-4 focus:ring-shipzy-green/20 outline-none text-shipzy-dark font-bold text-lg transition-all placeholder:font-medium placeholder:text-shipzy-dark/20"
            required
          />
          {weight && Number(weight) > 20 && (
             <div className="absolute -bottom-10 left-0 text-xs text-shipzy-dark font-bold bg-shipzy-dark/5 px-3 py-1.5 rounded-full flex items-center gap-2 animate-in fade-in zoom-in-95">
               <span className="w-2 h-2 rounded-full bg-shipzy-green inline-block"></span> Heavy Freight Activated
             </div>
          )}
        </div>

        <button 
          type="submit" 
          className="w-full bg-shipzy-green hover:bg-[#12e578] text-shipzy-dark font-black py-5 rounded-full shadow-lg shadow-shipzy-green/20 hover:shadow-xl hover:shadow-shipzy-green/30 hover:-translate-y-0.5 transition-all outline-none focus:ring-4 focus:ring-shipzy-dark/10 active:scale-[0.98] text-lg flex items-center justify-center gap-2 !mt-10 tracking-wide"
        >
          GENERATE QUOTE
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </button>
      </form>
    </div>
  );
}
