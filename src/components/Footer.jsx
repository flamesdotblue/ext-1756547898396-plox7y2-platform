import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-[8px] bg-gradient-to-tr from-fuchsia-500 via-rose-500 to-amber-400" />
            <span className="font-semibold">Loopwork</span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-neutral-600">
            <a href="#" className="hover:text-neutral-900">Privacy</a>
            <a href="#" className="hover:text-neutral-900">Terms</a>
            <a href="#" className="hover:text-neutral-900">Contact</a>
          </nav>
        </div>
        <p className="mt-6 text-xs text-neutral-500">© {new Date().getFullYear()} Loopwork, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
