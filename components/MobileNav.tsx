'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import Sidebar from './sidebar';

export default function MobileNav({ activeTab, setActiveTab }: any) {
  return (
    <nav className="lg:hidden fixed top-0 left-0 right-0 p-4 flex justify-between items-center bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900 z-60">
      <span className="font-bold text-white uppercase tracking-tighter">Risky Iman</span>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="text-white">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-72 border-r border-zinc-900 bg-zinc-950">
          <Sidebar isMobile={true} activeTab={activeTab} setActiveTab={setActiveTab} />
        </SheetContent>
      </Sheet>
    </nav>
  );
}
