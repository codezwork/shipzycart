"use client";

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const faqs = [
  {
    q: "What items are prohibited?",
    a: "We do not transport hazardous materials, flammables, perishable foods without prior approval, or illegal substances. Please consult our full Prohibited Items list before scheduling."
  },
  {
    q: "How do I claim insurance?",
    a: "Claims must be filed within 48 hours of delivery. Navigate to the Order Details page in your dashboard, click 'Report Issue', and upload the necessary photographic evidence and invoice copies."
  },
  {
    q: "Do you provide packing materials?",
    a: "For B2B bulk freight, shippers are responsible for proper palletization and securing. For select premium tiers, we offer specialized shrink-wrapping at the regional hub."
  },
  {
    q: "Can I change the delivery address in transit?",
    a: "Address rerouting is permitted only if the shipment has not reached the destination city gateway. It may incur an rerouting fee based on the new dimension and distance."
  }
];

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-shipzy-dark bg-shipzy-bg">
      <Header />
      <main className="flex-1 w-full max-w-4xl mx-auto px-6 sm:px-12 py-20 lg:py-32">
        <h1 className="text-5xl md:text-7xl font-black mb-16 tracking-tighter">
          How can we help?
        </h1>

        {/* Quick Contact Card */}
        <div className="bg-shipzy-dark text-shipzy-white p-8 md:p-12 border border-shipzy-dark flex flex-col md:flex-row md:items-center justify-between gap-8 mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-shipzy-green/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="relative z-10 max-w-xl text-left">
            <h3 className="text-2xl md:text-3xl font-black mb-4 tracking-tight">Need immediate help?</h3>
            <p className="text-lg text-shipzy-white/70 font-medium">Chat with our team directly. Real humans, real solutions, in real-time.</p>
          </div>
          <a href="#" className="relative z-10 inline-flex items-center justify-center gap-3 bg-shipzy-green text-shipzy-dark font-bold text-lg px-8 py-4 uppercase tracking-widest hover:bg-[#12e078] transition-colors whitespace-nowrap">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            WhatsApp
          </a>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          <h2 className="text-3xl font-black mb-8 tracking-tight">Frequently Asked Questions</h2>
          <div className="border-t border-shipzy-dark/10">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-shipzy-dark/10">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left py-6 flex items-center justify-between outline-none group"
                >
                  <span className="text-lg md:text-xl font-bold tracking-tight pr-8 group-hover:text-shipzy-green transition-colors">{faq.q}</span>
                  <svg className={`w-6 h-6 shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-60 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-shipzy-dark/70 font-medium leading-relaxed pr-8">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
