import React, { useState } from 'react';

interface QuoteTier {
  id: string;
  name: string;
  eta: string;
  price: number;
  highlight?: string;
}

interface QuoteResultProps {
  onSelectTier: (tierId: string) => void;
}

export default function QuoteResult({ onSelectTier }: QuoteResultProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const tiers: QuoteTier[] = [
    { id: 'surface', name: 'Surface Core', eta: '5-7 Days', price: 450, highlight: 'Most popular' },
    { id: 'express', name: 'Express Air', eta: '2-3 Days', price: 980 },
    { id: 'nextday', name: 'Hyperspeed Priority', eta: 'Tomorrow', price: 1500 }
  ];

  const handleSelect = (id: string) => {
    setSelected(id);
    setTimeout(() => {
      onSelectTier(id);
    }, 350);
  };

  return (
    <div className="w-full animate-in slide-in-from-bottom-8 fade-in duration-500">
      <h3 className="text-3xl font-black text-shipzy-dark mb-8 tracking-tight">Select your cadence.</h3>
      
      <div className="space-y-4">
        {tiers.map((tier) => (
          <div 
            key={tier.id}
            onClick={() => handleSelect(tier.id)}
            className={`cursor-pointer p-4 sm:p-6 rounded-2xl border-2 transition-all duration-200 flex items-center justify-between gap-2 sm:gap-4 group ${
              selected === tier.id 
                ? 'border-shipzy-green bg-shipzy-green/5 scale-[1.01] shadow-lg shadow-shipzy-green/10' 
                : 'border-shipzy-dark/10 bg-shipzy-white hover:border-shipzy-dark/50 hover:shadow-md'
            }`}
          >
            <div className="flex flex-col flex-1 shrink">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-3 mb-1">
                <span className="font-bold text-base sm:text-lg text-shipzy-dark tracking-wide">{tier.name}</span>
                {tier.highlight && (
                  <span className="text-[8px] sm:text-[10px] uppercase tracking-wider sm:tracking-widest bg-shipzy-dark text-shipzy-green px-2 py-0.5 sm:py-1 rounded-full font-bold shadow-sm whitespace-nowrap">
                    {tier.highlight}
                  </span>
                )}
              </div>
              <span className="text-xs sm:text-sm font-semibold text-shipzy-dark/50 flex items-center gap-1 sm:gap-1.5 uppercase tracking-widest">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-shipzy-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                ETA: {tier.eta}
              </span>
            </div>
            
            <div className="text-right shrink-0">
              <span className="block text-xl sm:text-2xl font-black text-shipzy-dark tracking-tight">₹{tier.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
