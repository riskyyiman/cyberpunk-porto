'use client';

import { navItems, profileData, NavItem } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';

interface SidebarProps {
  className?: string;
  isMobile?: boolean;
  activeTab: string;
  setActiveTab: (id: string) => void;
}

export default function Sidebar({ className = '', isMobile = false, activeTab, setActiveTab }: SidebarProps) {
  return (
    <aside className={`flex flex-col h-full bg-zinc-950 border-r border-zinc-800/50 ${isMobile ? 'w-full' : 'fixed left-0 top-0 w-72 hidden lg:flex'} ${className} z-50`}>
      {/* Profile Section */}
      <div className="flex flex-col items-center text-center space-y-4 pt-6 p-6">
        <div className="relative p-1 rounded-full bg-linear-to-tr from-green-500 to-emerald-500">
          <Avatar className="w-20 h-20 border-4 border-zinc-950">
            <AvatarImage src="/profile.jpg" />
            <AvatarFallback className="bg-zinc-900 text-white">RI</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight">{profileData.name}</h2>
          <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest">{profileData.username}</p>
        </div>
      </div>

      <Separator className="mx-6 bg-zinc-900" />

      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-4">
        {navItems.map((item: NavItem) => {
          const isActive = activeTab === item.id;
          const isGlow = item.variant === 'glow';

          return (
            <Button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              variant="ghost"
              className={`
                w-full justify-start gap-4 h-12 relative transition-all duration-300
                ${isActive ? 'bg-white text-black hover:bg-white' : isGlow ? 'text-green-500 border border-green-500/20 hover:bg-green-500/10' : 'text-zinc-500 hover:text-white hover:bg-zinc-900'}
              `}
            >
              <item.icon className={`w-5 h-5 ${isActive ? 'text-black' : isGlow ? 'text-green-500' : 'text-zinc-500'}`} />
              <span className="font-bold uppercase tracking-tight text-xs">{item.label}</span>

              {isActive && <motion.div layoutId="activeNav" className="absolute left-0 top-0 bottom-0 w-1 bg-green-500 shadow-[4px_0_15px_rgba(34,197,94,0.6)]" />}
            </Button>
          );
        })}
      </nav>
    </aside>
  );
}
