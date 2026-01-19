'use client';

import { motion } from 'framer-motion';
import { skills, profileData } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Cpu, Terminal, Zap, Globe } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="mb-20 scroll-mt-20">
      <div className="mb-8">
        <h2 className="text-3xl font-bold flex items-center gap-3">
          <Terminal className="text-green-500" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-zinc-500">System Specs & Bio</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="md:col-span-2 p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Cpu size={120} />
          </div>
          <h3 className="text-xl font-bold text-green-400 mb-4">Initialize Profile...</h3>
          <p className="text-zinc-300 leading-relaxed mb-4">{profileData.bio}</p>
          <div className="flex gap-4 text-sm text-zinc-500">
            <div className="flex items-center gap-2">
              <Globe size={16} /> {profileData.location}
            </div>
            <div className="flex items-center gap-2 text-green-500">
              <Zap size={16} /> {profileData.availability}
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col justify-center items-center text-center gap-2">
          <div className="text-5xl font-black text-white">{profileData.stats.commits}</div>
          <div className="text-xs tracking-widest text-zinc-500 uppercase">Total Commits</div>
          <div className="w-full h-px bg-zinc-800 my-4" />
          <div className="text-4xl font-bold text-blue-400">{profileData.stats.projects}</div>
          <div className="text-xs tracking-widest text-zinc-500 uppercase">Deployments</div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="md:col-span-3 p-6 rounded-2xl bg-zinc-900/20 border border-zinc-800">
          <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <span className="w-2 h-8 bg-blue-500 rounded-full inline-block"></span>
            Tech Arsenal
          </h4>

          <div className="space-y-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="flex flex-col md:flex-row gap-4 md:items-center border-b border-zinc-800/50 pb-4 last:border-0 last:pb-0">
                <div className="w-32 text-xs font-mono text-zinc-500 uppercase tracking-wider">{category.replace('_', ' ')}</div>
                <div className="flex flex-wrap gap-2 flex-1">
                  {items.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border-zinc-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
