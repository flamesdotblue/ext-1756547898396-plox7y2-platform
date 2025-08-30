import React from 'react';
import { Rocket, User, Menu } from 'lucide-react';

const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="h-7 w-7 rounded-[10px] bg-gradient-to-tr from-fuchsia-500 via-rose-500 to-amber-400 shadow-sm" />
    <span className="font-semibold tracking-tight">Loopwork</span>
  </div>
);

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-600">
            <a href="#features" className="hover:text-neutral-900 transition">Features</a>
            <a href="#pricing" className="hover:text-neutral-900 transition">Pricing</a>
            <a href="#faq" className="hover:text-neutral-900 transition">FAQ</a>
            <a href="#changelog" className="hover:text-neutral-900 transition">Changelog</a>
          </nav>
          <div className="flex items-center gap-2">
            <button className="hidden sm:inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100">
              <User className="h-4 w-4" /> Sign in
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800">
              <Rocket className="h-4 w-4" /> Get started
            </button>
            <button className="md:hidden inline-flex p-2 rounded-md hover:bg-neutral-100">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
