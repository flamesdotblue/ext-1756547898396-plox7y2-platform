import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Palette, Mic, Users, Play } from 'lucide-react';

function Avatar({ name, color }) {
  const initials = name.split(' ').map(n => n[0]).slice(0,2).join('');
  return (
    <div className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-semibold text-white`} style={{ background: color }}>
      {initials}
    </div>
  );
}

function DashboardMock() {
  return (
    <div className="relative w-full rounded-2xl border border-black/10 bg-white shadow-sm overflow-hidden">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-black/5 bg-neutral-50">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-amber-400" />
          <div className="h-3 w-3 rounded-full bg-emerald-400" />
        </div>
        <div className="flex items-center gap-2 text-sm text-neutral-600">
          <Users className="h-4 w-4" /> 12 online
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-4 p-4">
        {/* Kanban */}
        <div className="col-span-2 space-y-3">
          <div className="flex items-center gap-2 text-sm font-medium text-neutral-700">
            <LayoutDashboard className="h-4 w-4" /> Kanban
          </div>
          <div className="grid md:grid-cols-3 gap-3">
            {['Backlog','In Progress','Review'].map((col, i) => (
              <div key={col} className="rounded-xl border border-black/10 bg-neutral-50 p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-neutral-700">{col}</span>
                  <span className="text-[10px] rounded-full bg-white px-2 py-0.5 border border-black/10 text-neutral-600">{i===0?3:i===1?2:1}</span>
                </div>
                <div className="space-y-2">
                  {[0,1].map((j) => (
                    <div key={j} className="rounded-lg bg-white border border-black/10 p-2">
                      <div className="text-xs font-medium text-neutral-800 truncate">{col} task {j+1}</div>
                      <div className="mt-1 flex items-center justify-between">
                        <div className="flex -space-x-2">
                          <Avatar name="Alex Kim" color="#8b5cf6" />
                          <Avatar name="Rae Lee" color="#06b6d4" />
                        </div>
                        <div className="text-[10px] rounded bg-amber-100 text-amber-800 px-1.5 py-0.5">Design</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Moodboard + Huddle */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-medium text-neutral-700">
            <Palette className="h-4 w-4" /> Shared Moodboard
          </div>
          <div className="rounded-xl border border-black/10 p-3 bg-gradient-to-b from-white to-neutral-50">
            <div className="grid grid-cols-3 gap-2">
              {['#fca5a5','#fde68a','#86efac','#93c5fd','#f0abfc','#fdba74'].map((c, i) => (
                <div key={i} className="aspect-square rounded-lg" style={{ background: c }} />
              ))}
            </div>
            <div className="mt-3 flex items-center justify-between">
              <div className="flex -space-x-2">
                <Avatar name="Sam Park" color="#ef4444" />
                <Avatar name="J Bo" color="#f59e0b" />
                <Avatar name="Dana Xu" color="#10b981" />
              </div>
              <button className="text-xs font-medium px-2 py-1 rounded-lg border border-black/10 bg-white hover:bg-neutral-50">Add tile</button>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm font-medium text-neutral-700">
            <Mic className="h-4 w-4" /> Audio Huddle
          </div>
          <div className="rounded-xl border border-black/10 p-3 bg-white">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <Avatar name="Alex Kim" color="#8b5cf6" />
                <Avatar name="Rae Lee" color="#06b6d4" />
                <Avatar name="Sam Park" color="#ef4444" />
              </div>
              <div className="text-sm text-neutral-600">Design Huddle • 06:24</div>
              <div className="ml-auto flex items-center gap-2">
                <button className="inline-flex items-center gap-1 rounded-full bg-neutral-900 text-white text-xs px-3 py-1.5">
                  <Mic className="h-3.5 w-3.5" /> Mute
                </button>
                <button className="inline-flex items-center gap-1 rounded-full border border-black/10 text-neutral-700 text-xs px-3 py-1.5">
                  <Play className="h-3.5 w-3.5" /> Record
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-16 h-72 w-72 rounded-full blur-3xl opacity-40" style={{ background: 'radial-gradient(circle at 30% 30%, #a78bfa, transparent 60%)' }} />
        <div className="absolute -bottom-20 -left-10 h-96 w-96 rounded-full blur-3xl opacity-40" style={{ background: 'radial-gradient(circle at 70% 70%, #fb7185, transparent 60%)' }} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-neutral-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> Now in open beta
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight">
              The productivity OS for creative teams
            </h1>
            <p className="mt-4 text-lg text-neutral-600 max-w-xl">
              Loopwork blends Kanban, shared moodboards, and audio huddles into a bright, collaborative space—so your team can think, make, and ship in one playful flow.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#" className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-5 py-3 text-white font-medium hover:bg-neutral-800">
                Start for free
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-5 py-3 text-neutral-800 font-medium hover:bg-neutral-50">
                See features
              </a>
            </div>
            <div className="mt-6 flex -space-x-2 items-center">
              {[['Alex Kim','#8b5cf6'],['Rae Lee','#06b6d4'],['Sam Park','#ef4444'],['Dana Xu','#10b981']].map(([n,c]) => (
                <div key={n} className="ring-2 ring-white rounded-full"><Avatar name={n} color={c} /></div>
              ))}
              <span className="ml-3 text-sm text-neutral-600">Trusted by 3,000+ creatives</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="relative">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-fuchsia-400/30 via-sky-300/30 to-amber-300/30 blur-xl" />
              <div className="relative">
                <DashboardMock />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
