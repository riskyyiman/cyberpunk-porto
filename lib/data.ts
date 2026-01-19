// lib/data.ts
import { LayoutTemplate, User, Briefcase, Database, Mail, LucideIcon } from 'lucide-react';

// Tipe data untuk status halaman yang aktif
export type ViewState = 'home' | 'about' | 'experience' | 'projects' | 'contact';

// Interface untuk item navigasi
export interface NavItem {
  id: string; // Menggunakan string untuk menghindari error 'Key'
  label: string;
  icon: LucideIcon;
  href?: string; // Opsional jika Anda ingin menggunakan anchor link nantinya
  variant?: 'default' | 'glow';
}

export const profileData = {
  name: 'Risky Iman',
  role: 'Full-Stack AI Engineer',
  username: '@riskyiman',
  bio: 'Menggabungkan seni kode dengan kecerdasan buatan. Fokus pada Scalable Web Apps & Deep Learning Models.',
  location: 'Indonesia',
  availability: 'Open for Freelance',
  stats: {
    level: 24,
    exp: '85%',
    projects: 12,
    commits: '1,200+',
  },
};

// Pastikan ID di sini sesuai dengan logika switch-case di page.tsx atau MainLayout
export const navItems: NavItem[] = [
  { id: 'home', label: 'Home', icon: LayoutTemplate },
  { id: 'about', label: 'About & Skills', icon: User },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: Database },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export const skills = {
  languages: ['TypeScript', 'Python', 'JavaScript', 'SQL', 'Go'],
  frontend: ['Next.js 14', 'React', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
  backend: ['FastAPI', 'Node.js', 'PostgreSQL', 'Supabase', 'Prisma'],
  ai_ml: ['TensorFlow', 'PyTorch', 'Hugging Face', 'LangChain', 'OpenAI API'],
  tools: ['Docker', 'Git', 'Figma', 'Vercel', 'Google Cloud Platform'],
};

export const projects = [
  {
    title: 'KySense AI',
    description: 'Analisis sentimen berbasis Deep Learning menggunakan LSTM & Bi-LSTM untuk ulasan aplikasi.',
    image: '/projects/kysense.png',
    tags: ['Python', 'TensorFlow', 'Next.js', 'FastAPI'],
    category: 'AI / ML',
  },
  {
    title: 'GuruPilot AI',
    description: 'Asisten administrasi cerdas untuk guru, generate RPP & Modul Ajar otomatis dengan Generative AI.',
    image: '/projects/gurupilot.png',
    tags: ['Next.js', 'OpenAI API', 'Tailwind', 'PostgreSQL'],
    category: 'SaaS',
  },
  {
    title: 'LMS Platform',
    description: 'Sistem manajemen pembelajaran robust dengan arsitektur scalable dan UI modern.',
    image: '/projects/lms.png',
    tags: ['React', 'TypeScript', 'Supabase', 'Prisma'],
    category: 'Web App',
  },
];
