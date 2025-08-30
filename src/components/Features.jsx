import React from 'react';
import { LayoutDashboard, Palette, Mic, Users, Rocket } from 'lucide-react';

const features = [
  {
    title: 'Kanban that adapts',
    desc: 'Flexible columns, swimlanes, and playful tags keep momentum visible without the busywork.',
    icon: LayoutDashboard,
    accent: 'from-violet-500 to-fuchsia-500',
  },
  {
    title: 'Shared moodboards',
    desc: 'Drop images, colors, and links. Co-curate visual direction together in real-time.',
    icon: Palette,
    accent: 'from-rose-500 to-amber-400',
  },
  {
    title: 'Audio huddles',
    desc: 'Spin up quick voice rooms to unblock, brainstorm, or sync—right inside your workspace.',
    icon: Mic,
    accent: 'from-sky-500 to-cyan-400',
  },
  {
    title: 'Built for teams',
    desc: 'Presence, mentions, and roles designed for creative collaboration at any scale.',
    icon: Users,
    accent: 'from-emerald-500 to-teal-400',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-neutral-700 shadow-sm">
            <Rocket className="h-3.5 w-3.5" /> Why Loopwork
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">Everything creative teams need, in one flow</h2>
          <p className="mt-3 text-neutral-600 max-w-2xl mx-auto">
            Replace the scattered stack with a single playful canvas. Plan, moodboard, and talk—without losing context.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, desc, icon: Icon, accent }) => (
            <div key={title} className="group rounded-2xl border border-black/10 bg-white p-5 hover:shadow-sm transition-shadow">
              <div className={`h-10 w-10 rounded-xl bg-gradient-to-tr ${accent} flex items-center justify-center text-white`}>
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{desc}</p>
              <div className="mt-4 text-sm font-medium text-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity">Learn more →</div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-4">
          <a href="#" className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-5 py-3 text-white font-medium hover:bg-neutral-800">
            Create your workspace
          </a>
          <p className="text-xs text-neutral-500">Free during beta. No credit card required.</p>
        </div>
      </div>
    </section>
  );
}
