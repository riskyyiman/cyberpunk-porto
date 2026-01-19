'use client';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

interface ProjectProps {
  data: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    category: string;
  };
  index: number;
}

export default function ProjectCard({ data, index }: ProjectProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
      <Card className="group relative overflow-hidden border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900/60 transition-colors h-full flex flex-col">
        {/* Image Thumbnail */}
        <div className="relative h-48 w-full overflow-hidden bg-zinc-950">
          {/* Placeholder color jika gambar tidak ada */}
          <div className="absolute inset-0 bg-linear-to-t from-zinc-900 to-transparent z-10" />
          <Image
            src={data.image} // Pastikan file gambar ada atau ganti dengan placeholder
            alt={data.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
          />
          <div className="absolute top-3 right-3 z-20">
            <Badge variant="secondary" className="bg-black/50 backdrop-blur text-xs border-zinc-700">
              {data.category}
            </Badge>
          </div>
        </div>

        <CardContent className="p-5 flex-1 space-y-3">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold text-zinc-100 group-hover:text-green-400 transition-colors">{data.title}</h3>
            <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-white transition-colors" />
          </div>
          <p className="text-sm text-zinc-400 line-clamp-3 leading-relaxed">{data.description}</p>
        </CardContent>

        <CardFooter className="p-5 pt-0 flex gap-2 flex-wrap">
          {data.tags.map((tag) => (
            <span key={tag} className="text-[10px] uppercase tracking-wider text-zinc-500 border border-zinc-800 px-2 py-1 rounded bg-zinc-950/50">
              {tag}
            </span>
          ))}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
