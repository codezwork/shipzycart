"use client";

import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PincodeEstimator from './components/PincodeEstimator';
import QuoteResult from './components/QuoteResult';
import SenderReceiverForm from './components/SenderReceiverForm';

export default function Home() {
  const [step, setStep] = useState(1);
  const [details, setDetails] = useState({ pickup: "", delivery: "", weight: 0 });
  const [tier, setTier] = useState<string | null>(null);

  const handleGetQuote = (pickup: string, delivery: string, weight: number) => {
    setDetails({ pickup, delivery, weight });
    setStep(2);
  };

  const handleSelectTier = (tierId: string) => {
    setTier(tierId);
    setStep(3);
  };

  const handlePay = () => {
    alert("Payment Checkout Initiated (Razorpay Modal Mock)");
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-shipzy-dark bg-shipzy-bg">
      <Header />
      
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-2 relative">
        {/* LEFT COLUMN: BRAND ANCHOR */}
        <div className="order-2 lg:order-1 bg-shipzy-dark text-shipzy-white p-10 md:p-16 lg:p-20 flex flex-col justify-center border-r border-shipzy-dark z-10 lg:sticky lg:top-[81px] lg:h-[calc(100vh-81px)] overflow-hidden">
          <div className="max-w-xl mx-auto lg:mx-0 relative z-10">
            <div className="inline-block px-4 py-2 bg-shipzy-green/10 text-shipzy-green rounded-full font-bold text-xs uppercase tracking-widest mb-8 border border-shipzy-green/20">
              Shipzy Direct PoC by <a href="https://www.mambaclub.site/" target='_blank'><span style={{color:"#ff0000"}}>MAMBA MEDIA</span></a>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-[1] tracking-tighter">
              Heavy Freight. <br />
              <span className="text-shipzy-green">Feather Light.</span>
            </h1>
            <p className="text-lg md:text-xl font-medium text-shipzy-white/60 mb-12 max-w-md leading-relaxed">
              The premium self-service portal for intelligent B2B and bulk logistics execution. Seamless, reliable, and beautifully direct.
            </p>
            
            <div className="space-y-6">
              {[
                "Trusted by 45,000+ businesses",
                "Transparent zero-hidden-fee pricing",
                "Real-time satellite tracking",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-shipzy-green/20 flex items-center justify-center text-shipzy-green font-bold text-sm shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="text-base font-semibold text-shipzy-white hover:text-shipzy-green transition-colors cursor-default">{text}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Ambient light for Brutalism contrast */}
          <div className="absolute opacity-10 bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-shipzy-green to-transparent mix-blend-overlay pointer-events-none"></div>
        </div>

        {/* RIGHT COLUMN: BOOKING ENGINE */}
        <div className="order-1 lg:order-2 bg-shipzy-white lg:bg-shipzy-bg p-4 md:p-10 lg:p-16 overflow-y-auto pb-32">
          
          <div className="w-full max-w-2xl mx-auto relative lg:-top-4">
             {/* Progress Ledger */}
             <div className="mb-8">
               {step > 1 && (
                 <div className="flex flex-wrap md:flex-nowrap md:gap-4 gap-3 text-xs md:text-sm font-semibold text-shipzy-dark bg-shipzy-white p-4 sm:p-5 sm:rounded-[2rem] rounded-2xl shadow-sm border border-shipzy-dark/5 items-center animate-in slide-in-from-top-4 fade-in">
                   <div className="flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-shipzy-green shrink-0 shadow-sm shadow-shipzy-green"></span>
                     <span className="truncate max-w-[80px] sm:max-w-none">{details.pickup}</span> 
                     <span className="opacity-30">→</span> 
                     <span className="truncate max-w-[80px] sm:max-w-none">{details.delivery}</span>
                   </div>
                   <div className="md:pl-4 pl-2 border-l border-shipzy-dark/10 text-shipzy-dark/50 shrink-0">
                     {details.weight}kg
                   </div>
                   {step > 2 && tier && (
                     <div className="md:pl-4 pl-2 border-l border-shipzy-dark/10 text-shipzy-dark font-black shrink-0">
                       {tier.toUpperCase()}
                     </div>
                   )}
                   <button onClick={() => setStep(1)} className="ml-auto underline hover:text-shipzy-green transition-colors font-bold text-[10px] uppercase tracking-widest bg-shipzy-bg px-3 py-1.5 rounded-full border border-shipzy-dark/5">
                     Change
                   </button>
                 </div>
               )}
             </div>

             {/* Forms Component Wrapper */}
             <div className="bg-shipzy-white sm:shadow-2xl shadow-shipzy-dark/5 sm:rounded-[2.5rem] rounded-3xl border border-shipzy-dark/5 sm:p-10 p-6 relative z-20">
                {step === 1 && <PincodeEstimator onGetQuote={handleGetQuote} />}
                {step === 2 && <QuoteResult onSelectTier={handleSelectTier} />}
                {step === 3 && <SenderReceiverForm onPay={handlePay} />}
             </div>
          </div>
          
        </div>
      </main>

      <Footer />
    </div>
  );
}
