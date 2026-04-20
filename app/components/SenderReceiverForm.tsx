import React, { useState } from 'react';

interface SenderReceiverFormProps {
  onPay: () => void;
}

export default function SenderReceiverForm({ onPay }: SenderReceiverFormProps) {
  const [insurance, setInsurance] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onPay();
  };

  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-8 duration-500">
      <h3 className="text-3xl font-black text-shipzy-dark mb-8 tracking-tight">Final Details.</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-10">
        
        {/* Forms */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-shipzy-dark/50 uppercase tracking-widest border-b border-shipzy-dark/10 pb-2">Sender Node</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name" required className="w-full px-4 py-3 rounded-xl bg-shipzy-bg border border-shipzy-dark/5 focus:bg-shipzy-white focus:border-shipzy-green focus:ring-4 focus:ring-shipzy-green/20 outline-none text-shipzy-dark font-semibold font-sans transition-all placeholder:font-medium placeholder:text-shipzy-dark/30" />
              <input type="tel" placeholder="Phone Number" required className="w-full px-4 py-3 rounded-xl bg-shipzy-bg border border-shipzy-dark/5 focus:bg-shipzy-white focus:border-shipzy-green focus:ring-4 focus:ring-shipzy-green/20 outline-none text-shipzy-dark font-semibold transition-all placeholder:font-medium placeholder:text-shipzy-dark/30" />
              <input type="text" placeholder="Complete Address" required className="w-full px-4 py-3 rounded-xl bg-shipzy-bg border border-shipzy-dark/5 focus:bg-shipzy-white focus:border-shipzy-green focus:ring-4 focus:ring-shipzy-green/20 outline-none text-shipzy-dark font-semibold transition-all placeholder:font-medium placeholder:text-shipzy-dark/30 md:col-span-2" />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold text-shipzy-dark/50 uppercase tracking-widest border-b border-shipzy-dark/10 pb-2">Receiver Node</h4>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name" required className="w-full px-4 py-3 rounded-xl bg-shipzy-bg border border-shipzy-dark/5 focus:bg-shipzy-white focus:border-shipzy-green focus:ring-4 focus:ring-shipzy-green/20 outline-none text-shipzy-dark font-semibold font-sans transition-all placeholder:font-medium placeholder:text-shipzy-dark/30" />
              <input type="tel" placeholder="Phone Number" required className="w-full px-4 py-3 rounded-xl bg-shipzy-bg border border-shipzy-dark/5 focus:bg-shipzy-white focus:border-shipzy-green focus:ring-4 focus:ring-shipzy-green/20 outline-none text-shipzy-dark font-semibold transition-all placeholder:font-medium placeholder:text-shipzy-dark/30" />
              <input type="text" placeholder="Complete Address" required className="w-full px-4 py-3 rounded-xl bg-shipzy-bg border border-shipzy-dark/5 focus:bg-shipzy-white focus:border-shipzy-green focus:ring-4 focus:ring-shipzy-green/20 outline-none text-shipzy-dark font-semibold transition-all placeholder:font-medium placeholder:text-shipzy-dark/30 md:col-span-2" />
            </div>
          </div>
        </div>

        {/* Action Bottom */}
        <div className="bg-shipzy-bg p-5 rounded-2xl border border-shipzy-dark/5">
           <div className="space-y-2 mb-6">
              <div className="flex justify-between text-sm text-shipzy-dark/70 font-semibold">
                <span>Base Rate</span>
                <span>₹450</span>
              </div>
              
              <label className="flex items-center gap-3 py-2 cursor-pointer group">
                <div className="relative flex items-center justify-center">
                  <input 
                    type="checkbox" 
                    checked={insurance}
                    onChange={(e) => setInsurance(e.target.checked)}
                    className="peer appearance-none w-5 h-5 border-2 border-shipzy-dark/20 rounded-md checked:bg-shipzy-green checked:border-shipzy-green transition-all" 
                  />
                  <svg className="absolute w-3 h-3 text-shipzy-dark opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-shipzy-dark tracking-wide">Shield Protocol (+₹100)</span>
                  <span className="text-xs font-semibold text-shipzy-dark/50">Comprehensive transit insurance.</span>
                </div>
              </label>

              <div className="border-t border-shipzy-dark/10 pt-4 flex justify-between items-end mt-2">
                <span className="text-sm font-bold text-shipzy-dark uppercase tracking-widest">Total Pay</span>
                <span className="text-3xl font-black text-shipzy-dark tracking-tighter">
                  ₹{450 + (insurance ? 100 : 0)}
                </span>
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full bg-shipzy-dark hover:bg-black text-shipzy-green font-black py-4 rounded-full shadow-xl shadow-shipzy-dark/20 hover:-translate-y-0.5 transition-all outline-none focus:ring-4 focus:ring-shipzy-green/50 active:scale-[0.98] text-lg flex items-center justify-center gap-2 tracking-widest uppercase"
            >
              PROCEED TO PAY
            </button>
            <p className="text-center text-[10px] text-shipzy-dark/40 font-bold mt-4 uppercase tracking-wider">
              Secured via Razorpay API
            </p>
        </div>
        
      </form>
    </div>
  );
}
