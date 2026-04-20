import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-shipzy-white text-shipzy-dark text-xs py-4 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center border-t border-shipzy-dark/5">
      <p className="font-semibold text-shipzy-dark/50">&copy; {new Date().getFullYear()} Shipzy Direct.</p>
      <div className="flex gap-6 mt-3 md:mt-0 font-semibold text-shipzy-dark/50 hover:[&>a]:text-shipzy-dark transition-colors">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
    </footer>
  );
}
