"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-shipzy-white border-b border-shipzy-dark/5 px-6 md:px-12 py-5 flex items-center justify-between sticky top-0 z-50 transition-all relative">
      <Link href="/" className="flex items-center gap-3">
        <Image src="/shipzy-logo.png" alt="Shipzy Logo" width={28} height={28} className="object-contain" />
        <div className="pt-1">
          <span className="font-extrabold text-2xl tracking-tighter text-shipzy-dark">SHIPZY </span>
          <span className="font-light text-2xl tracking-tighter text-shipzy-dark">CART</span>
        </div>
      </Link>
      <nav className="hidden md:flex gap-2 text-sm font-semibold tracking-wide text-shipzy-dark/60 -mr-4">
        <Link href="/track" className="px-4 py-3 hover:text-shipzy-dark transition-colors">Track Shipment</Link>
        <Link href="/b2b" className="px-4 py-3 hover:text-shipzy-dark transition-colors">B2B Solutions</Link>
        <Link href="/support" className="px-4 py-3 hover:text-shipzy-dark transition-colors">Support</Link>
      </nav>
      <div className="md:hidden cursor-pointer p-1" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? (
          <svg className="w-6 h-6 text-shipzy-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        ) : (
          <svg className="w-6 h-6 text-shipzy-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        )}
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-shipzy-white border-b border-shipzy-dark/5 p-4 flex flex-col shadow-xl md:hidden">
          <Link href="/track" className="text-shipzy-dark font-semibold text-lg block py-3 px-2" onClick={() => setIsMobileMenuOpen(false)}>Track Shipment</Link>
          <Link href="/b2b" className="text-shipzy-dark font-semibold text-lg block py-3 px-2" onClick={() => setIsMobileMenuOpen(false)}>B2B Solutions</Link>
          <Link href="/support" className="text-shipzy-dark font-semibold text-lg block py-3 px-2" onClick={() => setIsMobileMenuOpen(false)}>Support</Link>
        </div>
      )}
    </header>
  );
}
